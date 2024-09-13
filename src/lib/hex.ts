import { DiceRoll, DiceRoller } from "@dice-roller/rpg-dice-roller";
import { RandomTable, rollOnTable } from "./tables";

export const weather: RandomTable = {
  name: 'Weather',
  description: 'Random weather',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Unseasonably Cold' },
    { min: 2, max: 3, description: 'Chilly' },
    { min: 4, max: 7, description: 'Precipitation' },
    { min: 8, max: 13, description: 'Clear' },
    { min: 14, max: 17, description: 'Overcast' },
    { min: 18, max: 19, description: 'Warm' },
    { min: 20, max: 20, description: 'Unseasonably Hot' },
  ]
};

export const terrain: RandomTable = {
  name: 'Terrain',
  description: 'Random Terrain',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 2, description: 'Plains (Cost: 4)' },
    { min: 3, max: 3, description: 'Desert (Cost: 6)' },
    { min: 4, max: 5, description: 'Forest (Cost: 6)' },
    { min: 6, max: 7, description: 'Hills (Cost: 6)' },
    { min: 8, max: 8, description: 'Jungle (Cost: 12)' },
    { min: 9, max: 9, description: 'Mountain  (Cost: 12)' },
    { min: 10, max: 10, description: 'Swamp (Cost: 12)' },
    { min: 11, max: 11, description: 'Special (Cost: +4)' },
    { min: 12, max: 12, description: 'Coastal  (Cost: 4)' },
    { min: 13, max: 13, description: 'Aquatic (Cost: 8)' },
    { min: 14, max: 20, description: 'Same as Previous Hex' },
  ]
};

export const special: RandomTable = {
  name: 'Special Type',
  description: 'Random Special Type',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Shadow' },
    { min: 2, max: 2, description: 'Fey' },
    { min: 3, max: 3, description: 'Fire' },
    { min: 4, max: 4, description: 'Water' },
    { min: 5, max: 5, description: 'Air' },
    { min: 6, max: 6, description: 'Earth' },
    { min: 7, max: 7, description: 'Celestial' },
    { min: 8, max: 8, description: 'Infernal' },
    { min: 9, max: 9, description: 'Poison' },
    { min: 10, max: 10, description: 'Volcanic' },
    { min: 11, max: 11, description: 'Crystal' },
    { min: 12, max: 12, description: 'Frozen' },
    { min: 13, max: 13, description: 'Misty' },
    { min: 14, max: 14, description: 'Glimmering' },
    { min: 15, max: 15, description: 'Haunted' },
    { min: 16, max: 16, description: 'Corrupted' },
    { min: 17, max: 17, description: 'Temporal' },
    { min: 18, max: 20, description: 'Roll Twice' },
  ]
};

export const status: RandomTable = {
  name: 'Adventure Status',
  description: 'Random Adventure Status',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: '1 - DC: 3' },
    { min: 2, max: 2, description: '2 - DC: 6' },
    { min: 3, max: 3, description: '3 - DC: 9' },
    { min: 4, max: 4, description: '4 - DC: 12' },
    { min: 5, max: 5, description: '5 - DC: 15' },
    { min: 6, max: 6, description: '6 - DC: 18' },
    { min: 7, max: 7, description: '7 - DC: 21' },
    { min: 8, max: 8, description: '8 - DC: 24' },
    { min: 9, max: 9, description: '9 - DC: 27' },
    { min: 10, max: 10, description: '10 - DC: 30' },
  ]
};

export const poi: RandomTable = {
  name: 'Point of Interest',
  description: 'Random Point of Interest',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 2, description: 'Settlement' },
    { min: 3, max: 10, description: 'Monstrous' },
    { min: 11, max: 14, description: 'NPC' },
    { min: 15, max: 16, description: 'Dungeon' },
    { min: 17, max: 17, description: 'Magic' },
    { min: 18, max: 18, description: 'Geography' },
    { min: 19, max: 20, description: 'Quest' },
  ]
};

export const faction: RandomTable = {
  name: 'Faction',
  description: 'Random Faction',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 5, description: 'Create a New Faction' },
    { min: 6, max: 16, description: 'Use a Known Faction' },
    { min: 17, max: 20, description: 'New Faction related to Known' },
  ]
};

export const settlement: RandomTable = {
  name: 'Settlement',
  description: 'Random Settlement',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Lone Structure' },
    { min: 2, max: 6, description: 'Hamlet' },
    { min: 7, max: 11, description: 'Village' },
    { min: 12, max: 16, description: 'Town' },
    { min: 17, max: 18, description: 'Stronghold' },
    { min: 19, max: 20, description: 'City' },
  ]
};

export const monstrous: RandomTable = {
  name: 'Monstrous',
  description: 'Random Monstrous PoI',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 7, description: 'Lair' },
    { min: 8, max: 9, description: 'Ruled Land' },
    { min: 10, max: 12, description: 'Feeding Grounds' },
    { min: 13, max: 13, description: 'Migratory Endpoint' },
    { min: 14, max: 14, description: 'Graveyard' },
    { min: 15, max: 17, description: 'Claimed Turf' },
    { min: 18, max: 19, description: 'Mating Grounds' },
    { min: 20, max: 20, description: 'Clash (reroll twice)' },
  ]
};

export const npc: RandomTable = {
  name: 'NPC',
  description: 'Random NPC PoI',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Wandering Merchant' },
    { min: 2, max: 2, description: 'Hermit' },
    { min: 3, max: 3, description: 'Religious Enclave' },
    { min: 4, max: 4, description: 'Slave Camp' },
    { min: 5, max: 5, description: 'Bandit Hideout' },
    { min: 6, max: 6, description: 'Black Market' },
    { min: 7, max: 7, description: 'Hunting Territory' },
    { min: 8, max: 8, description: 'Temple' },
    { min: 9, max: 9, description: 'Shrine' },
    { min: 10, max: 10, description: 'Tomb' },
    { min: 11, max: 11, description: 'Reliquery' },
    { min: 12, max: 12, description: 'Sacred Site' },
    { min: 13, max: 13, description: 'Military Base' },
    { min: 14, max: 14, description: 'Patrol Post' },
    { min: 15, max: 15, description: 'Waystation' },
    { min: 16, max: 16, description: 'Mage Tower' },
    { min: 17, max: 17, description: 'Cultist Hideout' },
    { min: 18, max: 18, description: 'Mercenary Outpost' },
    { min: 19, max: 19, description: 'Cemetery' },
    { min: 20, max: 20, description: 'Ruins' },
  ]
};

export const useNPC: RandomTable = {
  name: 'Use NPC',
  description: 'Random NPC Used',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 12, description: 'Create a New NPC' },
    { min: 13, max: 16, description: 'Use a Known NPC' },
    { min: 17, max: 18, description: 'Use an Existing NPC' },
    { min: 19, max: 20, description: 'New NPC, but related to Known' },
  ]
};

export const dungeon: RandomTable = {
  name: 'Dungeon',
  description: 'Random Dungeon Type',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Palace' },
    { min: 2, max: 2, description: 'Crypt' },
    { min: 3, max: 3, description: 'Tomb' },
    { min: 4, max: 4, description: 'Sanctuary' },
    { min: 5, max: 5, description: 'Temple' },
    { min: 6, max: 6, description: 'Prison' },
    { min: 7, max: 7, description: 'Tower' },
    { min: 8, max: 8, description: 'Cave' },
    { min: 9, max: 9, description: 'Ruin' },
    { min: 10, max: 10, description: 'Fortress' },
    { min: 11, max: 11, description: 'Labryinth' },
    { min: 12, max: 12, description: 'Mine' },
    { min: 13, max: 13, description: 'Catacombs' },
    { min: 14, max: 14, description: 'Underground City' },
    { min: 15, max: 15, description: 'Abandoned Monastary' },
    { min: 16, max: 16, description: 'Infernal Gate' },
    { min: 17, max: 17, description: 'Shadow Realm Rift' },
    { min: 18, max: 18, description: 'Feywild Grove' },
    { min: 19, max: 19, description: 'Chaos Rift' },
    { min: 20, max: 20, description: 'Phantom Tower' },
  ]
};

export const door: RandomTable = {
  name: 'Door',
  description: 'Random Door',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Trapped' },
    { min: 2, max: 3, description: 'Locked' },
    { min: 4, max: 6, description: 'Unlocked' },
  ]
};

export const fromStaircase: RandomTable = {
  name: 'From a Staircase',
  description: 'Open from a Staircase',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Corridor with another door' },
    { min: 2, max: 4, description: 'Corridor with two other door' },
    { min: 5, max: 6, description: 'Corridor with three other doors' },
  ]
};

export const fromCorridor: RandomTable = {
  name: 'From a Staircase',
  description: 'Open from a Staircase',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Small room with another door' },
    { min: 2, max: 2, description: 'Medium size room with another door' },
    { min: 3, max: 3, description: 'Wide room with another door' },
    { min: 4, max: 4, description: 'Wide room with two other doors' },
    { min: 5, max: 5, description: 'Large room with two other doors' },
    { min: 6, max: 6, description: 'Staircase with a door in the end' },
  ]
};

export const fromRoom: RandomTable = {
  name: 'From a Room',
  description: 'Open from a Room',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Small room with another door' },
    { min: 2, max: 3, description: 'Medium sized room' },
    { min: 4, max: 4, description: 'Wide room' },
    { min: 5, max: 5, description: 'Large Room with pillars' },
    { min: 6, max: 6, description: 'Staircase with a door in the end.' },
  ]
};

export const secret: RandomTable = {
  name: 'Secret',
  description: 'Random Secret',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Trap' },
    { min: 2, max: 3, description: 'Nothing here' },
    { min: 4, max: 5, description: 'You have found a hidden Chest' },
    { min: 6, max: 6, description: 'A Secret door to a staircase' },
  ]
};

export const magic: RandomTable = {
  name: 'Magic',
  description: 'Random Magic',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Storm' },
    { min: 2, max: 2, description: 'Tower' },
    { min: 3, max: 3, description: 'Portal' },
    { min: 4, max: 4, description: 'Obelisk' },
    { min: 5, max: 5, description: 'Well' },
    { min: 6, max: 6, description: 'Enchanted Grove' },
    { min: 7, max: 7, description: 'Crystal Cavern' },
    { min: 8, max: 8, description: 'Runestone Circle' },
    { min: 9, max: 9, description: 'Spring' },
    { min: 10, max: 10, description: 'Ruins' },
    { min: 11, max: 11, description: 'Fountain' },
    { min: 12, max: 12, description: 'Witch\'s Hut' },
    { min: 13, max: 13, description: 'Altar' },
    { min: 14, max: 14, description: 'Teleporation gate' },
    { min: 15, max: 15, description: 'Ley line Convergence' },
    { min: 16, max: 16, description: 'Workshop' },
    { min: 17, max: 17, description: 'Library' },
    { min: 18, max: 18, description: 'Dimensional Rift' },
    { min: 19, max: 19, description: 'Mirror' },
    { min: 20, max: 20, description: 'Pool' },
  ]
};

export const geographic: RandomTable = {
  name: 'Geographic',
  description: 'Random Geographic',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Rock formation' },
    { min: 2, max: 2, description: 'Chasm' },
    { min: 3, max: 3, description: 'Floating Mountain' },
    { min: 4, max: 4, description: 'Canyon' },
    { min: 5, max: 5, description: 'Cave' },
    { min: 6, max: 6, description: 'Cliff' },
    { min: 7, max: 7, description: 'Glade' },
    { min: 8, max: 8, description: 'Field' },
    { min: 9, max: 9, description: 'Crater' },
    { min: 10, max: 10, description: 'Giant Mushrooms' },
    { min: 11, max: 11, description: 'Field of flowers' },
    { min: 12, max: 12, description: 'Ancient Grove' },
    { min: 13, max: 13, description: 'Glowing Moss' },
    { min: 14, max: 14, description: 'Sunken Marsh' },
    { min: 15, max: 15, description: 'Petrified Forest' },
    { min: 16, max: 16, description: 'A feywild grove' },
    { min: 17, max: 17, description: 'Glacier' },
    { min: 18, max: 18, description: 'Molten field' },
    { min: 19, max: 19, description: 'Gyzer' },
    { min: 20, max: 20, description: 'Hot Spring' },
  ]
};

export const quest: RandomTable = {
  name: 'Quest',
  description: 'Random Quest PoI',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 6, description: 'Start a Quest' },
    { min: 7, max: 12, description: 'End a Quest' },
    { min: 13, max: 18, description: 'Continue a Quest' },
    { min: 19, max: 20, description: 'Random Encounter & reroll' },
  ]
};

export const fauna: RandomTable = {
  name: 'Fauna',
  description: 'Random Fauna',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Animal boneyard' },
    { min: 2, max: 2, description: 'Anthill' },
    { min: 3, max: 3, description: 'Beaver Dam' },
    { min: 4, max: 4, description: 'Giant Animal Skeleton' },
    { min: 5, max: 5, description: 'Giant Bird Next' },
    { min: 6, max: 6, description: 'Giant snail Shell' },
    { min: 7, max: 7, description: 'Predator\'s Hunting ground' },
    { min: 8, max: 8, description: 'Location covered with crows' },
    { min: 9, max: 9, description: 'Huge galleries' },
    { min: 10, max: 10, description: 'Ransacked area' },
  ]
};

export const floraA: RandomTable = {
  name: 'Flora A',
  description: 'Random Flora',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Berry Bush' },
    { min: 2, max: 2, description: 'Branble overgrown area' },
    { min: 3, max: 3, description: 'Burnt area' },
    { min: 4, max: 4, description: 'Centennial Tree' },
    { min: 5, max: 5, description: 'Dead Tree' },
    { min: 6, max: 6, description: 'Exotic Tree' },
    { min: 7, max: 7, description: 'Fallen Tree' },
    { min: 8, max: 8, description: 'Flower Circle' },
    { min: 9, max: 9, description: 'Fruit Tree' },
    { min: 10, max: 10, description: 'Giant Flower' },
  ]
};

export const floraB: RandomTable = {
  name: 'Flora B',
  description: 'Random Flora',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Giant mushroom' },
    { min: 2, max: 2, description: 'Hallow tree' },
    { min: 3, max: 3, description: 'Impenetrable thicket' },
    { min: 4, max: 4, description: 'Muschroom circle' },
    { min: 5, max: 5, description: 'Mushroom spot' },
    { min: 6, max: 6, description: 'Mycelia proliferation' },
    { min: 7, max: 7, description: 'Rare plant spot' },
    { min: 8, max: 8, description: 'Root arch' },
    { min: 9, max: 9, description: 'Tree alignment' },
    { min: 10, max: 10, description: 'Water-filled plant' },
  ]
};

export const geologyA: RandomTable = {
  name: 'Geology A',
  description: 'Random Geology',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Animal shaped rock' },
    { min: 2, max: 2, description: 'Cave' },
    { min: 3, max: 3, description: 'Chasm' },
    { min: 4, max: 4, description: 'Crater' },
    { min: 5, max: 5, description: 'Crystalline proliferation' },
    { min: 6, max: 6, description: 'Giant Crystal' },
    { min: 7, max: 7, description: 'Lava Pool' },
    { min: 8, max: 8, description: 'Mudpit' },
    { min: 9, max: 9, description: 'Pit' },
    { min: 10, max: 10, description: 'Precious Metal Vein' },
  ]
};

export const geologyB: RandomTable = {
  name: 'Adventure Status',
  description: 'Random Adventure Status',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Ravine' },
    { min: 2, max: 2, description: 'Rift' },
    { min: 3, max: 3, description: 'Rock hole' },
    { min: 4, max: 4, description: 'Rock needle' },
    { min: 5, max: 5, description: 'Scree' },
    { min: 6, max: 6, description: 'Sinkhole' },
    { min: 7, max: 7, description: 'Stone arch' },
    { min: 8, max: 8, description: 'Stone bridge' },
    { min: 9, max: 9, description: 'Stone stairs' },
    { min: 10, max: 10, description: 'Very Big Rock' },
  ]
};

export const water: RandomTable = {
  name: 'Water',
  description: 'Random Water',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Ford' },
    { min: 2, max: 2, description: 'Hotspring' },
    { min: 3, max: 3, description: 'Lake' },
    { min: 4, max: 4, description: 'Pond' },
    { min: 5, max: 5, description: 'Rapids' },
    { min: 6, max: 6, description: 'River' },
    { min: 7, max: 7, description: 'Spring' },
    { min: 8, max: 8, description: 'Stream' },
    { min: 9, max: 9, description: 'Water-filled cave' },
    { min: 10, max: 10, description: 'Waterfall' },
  ]
};

export const labor: RandomTable = {
  name: 'Labor',
  description: 'Random Labor',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Barn' },
    { min: 2, max: 2, description: 'Felled trees' },
    { min: 3, max: 3, description: 'Field' },
    { min: 4, max: 4, description: 'Granary' },
    { min: 5, max: 5, description: 'Labor camp' },
    { min: 6, max: 6, description: 'Meadow' },
    { min: 7, max: 7, description: 'quarry' },
    { min: 8, max: 8, description: 'Straw man' },
    { min: 9, max: 9, description: 'Swidden field' },
    { min: 10, max: 10, description: 'Watertower' },
  ]
};

export const mystery: RandomTable = {
  name: 'Mystery',
  description: 'Random Mystery',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Carved Rock' },
    { min: 2, max: 2, description: 'Dolmen' },
    { min: 3, max: 3, description: 'Hanging bones' },
    { min: 4, max: 4, description: 'heads on spikes' },
    { min: 5, max: 5, description: 'Masks' },
    { min: 6, max: 6, description: 'Piles of Bones' },
    { min: 7, max: 7, description: 'rock stack' },
    { min: 8, max: 8, description: 'Standing Stones' },
    { min: 9, max: 9, description: 'Straw dolls' },
    { min: 10, max: 10, description: 'totem' },
  ]
};

export const ruin: RandomTable = {
  name: 'Ruin',
  description: 'Random Ruin',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Abandoned Tavern' },
    { min: 2, max: 2, description: 'burnt barn' },
    { min: 3, max: 3, description: 'Collapsed mine Entrance' },
    { min: 4, max: 4, description: 'decrepit mansion' },
    { min: 5, max: 5, description: 'Desecrated church' },
    { min: 6, max: 6, description: 'Destroyed house' },
    { min: 7, max: 7, description: 'Overgrown towner' },
    { min: 8, max: 8, description: 'Pile of rubble' },
    { min: 9, max: 9, description: 'Razed Village' },
    { min: 10, max: 10, description: 'Ruined Castle' },
  ]
};

export const small: RandomTable = {
  name: 'Small Structure',
  description: 'Random Small Structure',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Bench' },
    { min: 2, max: 2, description: 'Bivouac area' },
    { min: 3, max: 3, description: 'Gazebo' },
    { min: 4, max: 4, description: 'Hunter’s cabin' },
    { min: 5, max: 5, description: 'Hunting tower' },
    { min: 6, max: 6, description: 'Kennel' },
    { min: 7, max: 7, description: 'Outhouse' },
    { min: 8, max: 8, description: 'Palisade' },
    { min: 9, max: 9, description: 'Well' },
    { min: 10, max: 10, description: 'Wooden fence' },
  ]
};

export const travel: RandomTable = {
  name: 'Travel',
  description: 'Random Travel',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Boardwalks' },
    { min: 2, max: 2, description: 'Boundary Stones' },
    { min: 3, max: 3, description: 'Bridge' },
    { min: 4, max: 4, description: 'Broken bridge' },
    { min: 5, max: 5, description: 'danger sign' },
    { min: 6, max: 6, description: 'ledge' },
    { min: 7, max: 7, description: 'Signboard' },
    { min: 8, max: 8, description: 'Stairs' },
    { min: 9, max: 9, description: 'Suspension bridge' },
    { min: 10, max: 10, description: 'Zipline' },
  ]
};

export const worship: RandomTable = {
  name: 'Worship',
  description: 'Random Worship',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Bell/Gong' },
    { min: 2, max: 2, description: 'Calvary' },
    { min: 3, max: 3, description: 'Cemetery' },
    { min: 4, max: 4, description: 'Cross' },
    { min: 5, max: 5, description: 'Holy Place' },
    { min: 6, max: 6, description: 'Idol' },
    { min: 7, max: 7, description: 'Shrine' },
    { min: 8, max: 8, description: 'Tomb' },
    { min: 9, max: 9, description: 'Tumulus' },
    { min: 10, max: 10, description: 'Vault' },
  ]
};

export const areaSpell: RandomTable = {
  name: 'Area Under a Spell',
  description: 'Random Area Under a Spell',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Always snowy area' },
    { min: 2, max: 2, description: 'Anti-magic zone' },
    { min: 3, max: 3, description: 'Area bringing back the dead' },
    { min: 4, max: 4, description: 'Area where nothing grows' },
    { min: 5, max: 5, description: 'Bad luck area' },
    { min: 6, max: 6, description: 'dome of darkness' },
    { min: 7, max: 7, description: 'force field' },
    { min: 8, max: 8, description: 'Incessant cyclone' },
    { min: 9, max: 9, description: 'Protecthion from evil' },
    { min: 10, max: 10, description: 'Time is frozen' },
  ]
};

export const enchantedItem: RandomTable = {
  name: 'Enchanted Item',
  description: 'Random Enchanged Item',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Curative basin' },
    { min: 2, max: 2, description: 'Enchanted bell' },
    { min: 3, max: 3, description: 'Fertility Stone' },
    { min: 4, max: 4, description: 'Magic fountain/spring' },
    { min: 5, max: 5, description: 'Magic fruit tree' },
    { min: 6, max: 6, description: 'Mutation pit' },
    { min: 7, max: 7, description: 'Stone of knowledge' },
    { min: 8, max: 8, description: 'Sword stuck in a rock' },
    { min: 9, max: 9, description: 'Vision pools' },
    { min: 10, max: 10, description: 'Witch cauldron' },
  ]
};

export const magicPath: RandomTable = {
  name: 'Magic Path',
  description: 'Random Magic Path',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Breathable water' },
    { min: 2, max: 2, description: 'Glowing mushroom trail' },
    { min: 3, max: 3, description: 'Illusory path' },
    { min: 4, max: 4, description: 'Invisible bridge' },
    { min: 5, max: 5, description: 'Levitating staircase' },
    { min: 6, max: 6, description: 'Magic mirror' },
    { min: 7, max: 7, description: 'Rainbow bridge' },
    { min: 8, max: 8, description: 'Riddle Bridge' },
    { min: 9, max: 9, description: 'Walkable water' },
    { min: 10, max: 10, description: 'Wormhole' },
  ]
};

export const magicRemains: RandomTable = {
  name: 'Enchanted Item',
  description: 'Random Enchanged Item',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Area covered in fairy dust' },
    { min: 2, max: 2, description: 'Bloody Alter' },
    { min: 3, max: 3, description: 'Corpse covered in crystals' },
    { min: 4, max: 4, description: 'Corrupted area' },
    { min: 5, max: 5, description: 'Destoryed golem' },
    { min: 6, max: 6, description: 'Magic battlefield' },
    { min: 7, max: 7, description: 'Old Shrine' },
    { min: 8, max: 8, description: 'Petrified travelers' },
    { min: 9, max: 9, description: 'Reminants of a ceremony' },
    { min: 10, max: 10, description: 'Signs of an Explosion' },
  ]
};

export const placePower: RandomTable = {
  name: 'Place of Power',
  description: 'Random Place of Power',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'Ancient burial ground' },
    { min: 2, max: 2, description: 'birthplace/tomb of a saint' },
    { min: 3, max: 3, description: 'magic beacon' },
    { min: 4, max: 4, description: 'mana well' },
    { min: 5, max: 5, description: 'Neolitich rock monument' },
    { min: 6, max: 6, description: 'Perserved natural place' },
    { min: 7, max: 7, description: 'Root of the World Tree' },
    { min: 8, max: 8, description: 'Sacred Waters' },
    { min: 9, max: 9, description: 'sun focal point' },
    { min: 10, max: 10, description: 'Ziggurat of old' },
  ]
};

export const strange: RandomTable = {
  name: 'Strange Phenomenon',
  description: 'Random Strange Phenomenom',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'everbuning tree' },
    { min: 2, max: 2, description: 'evermeltng ice' },
    { min: 3, max: 3, description: 'floating crystal' },
    { min: 4, max: 4, description: 'ghost building' },
    { min: 5, max: 5, description: 'luminous engravings' },
    { min: 6, max: 6, description: 'reversed waterfall' },
    { min: 7, max: 7, description: 'singing crystal' },
    { min: 8, max: 8, description: 'Strong magnetism' },
    { min: 9, max: 9, description: 'talking rock' },
    { min: 10, max: 10, description: 'Whispers in the wind' },
  ]
};


export const hazard: RandomTable = {
  name: 'Hazard',
  description: 'Random Hazard',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Acid pits' },
    { min: 2, max: 2, description: 'Allergenic plants' },
    { min: 3, max: 3, description: 'Ancient dormant illness' },
    { min: 4, max: 4, description: 'curse' },
    { min: 5, max: 5, description: 'Dangerous footing' },
    { min: 6, max: 6, description: 'Easy to get lost' },
    { min: 7, max: 7, description: 'fog' },
    { min: 8, max: 8, description: 'fumes' },
    { min: 9, max: 9, description: 'Ghosts' },
    { min: 10, max: 10, description: 'Hallucinogenic spores' },
    { min: 11, max: 11, description: 'hidden pits' },
    { min: 12, max: 12, description: 'hunting traps' },
    { min: 13, max: 13, description: 'magic corruption' },
    { min: 14, max: 14, description: 'plague' },
    { min: 15, max: 15, description: 'Quicksands' },
    { min: 16, max: 16, description: 'Radiations' },
    { min: 17, max: 17, description: 'Sabototage/Trap' },
    { min: 18, max: 18, description: 'Unstable/likely to breaek' },
    { min: 19, max: 19, description: 'Venomous animals' },
    { min: 20, max: 20, description: 'Volcanic area' },
  ]
};

export const empty: RandomTable = {
  name: 'Empty',
  description: 'Empty',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Info about nearby monsters' },
    { min: 2, max: 2, description: 'alchemy recipe' },
    { min: 3, max: 3, description: 'curative effect' },
    { min: 4, max: 4, description: 'directions to a settlement' },
    { min: 5, max: 5, description: 'dungeon location' },
    { min: 6, max: 6, description: 'future event' },
    { min: 7, max: 7, description: 'important past event' },
    { min: 8, max: 8, description: 'legend/myth' },
    { min: 9, max: 9, description: 'local custom' },
    { min: 10, max: 10, description: 'password' },
    { min: 11, max: 11, description: 'secret passage location' },
    { min: 12, max: 12, description: 'spell/ritual' },
    { min: 13, max: 13, description: 'tale about a magic weapon' },
    { min: 14, max: 14, description: 'toxicity of something' },
    { min: 15, max: 15, description: 'upcoming weather' },
    { min: 16, max: 16, description: 'tale about a magic weapons' },
    { min: 17, max: 17, description: 'words from a monster language' },
    { min: 18, max: 20, description: 'info about nearby monster' },
  ]
};

function rollEmpty() {
  const answer = rollOnTable(empty);
  const roll = new DiceRoll('1d100');
  let string = '<strong>Empty</strong> ' +answer.description;
  if (roll.total < 15) string += ' <em>(with Treasure)</em>'
  return string;
}


function rollHazard() {
  const answer = rollOnTable(hazard);
  const roll = new DiceRoll('1d100');
  let string = '<strong>Hazaard</strong> ' + answer.description;
  if (roll.total < 25) string += ' <em>(with Treasure)</em>'
  return string;
}

function rollMonsters() {
  const roll = new DiceRoll(`1d100`);
  let string = 'Random Monster Encounter';
  if (roll.total <= 50) string += ' <em>(with Treasure)</em>'
  return string;
}

function rollMagic() {
  const roll = new DiceRoll('1d6');
  let table;
  switch (roll.total) {
    case 1: table = areaSpell; break;
    case 2: table = enchantedItem; break;
    case 3: table = magicPath; break;
    case 4: table = magicRemains; break;
    case 5: table = placePower; break;
    case 6: table = strange; break;
  }
  return '<strong>Magic</strong> ' + rollOnTable(table).description;
}

function rollArtificial() {
  const roll = new DiceRoll('1d6');
  let table
  switch (roll.total) {
    case 1: table = labor; break;
    case 2: table = mystery; break;
    case 3: table = ruin; break;
    case 4: table = small; break;
    case 5: table = travel; break;
    case 6: table = worship; break;
  }
  return '<strong>Artifical</strong> ' + rollOnTable(table).description;
}

function rollNatural() {
  const roll = new DiceRoll('1d6');
  let table;
  switch (roll.total) {
    case 1: table = fauna; break;
    case 2: table = floraA; break;
    case 3: table = floraB; break;
    case 4: table = geologyA; break;
    case 5: table = geologyB; break;
    case 6: table = water; break;
  }
    return '<strong>Natural</strong> ' + rollOnTable(table).description;
}

export const landmark: RandomTable = {
  name: 'Landmark',
  description: 'Random Landmark',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 3, description: rollNatural },
    { min: 4, max: 5, description: rollArtificial },
    { min: 6, max: 6, description: rollMagic },
  ]
};

export const contents: RandomTable = {
  name: 'Contents',
  description: 'Random Content',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: rollHazard },
    { min: 2, max: 3, description: rollEmpty },
    { min: 4, max: 6, description: rollMonsters },
  ]
};