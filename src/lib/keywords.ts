import { getRandomItem, getRandomItems } from "./random";

const keywords = [
  'Turgid',
  'Decayed',
  'Glitter',
  'Village',
  'Craft',
  'Guard',
  'Obligation',
  'Ruined',
  'Step',
  'Enter',
  'Toilet',
  'Nothing',
  'Admissio',
  'Boisterous',
  'Twisted',
  'Premonition',
  'Metal',
  'Gamble',
  'Sarcophagus',
  'Bell',
  'Refuse',
  'Tunnel',
  'Armies',
  'Potential',
  'Temporary',
  'Target',
  'Express',
  'Maximum',
  'Singing',
  'Subliminal',
  'Camp',
  'Direct',
  'Wary',
  'Illuminate',
  'Door',
  'Guard',
  'Damage',
  'Whoosh',
  'Structure',
  'Fresh',
  'Hairpin',
  'Monopoly',
  'Important',
  'Device',
  'Indication',
  'Fragmented',
  'Enthusiastic',
  'March',
  'Surprise',
  'Runes',
  'Luminescent',
  'Uninterested',
  'Foot',
  'Raid',
  'Awful',
  'Burial',
  'Obstinate',
  'Shame',
  'Blood',
  'Banter',
  'Friend',
  'Trapped',
  'Twisted',
  'Nobility',
  'Disastrous',
  'Gold',
  'Dream',
  'Title',
  'Warrant',
  'Damaged',
  'Opening',
  'Pleasant',
  'Resident',
  'Heat',
  'Shape',
  'Mother',
  'Silence',
  'Temperature',
  'Thick',
  'Illusion',
  'Mirror',
  'Daughter',
  'Controller',
  'Medium',
  'Priest',
  'Blustering',
  'Web',
  'Tedious',
  'Skin',
  'Candidate',
  'Luck',
  'Memory',
  'Cloying',
  'Communion',
  'Pattern',
  'Sell',
  'Clue',
  'Stray',
  'Express',
  'Disguise',
  'Investigate',
  'Crypt',
  'Rotten',
  'Spoiled',
  'Clank',
  'Rites',
  'Smell',
  'Pilgrim',
  'Animal droppings',
  'Courage',
  'Uncharacteristic',
  'Vacant',
  'Oppress',
  'Witness',
  'Surprise',
  'Rope',
  'Health',
  'Damaged',
  'Seat',
  'Dungeon',
  'Toss',
  'Weather',
  'Magic Item!',
  'Brother',
  'Goods',
  'Weakness',
  'Orbit',
  'Health',
  'Road',
  'Dance',
  'Parent',
  'Orb',
  'Obstinate',
  'Temperature',
  'Noxious',
  'Accomplice',
  'Many',
  'Demon',
  'Proposal',
  'Prehistoric',
  'Advance',
  'Candidate',
  'Accomplice',
  'Indication',
  'Rescue',
  'Decayed',
  'Diversion',
  'Refuse pit',
  'Garbage',
  'Food',
  'Goods',
  'Family',
  'Girl',
  'Slime',
  'Unthinking',
  'Blood',
  'Slide',
  'Friend',
  'Warrant',
  'Guidance',
  'Diseased',
  'Item',
  'Spoiled',
  'Midnight',
  'Birth',
  'Diary',
  'Title',
  'Original',
  'Carry',
  'Metal',
  'Shape',
  'Uninterested',
  'Representative',
  'Mouth',
  'Fetid',
  'Stray',
  'Spirit',
  'Accident',
  'Bother',
  'Express',
  'Vessel',
  'Disease',
  'Slippery',
  'Curiosity',
  'Stale air',
  'Son',
  'Fortune',
  'Operation',
  'Man',
  'Man',
  'Maximum',
  'Cover',
  'Turned',
  'Slippery',
  'Sell',
  'Silver',
  'Birth',
  'Sleep',
  'Track',
  'Message',
  'Heart',
  'Rusty',
  'Republic',
  'Forbidden',
  'Malodorous',
  'Refuse',
  'Language',
  'Temple',
  'Faith',
  'Hefty',
  'Sentimental',
  'Fear',
  'Skill',
  'Escape',
  'King',
  'Demon',
  'Ammunition',
  'Infectious',
  'Mouth',
  'Foliage',
  'Love',
  'Slave',
  'Silence',
  'Sundered',
  'Communion',
  'Motive',
  'Natural',
  'Release',
  'Boy',
  'Guest',
  'Vacant',
  'Structure',
  'Hollow',
  'Argument',
  'Enchanted',
  'Weird',
  'Floating',
  'Calm',
  'Woman',
  'Escape',
  'Brother',
  'Entertain',
  'Fluttering',
  'Knowledge',
  'Disciple',
  'Common',
  'Building',
  'Valuable',
  'Admission',
  'Animal droppings',
  'Chill',
  'Change',
  'Sister',
  'Revealing',
  'Daughter',
  'Delusional',
  'Instrument',
  'Success',
  'Argument',
  'Woven',
  'Impact',
  'Priest',
  'Moan',
  'Mirror',
  'Opening',
  'Fear',
  'Weather',
  'Sleep',
  'Fire',
  'Vibration',
  'Foreknowledge',
  'Map',
  'Boon',
  'Bones',
  'Prize',
  'Equipment',
  'King',
  'Direct',
  'Embrace',
  'Sceptre',
  'Question',
  'Costume',
  'Toss',
  'Hidden',
  'Unsophisticated',
  'Calm',
  'Important',
  'Unsafe',
  'Give',
  'Heat',
  'Alcohol',
  'Reflect',
  'Foreknowledge',
  'Sleep',
  'Itch',
  'Wary',
  'Disastrous',
  'Gap',
  'Guard',
  'Effigy',
  'Manage',
  'Hairpin',
  'River',
  'Mould',
  'Guidance',
  'Invite',
  'Tradition',
  'Curse',
  'Statue',
  'Scuttling',
  'Hole',
  'Glitter',
  'identity',
  'Lake',
  'Proof',
  'Wealth',
  'Protection',
  'Smell',
  'Aftershock',
  'Mother',
  'Garbage',
  'Bother',
  'Sea',
  'Shoe',
  'Whoosh',
  'Teacher',
  'Downward',
  'Nobility',
  'Fresh',
  'Effigy',
  'Boon',
  'Door',
  'Road',
  'Flee',
  'Foot',
  'Search',
  'Dimension',
  'Diversion',
  'Swear',
  'Communion',
  'Effect',
  'Storage',
  'Communion',
  'Henchman',
  'Noise',
  'Common',
  'Success',
  'Valuable',
  'Government',
  'Step',
  'Alarm',
  'Turgid',
  'Knowledge',
  'Treacherous',
  'Web',
  'Glowing',
  'River',
  'Potential',
  'Sceptre',
  'Protection',
  'Rainbow',
  'Sentimental',
  'Child',
  'Change',
  'Cloying',
  'Tidy',
  'Awful',
  'Thick',
  'Demand',
  'Ability',
  'Aftershock',
  'March',
  'Fugitive',
  'Explosion',
  'Severed hand',
  'Ball',
  'Effect',
  'Mammoth',
  'Student',
  'Fluttering',
  'Itch',
  'Demand',
  'Manage',
  'Explosion',
  'Persecute',
  'Proof',
  'Vision',
  'Area',
  'Proposal',
  'History',
  'Ambition',
  'Give',
  'Champion',
  'Obsidian',
  'Performance',
  'Boy',
  'Ammunition',
  'Payment',
  'Country',
  'Information',
  'Code',
  'Loot',
  'Natural',
  'Storm',
  'Command',
  'Boisterous',
  'Symbol',
  'Familiar',
  'Delusional',
  'Code',
  'Dance',
  'Diary',
  'Advance',
  'Building',
  'Endanger',
  'Command',
  'Persistent',
  'Undead',
  'Wilderness',
  'Representative',
  'Chill',
  'Shelter',
  'Contradict',
  'Talk',
  'Noxious',
  'Government',
  'Book',
  'Weird',
  'History',
  'Singing',
  'Contradict',
  'Route',
  'Rotten',
  'Subliminal',
  'Arid',
  'Guide',
  'Hollow',
  'Portal',
  'Enshrine',
  'Original',
  'Incongruous',
  'Ruler',
  'Sneak',
  'Secret',
  'Well',
  'Rescue',
  'Mammoth',
  'Luck',
  'Break',
  'Chase',
  'Tradition',
  'Fair',
  'Rocky',
  'Explosion',
  'Speed',
  'Medium',
  'Possession',
  'Overexcited',
  'Alarm',
  'Craft',
  'Nimble',
  'Gears',
  'Apocalypse',
  'Entice',
  'Family',
  'Location',
  'Severed hand',
  'Village',
  'Song',
  'Escape',
  'Orb',
  'Original',
  'Love',
  'Unnatural',
  'Track',
  'Accident',
  'Heart',
  'Parent',
  'Technology',
  'Unsophisticated',
  'Sneak',
  'Device',
  'Son',
  'Sister',
  'Incongruous',
  'Dream',
  'Henchman',
  'Toilet',
  'Erratic',
  'Guest',
  'Silver',
  'Obligation',
  'Floating',
  'Precious',
  'Wilderness',
  'Adventurers',
  'Champion',
  'Negotiation',
  'Bell',
  'Smoke',
  'Swear',
  'Temper',
  'Dungeon',
  'Enlarge',
  'Persuade',
  'Symbol',
  'Flee',
  'Scary',
  'Target',
  'Guard',
  'Ruined',
  'Medicine',
  'Few',
  'Food',
  'Skin',
  'Disease',
  'Trapped',
  'Bridge',
  'Midnight',
  'Agreement',
  'Adventurers',
  'Gap',
  'Moan',
  'Statue',
  'Tale',
  'Message',
  'Disciple',
  'Dripping',
  'Eye',
  'Hole',
  'Shoe',
  'Endanger',
  'Explosion',
  'Treacherous',
  'Arid',
  'Cloud',
  'Angular',
  'Pilgrim',
  'Duty',
  'Water',
  'Weakness',
  'Uncharacteristic',
  'Check',
  'Fortune',
  'Temper',
  'Sundered',
  'Orbit',
  'Unsafe',
  'Performance',
  'Nimble',
  'Dripping',
  'Laugh',
  'Rancid',
  'Blustering',
  'Break',
  'Temple',
  'Fancy',
  'Express',
  'Tidy',
  'Smoke',
  'Celebration',
  'Technology',
  'Item',
  'Many',
  'Check',
  'Tale',
  'Energy',
  'Embrace',
  'Alcohol',
  'Illusion',
  'Eye',
  'Slime',
  'Decrepit',
  'Suggestion',
  'Crypt',
  'Gears',
  'Twilight',
  'Celebration',
  'Deteriorating',
  'NPC',
  'Gaping',
  'Angular',
  'Implicate',
  'Payment',
  'Force',
  'Noise',
  'Wine',
  'Request',
  'Saviour',
  'Medicine',
  'Dispute',
  'Lake',
  'Possession',
  'Fall',
  'Bridge',
  'Storm',
  'Resident',
  'Prehistoric',
  'Decrepit',
  'Seat',
  'Guide',
  'Unnatural',
  'Rambling',
  'Awake',
  'Employment',
  'Child',
  'Sleep',
  'Nothing',
  'Scuttling',
  'Music',
  'Map',
  'Hefty',
  'Mouth',
  'Rancid',
  'Dark',
  'Rundown',
  'Wine',
  'Country',
  'Student',
  'Malodorous',
  'Area',
  'Luminescent',
  'Memory',
  'Slice',
  'Confusion',
  'Enchanted',
  'Misty',
  'Monopoly',
  'Dimension',
  'Warning',
  'Mould',
  'Agreement',
  'Nimble',
  'Storage',
  'Spirit',
  'Employment',
  'Release',
  'Nimble',
  'Ability',
  'Warning',
  'Gift',
  'Pleasant',
  'Republic',
  'Enlighten',
  'Language',
  'Camp',
  'Implicate',
  'City',
  'Turned',
  'Fancy',
  'Water',
  'Lounge',
  'Shame',
  'Impact',
  'Punish',
  'Performance',
  'Ball',
  'Crack',
  'Group',
  'Rocky',
  'Misty',
  'Burial',
  'Motive',
  'Information',
  'Banter',
  'Performance',
  'Gold',
  'Fire',
  'Chain',
  'Slave',
  'Obsidian',
  'Sarcophagus',
  'Vision',
  'Unthinking',
  'Duty',
  'Ensnare',
  'Instrument',
  'Rusty',
  'Skill',
  'Operation',
  'Rope',
  'Shelter',
  'Livestock',
  'Runes',
  'Sea',
  'Damage',
  'Stale air',
  'Faith',
  'Slice',
  'Refuse pit',
  'Ambition',
  'Captive',
  'Rainbow',
  'Location',
  'Native',
  'Rundown',
  'Patrol',
  'Courage',
  'Request',
  'Item',
  'Confusion',
  'Beast',
  'Costume',
  'Percussive',
  'Music',
  'Secure',
  'Pattern',
  'Teacher',
  'Laugh',
  'Smoke',
  'Twilight',
  'Equipment',
  'Original',
  'Persistent',
  'Premonition',
  'Song',
  'Scary',
  'Captive',
  'Foliage',
  'Prize',
  'Silence',
  'Illuminate',
  'Overexcited',
  'Item',
  'Rope',
  'Temporary',
  'Downward',
  'Speed',
  'Woven',
  'Apocalypse',
  'Carry',
  'Rites',
  'Route',
  'Fugitive',
  'Enthusiastic',
  'Vibration',
  'Fair',
  'Negotiation',
  'City',
  'Saviour',
  'NPC',
  'Fall',
  'Gift',
  'Beast',
  'Decomposed',
  'Bones',
  'Chase',
  'Erratic',
  'Tedious',
  'Reflect',
  'Dark',
  'Duty',
  'Percussive',
  'Clue',
  'Awake',
  'Ruler',
  'Woman',
  'Witness',
  'Duty',
  'Girl',
  'Curiosity',
  'Few',
  'Slide',
  'Armies',
  'Cloud',
  'Mouth',
  'Punish',
  'Wealth',
  'Invit',
  'Glare',
  'Group',
  'Escape',
  'Crack',
  'Precious',
  'Book',
  'Cover',
  'Gossip',
  'Native',
  'Gaping',
  'Unseen',
  'Prodigy',
  'Chain',
  'Gossip',
  'Familiar',
  'Loung',
  'Communion',
  'Tunnel',
  'Dryrot',
  'Force',
  'Question',
  'Livestock',
  'Hide',
  'Suggestion',
  'Fetid',
  'Rambling',
  'Revealing',
  'Vessel',
  'Talk',
];

export function getRandomKeywords(number = 3) {
  return getRandomItems(keywords, number);
}

function getRandomWord() {
  return getRandomItem(keywords);
}