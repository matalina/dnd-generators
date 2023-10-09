import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { getRandomKeywords } from "./keywords";
import type { RandomTable } from "./tables";
import { writable } from "svelte/store";
import { outerSpace, rollOnTable, urbanDistricts, wildness } from "../lib/tables";

export let gridTypes:GridType[] = [
  {name: 'Hex', value:6, diceFormula: '1d6'},
  {name: 'Square', value:4, diceFormula: '1d4'}
];
export let terrainTypes:TerrainType[] = [
  {name: 'Wilderness', value: 1, table: wildness},
  {name: 'Urban', value: 2, table: urbanDistricts},
  {name: 'Outer Space', value: 1, table: outerSpace}
];

export interface MapLocations {
  [id: string]: MapTile;
}

export const terrain = writable<TerrainType>(terrainTypes[0]);
export const grid = writable<GridType>(gridTypes[0]);
export const locations = writable<MapLocations>(localStorage?.locations ? JSON.parse(localStorage.locations) : {});
export const start = writable<MapTile|null>(localStorage?.start ? JSON.parse(localStorage.start) : null);
export const path = writable<string[]>(localStorage?.path ? JSON.parse(localStorage.path) : []); // MapTile.id[]

export interface Landmark {
  isLandmark: boolean;
  hasHazard?: boolean;
  hasGMI?: boolean;
  keywords?: string[];
}

export interface GridType {
  name: string;
  value: number;
  diceFormula: string;
}

export interface TerrainType {
  name: string;
  value: number;
  table: RandomTable;
}

export interface Exits {
  [exit:number]: string | null; // MapTile.id
}

export interface MapTile {
  id: string;
  grid: GridType;
  terrain: string;
  exits: Exits;
  landmark?: Landmark;
}

export function generateExits(tile: MapTile, entrance: number, previous: string|null = null) {
  tile.exits[entrance] = previous;
  for(let i = 0; i < tile.grid.value; i++) {
    if(!tile.exits.hasOwnProperty(i+1)) tile.exits[i+1] = null;
  }
  return tile;
}

export function generateLandmark(minValue = 13) {
  const roll = new DiceRoll('1d20').total;

  const landmark: Landmark = {
    isLandmark: roll >= minValue,
    hasHazard: roll === 1,
    hasGMI: roll === 20,
  };

  if(landmark.isLandmark) {
    landmark.keywords = getRandomKeywords();
  }

  return landmark;
}

export function generateRandomString(n = 6) {
  let randomString = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( let i = 0; i < n; i++ ) {
    randomString += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return randomString;
}
