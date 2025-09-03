// kdm-data.js
console.log("kdm-data.js: Loading pre-formatted dataset...");

var dataset = [

  // --- Philosophy Items ---
  {
    "id": 1,
    "name": "Ambitionism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16], // Parsed from "Hunt Milestone"
    "nerosis": "Spoiled",
	"tenetKnowledge": null,
    "description": "If you are a *returning survivor* and CC did not increase during the *Aftermath*, skip the next hunt and sulk.",
    "expansion": null,
    "searchableText": "ambitionism philosophy spoiled if you are a *returning survivor* and cc did not increase during the aftermath, skip the next hunt and sulk. 2,6,10,14,16"
  },
  {
    "id": 2,
    "name": "Blessed First",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Woebegone",
	"tenetKnowledge": "Fortune & Misfortune",
    "description": "While Luck is on the showdown board, the other survivors feel his deep foreboding. Their weapons gain *Unwieldy*.",
    "expansion": null,
    "searchableText": "blessed first philosophy woebegone while luck is on the showdown board, the other survivors weapons gain unwieldy. 2,6,10,14,16"
  },
  {
    "id": 3,
    "name": "Champion",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 6, 12, 16],
    "nerosis": "Compelled",
	"tenetKnowledge": "Chosen",
    "description": "An internal need guides you to greatness. You must *depart* if able to do so. If you are unable to *depart* for any reason (you are retired, must skip the next hunt, etc.), you *depart* anyway, but set your insanity and survival to 0.",
    "expansion": null,
    "searchableText": "champion philosophy compelled you must *depart* if able to do so. if you are unable to *depart* for any reason, you *depart* anyway, but set your insanity and survival to 0. 2,4,6,12,16"
  },
  {
    "id": 4,
    "name": "Collectivism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Selfless",
	"tenetKnowledge": "All for One",
    "description": "While you are alive, increase the settlement's survival limit by +1. Each collectivist can increase the limit.\nWhen you *depart*, set your survival to 0 after applying all bonuses.",
    "expansion": null,
    "searchableText": "collectivism philosophy selfless while you are alive, increase the settlement's survival limit by +1. each collectivist can increase the limit. when you *depart*, set your survival to 0 after applying all bonuses. 2,6,10,14,16"
  },
  {
    "id": 5,
    "name": "Deadism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 10, 12, 16],
    "nerosis": "Disembodied",
	"tenetKnowledge": "Death Poet",
    "description": "Nothing matters. You cannot gain insanity.",
    "expansion": null,
    "searchableText": "deadism philosophy disembodied nothing matters. you cannot gain insanity. 2,4,10,12,16"
  },
  {
    "id": 6,
    "name": "Dreamism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 7, 10, 16],
    "nerosis": "Sleepless",
	"tenetKnowledge": "Guardian",
    "description": "You cannot slee soundly unless you are at the feet of the Dream Keeper, bathed in the snores of the dreamers it holds aloft. \nYou cannot gain survival during the hunt or showdown.",
    "expansion": null,
    "searchableText": "dreamism philosophy sleepless you cannot gain survival during the hunt or showdown. 2,4,7,10,16"
  },
  {
    "id": 7,
    "name": "Faceism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 7, 10, 16],
    "nerosis": "Fixated",
	"tenetKnowledge": "Physiognomy",
    "description": "You can attack the monster only from its facing or when it is knocked down.",
    "expansion": null,
    "searchableText": "faceism philosophy fixated you can attack the monster only from its facing or when it is knocked down. 2,4,7,10,16"
  },
  {
    "id": 8,
    "name": "Gourmandism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Ravenous",
	"tenetKnowledge": "Health",
    "description": "You may spend {q} to *consume* a piece of gear or resource with the *consumable* keyword. Archive it.\nDuring the *Aftermath*, if you did not perform this, suffer -1 strength.",
    "expansion": null,
    "searchableText": "gourmandism philosophy ravenous you may spend {q} to *consume* a piece of gear or resource with the *consumable* keyword. archive it. during the aftermath, if you did not perform this, suffer -1 strength. 2,6,10,14,16"
  },
  {
    "id": 9,
    "name": "Homicidalism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Murderer",
	"tenetKnowledge": "Dark Impulse",
    "description": "During the hunt or showdown, if you are ever alone with another survivor, you murder them; keep track of your *body count*. Before resolving each rank of Homicidalism, roll 1d10 and subtract your *body count* from the roll result. On a 1 or lower, the settlement kills you.",
    "expansion": null,
    "searchableText": "homicidalism philosophy murderer during the hunt or showdown, if you are ever alone with another survivor, you murder them; keep track of your body count. before resolving each rank, roll 1d10 and subtract your body count from the roll result. on a 1 or lower, the settlement kills you. 2,6,10,14,16"
  },
  {
    "id": 10,
    "name": "Impermanism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 7, 10, 16],
    "nerosis": "Unrestrained",
	"tenetKnowledge": "Shatterstar",
    "description": "It was always going to break. All weapons, except Fist & Tooth, have *Frail* while they are in your gear grid. \nIf you wound a Super-Dense hit location with Fist & Tooth, suffer the *broken arm* severe injury at the end of the attack.",
    "expansion": null,
    "searchableText": "impermanism philosophy unrestrained all weapons, except f&t, have frail while they are in your gear grid. if you wound a super-dense hit location with f&t, suffer the broken arm severe injury at the end of the attack. 2,4,7,10,16"
  },
  {
    "id": 11,
    "name": "Lanternism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 7, 10, 16],
    "nerosis": "Phototaxis",
	"tenetKnowledge": "Death Collector",
    "description": "You are bound by the light. While there is a *Fallen Lantern* terrain tile on the board, you cannot spend survival.",
    "expansion": null,
    "searchableText": "lanternism philosophy phototaxis you are bound by the light. while there is a fallen lantern terrain tile on the board, you cannot spend survival. 2,4,7,10,16"
  },
  {
    "id": 12,
    "name": "Marrowism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Arrogance",
	"tenetKnowledge": "Osteophage",
    "description": "Why follow in any other footsteps? When you gain knowledge at the Forum that is not from Marrowism, it cost +2 Lumi.\nYou cannot refuse a Majestic Invitation from a Bone Eater.",
    "expansion": null,
    "searchableText": "marrowism philosophy arrogance when you gain knowledge at the forum that is not from marrowism, it cost +2 lumi. you cannot refuse a majestic invitation from a bone eater. 2,6,10,14,16"
  },
  {
    "id": 13,
    "name": "Optimism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Important",
	"tenetKnowledge": "Positivity",
    "description": "When you *depart*, if your total number of armor points (after all bonuses) is higher than each other departing survivor's, gain survival up to the limit. Otherwise, loose all survival.",
    "expansion": null,
    "searchableText": "optimism philosophy important when you *depart*, if your total number of armor points is higher than each other *departing survivor*'s, gain survival up to the limit. otherwise, loose all survival. 2,6,10,14,16"
  },
  {
    "id": 14,
    "name": "Regalism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Inferiority Complex",
	"tenetKnowledge": "Find the Castle",
    "description": "You feel inferior and must confirm this bias. \nYou may not *depart* if you have the highest strength among all *departing survivors*.",
    "expansion": null,
    "searchableText": "regalism philosophy inferiority complex you may not *depart* if you have the highest strength among all *departing survivors*. 2,6,10,14,16"
  },
  {
    "id": 15,
    "name": "Romanticism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Dilettante",
	"tenetKnowledge": "Wanderlust",
    "description": "When you *depart*, gain a random knowledge from the knowledge deck. If you have no empty slots, you must replace an existing knowledge.",
    "expansion": null,
    "searchableText": "romanticism philosophy dilettante when you *depart*, gain a random knowledge from the knowledge deck. if you have no empty slots, you must replace an existing knowledge. 2,6,10,14,16"
  },
  {
    "id": 16,
    "name": "Survivalism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 7, 10, 16],
    "nerosis": "Selfish",
	"tenetKnowledge": "Tenacity",
    "description": "When you *encourage* another survivor, roll 1d10. On a 6+, you do not *encourage*. Keep your survival. You cannot *encourage* again this round. \nIf it possible for your survivor to use *Meat Shield* to avoid harm, they must use it.",
    "expansion": null,
    "searchableText": "survivalism philosophy selfish when you *encourage* another survivor, roll 1d10. on a 6+, you do not *encourage*. keep your survival. you cannot *encourage* again this round. if it possible for your survivor to use meat shield to avoid harm, they must use it. 2,4,7,10,16"
  },
  {
    "id": 17,
    "name": "Verminism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16],
    "nerosis": "Frailty",
	"tenetKnowledge": "Hissing Arms",
    "description": "No matter how protected you are, you know your insides are vulnerable. \n+1 systemic pressure",
    "expansion": null,
    "searchableText": "verminism philosophy frailty +1 systemic pressure 2,6,10,14,16"
  },
  // --- End Philosophy ---

  // --- Weapon Items ---

  {
    "id": 18,
    "name": "Axe",
    "type": "Weapon",
    "spec": "If your wound attempt fails, you may ignore it and attempt to wound the selected {N} again. Limit, once per attack.",
    "mastery": "When you wound a monster at a location with a persistent injury, that wound becomes a critical wound.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "axe weapon if your wound attempt fails, you may ignore it and attempt to wound the selected hit location again. limit, once per attack. when you wound a monster at a location with a persistent injury, that wound becomes a critical wound."
  },
  {
    "id": 19,
    "name": "Bow",
    "type": "Weapon",
    "spec": "When attacking with a bow you may reroll any misses once.",
    "mastery": "Gain *Deadly 2* and ignore *Cumbersome*",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "bow weapon when attacking with a bow you may reroll any misses once. gain deadly 2 and ignore *Cumbersome*"
  },
  {
    "id": 20,
    "name": "Club",
    "type": "Weapon",
    "spec": "On a *perfect hit* double your wound attempt total on the first selected hit location.\nLimit once per attack.",
    "mastery": "If successful wound attempt total is greater than or equal to twice the monster's toughness, inflict an additional wound.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "club weapon on a *perfect hit* double your wound attempt total on the first selected hit location. limit once per attack. if successful wound attempt total is greater than or equal to twice the monster's toughness, inflict an additional wound."
  },
  {
    "id": 21,
    "name": "Dagger",
    "type": "Weapon",
    "spec": "If a wound attempt fails, after performing any reactions, you may discard another drawn {N} to attempt to wound that {N} again. Limit, once per attack.",
    "mastery": "After a wounded {N} is discarded, if adjacent to the attacker and wounded monster you may spend 1 survival to re-draw the wounded {N} and attempt to wound with a dagger.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "dagger weapon if a wound attempt fails, after performing any reactions, you may discard another drawn hit location card to attempt to wound that hit location again. limit, once per attack. after a wounded hit location is discarded, if adjacent to the attacker and wounded monster you may spend 1 survival to re-draw the wounded hit location and attempt to wound with a dagger."
  },
  {
    "id": 22,
    "name": "Fist & Tooth",
    "type": "Weapon",
    "spec": "You may stand (if knocked down) at the start of the monster's turn or the survivors' turn.\nLimit once per round",
    "mastery": "+2 permanent accuracy and str",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "fist & tooth weapon you may stand (if knocked down) at the start of the monster's turn or the survivors' turn. limit once per round +2 permanent accuracy and strength"
  },
  {
    "id": 23,
    "name": "Grand Weapon",
    "type": "Weapon",
    "spec": "+1 Acc.\nIf you critically wound the monster is knocked down.",
    "mastery": "When you have a *perfect hit*, cancel all reactions for that attack.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "grand weapon weapon +1 acc. if you critically wound the monster is knocked down. when you have a *perfect hit*, cancel all reactions for that attack."
  },
  {
    "id": 24,
    "name": "Katana",
    "type": "Weapon",
    "spec": "Cannot select this weapon type. If you are *blind* and have 4+ ranks: On your first *perfect hit* each attack, do not draw a {H}. The monster suffers 1 wound.",
    "mastery": "Leave the settlement, can set another survivor weapon type to Katana",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "katana weapon cannot select this weapon type. if you are *blind* and have 4+ ranks: on your first *perfect hit* each attack, do not draw a hit location. the monster suffers 1 wound. leave the settlement, can set another survivor weapon type to katana"
  },
  {
    "id": 25,
    "name": "Katar",
    "type": "Weapon",
    "spec": "Cancel reactions on the first selected {N}",
    "mastery": "+1 evasion token on a *perfect hit*.\nWhen you are knocked down remove all +1 evasion tokens",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "katar weapon cancel reactions on the first selected hit location +1 evasion token on a *perfect hit*. when you are knocked down remove all +1 evasion tokens"
  },
  {
    "id": 26,
    "name": "Shield",
    "type": "Weapon",
    "spec": "No longer knocked down after collision with monster.\n{!} to all hit locations",
    "mastery": "While adjacent to a survivor that is targeted by a monster, you may swap spaces on the board and become the target instead.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "shield weapon no longer knocked down after collision with monster. +{!} to all hit locations while adjacent to a survivor that is targeted by a monster, you may swap spaces on the board and become the target instead."
  },
  {
    "id": 27,
    "name": "Spear",
    "type": "Weapon",
    "spec": "If you draw the trap, roll 1d10 . On a 7+ cancel the trap. Discard it, then reshuffle the {N} deck and draw a new card. Limit once per round.",
    "mastery": "When you hit the monster you may spend 1 survival to gain the *priority target* token. If they made the hit from directly behind another survivor, that survivor gains it instead.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "spear weapon if you draw the trap, roll 1d10 . on a 7+ cancel the trap. discard it, then reshuffle the hl deck and draw a new card. limit once per round. when you hit the monster you may spend 1 survival to gain the *priority target* token. if they made the hit from directly behind another survivor, that survivor gains it instead."
  },
  {
    "id": 28,
    "name": "Sword",
    "type": "Weapon",
    "spec": "After drawing hit location, make a wound attempt and then select a {N} to resolve with that result. Limit once per attack.",
    "mastery": "+1 Acc, Str and speed",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "sword weapon after drawing hit location, make a wound attempt and then select a hit location to resolve with that result. limit once per attack. +1 acc, str and speed"
  },
  {
    "id": 29,
    "name": "Sword - Willow",
    "type": "Weapon",
    "spec": "Swords in your gear grid gain Block 1 and the two-handed keyword. When you block or deflect a hit with a sword, gain +1 survival. Limit once per round.",
    "mastery": "After resolving a monster's {O}, if you ignored a hit with block or defect, you may spend 1 survival to activate a sword and attack. Limit once per round.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "sword - willow weapon swords in your gear grid gain block 1 and the two-handed keyword. when you block or deflect a hit with a sword, gain +1 survival. limit once per round. after resolving a monster's ai, if you ignored a hit with block or defect, you may spend 1 survival to activate a sword and attack. limit once per round."
  },
  {
    "id": 30,
    "name": "Twilight Sword",
    "type": "Weapon",
    "spec": "Rank 2 - Ignore *Cumbersome*, Rank 4 - Ignore slow and gain +2 speed, Rank 6 - Gain Deadly",
    "mastery": "Leave the settlement, may give the twilight sword to another survivor.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "twilight sword weapon rank 2 - ignore *Cumbersome*, rank 4 - ignore slow and gain +2 speed, rank 6 - gain deadly leave the settlement, may give the twilight sword to another survivor."
  },
  {
    "id": 31,
    "name": "Whip", // This is a duplicate name from ID 18 in your CSV, ensuring unique ID here.
    "type": "Weapon",
    "spec": "Instead of moving the top card of the AI deck into the wound stack, you may move the top card of the AI discard pile. Limit once per Attack",
    "mastery": "Gain +5 strength when attacking with a whip",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "whip weapon instead of moving the top card of the ai deck into the wound stack, you may move the top card of the ai discard pile. limit once per attack gain +5 strength when attacking with a whip"
  },
  {
    "id": null,
    "name": "Scythe", // This is a duplicate name from ID 18 in your CSV, ensuring unique ID here.
    "type": "Weapon",
    "spec": "When you critically wound with a scythe. roll 1d10. On a 6+, shuffle the hit location deck (do not shuffle unresolved hit locations). Limit, once per attack",
    "mastery": "At teh start of a Scythe Master's act, if they are insane, they gain +1 {q}, which they may only spend to activate scythes.",
    "specialistLevels": [3, 8],
    "expansion": null,
    "searchableText": "whip weapon instead of moving the top card of the ai deck into the wound stack, you may move the top card of the ai discard pile. limit once per attack gain +5 strength when attacking with a whip"
  },
  // --- End Weapon Items ---

 // --- Character Trait Items (starting ID 32) ---
// Add these objects to your 'var dataset = [];' array in kdm-data.js

  {
    "id": 32,
    "name": "Disorderly",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "Gain an additional disorder slot. You can have up to four disorders instead of three.",
    "expansion": null,
    "searchableText": "disorderly character trait impairment gain an additional disorder slot."
  },
  {
    "id": 33,
    "name": "Dream of the Heart",
    "type": "Character Trait",
    "traitSubType": "Legendary Ability",
    "description": "You are a savior. Gain 1 permanent red and blue affinity, +1 speed, and these abilities:\n *Olthawartta*, *Life Exchange*",
    "expansion": null,
    "searchableText": "dream of the heart character trait legendary ability you are a savior. gain 1 permanent red and blue affinity, +1 speed, and these abilities: olthawartta, life exchange"
  },
  {
    "id": 34,
    "name": "Natural Healer",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "At the start of your act, you may fully *heal* 1 hit location, including injury levels and armor points. Limit once per showdown.",
    "expansion": null,
    "searchableText": "natural *heal*er character trait ability at the start of your act, you may fully *heal* 1 hit location, including injury levels and armor points. limit once per showdown."
  },
  {
    "id": 35,
    "name": "Out of Sync",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "-1 permanent red, green, and blue affinities.",
    "expansion": null,
    "searchableText": "out of sync character trait impairment -1 permanent red, green, and blue affinities."
  },
  {
    "id": 36,
    "name": "The Adventurer",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "You see it all as one big adventure!\nReduce your total number of disorder slots by 1.",
    "expansion": null,
    "searchableText": "the adventurer character trait ability you see it all as one big adventure! reduce your total number of disorder slots by 1."
  },
  {
    "id": 37,
    "name": "The Axe",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +1 accuracy with axes.",
    "expansion": null,
    "searchableText": "the axe character trait ability gain +1 accuracy with axes."
  },
  {
    "id": 38,
    "name": "The Berserker",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "When you suffer *frenzy* brain trauma, gain double speed and strength tokens.",
    "expansion": null,
    "searchableText": "the berserker character trait ability when you suffer *frenzy* brain trauma, gain double speed and strength tokens."
  },
  {
    "id": 39,
    "name": "The Bow",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +1 accuracy with bows.",
    "expansion": null,
    "searchableText": "the bow character trait ability gain +1 accuracy with bows."
  },
  {
    "id": 40,
    "name": "The Bright Knives",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +2 strength with daggers.",
    "expansion": null,
    "searchableText": "the bright knives character trait ability gain +1 strength with daggers."
  },
  {
    "id": 41,
    "name": "The Bright Side",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +2 courage. \nWhen instructed to round down or up, you may round in the opposite direction.",
    "expansion": null,
    "searchableText": "the bright side character trait ability gain +2 courage. when instructed to round down or up, you may round in the opposite direction."
  },
  {
    "id": 42,
    "name": "The Clever",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "After everyone is placed, you may reposition yourself anywhere on the showdown board.",
    "expansion": null,
    "searchableText": "the clever character trait ability after everyone is placed, you may reposition yourself anywhere on the showdown board."
  },
  {
    "id": 43,
    "name": "The Clumsy",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "When you would gain weapon proficiency rank, roll 1d10. On a 6+, you gain nothing.",
    "expansion": null,
    "searchableText": "the clumsy character trait impairment when you would gain weapon proficiency rank, roll 1d10. on a 6+, you gain nothing."
  },
  {
    "id": 44,
    "name": "The Dark",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "When you attack, increase the range of your *perfect hits* for the first attack roll by 1.",
    "expansion": null,
    "searchableText": "the dark character trait ability when you attack, increase the range of your *perfect hits* for the first attack roll by 1."
  },
  {
    "id": 45,
    "name": "The Dying",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "If you are a *returning survivor*, add {Y} Murder to the timeline this lanter year. You are automatically the murder victim.",
    "expansion": null,
    "searchableText": "the dying character trait impairment if you are a *returning survivor*, add murder to the timeline this lanter year. you are automatically the murder victim."
  },
  {
    "id": 46,
    "name": "The Fang",
    "type": "Character Trait",
    "traitSubType": "Legendary Ability",
    "description": "Ignore *Cumbersome* on weapons. When you *depart*, subtract {!} from all hit locations.",
    "expansion": null,
    "searchableText": "the fang character trait legendary ability ignore *Cumbersome* on weapons. when you *depart*, subtract {!} from all hit locations."
  },
  {
    "id": 47,
    "name": "The Gaiety",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "When an instrument is activated, gain +1 strength and evasion token until the end of the round. Limit once per round.",
    "expansion": null,
    "searchableText": "the gaiety character trait ability when an instrument is activated, gain +1 strength and evasion token until the end of the round. limit once per round."
  },
  {
    "id": 48,
    "name": "The Gatherer",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "On *Arrival* gain a {R} Fresh Acanthus.",
    "expansion": null,
    "searchableText": "the gatherer character trait ability on *Arrival* gain a fresh acanthus."
  },
  {
    "id": 49,
    "name": "The Glamorous",
    "type": "Character Trait",
    "traitSubType": "Legendary Ability",
    "description": "When you reach the following Hunt XP milestones, gain the listed gear: \n<div class='LeftAligin'>{_}: Voluptuous Bodysuit<br> {__}: Mage's Hood<br> {___}: Holy Sword Whip</div>",
    "expansion": null,
    "searchableText": "the glamorous character trait legendary ability when you reach the following hunt xp milestones, gain the listed gear: age 1 - voluptuous bodysuit, age 2 - mage's hood, age 3 - holy sword whip"
  },
  {
    "id": 50,
    "name": "The Hasty",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +1 accuracy and speed during your act if you are the first survivor to act during the survivors turn.",
    "expansion": null,
    "searchableText": "the hasty character trait ability gain +1 accuracy and speed during your act if you are the first survivor to act during the survivors turn."
  },
  {
    "id": 51,
    "name": "The Hoarder",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain the *Hoarder* disorder and a *Perfect Bone*, *Perfect Hide*, or *Perfect Organ* basic resource.",
    "expansion": null,
    "searchableText": "the hoarder character trait ability gain the hoarder disorder and a perfect bone, perfect hide, or perfect organ basic resource."
  },
  {
    "id": 52,
    "name": "The Hunger",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "Gain +1 strength and the *Marrow Hunger* impairment.",
    "expansion": null,
    "searchableText": "the hunger character trait impairment gain +1 strength and the *Marrow Hunger* impairment."
  },
  {
    "id": 53,
    "name": "The Impetuous",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "On *Arrival*, suffer the *frenzy* brain trauma. Limit once per lantern year.",
    "expansion": null,
    "searchableText": "the impetuous character trait impairment on *Arrival*, suffer the *frenzy* brain trauma. limit once per lantern year."
  },
  {
    "id": 54,
    "name": "The Last Stand",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "When you would become the only survivor on the showdown board, you suffer the *frenzy* brain trauma.",
    "expansion": null,
    "searchableText": "the last stand character trait ability when you would become the only survivor on the showdown board, you suffer the *frenzy* brain trauma."
  },
  {
    "id": 55,
    "name": "The Lithe",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "+1 evasion \nwhen you *depart*, subtract {\"} armor from all hit locations.",
    "expansion": null,
    "searchableText": "the lithe character trait ability +1 evasion when you *depart*, subtract 2 armor from all hit locations."
  },
  {
    "id": 56,
    "name": "The Lonely",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "You cannot participate in *Intimacy* or *Partnership*.",
    "expansion": null,
    "searchableText": "the lonely character trait impairment you cannot participate in *Intimacy* or partnership."
  },
  {
    "id": 57,
    "name": "The Mad",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "On *Arrival*, gain +3 insanity.",
    "expansion": null,
    "searchableText": "the mad character trait ability on *Arrival*, gain +3 insanity."
  },
  {
    "id": 58,
    "name": "The Magama",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Your blood runs hot: gain +1 speed.",
    "expansion": null,
    "searchableText": "the magama character trait ability your blood runs hot; gain +1 speed."
  },
  {
    "id": 59,
    "name": "The Mighty",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Grand Weapons in your gear grid gain *Barbed 4*.",
    "expansion": null,
    "searchableText": "the mighty character trait ability grand weapons in your gear grid gain barbed 4."
  },
  {
    "id": 60,
    "name": "The Parent",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "You always find your way home. Once you are a parent, if you would die, you inexplicably survive. Limit, once per lifetime.",
    "expansion": null,
    "searchableText": "the parent character trait ability you always find your way home. once you are a parent, if you would die, you inexplicably survive. limit, once per lifetime."
  },
  {
    "id": 61,
    "name": "The Queen",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "At the start of your act, you may forfeit your {q}. If you do, all other survivors gain +1 speed until the end of the round.",
    "expansion": null,
    "searchableText": "the queen character trait ability at the start of your act, you may forfeit your {q}. if you do, all other survivors gain +1 speed until the end of the round."
  },
  {
    "id": 62,
    "name": "The Red Survivor",
    "type": "Character Trait",
    "traitSubType": "Legendary Ability",
    "description": "Weapon in your gear grid gain all weapon keywords.",
    "expansion": null,
    "searchableText": "the red survivor character trait legendary ability weapon in your gear grid gain all weapon keywords."
  },
  {
    "id": 63,
    "name": "The Shadow",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "-2 Movement, +1 Evasion",
    "expansion": null,
    "searchableText": "the shadow character trait ability -2 movement, +1 evasion"
  },
  {
    "id": 64,
    "name": "The Soloist",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "If you are the only *departing survivor* with an instrument, gain +3 insanity and +1 accuracy token.",
    "expansion": null,
    "searchableText": "the soloist character trait ability if you are the only *departing survivor* with an instrument, gain +3 insanity and +1 accuracy token."
  },
  {
    "id": 65,
    "name": "The Spear",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "-1 Permanent blue affinity \nSpears in your gear grid gain *Block 1*.",
    "expansion": null,
    "searchableText": "the spear character trait ability -1 permanent blue affinity spears in yoru gear grid gain block 1."
  },
  {
    "id": 66,
    "name": "The Sword",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Gain +1 accuracy and strength with swords.",
    "expansion": null,
    "searchableText": "the sword character trait ability gain +1 accuracy and strength with swords."
  },
  {
    "id": 67,
    "name": "The Tough",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "Add +1 to your severe injury roll results.",
    "expansion": null,
    "searchableText": "the tough character trait ability add +1 to your severe injury roll results."
  },
  {
    "id": 68,
    "name": "The Unfettered",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "You cannot *depart* while wearing heavy gear or gear with a printed armor point value that is higher than 2.",
    "expansion": null,
    "searchableText": "the unfettered character trait impairment you cannot *depart* while wearing heavy gear or gear with a printed armor point value that is higher than 2."
  },
  {
    "id": 69,
    "name": "The Unlucky",
    "type": "Character Trait",
    "traitSubType": "Impairment",
    "description": "-1 Luck",
    "expansion": null,
    "searchableText": "the unlucky character trait impairment -1 luck"
  },
  {
    "id": 70,
    "name": "The Versatile",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "At the end of your attack, if you are standing spend 1 survival to activate a weapon in your gear grid that you have not activated this round. Limit once per showdown.",
    "expansion": null,
    "searchableText": "the versatile character trait ability at the end of your attack, if you are standing spend 1 survival to activate a weapon in your gear grid that you have not activated this round. limit once per showdown."
  },
  {
    "id": 71,
    "name": "The Watched",
    "type": "Character Trait",
    "traitSubType": "Ability",
    "description": "A force watches over you. When you *depart* add {!} armor to every hit location.",
    "expansion": null,
    "searchableText": "the watched character trait ability a force watches over you. when you *depart* add {!} to every hit location."
  },
  {
    "id": 72,
    "name": "Weapon Master",
    "type": "Character Trait",
    "traitSubType": "Legendary Ability",
    "description": "Gain weapon proficiency ranks at twice the speed. When you reach a weapon mastery, you leave the settlement to further hone your craft, never to be seen again.",
    "expansion": null,
    "searchableText": "weapon master character trait legendary ability gain weapon proficiency ranks at twice the speed. when you reach a weapon mastery, you leave the settlement to further hone your craft, never to be seen again."
  },
  // --- End Character Trait Items ---

 // --- Fighting Art Items (starting ID 73) ---
  {
    "id": 73,
    "name": "Abyssal Sadist",
    "type": "Fighting Art",
    "description": "The first time you wound the monster each attack, gain +1 survival and insanity. \nIgnore the effects of the *Fear of the Dark* and *Prey* disorders.",
    "expansion": "Manhunter",
    "searchableText": "abyssal sadist fighting art the first time you wound the monster each attack, gain +1 survival and insanity. ignore the effects of the fear of the dark and prey disorders. manhunter"
  },
  {
    "id": 74,
    "name": "Acrobatics",
    "type": "Fighting Art",
    "description": "When you are adjacent to the monster, you may spend {m} to place your survivor on any other space adjacent to the monster.",
    "expansion": "DK",
    "searchableText": "acrobatics fighting art when you are adjacent to the monster, you may spend (m) to place your survivor on any other space adjacent to the monster. dk"
  },
  {
    "id": 75,
    "name": "Ambidextrous",
    "type": "Fighting Art",
    "description": "All melee weapons in your gear grid gain *paired*. Ambidextrous cannot be used if there are any shields, two-handed, or heavy gear in your gear grid.",
    "expansion": "",
    "searchableText": "ambidextrous fighting art all melee weapons in your gear grid gain paired. ambidextrous cannot be used if there are any shields, two-handed, or heavy gear in your gear grid. "
  },
  {
    "id": 76,
    "name": "Berserker",
    "type": "Fighting Art",
    "description": "Once per a showdown you may spend an {q} to suffer *bash* and the *frenzy* brain trauma.",
    "expansion": "",
    "searchableText": "berserker fighting art once per a showdown you may spend an activation to suffer bash and the *frenzy* brain trauma. "
  },
  {
    "id": 77,
    "name": "Bloodzerker",
    "type": "Fighting Art",
    "description": "Gain +1 strength for each of your bleeding tokens. \nWhen you have 3+ bleeding tokens, you lose yourself to the blood and are *guardless*.",
    "expansion": "CC",
    "searchableText": "bloodseeker fighting art gain +1 strength for each of your bleeding tokens. when you have 3+ bleeding tokens, you lose yourself to the blood and are guardless. cc"
  },
  {
    "id": 78,
    "name": "Blotted Out",
    "type": "Fighting Art",
    "description": "When you suffer brain trauma gain a bleeding token.",
    "expansion": "Slenderman",
    "searchableText": "blotted out fighting art when you suffer brain trauma gain a bleeding token. slenderman"
  },
  {
    "id": 79,
    "name": "Burning Ambition",
    "type": "Fighting Art",
    "description": "When you are instructed to *Skip the Next Hunt*, ignore it. \nThe Skip Next Hunt box on your survivor record sheet cannot be filled in.",
    "expansion": "SS",
    "searchableText": "burning ambition fighting art when you are instructed to skip the next hunt, ignore it. ss"
  },
  {
    "id": 80,
    "name": "Burning Focus",
    "type": "Fighting Art",
    "description": "If you have 0 survival at the start of your act, gain 1 survival.",
    "expansion": "LG",
    "searchableText": "burning focus fighting art if you have 0 survival at the start of your act, gain 1 survival. lg"
  },
  {
    "id": 81,
    "name": "Carapace of Will",
    "type": "Fighting Art",
    "description": "At the start of the showdown, gain the *Steadfast* survivor status card. \nWhen you are attacked, if you have 2+ steadfast tokens, ignore a hit and remove all your steadfast tokens.",
    "expansion": "DBK",
    "searchableText": "carapace of will fighting art at the start of the showdown, gain the steadfast survivor status card. when you are attacked, if you have 2+ steadfast tokens, ignore a hit and remove all your steadfast tokens. dbk"
  },
  {
    "id": 82,
    "name": "Champion's Rite",
    "type": "Fighting Art",
    "description": "Before making an attack, you may add your understanding to your accuracy attribute for that attack. Limit, once per a showdown",
    "expansion": "DK",
    "searchableText": "champion's rite fighting art before making an attack, you may add your understanding to your accuracy attribute for that attack. limit, once per a showdown dk"
  },
  {
    "id": 83,
    "name": "Clutch Fighter",
    "type": "Fighting Art",
    "description": "While you have 3 or more blood tokens gain +1 strength and +1 acc.",
    "expansion": "",
    "searchableText": "clutch fighter fighting art while you have 3 or more blood tokens gain +1 strength and +1 acc. "
  },
  {
    "id": 84,
    "name": "Combo Master",
    "type": "Fighting Art",
    "description": "On a *perfect hit* make 1 additional attack roll.",
    "expansion": "",
    "searchableText": "combo master fighting art on a *perfect hit* make 1 additional attack roll. "
  },
  {
    "id": 85,
    "name": "Crazed",
    "type": "Fighting Art",
    "description": "On a *Perfect hit*, gain +1 insanity",
    "expansion": "",
    "searchableText": "crazed fighting art on a *perfect hit*, gain +1 insanity "
  },
  {
    "id": 86,
    "name": "Crossarm Block",
    "type": "Fighting Art",
    "description": "Whenever you are hit, after hit locations are rolled, you may change 1 result to the arms hit location.",
    "expansion": "",
    "searchableText": "crossarm block fighting art whenever you are hit, after hit locations are rolled, you may change 1 result to the arms hit location. "
  },
  {
    "id": 87,
    "name": "Defender",
    "type": "Fighting Art",
    "description": "When a survivor adjacent to you is knocked down, you may spend 1 survival. If you do, they stand and gain +1 survival from your words of encouragement. \nYou cannot use this if you have *broken jaw*.",
    "expansion": "SS",
    "searchableText": "defender fighting art when a survivor adjacent to you is knocked down, you may spend 1 survival. if you do, they stand and gain +1 survival from your words of encouragement. you cannot use this if you have broken jaw. ss"
  },
  {
    "id": 88,
    "name": "Double Dash",
    "type": "Fighting Art",
    "description": "During your act, once per a round, you may spend an {q} to gain a {m}.",
    "expansion": "",
    "searchableText": "double *dash* fighting art during your act, once per a round, you may spend an activation to gain a movement. "
  },
  {
    "id": 89,
    "name": "Escape Artist",
    "type": "Fighting Art",
    "description": "If you would suffer {t} *After Damage* effect, roll 1d10. On an 8+, you deftly escape. Ignore the effect.",
    "expansion": "BK",
    "searchableText": "escape artist fighting art if you would suffer *after damage effect, roll 1d10. on an 8+, you deftly escape. ignore the effect. bk"
  },
  {
    "id": 90,
    "name": "Extra Sense",
    "type": "Fighting Art",
    "description": "You may *dodge* 1 additional time per round.",
    "expansion": "",
    "searchableText": "extra sense fighting art you may *dodge* 1 additional time per round. "
  },
  {
    "id": 91,
    "name": "Fated Blow",
    "type": "Fighting Art",
    "description": "Once per showdown, you may give your next wound attempt +2 strength and *Devastating 1*.",
    "expansion": "DK",
    "searchableText": "fated blow fighting art once per showdown, you may give your next wound attempt +2 strength and devastating 1. dk"
  },
  {
    "id": 92,
    "name": "Feral Shout",
    "type": "Fighting Art",
    "description": "Your sudden bark spooks the monster! \nYour sudden bark spooks the monster! If you are adjacent to the monster, spend {q} to have if suffer *knockback 1* away from you.",
    "expansion": "Frogdog",
    "searchableText": "feral shout fighting art your sudden bark spooks the monster! if you are adjacent to the monster, spend (a) to have if suffer *knockback* 1 away from you. frogdog"
  },
  {
    "id": 93,
    "name": "Feral Strength",
    "type": "Fighting Art",
    "description": "Gain +1 strength if *insane* when attacking with a non-finesse weapon.",
    "expansion": "BK",
    "searchableText": "feral strength fighting art gain +1 strength if *insane* when attacking with a non-finesse weapon. bk"
  },
  {
    "id": 94,
    "name": "First Step",
    "type": "Fighting Art",
    "description": "whenever you attack, after drawing {N} but before rolling to wound, you may suffer {l} brain damage to choose a drawn {N} and then discard it to draw a new one. \n*Traps* cancel this effect",
    "expansion": "King",
    "searchableText": "first step fighting art whenever you attack, after drawing hl but before rolling to wound, you may suffer (*) brain damage to choose a drawn hl and then discard it to draw a new one. traps cancel this effect king"
  },
  {
    "id": 95,
    "name": "Glass Mask",
    "type": "Fighting Art",
    "description": "When you *depart*, you lightly cut your ears, rub blood all over your face, and wait for it to dry. Gain +3 insanity. \nIf you have *Face Painting*, you create a seal between your glass mask and your armor. Gain an additional +3 insanity",
    "expansion": "CC",
    "searchableText": "glass mask fighting art when you *depart*, you lightly cut your ears, rub blood all over your face, and wait for it to dry. gain +3 insanity. if you have face painting, you create a seal between your glass mask and your armor. gain an additional +3 insanity cc"
  },
  {
    "id": 96,
    "name": "Harvestman",
    "type": "Fighting Art",
    "description": "Gain +3 movement. Whenever you are knocked down, gain -1 movement token. \nIf you have the *Tiny Arachnophobia* disorder, you cannot use this fighting art.",
    "expansion": "Spidi",
    "searchableText": "harvestman fighting art gain +3 movement. whenever you are knocked down, gain -1 movement token. if you have the tiny arachnophobia disorder, you cannot use this fighting art. spidi"
  },
  {
    "id": 97,
    "name": "Headliner",
    "type": "Fighting Art",
    "description": "When you become *doomed* or gain the *priority target* token, you may choose to gain +1 survival or +1 strength token.",
    "expansion": "LK",
    "searchableText": "headliner fighting art when you become *doomed* or gain the *priority target* token, you may choose to gain +1 survival or +1 strength token. lk"
  },
  {
    "id": 98,
    "name": "Heroic",
    "type": "Fighting Art",
    "description": "Once per showdown, if you are standing adjacent to the monster and have 3+ survival, you may spend all of your survival for one automatic hit that inflicts a critical wound.",
    "expansion": "LG",
    "searchableText": "heroic fighting art once per showdown, if you are standing adjacent to the monster and have 3+ survival, you may spend all of your survival for one automatic hit that inflicts a critical wound. lg"
  },
  {
    "id": 99,
    "name": "Invigorator",
    "type": "Fighting Art",
    "description": "Gain +1 accuracy and +1 speed while you have no insanity",
    "expansion": "",
    "searchableText": "invigorator fighting art gain +1 accuracy and +1 speed while you have no insanity "
  },
  {
    "id": 100,
    "name": "Last Man Standing",
    "type": "Fighting Art",
    "description": "While you are the only survivor on the showdown board, you may not gain bleeding tokens or be knocked down.",
    "expansion": "",
    "searchableText": "last man standing fighting art while you are the only survivor on the showdown board, you may not gain bleeding tokens or be knocked down. "
  },
  {
    "id": 101,
    "name": "Leader",
    "type": "Fighting Art",
    "description": "Whenever you *encourage* a survivor, they gain +1 speed token until the end of the round. \nOnce per a hunt another survivor can use your understanding and courage to resolve a hunt or story event.",
    "expansion": "",
    "searchableText": "leader fighting art whenever you *encourage* a survivor, they gain +1 speed token until the end of the round. "
  },
  {
    "id": 102,
    "name": "Lure Epilepsy",
    "type": "Fighting Art",
    "description": "Once per showdown, you may spend {q} to give yourself a seizure. You suffer a random brain trauma and are knocked down.",
    "expansion": "Gorm",
    "searchableText": "lure epilepsy fighting art once per showdown, you may spend {q} to give yourself a seizure. you suffer a random brain trauma and are knocked down. gorm"
  },
  {
    "id": 103,
    "name": "Mammoth Hunting",
    "type": "Fighting Art",
    "description": "Gain +1 strength when attack from adjacent spaces outside the monster's facing and blind spot.",
    "expansion": "Gorm",
    "searchableText": "mammoth hunting fighting art gain +1 strength when attack from adjacent spaces outside the monster's facing and blind spot. gorm"
  },
  {
    "id": 104,
    "name": "Mighty Strike",
    "type": "Fighting Art",
    "description": "On a *Perfect hit*, gain +2 strength until the end of the attack.",
    "expansion": "",
    "searchableText": "mighty strike fighting art on a *perfect hit*, gain +2 strength until the end of the attack. "
  },
  {
    "id": 105,
    "name": "Monster Claw Style",
    "type": "Fighting Art",
    "description": "Your *First & Tooth* attacks gain +1 acc, +1 strength and *savage*",
    "expansion": "",
    "searchableText": "monster claw style fighting art your first & tooth attacks gain +1 acc, +1 strength and savage "
  },
  {
    "id": 106,
    "name": "Monster Empathy",
    "type": "Fighting Art",
    "description": "Attuning your feelings to the monster's teaches you how to defeat it.\nGain +1 strength for each mood in play",
    "expansion": "Smog",
    "searchableText": "monster empathy fighting art attuning your feelings to the monster's teaches you how to defeat it. gain +1 strength for each mood in play smog"
  },
  {
    "id": 107,
    "name": "Orator of Death",
    "type": "Fighting Art",
    "description": "Once per showdown, you may spend an {q} to have all non-deaf survivors gain +2 insanity. \nWhen you die, you *encourage* survivors with your last words.",
    "expansion": "",
    "searchableText": "orator of death fighting art once per showdown, you may spend an activation to have all non-deaf survivors gain +2 insanity. when you die, you *encourage* survivors with your last words. "
  },
  {
    "id": 108,
    "name": "Otherworldly Luck",
    "type": "Fighting Art",
    "description": "During the Hunt and Settlement phase, whenever you roll on a table, you may add +1 to the roll result. This may not exceed the highest possible result of that table.",
    "expansion": "FK",
    "searchableText": "otherworldly luck fighting art during the hunt and settlement phase, whenever you roll on a table, you may add +1 to the roll result. this may not exceed the highest possible result of that table. fk"
  },
  {
    "id": 109,
    "name": "Phantom Friend",
    "type": "Fighting Art",
    "description": "The first time you gain a resource during a showdown, you may feed it to your phantom friend. If you do, archive the resource and gain +1 evasion token. \nLose this token if you are *deaf* or become *deaf* during the showdown.",
    "expansion": "Slenderman",
    "searchableText": "phantom friend fighting art the first time you gain a resource during a showdown, you may feed it to your phantom friend. if you do, archive the resource and gain +1 evasion token. lose this token if you are deaf or become deaf during the showdown. slenderman"
  },
  {
    "id": 110,
    "name": "Piercer",
    "type": "Fighting Art",
    "description": "Daggers and swords gain *Precision 1* when you attack Knight Monsters.",
    "expansion": "BK",
    "searchableText": "piercer fighting art daggers and swords gain precision 1 when you attack knight monsters. bk"
  },
  {
    "id": 111,
    "name": "Propulsion Drive",
    "type": "Fighting Art",
    "description": "On *Arrival* gain the *Momentum* survivor status card. \nWhen you attack, if you have 5+ momentum tokens, remove them all and roll 1d10. Gain that amount of luck and strength when attempting to wound the first selected {N} for this attack.", // This was in your CSV data
    "expansion": "DBK",
    "searchableText": "propulsion drive fighting art #value! dbk"
  },
  {
    "id": 112,
    "name": "Purpose",
    "type": "Fighting Art",
    "description": "During the showdown, if you would gain a leathal number of bleeding tokens while there are any other standing survivors, roll 1d10. on a 6+, you live but are knocked down. You will not bleed to death unitil you gain another bleeding token.",
    "expansion": "SS",
    "searchableText": "purpose fighting art during the showdown, if you would gain a leathal number of bleeding tokens while there are any other standing survivors, roll 1d10. on a 6+, you live but are knocked down. you will not bleed to death unitil you gain another bleeding token. ss"
  },
  {
    "id": 113,
    "name": "Regicide",
    "type": "Fighting Art",
    "description": "When another survivor performs *encourage*, an action that makes them scream or roar, or any other audible effect, you may absorb it. Cancel the action and gain +1 strength token.",
    "expansion": "King",
    "searchableText": "regicide fighting art when another survivor performs *encourage*, an action that makes them scream or roar, or any other audible effect, you may absorb it. cancel the action and gain +1 strength token. king"
  },
  {
    "id": 114,
    "name": "Relentless",
    "type": "Fighting Art",
    "description": "When a monster moves away from you during your attack, you may *pursue*. Limit once per attack.",
    "expansion": "Smog",
    "searchableText": "relentless fighting art when a monster moves away from you during your attack, you may purse. limit once per attack. smog"
  },
  {
    "id": 115,
    "name": "Rhythm Chaser",
    "type": "Fighting Art",
    "description": "On *Arrival*, gain +1 evasion token. When you are knocked down, if you don't have an instrument remove all your +1 evasion tokens.\nRhythm Chaser cannot be used if there are any shields or heavy gear in your grid.",
    "expansion": "",
    "searchableText": "rhythm chaser fighting art gain +1 evasion token the first time you critically wound during a showdown. rhythm chaser cannot be used if there are any shields or heavy gear in your grid. "
  },
  {
    "id": 116,
    "name": "Ruthless",
    "type": "Fighting Art",
    "description": "Whenever a survivor dies during the showdown, roll 1d10. On a 7+ gain a *Skull* basic resource.",
    "expansion": "LG",
    "searchableText": "ruthless fighting art whenever a survivor dies during the showdown, roll 1d10. on a 7+ gain a skull basic resource. lg"
  },
  {
    "id": 117,
    "name": "Seasoned Hunter",
    "type": "Fighting Art",
    "description": "Whenever a random hunt event is: \n11, 22, 33, 44, 55, 66, 77, 88, 99, or 100. \nthe event revealer gains +1 understanding and courage.",
    "expansion": "Manhunter",
    "searchableText": "seasoned hunter fighting art whenever a random hunt event is: 11, 22, 33, 44, 55, 66, 77, 88, 99, or 100. the event revealer gains +1 understanding and courage. manhunter"
  },
  {
    "id": 118,
    "name": "Sneak Attack",
    "type": "Fighting Art",
    "description": "When you attack a monster from its blind spot, gain +4 strength for that attack.",
    "expansion": "SS",
    "searchableText": "sneak attack fighting art when you attack a monster from its blind spot, gain +4 strength for that attack. ss"
  },
  {
    "id": 119,
    "name": "Soft Landing",
    "type": "Fighting Art",
    "description": "You crash gracefully. If you would suffer collision with terrain because of *knockback*, roll 1d10. On a 6+, you recover your footing! End your *knockback* on the space directly before colliding with terrain. Limit once per round.",
    "expansion": "Frogdog",
    "searchableText": "soft landing fighting art you crash gracefully. if you would suffer collision with terrain because of *knockback*, roll 1d10. on a 6+, you recover your footing! end your *knockback* on the space directly before colliding with terrain. limit once per round. frogdog"
  },
  {
    "id": 120,
    "name": "Strategist",
    "type": "Fighting Art",
    "description": "During the showdown setup, after placing terrain, you may add a *Giant Stone Face* or a *Toppled Piller* terrain card to the showdown board.",
    "expansion": "",
    "searchableText": "strategist fighting art during the showdown setup, after placing terrain, you may add a giant stone face or a toppled piller terrain card to the showdown board. "
  },
  {
    "id": 121,
    "name": "Tenacious",
    "type": "Fighting Art",
    "description": "When you wound attempt on a hit location is a failure, you may put that hit location back on the top of the deck instead of in the discard pile. \nLimit, once per round.",
    "expansion": "LK",
    "searchableText": "tenacious fighting art when you wound attempt on a hit location is a failure, you may put that hit location back on the top of the deck instead of in the discard pile. limit, once per round. lk"
  },
  {
    "id": 122,
    "name": "Thrill Seeker",
    "type": "Fighting Art",
    "description": "Whenever you gain survival during the showdown phase, gain 1 additional survival.",
    "expansion": "",
    "searchableText": "thrill seeker fighting art whenever you gain survival during the showdown phase, gain 1 additional survival. "
  },
  {
    "id": 123,
    "name": "Timeless Eye",
    "type": "Fighting Art",
    "description": "Your attack roll is a *perfect hit* on a result of 9 or 10. \nYou cannot use Timeless Eye if you have the *blind* severe head injury.",
    "expansion": "",
    "searchableText": "timeless eye fighting art your attack roll is a *perfect hit* on a result of 9 or 10. you cannot use timeless eye if you have the *blind* severe head injury. "
  },
  {
    "id": 124,
    "name": "Tough",
    "type": "Fighting Art",
    "description": "When rolling on a severe injury table, unless you roll a 1, add +1 to the result. [This does not include brain trauma. The result total cannot exceed 10.]",
    "expansion": "",
    "searchableText": "tough fighting art when rolling on a severe injury table, unless you roll a 1, add +1 to the result. [this does not include brain trauma. the result total cannot exceed 10.] "
  },
  {
    "id": 125,
    "name": "Trailblazer",
    "type": "Fighting Art",
    "description": "The hunting party may start the hunt phase 1 space closer to the monster. \nAt the start of the showdown, all survivors gain +1 survival and up to +1 insanity.",
    "expansion": "Manhunter",
    "searchableText": "trailblazer fighting art the hunting party may start the hunt phase 1 space closer to the monster. at the start of the showdown, all survivors gain +1 survival and up to +1 insanity. manhunter"
  },
  {
    "id": 126,
    "name": "Transcended Masochist",
    "type": "Fighting Art",
    "description": "When you gain a bleeding token, gain +1 survival and insanity. \nIgnore the effects of *Aichmophobia* and *Apathetic* disorders.",
    "expansion": "Manhunter",
    "searchableText": "transcended masochist fighting art when you gain a bleeding token, gain +1 survival and insanity. ignore the effects of aichmophobia and apathetic disorders. manhunter"
  },
  {
    "id": 127,
    "name": "Trick Attack",
    "type": "Fighting Art",
    "description": "Once per showdown, when you wound a monster from its blind spot, a survivor adjacent to you may gain the *priority target* token.",
    "expansion": "SS",
    "searchableText": "trick attack fighting art once per showdown, when you wound a monster from its blind spot, a survivor adjacent to you may gain the *priority target* token. ss"
  },
  {
    "id": 128,
    "name": "Tumble",
    "type": "Fighting Art",
    "description": "When something would *collide* with you, roll 1d10. On a result of 6+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside of the collision path.",
    "expansion": "",
    "searchableText": "tumble fighting art when something would *collide* with you, roll 1d10. on a result of 6+, you successfully tumble out of harm's way. instead, place your survivor standing on the closest free space outside of the collision path. "
  },
  {
    "id": 129,
    "name": "Unbreakable",
    "type": "Fighting Art",
    "description": "Once per lantern year, you may ignore one of your severe injury roll results. If you do, gain a random disorder.",
    "expansion": "DK",
    "searchableText": "unbreakable fighting art once per lantern year, you may ignore one of your severe injury roll results. if you do, gain a random disorder. dk"
  },
  {
    "id": 130,
    "name": "Unconscious Fighter",
    "type": "Fighting Art",
    "description": "It takes 7 bleeding tokens to kill you.",
    "expansion": "",
    "searchableText": "unconscious fighter fighting art it takes 7 bleeding tokens to kill you. "
  },
  {
    "id": 131,
    "name": "Unfroggable",
    "type": "Fighting Art",
    "description": "Fastidious self-care. You are never *stinky* and cannot gain stink tokens. \nIf you have any *stinky* gear in your gear grid when you *depart*, archive it and gain +1 survival and +1 evasion token.",
    "expansion": "Frogdog",
    "searchableText": "unfroggable fighting art fastidious self-care. you are never *stinky* and cannot gain stink tokens. if you have any *stinky* gear in your gear grid when you *depart*, archive it and gain +1 survival and +1 evasion token. frogdog"
  },
  {
    "id": 132,
    "name": "Unrelenting",
    "type": "Fighting Art",
    "description": "If all your attack rolls in an attack miss, you may spend 1 survival to re-roll all attack rolls.",
    "expansion": "LG",
    "searchableText": "unrelenting fighting art if all your attack rolls in an attack miss, you may spend 1 survival to re-roll all attack rolls. lg"
  },
  {
    "id": 133,
    "name": "Vengeance",
    "type": "Fighting Art",
    "description": "When a survivor dies during the showdown, gain +4 survival and +1 strength token.",
    "expansion": "Spidi",
    "searchableText": "vengeance fighting art when a survivor dies during the showdown, gain +4 survival and +1 strength token. spidi"
  },
  {
    "id": 134,
    "name": "Virtuoso",
    "type": "Fighting Art",
    "description": "When you activate an instrument all survivors are *encouraged*. \nYour *Ballads* cost 2 less to perform",
    "expansion": "Smog",
    "searchableText": "virtuoso fighting art when you activate an instrument all survivors are *encouraged*. your *Ballads* cost 2 less to perform smog"
  },
  {
    "id": 135,
    "name": "Wardrobe Expert",
    "type": "Fighting Art",
    "description": "When you suffer a severe injury at a hit location, you may archive a gear worn at that location to ignore it and gain +1 survival.",
    "expansion": "LK",
    "searchableText": "wardrobe expert fighting art when you suffer a severe injury at a hit location, you may archive a gear worn at that location to ignore it and gain +1 survival. lk"
  },
  // --- End Fighting Art Items ---


  // --- Disorder Items ---
  {
    "id": 136,
    "name": "Absent Seizures",
    "type": "Disorder",
    "description": "The first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art [erase it]",
    "expansion": "Gorm",
    "searchableText": "absent seizures disorder the first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art [erase it] gorm"
  },
  {
    "id": 137,
    "name": "Aichmophobia",
    "type": "Disorder",
    "description": "You cannot activate or *depart* with axes, swords, spears, daggers, scythes, or katars in your gear grid.",
    "expansion": "",
    "searchableText": "aichmophobia disorder you cannot activate or *depart* with axes, swords, spears, daggers, scythes, or katars in your gear grid."
  },
  {
    "id": 138,
    "name": "Anxiety",
    "type": "Disorder",
    "description": "At the start of the showdown, gain the *priority target* token unless you have *stinky* gear in your gear grid.",
    "expansion": "",
    "searchableText": "anxiety disorder at the start of the showdown, gain the *priority target* token unless you have *stinky* gear in your gear grid."
  },
  {
    "id": 139,
    "name": "Apathetic",
    "type": "Disorder",
    "description": "You cannot use or gain survival. You cannot gain courage. \nCure this disorder if you have 8+ understanding.",
    "expansion": "",
    "searchableText": "apathetic disorder you cannot use or gain survival. you cannot gain courage. cure this disorder if you have 8+ understanding."
  },
  {
    "id": 140,
    "name": "Arithmophillia",
    "type": "Disorder",
    "description": "When you gain this disorder, roll 1d5. Your movement is that number. \nIgnore all other movement modifiers",
    "expansion": "DK",
    "searchableText": "arithmophillia disorder when you gain this disorder, roll 1d5. your movement is that number. ignore all other movement modifiers dk"
  },
  {
    "id": 141,
    "name": "Atelophobia",
    "type": "Disorder",
    "description": "When there are no *perfect hits* in your attack, suffer 1 brain damage.",
    "expansion": "",
    "searchableText": "atelophobia disorder when there are no *perfect hits* in your attack, suffer 1 brain damage."
  },
  {
    "id": 142,
    "name": "Binge Eating",
    "type": "Disorder",
    "description": "You cannot *depart* unless you have *consumable* gear in your gear grid. \nYou must *consume* if a choice to *consume* arises.",
    "expansion": "",
    "searchableText": "binge eating disorder you cannot *depart* unless you have *consumable* gear in your gear grid. you must *consume* if a choice to *consume* arises."
  },
  {
    "id": 143,
    "name": "Bloodlust",
    "type": "Disorder",
    "description": "Whenever a survivor gains a bleeding token, suffer the *frenzy* brain trauma. Limit once per round.",
    "expansion": "CC",
    "searchableText": "bloodlust disorder whenever a survivor gains a bleeding token, suffer the *frenzy* brain trauma. limit once per round. cc"
  },
  {
    "id": 144,
    "name": "Brain Smog",
    "type": "Disorder",
    "description": "You Cannot *surge* or *concentrate*",
    "expansion": "Smog",
    "searchableText": "brain smog disorder you cannot *surge* or *concentrate* smog"
  },
  {
    "id": 145,
    "name": "Chimeric Delusion",
    "type": "Disorder",
    "description": "You cannot *depart* to hunt the Frogdog. \nYour delusion prevents you from speaking. You cannot *encourage* or participate in *Intimacy*.",
    "expansion": "Frogdog",
    "searchableText": "chimeric delusion disorder you cannot *depart* to hunt the frogdog. your delusion prevents you from speaking. you cannot *encourage* or participate in *Intimacy*. frogdog"
  },
  {
    "id": 146,
    "name": "Controlophobia",
    "type": "Disorder",
    "description": "While you are the monster controller, double any damage you suffer.",
    "expansion": "Spidi",
    "searchableText": "controlophobia disorder while you are the monster controller, double any damage you suffer. spidi"
  },
  {
    "id": 147,
    "name": "Coprolalia",
    "type": "Disorder",
    "description": "All your gear is *noisy*. You are always a threat unless you are knocked down, even if an effect says otherwise.",
    "expansion": "",
    "searchableText": "coprolalia disorder all your gear is *noisy*. you are always a threat unless you are knocked down, even if an effect says otherwise."
  },
  {
    "id": 148,
    "name": "Delicious",
    "type": "Disorder",
    "description": "You are still considered a threat when you are knocked down [unless you use an effect that says otherwise].",
    "expansion": "LG",
    "searchableText": "delicious disorder you are still considered a threat when you are knocked down [unless you use an effect that says otherwise]. lg"
  },
  {
    "id": 149,
    "name": "Delirium",
    "type": "Disorder",
    "description": "All your gear is *noisy*. \nOn *Arrival*, draw two random survivor attribute tokens, honoring the side they are drawn on.",
    "expansion": "Frogdog",
    "searchableText": "delirium disorder all your gear is *noisy*. on *Arrival*, draw two random survivor attribute tokens, honoring the side they are drawn on. frogdog"
  },
  {
    "id": 150,
    "name": "Destined",
    "type": "Disorder",
    "description": "If you do not *depart*, lose all survival and insanity.",
    "expansion": "DK",
    "searchableText": "destined disorder if you do not *depart*, lose all survival and insanity. dk"
  },
  {
    "id": 151,
    "name": "Directional Dyslexia",
    "type": "Disorder",
    "description": "Your {m} can only be spent to move in a single straight line.",
    "expansion": "King",
    "searchableText": "directional dyslexia disorder your (m) can only be spent to move in a single straight line. king"
  },
  {
    "id": 152,
    "name": "Dishonorable",
    "type": "Disorder",
    "description": "You cannot *depart* unless you are *insane*. \nGain +1 speed while attacking a monster that is knocked down or from its blind spot.",
    "expansion": "BK",
    "searchableText": "dishonorable disorder you cannot *depart* unless you are *insane*. gain +1 speed while attacking a monster that is knocked down or from its blind spot. bk"
  },
  {
    "id": 153,
    "name": "Emotionless",
    "type": "Disorder",
    "description": "You cannot gain +1 strength tokens.",
    "expansion": "SS",
    "searchableText": "emotionless disorder you cannot gain +1 strength tokens. ss"
  },
  {
    "id": 154,
    "name": "Enfeebled",
    "type": "Disorder",
    "description": "It takes ones less bleeding token to kill you.",
    "expansion": "LG",
    "searchableText": "enfeebled disorder it takes ones less bleeding token to kill you. lg"
  },
  {
    "id": 155,
    "name": "Eproctophilia",
    "type": "Disorder",
    "description": "When you gain a stink token, gain +1 insanity. \nYou must *depart* with *stinky* gear in your gear grid.",
    "expansion": "Frogdog",
    "searchableText": "eproctophilia disorder when you gain a stink token, gain +1 insanity. you must *depart* with *stinky* gear in your gear grid. frogdog"
  },
  {
    "id": 156,
    "name": "Ergophobia",
    "type": "Disorder",
    "description": "When you are a *returning survivor*, you do not generate {v}. \nYou cannot endeavor.",
    "expansion": "",
    "searchableText": "ergophobia disorder when you are a *returning survivor*, you do not generate {*}. you cannot endeavor."
  },
  {
    "id": 157,
    "name": "Fear of the Dark",
    "type": "Disorder",
    "description": "You retire. \nIf you gain this disorder during a hunt or showdown, you put a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again.",
    "expansion": "",
    "searchableText": "fear of the dark disorder if you gain this disorder during a hunt or showdown, you put a brave face until you return to the settlement, vowing never to leave the lantern hoard again."
  },
  {
    "id": 158,
    "name": "Flower Addiction",
    "type": "Disorder",
    "description": "You may only *depart* to hunt the flower Knight. \nAfter you *depart*, cure this disorder.",
    "expansion": "FK",
    "searchableText": "flower addiction disorder you may only *depart*y to hunt the flower knight. after you *depart*, cure this disorder. fk"
  },
  {
    "id": 159,
    "name": "Ghostly Beauty",
    "type": "Disorder",
    "description": "Double all insanity you gain. \nDouble all survival you spend.",
    "expansion": "FK",
    "searchableText": "ghostly beauty disorder double all insanity you gain. double all survival you spend. fk"
  },
  {
    "id": 160,
    "name": "Hemophobia",
    "type": "Disorder",
    "description": "During the showdown, whenever a survivor [including you] gains a bleeding token, you are knocked down.",
    "expansion": "",
    "searchableText": "hemophobia disorder during the showdown, whenever a survivor [including you] gains a bleeding token, you are knocked down."
  },
  {
    "id": 161,
    "name": "Hoarder",
    "type": "Disorder",
    "description": "Whenever you are a *returning survivor*, archive 1 resource gained from the last showdown and gain +1 courage.",
    "expansion": "",
    "searchableText": "hoarder disorder whenever you are a *returning survivor*, archive 1 resource gained from the last showdown and gain +1 courage."
  },
  {
    "id": 162,
    "name": "Honorable",
    "type": "Disorder",
    "description": "You cannot attack a monster from its blind spot or if it is knocked down.",
    "expansion": "",
    "searchableText": "honorable disorder you cannot attack a monster from its blind spot or if it is knocked down."
  },
  {
    "id": 163,
    "name": "Hyper-Sensitivity",
    "type": "Disorder",
    "description": "You may *dodge* one additional time per a round. \nWhenever you are hit by an attack, you must *dodge* at least once, if possible.",
    "expansion": "Slenderman",
    "searchableText": "hyper-sensitivity disorder you may *dodge* one additional time per a round. whenever you are hit by an attack, you must *dodge* at least once, if possible. slenderman"
  },
  {
    "id": 164,
    "name": "Hyperactive",
    "type": "Disorder",
    "description": "During the showdown, you must move at least 1 space every round.",
    "expansion": "",
    "searchableText": "hyperactive disorder during the showdown, you must move at least 1 space every round."
  },
  {
    "id": 165,
    "name": "Immortal",
    "type": "Disorder",
    "description": "While you are *insane*, convert all damage dealt to your hit locations to brain damage. nYou are so busy reveling in your own glory that you cannot spend survival while *insane*.",
    "expansion": "",
    "searchableText": "immortal disorder while you are *insane*, convert all damage dealt to your hit locations to brain damage. you are so busy reveling in your own glory that you cannot spend survival while *insane*."
  },
  {
    "id": 166,
    "name": "Indecision",
    "type": "Disorder",
    "description": "If you are the event revealer of hunt events that call you to make a roll, roll twice and use the lower result.",
    "expansion": "",
    "searchableText": "indecision disorder if you are the event revealer of hunt events that call you to make a roll, roll twice and use the lower result."
  },
  {
    "id": 167,
    "name": "Maladroit",
    "type": "Disorder",
    "description": "When you end your movement on terrain, you are knocked down.",
    "expansion": "BK",
    "searchableText": "maladroit disorder when you end your movement on terrain, you are knocked down. bk"
  },
  {
    "id": 168,
    "name": "Megalophobia",
    "type": "Disorder",
    "description": "you may not *depart* for hunts or showdowns with monsters that occupy more than 4 spaces on the showdown board.",
    "expansion": "Gorm",
    "searchableText": "megalophobia disorder you may not *depart* for hunts or showdowns with monsters that occupy more than 4 spaces on the showdown board. gorm"
  },
  {
    "id": 169,
    "name": "Monster Panic",
    "type": "Disorder",
    "description": "Whenever you suffer brain damage from an *Intimidate* action, suffer 1 additional brain damage.",
    "expansion": "",
    "searchableText": "monster panic disorder whenever you suffer brain damage from an *knockback* action, suffer 1 additional brain damage."
  },
  {
    "id": 170,
    "name": "Motion Sickness",
    "type": "Disorder",
    "description": "Whenever you suffer *knockback* gain 1 bleeding token.",
    "expansion": "DBK",
    "searchableText": "motion sickness disorder whenever you suffer *knockback* gain 1 bleeding token. dbk"
  },
  {
    "id": 171,
    "name": "Narcissistic",
    "type": "Disorder",
    "description": "You may not wear armor at the head location. If you are wearing armor at the head location when you gain this disorder, archive it.",
    "expansion": "FK",
    "searchableText": "narcissistic disorder you may not wear armor at the head location. if you are wearing armor at the head location when you gain this disorder, archive it. fk"
  },
  {
    "id": 172,
    "name": "Overprotective",
    "type": "Disorder",
    "description": "When an adjacent survivor is knocked down, you are also knocked down as you rush to their aid.",
    "expansion": "SS",
    "searchableText": "overprotective disorder when an adjacent survivor is knocked down, you are also knocked down as you rush to their aid. ss"
  },
  {
    "id": 173,
    "name": "Pacifist",
    "type": "Disorder",
    "description": "You Cannot activate weapons to attack. Ignore this if you are *frenzied*.",
    "expansion": "Smog",
    "searchableText": "pacifist disorder you cannot activate weapons to attack. ignore this if you are *frenzied*. smog"
  },
  {
    "id": 174,
    "name": "Performance Anxiety",
    "type": "Disorder",
    "description": "You cannot be nominated for *Intimacy*. \nCure this disorder if you have 8+ courage.",
    "expansion": "DK",
    "searchableText": "performance anxiety disorder you cannot be nominated for *Intimacy*. cure this disorder if you have 8+ courage. dk"
  },
  {
    "id": 175,
    "name": "Phobophobia",
    "type": "Disorder",
    "description": "At the start of your act, if you have 0 insanity, gain the *Terrified* survivor status card.",
    "expansion": "CC",
    "searchableText": "phobophobia disorder at the start of your act, if you have 0 insanity, gain the terrified survivor status card. cc"
  },
  {
    "id": 176,
    "name": "Photophilia",
    "type": "Disorder",
    "description": "You cannot *depart* without a lantern in your gear grid.",
    "expansion": "",
    "searchableText": "photophilia disorder you cannot *depart* without a lantern in your gear grid."
  },
  {
    "id": 177,
    "name": "Post-Traumatic Stress",
    "type": "Disorder",
    "description": "Next settlement phase, you do not contribute or participate in any endeavors.\nSkip the next hunt to recover.",
    "expansion": "",
    "searchableText": "post-traumatic stress disorder next settlement phase, you do not contribute or participate in any endeavors.<br>skip the next hunt to recover."
  },
  {
    "id": 178,
    "name": "Prey",
    "type": "Disorder",
    "description": "You may not spend survival unless you are *insane*.",
    "expansion": "",
    "searchableText": "prey disorder you may not spend survival unless you are *insane*."
  },
  {
    "id": 179,
    "name": "Prima Donna",
    "type": "Disorder",
    "description": "Each survivor turn, you must take your act first (roll off each turn if multiple survivors have this disorder).",
    "expansion": "LK",
    "searchableText": "prima donna disorder each survivor turn, you must take your act first (roll off each turn if multiple survivors have this disorder). lk"
  },
  {
    "id": 180,
    "name": "Ptophobia",
    "type": "Disorder",
    "description": "When you suffer *knockback* suffer {l} brain damage.",
    "expansion": "BK",
    "searchableText": "ptophobia disorder when you suffer *knockback* suffer * brain damage. bk"
  },
  {
    "id": 181,
    "name": "Quixotic",
    "type": "Disorder",
    "description": "If you are *insane* when you *depart* gain +1 survival and +1 strength token.",
    "expansion": "",
    "searchableText": "quixotic disorder if you are *insane* when you *depart* gain +1 survival and +1 strength token."
  },
  {
    "id": 182,
    "name": "Rageholic",
    "type": "Disorder",
    "description": "Whenever you suffer a severe injury, also suffer the *frenzy* brain trauma.",
    "expansion": "",
    "searchableText": "rageholic disorder whenever you suffer a severe injury, also suffer the *frenzy* brain trauma."
  },
  {
    "id": 183,
    "name": "Revenge",
    "type": "Disorder",
    "description": "Whenever a survivor dies during the showdown, suffer *frenzy* brain trauma.",
    "expansion": "Spidi",
    "searchableText": "revenge disorder whenever a survivor dies during the showdown, suffer *frenzy* brain trauma. spidi"
  },
  {
    "id": 184,
    "name": "Schadenfreude",
    "type": "Disorder",
    "description": "When another survivor suffers a severe injury, you are overcome with glee. You are knocked down and gain +1 insanity.",
    "expansion": "Atnas",
    "searchableText": "schadenfreude disorder when another survivor suffers a severe injury, you are overcome with glee. you are knocked down and gain +1 insanity. atnas"
  },
  {
    "id": 185,
    "name": "Secretive",
    "type": "Disorder",
    "description": "When you are a *returning survivor*, you quickly become preoccupied with your own affairs. You must skip the next hunt to deal with them.",
    "expansion": "",
    "searchableText": "secretive disorder when you are a *returning survivor*, you quickly become preoccupied with your own affairs. you must skip the next hunt to deal with them."
  },
  {
    "id": 186,
    "name": "Seizures",
    "type": "Disorder",
    "description": "During the showdown, whenever you suffer damage to your head location, you are knocked down.",
    "expansion": "",
    "searchableText": "seizures disorder during the showdown, whenever you suffer damage to your head location, you are knocked down."
  },
  {
    "id": 187,
    "name": "Shallow Lungs",
    "type": "Disorder",
    "description": "When you *encourage*, you are knocked down.",
    "expansion": "LK",
    "searchableText": "shallow lungs disorder when you *encourage*, you are knocked down. lk"
  },
  {
    "id": 188,
    "name": "Somniphobia",
    "type": "Disorder",
    "description": "On *Arrival*, lose half of your survival, rounded down.",
    "expansion": "",
    "searchableText": "somniphobia disorder on *Arrival*, lose half of your survival, rounded down."
  },
  {
    "id": 189,
    "name": "Spiral Ganglia",
    "type": "Disorder",
    "description": "At the start of the showdown, gain the *Darkness Awareness* survivor status card.",
    "expansion": "Slenderman",
    "searchableText": "spiral ganglia disorder at the start of the showdown, gain the darkness awareness survivor status card. slenderman"
  },
  {
    "id": 190,
    "name": "Squeamish",
    "type": "Disorder",
    "description": "You cannot *depart* with any *stinky* gear in your gear grid. If a status or effect would cause you to become *stinky*, lose all your survival.",
    "expansion": "",
    "searchableText": "squeamish disorder you cannot *depart* with any *stinky* gear in your gear grid. if a status or effect would cause you to become *stinky*, lose all your survival."
  },
  {
    "id": 191,
    "name": "Stage Fright",
    "type": "Disorder",
    "description": "Whenever you become *doomed* or gain the *priority target* token, lose 1 survival.",
    "expansion": "LK",
    "searchableText": "stage fright disorder whenever you become *doomed* or gain the *priority target* token, lose 1 survival. lk"
  },
  {
    "id": 192,
    "name": "Stark Raving",
    "type": "Disorder",
    "description": "You are always *insane*, regardless of your insanity.",
    "expansion": "LG",
    "searchableText": "stark raving disorder you are always *insane*, regardless of your insanity. lg"
  },
  {
    "id": 193,
    "name": "Subjugated",
    "type": "Disorder",
    "description": "When you are knocked down, you are *dominated*. nWhen you *depart* to hunt the King remove this disorder.",
    "expansion": "King",
    "searchableText": "subjugated disorder when you are knocked down, you are dominated. when you *depart* to hunt the king remove this disorder. king"
  },
  {
    "id": 194,
    "name": "Sun-Drunk",
    "type": "Disorder",
    "description": "When you have any +1 strength tokens, you cannot *dash*, *dodge* or {s} *Run Away*.",
    "expansion": "SS",
    "searchableText": "sun-drunk disorder when you have any +1 strength tokens, you cannot *dash*, *dodge* or {a} *Run Away*. ss"
  },
  {
    "id": 195,
    "name": "Superstitious",
    "type": "Disorder",
    "description": "You cannot activate or *depart* with other gear in your gear grid.",
    "expansion": "DK",
    "searchableText": "superstitious disorder you cannot activate or *depart* with other gear in your gear grid. dk"
  },
  {
    "id": 196,
    "name": "Tiny Arachnophobia",
    "type": "Disorder",
    "description": "You cannot carry any gear with the amber keyword. You cannot gain any resources with the silk keyword.",
    "expansion": "Spidi",
    "searchableText": "tiny arachnophobia disorder you cannot carry any gear with the amber keyword. you cannot gain any resources with the silk keyword. spidi"
  },
  {
    "id": 197,
    "name": "Traumatized",
    "type": "Disorder",
    "description": "Whenever you end your act adjacent to a monster, you are knocked down.",
    "expansion": "",
    "searchableText": "traumatized disorder whenever you end your act adjacent to a monster, you are knocked down."
  },
  {
    "id": 198,
    "name": "Tunnel Vision",
    "type": "Disorder",
    "description": "When you spend {q}, you may only activate weapons.",
    "expansion": "LG",
    "searchableText": "tunnel vision disorder when you spend {q}, you may only activate weapons. lg"
  },
  {
    "id": 199,
    "name": "Unlucky",
    "type": "Disorder",
    "description": "You cannot critically wound.",
    "expansion": "LK",
    "searchableText": "unlucky disorder you cannot critically wound. lk"
  },
  {
    "id": 200,
    "name": "Vermin Obsession",
    "type": "Disorder",
    "description": "While there is a *Bug Patch* terrain tile on the showdown board, you are so overwhelmed that you cannot spend survival.",
    "expansion": "DBK",
    "searchableText": "vermin obsession disorder while there is a bug patch terrain tile on the showdown board, you are so overwhelmed that you cannot spend survival. dbk"
  },
  {
    "id": 201,
    "name": "Vestiphobia",
    "type": "Disorder",
    "description": "You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!",
    "expansion": "",
    "searchableText": "vestiphobia disorder you cannot wear armor at the body location. if you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!"
  },
  {
    "id": 202,
    "name": "Weak Spot",
    "type": "Disorder",
    "description": "When you gain this disorder, roll a random hit location and record it. You cannot *depart* unless you have armor at this hit location.",
    "expansion": "",
    "searchableText": "weak spot disorder when you gain this disorder, roll a random hit location and record it. you cannot *depart* unless you have armor at this hit location."
  },
  {
    "id": 203,
    "name": "Weltschmerz",
    "type": "Disorder",
    "description": "You cannot *depart* unless you have updated the death count this lantern year.",
    "expansion": "Atnas",
    "searchableText": "weltschmerz disorder you cannot *depart* unless you have updated the death count this lantern year. atnas"
  },
  // --- End Disorder Items ---

  // --- Knowledge Items ---
  {
    "id": 204,
    "name": "Aspirational Ethos",
    "type": "Knowledge",
    "philosophyLinked": "Ambitionism",
    "mainDesc": "+1 str for every 10 CC the settlement has.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "aspirational ethos knowledge ambitionism +1 str for every 10 collective cognition the settlement has. 0"
  },
  {
    "id": 205,
    "name": "Death Education",
    "type": "Knowledge",
    "philosophyLinked": "Ambitionism",
    "mainDesc": "When you use *Range*, *Block*, *Deflect*, *Mindlock*, or *Deadly*, increase the effect by 1 for every 20 collective cognition in the settlement.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death education knowledge ambitionism when you use range, block, deflect, mindlock, or deadly, increase the effect by 1 for every 20 cc in the settlement. 0"
  },
  {
    "id": 206,
    "name": "Font of Ingenuity",
    "type": "Knowledge",
    "philosophyLinked": "Ambitionism",
    "mainDesc": "When you *depart*, convert all unsuspent endeavors into reroll tokens for yourself.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "font of ingenuity knowledge ambitionism when you *depart*, convert all unsuspent endeavors into reroll tokens for yourself. 0"
  },
  {
    "id": 207,
    "name": "Freeform Dancer I",
    "type": "Knowledge",
    "philosophyLinked": "CC Reward",
    "mainDesc": "When a monster attacks you with a ranged attack, roll 1d10. On a 6+, ignore 1 *hit*.",
    "observationText": "When you are targeted by a ranged attack",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "freeform dancer i knowledge cc reward when a monster attacks you with a ranged attack, roll 1d10. on a 6+, ignore 1 hit. when you are targeted by a ranged attack 3"
  },
  {
    "id": 208,
    "name": "Freeform Dancer II",
    "type": "Knowledge",
    "philosophyLinked": "CC Reward",
    "mainDesc": "When a monster attacks you with a ranged attack, ignore 1 *hit*.",
    "observationText": "When you ignore a *hit*",
    "toRankCount": 7,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "freeform dancer ii knowledge cc reward when a monster attacks you with a ranged attack, ignore 1 hit. when you ignore a hit 7"
  },
  {
    "id": 209,
    "name": "Freeform Dancer III",
    "type": "Knowledge",
    "philosophyLinked": "CC Reward",
    "mainDesc": "When a monster attacks you with a ranged or synchronic attack, ignore 1 *hit*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "freeform dancer iii knowledge cc reward when a monster attacks you with a ranged or synchronic attack, ignore 1 hit. 0"
  },
  {
    "id": 210,
    "name": "Chosen I",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "*Theory*",
    "observationText": "When you make a dangerous observation",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "chosen i knowledge champion theory when you make a dangerous observation 1"
  },
  {
    "id": 211,
    "name": "Chosen II",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "You may erase an observation from another knowledge you possess.",
    "observationText": "Use this knowledge",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "chosen ii knowledge champion you may erase an observation from another knowledge you possess. use this knowledge 4"
  },
  {
    "id": 212,
    "name": "Chosen III",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "You may record a permanent injury you do not already have to erase an observation from another knowledge you possess.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "chosen iii knowledge champion you may record a permanent injury you do not already have to erase an observation from another knowledge you possess. 0"
  },
  {
    "id": 213,
    "name": "Story of the Four Hands",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "Melee weapons gain *Deadly 9* and ignore the monster's luck when you attack with them",
    "observationText": "*Dangerous*: When you critically wound",
    "toRankCount": 3,
    "rankUpText": "Read Champion - Rank 4",
    "expansion": null,
    "searchableText": "story of the four hands knowledge champion melee weapons gain deadly 9 and ignore the monster's luck when you attack with them dangerous: when you critically wound read champion - rank 4 3"
  },
  {
    "id": 214,
    "name": "Story of the Gloaming",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "The first time you ignore a hit from a drawn {O} card using *Block* or *Deflect*, the monster suffers a wound.",
    "observationText": "Dangerous: When you *Block* or *Deflect*",
    "toRankCount": 2,
    "rankUpText": "Read Champion - Rank 4",
    "expansion": null,
    "searchableText": "story of the gloaming knowledge champion the first time you ignore a hit from a drawn ai card using block or deflect, the monster suffers a wound. dangerous: when you block or deflect read champion - rank 4 2"
  },
  {
    "id": 215,
    "name": "Story of the Hunter's Arrow",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "When you hit with a range weapon, you must reveal the entire {N} deck and select a {N} to attempt to wound. Then shuffle the deck.",
    "observationText": "Dangerous: When you hit with a ranged weapon",
    "toRankCount": 3,
    "rankUpText": "Read Champion - Rank 4",
    "expansion": null,
    "searchableText": "story of the hunter's arrow knowledge champion when you hit with a range weapon, you must reveal the entire hl deck and select a hit location to attempt to wound. then shuffle the deck. dangerous: when you hit with a ranged weapon read champion - rank 4 3"
  },
  {
    "id": 216,
    "name": "Story of the Rootcrown",
    "type": "Knowledge",
    "philosophyLinked": "Champion",
    "mainDesc": "When another survivor *encourage*s you, they explode. Dead. Survivors adjacent to them suffer {l} severe injuries. Monster adjacent to them suffer {l} automatic wounds.",
    "observationText": "Dangerous: When you are *encouraged*",
    "toRankCount": 2,
    "rankUpText": "Read Champion - Rank 4",
    "expansion": null,
    "searchableText": "story of the rootcrown knowledge champion when another survivor *encourage*s you, they explode. dead. survivors adjacent to them suffer {l} severe injuries. monster adjacent to them suffer {l} automatic wounds. dangerous: when you are *encouraged* read champion - rank 4 2"
  },
  {
    "id": 217,
    "name": "All for One I",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "With their permission, you can spend other survivors' survival as though it were your own. Limit once per round.",
    "observationText": "When another survivor lets you spend their survival",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "all for one i knowledge collectivism with their permission, you can spend other survivors' survival as though it were your own. limit once per round. when another survivor lets you spend their survival 4"
  },
  {
    "id": 218,
    "name": "All for One II",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "With their permission, you can spend other survivors' survival as though it were your own. Limit twice per round.",
    "observationText": "When another survivor lets you spend their survival",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "all for one ii knowledge collectivism with their permission, you can spend other survivors' survival as though it were your own. limit twice per round. when another survivor lets you spend their survival 8"
  },
  {
    "id": 219,
    "name": "All for One III",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "With their permission, you can spend other survivors' survival as though it were your own.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "all for one iii knowledge collectivism with their permission, you can spend other survivors' survival as though it were your own. 0"
  },
  {
    "id": 220,
    "name": "Eight Eyes",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "On *Arrival*, if the survivors have more functioning eyes than the monster, they *ambush* the monster.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "eight eyes knowledge collectivism on *Arrival*, if the survivors have more functioning eyes than the monster, they ambush the monster. 0"
  },
  {
    "id": 221,
    "name": "Legion I",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "*Theory*",
    "observationText": "When another survivor in the settlement has *Legion*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "legion i knowledge collectivism theory when another survivor in the settlement has legion 1"
  },
  {
    "id": 222,
    "name": "Legion II",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "You may spend 3 lumi to teach another survivor *Legion*. Limit once per lantern year.",
    "observationText": "When there are 8 survivors in the settlement with *Legion*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "legion ii knowledge collectivism you may spend 3 lumi to teach another survivor legion. limit once per lantern year. when there are 8 survivors in the settlement with legion 1"
  },
  {
    "id": 223,
    "name": "Legion III",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "You gain str equal to the number of survivors with *Legion* on the showdown board.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "legion iii knowledge collectivism you gain str equal to the number of survivors with legion on the showdown board. 0"
  },
  {
    "id": 224,
    "name": "Myrmidon's Call",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "You *encourage* without spending survival. When you *encourage* a survivor, they gain +2 movement tokens until the end of the round.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "myrmidon's call knowledge collectivism you *encourage* without spending survival. when you *encourage* a survivor, they gain +2 movement tokens until the end of the round. 0"
  },
  {
    "id": 225,
    "name": "Team Sacrifice",
    "type": "Knowledge",
    "philosophyLinked": "Collectivism",
    "mainDesc": "Instead of rolling to pick a straggler during the hunt, you can choose to be the straggler.\nWhen you are the straggler, add +3 to your roll results.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "team sacrifice knowledge collectivism instead of rolling to pick a straggler during the hunt, you can choose to be the straggler.\nwhen you are the straggler, add +3 to your roll results. 0"
  },
  {
    "id": 226,
    "name": "Blackheart",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "On *Arrival*, gain +1 str token.\nAdd your number of +1 str tokens to your brain trauma rolls.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "blackheart knowledge deadism on *Arrival*, gain +1 str token.\nadd your number of +1 str tokens to your brain trauma rolls. 0"
  },
  {
    "id": 227,
    "name": "Dark Eye I",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "*Theory*",
    "observationText": "On a *perfect hit*",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dark eye i knowledge deadism theory on a *perfect hit* 6"
  },
  {
    "id": 228,
    "name": "Dark Eye II",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "*+1 Acc, +1 systemic pressure*\nIncrease the range of your *perfect hits* by 1",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dark eye ii knowledge deadism +1 acc, +1 systemic pressure\nincrease the range of your *perfect hits* by 1 0"
  },
  {
    "id": 229,
    "name": "Death Poet I",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "When you suffer a brain trauma, gain +1 str token. Limit once per showdown.",
    "observationText": "When you suffer a brain trauma",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death poet ii knowledge deadism when you suffer a brain trauma, gain +1 str token. limit once per showdown. when you suffer a brain trauma 2"
  },
  {
    "id": 230,
    "name": "Death Poet II",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "When you suffer a brain trauma, gain +1 str token.",
    "observationText": "When you suffer a brain trauma",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death poet ii knowledge deadism when you suffer a brain trauma, gain +1 str token. when you suffer a brain trauma 5"
  },
  {
    "id": 231,
    "name": "Death Poet III",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "When you suffer a brain trauma, gain +1 str token.\nIf you would die from a brain trauma, you externalize your suffering with a traumatic poem. All other non-deaf survivors suffer 3 brain damage instead. Limit once per showdown.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death poet iii knowledge deadism when you suffer a brain trauma, gain +1 str token.\nif you would die from a brain trauma, you externalize your suffering with a traumatic poem. all other non-deaf survivors suffer 3 brain damage instead. limit once per showdown. 0"
  },
  {
    "id": 232,
    "name": "Dissociation",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "You see the world as a game board and yourself as a pawn.\nWhen you suffer a brain trauma, place your survivor in any unoccupied space within 5 spaces of your current space.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dissociation knowledge deadism when you suffer a brain trauma, place your survivor in any unoccupied space within 5 spaces of your current space. 0"
  },
  {
    "id": 233,
    "name": "Evermore I",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "You are *Undeathable* \n *Undeathable*: If you would die, roll 1d10. On a 6+, you inexplicably survive.",
    "observationText": "Whenever you inexplicably survive",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "evermore i knowledge deadism you are undeathable - if you would die, roll 1d10. on a 6+, you inexplicably survive. whenever you inexplicably survive 1"
  },
  {
    "id": 234,
    "name": "Evermore II",
    "type": "Knowledge",
    "philosophyLinked": "Deadism",
    "mainDesc": "{q}: Your fear peaks. Suffer a random brain trauma",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "evermore ii knowledge deadism {q}: your fear peaks. suffer a random brain trauma 0"
  },
  {
    "id": 235,
    "name": "Adrenaline Junkie",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "When you attack with 3+ speed and draw the trap. Gain +1 luck token.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "adrenaline junkie knowledge dreamism when you attack with 3+ speed and draw the trap. gain +1 luck token. 0"
  },
  {
    "id": 236,
    "name": "Dreamless Sleep",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "This knowledge can be removed only by its own observation.\n You sleep blissfully dreamless sleep. Ignore the effect of your disorders",
    "observationText": "*Dangerous*: When you *depart* and there is no *Keeper of Dreams* settlement location",
    "toRankCount": 1,
    "rankUpText": "Lose this knowledge and gain +1 permanent torment.",
    "expansion": null,
    "searchableText": "dreamless sleep knowledge dreamism ignore the effect of your disorders dangerous: when you *depart* and there is no keeper of dreams settlement location lose this knowledge and gain +1 permanent torment. 1"
  },
  {
    "id": 237,
    "name": "Fingernail Door I",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "You feel something escape from the tips of your fingers. The sensation is oddly refreshing.\nWhen you roll a lantern 10, before anything else happens, physically rotate the die to a 1 and gain +1 insanity.",
    "observationText": "When you use this knowledge",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fingernail door i knowledge dreamism when you roll a lantern 10, before anything else happens, physically rotate the die to a 1 and gain +1 insanity. when you use this knowledge 5"
  },
  {
    "id": 238,
    "name": "Fingernail Door II",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "When you roll a lantern 10, before anything else happens, physically rotate the die to a 1 and gain +3 insanity.",
    "observationText": "During the *Aftermath*, if you have 13+ insanity",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fingernail door ii knowledge dreamism when you roll a lantern 10, before anything else happens, physically rotate the die to a 1 and gain +3 insanity. during the aftermath, if you have 13+ insanity 3"
  },
  {
    "id": 239,
    "name": "Fingernail Door III",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "The first time another survivor rolls a lantern 10 during the showdown, before anything else happens, physically rotate the die to a 1 and gain +1 luck.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fingernail door iii knowledge dreamism the first time another survivor rolls a lantern 10 during the showdown, before anything else happens, physically rotate the die to a 1 and gain +1 luck. 0"
  },
  {
    "id": 240,
    "name": "Gambler's Grace",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "*+2 systemic pressure, +1 luck*\nWhen you roll a 1 during the hunt or showdown phase, lose 1 survival and reroll it.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "gambler's grace knowledge dreamism +2 systemic pressure, +1 luck\nwhen you roll a 1 during the hunt or showdown phase, lose 1 survival and reroll it. 0"
  },
  {
    "id": 241,
    "name": "Guardian I",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "After an adjacent survivor makes a roll, you may intervene. Gain +1 S. Pressure Token and reroll one of their roll results. Limit once per showdown.",
    "observationText": "When you use this knowledge",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "guardian i knowledge dreamism after an adjacent survivor makes a roll, you may intervene. gain +1 s. pressure token and reroll one of their roll results. limit once per showdown. when you use this knowledge 2"
  },
  {
    "id": 242,
    "name": "Guardian II",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "After a survivor in your field of view makes a roll, you may intervene. Gain +1 systemic pressure token and reroll one of their results. Limit once per showdown.",
    "observationText": "Use this knowledge",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "guardian ii knowledge dreamism after a survivor in your field of view makes a roll, you may intervene. gain +1 systemic pressure token and reroll one of their results. limit once per showdown. use this knowledge 4"
  },
  {
    "id": 243,
    "name": "Guardian III",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "After a survivor in your field of view makes a roll, you may intervene. Gain +1 systemic pressure token and reroll one of their results. Limit twice per showdown.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "guardian iii knowledge dreamism after a survivor in your field of view makes a roll, you may intervene. gain +1 systemic pressure token and reroll one of their results. limit twice per showdown. 0"
  },
  {
    "id": 244,
    "name": "High Roller I",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "*+1 Torment* You may steal a d10 from an attack roll made against you. Place the stolen d10 aside with the roll result. You cannot steal a d10 while you have one.<br>After your wound attempt roll, you may replace the roll result with the stolen d10.",
    "observationText": "On replacing a d10 with a stolen d10",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "high roller i knowledge dreamism +1 torment\nyou may steal a d10 from an attack roll made against you.\nafter your wound attempt roll, you may replace the roll result with the stolen d10. on replacing a d10 with a stolen d10 5"
  },
  {
    "id": 245,
    "name": "High Roller II",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "*+1 Torment*<br>You may steal a d10 from an attack roll made against you. If you do, the speed of the attack is reduced by 1 (negating the hit). Place the stolen d10 aside with the roll result unchanged. You cannot steal a d10 while you have one stolen.<br>During your attack, you may replace any single roll result with the stolen d10 and its roll result.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "high roller ii knowledge dreamism +1 torment<br>you may steal a d10 from an attack roll made against you.<br>During your attack, you may replace the roll result with the stolen d10."
  },
  {
    "id": 246,
    "name": "Serial Code I",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "*Theory*",
    "observationText": "When you *depart* after the settlement has witnessed *The Game*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "serial code i knowledge dreamism theory when you *depart* after the settlement has witnessed the game 1"
  },
  {
    "id": 247,
    "name": "Serial Code II",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "You have glimpsed a fragment of the Dream Keeper's plan for you. \nIf you would die, you inexplicably survive. Suffer -1 permanent luck and lose this knowledge. Limit once per lifetime.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "serial code ii knowledge dreamism if you would die, you inexplicably survive. suffer -1 permanent luck and lose this knowledge. limit once per lifetime. 0"
  },
  {
    "id": 248,
    "name": "Stone Architect",
    "type": "Knowledge",
    "philosophyLinked": "Dreamism",
    "mainDesc": "*+1 torment*\nWhen you are a *returning survivor*, add +1 construction point to the dream project.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone architect knowledge dreamism +1 torment\nwhen you are a *returning survivor*, add +1 construction point to the dream project. 0"
  },
  {
    "id": 249,
    "name": "Physiognomy I",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "You study the visages that sorround you.\nDuring showdown setup, draw an additional {Q} and place it according to its set up rules.",
    "observationText": "When you activate terrain",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "physiognomy i knowledge faceism during showdown setup, draw an additional terrain and place it according to its set up rules. when you activate terrain 5"
  },
  {
    "id": 250,
    "name": "Physiognomy II",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "During showdown setup, draw 2 additional {Q} and pick one to place it according to its set up rules.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "physiognomy ii knowledge faceism during showdown setup, draw 2 additional terrain and pick one to place it according to its set up rules. 0"
  },
  {
    "id": 251,
    "name": "Sculptor's Apprentice",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "During the hunt or showdown, you allow the stone in your heart to beat. Add {)} to all hit locations. During the *Aftermath*, you leave never to be seen again.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "sculptor's apprentice knowledge faceism during the hunt or showdown, you allow the stone in your heart to beat. add 9 armor to all hit locations. during the aftermath, you leave never to be seen again. 0"
  },
  {
    "id": 252,
    "name": "Stone Heart I",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "*Theory*",
    "observationText": "When you suffer a severe injury",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone heart i knowledge faceism theory when you suffer a severe injury 1"
  },
  {
    "id": 253,
    "name": "Stone Heart II",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "Add +1 to your severe injury roll results",
    "observationText": "When you suffer a severe injury",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone heart ii knowledge faceism add +1 to your severe injury roll results when you suffer a severe injury 5"
  },
  {
    "id": 254,
    "name": "Stone Heart III",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "Add +2 to your severe injury roll results.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone heart iii knowledge faceism add +2 to your severe injury roll results. 0"
  },
  {
    "id": 255,
    "name": "Unyielding I",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "*Theory*",
    "observationText": "When you are targeted by an AI Card",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "unyielding i knowledge faceism theory when you are targeted by an ai card 5"
  },
  {
    "id": 256,
    "name": "Unyielding II",
    "type": "Knowledge",
    "philosophyLinked": "Faceism",
    "mainDesc": "Reduce damage from every hit suffer by 1, to a minimum of 1",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "unyielding ii knowledge faceism reduce damage from every hit suffer by 1, to a minimum of 1 0"
  },
  {
    "id": 257,
    "name": "Appreciation",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "During the showdown, when you would archive a resource or gear, roll 1d10. On a 6+, you keep it instead.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "appreciation knowledge gourmandism during the showdown, when you would archive a resource or gear, roll 1d10. on a 6+, you keep it instead. 0"
  },
  {
    "id": 258,
    "name": "Digestion I",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "You may spend {q} to *consume* one of your positive attribute tokens. Archive it. \nLimit once per lantern year.",
    "observationText": "When you\u00a0 *consume* an attribute token",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "digestion i knowledge gourmandism you may spen {q} to *consume* one of your positive attribute tokens. archive it. limit once per lantern year. when you\u00a0 *consume* an attribute token 3"
  },
  {
    "id": 259,
    "name": "Digestion II",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "You may spend {q} to *consume* one of your positive attribute tokens. Archive it and gain its effects permanently. \nLimit once per lantern year.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "digestion ii knowledge gourmandism you may spen {q} to *consume* one of your positive attribute tokens. archive it and gain its effects permanently. limit once per lantern year. 0"
  },
  {
    "id": 260,
    "name": "Gastromancer",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "Room for some more. \nWhen you *depart*, gain the second stomach survivor status card.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "gastromancer knowledge gourmandism when you *depart*, gain the second stomach survivor status card. 0"
  },
  {
    "id": 261,
    "name": "Health I",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "When you *consume* during the hunt or showdown, gain +1 strength token",
    "observationText": "When you *consume* during the hunt or showdown",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "Health i knowledge gourmandism when you *consume* during the hunt or showdown, gain +1 str token when you *consume* during the hunt or showdown 4"
  },
  {
    "id": 262,
    "name": "Health II",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "When you *consume* during the hunt or showdown, gain +1 strength or accuracy token.",
    "observationText": "When you *consume* during the hunt or showdown",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "Health ii knowledge gourmandism when you *consume* during the hunt or showdown, gain +1 str or accuracy token. when you *consume* during the hunt or showdown 5"
  },
  {
    "id": 263,
    "name": "Health III",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "When you *consume* during the hunt or showdown, gain +1 strength, accuracy, or speed tokens.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "Health iii knowledge gourmandism when you *consume* during the hunt or showdown, gain +1 str, acc, or speed tokens. 0"
  },
  {
    "id": 264,
    "name": "Juggernaut I",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "You have amassed a protective bulk. \nWhen you suffer a severe injury, you may archive 2 positive attribute tokens to ignore it.",
    "observationText": "When you use this",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "juggernaut i knowledge gourmandism when you suffer a severe injury, you may archive 2 positive attribute tokens to ignore it. when you use this 4"
  },
  {
    "id": 265,
    "name": "Juggernaut II",
    "type": "Knowledge",
    "philosophyLinked": "Gourmandism",
    "mainDesc": "You are insulated by your distinguished mass. \nWhen you suffer a severe injury, you may archive 1 positive attribute tokens to ignore it.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "juggernaut ii knowledge gourmandism when you suffer a severe injury, you may archive 1 positive attribute tokens to ignore it. 0"
  },
  {
    "id": 266,
    "name": "Dark Impulse I",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "*Theory*",
    "observationText": "When you inflict the killing blow on a monster or murder a survivor.",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dark impulse knowledge homicidalism theory when you inflict the killing blow on a monster or murder a survivor. 1"
  },
  {
    "id": 267,
    "name": "Dark Impulse II",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "Death invigorates you. \nWhen inflecting the killing blow on a monster or murder a survivor, roll 1d10. On a 6+, gain +1 str.",
    "observationText": "When you are the only survivor returning from a victorious showdown",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dark impulse ii knowledge homicidalism when inflecting the killing blow on a monster or murder a survivor, roll 1d10. on a 6+, gain +1 str. when you are the only survivor returning from a victorious showdown 1"
  },
  {
    "id": 268,
    "name": "Dark Impulse III",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "You are the ultimate provider; all must support your heroism. While adjacent to another survivor, you may spend 1 survival to murder them. \nWhen you kill another survivor gain all their positive attributes.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dark impulse iii knowledge homicidalism while adjacent to another survivor, you may spend 1 survival to murder them. \nwhen you kill another survivor gain all their positive attributes. 0"
  },
  {
    "id": 269,
    "name": "Psychopathy I",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "Reduce all brain damage suffered during the showdown by 1 (to a minimum of 1)",
    "observationText": "When you suffer brain damage during the showdown",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "psychopathy i knowledge homicidalism reduce all brain damage suffered during the showdown by 1 (to a minimum of 1) when you suffer brain damage during the showdown 8"
  },
  {
    "id": 270,
    "name": "Psychopathy II",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "Reduce all brain damage suffer during the showdown by 2 (to a minimum of 1)",
    "observationText": "When you suffer a brain trauma",
    "toRankCount": 6,
    "rankUpText": "Epiphany Void",
    "expansion": null,
    "searchableText": "psychopathy ii knowledge homicidalism reduce all brain damage suffer during the showdown by 2 (to a minimum of 1) when you suffer a brain trauma epiphany void 6"
  },
  {
    "id": 271,
    "name": "Razor's Edge",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "While you have no armor points, your attacks with melee weapons gain *Devastating 1*.",
    "observationText": "*Dangerous*: When you wound the monster",
    "toRankCount": 2,
    "rankUpText": "Gain 1 Systemic pressure and erase this knowledge's observations.",
    "expansion": null,
    "searchableText": "razor's edge knowledge homicidalism while you have no armor points, your attacks with melee weapons gain devastating 1. dangerous: when you wound the monster gain 1 systemic pressure and erase this knowledge's observations. 2"
  },
  {
    "id": 272,
    "name": "Void",
    "type": "Knowledge",
    "philosophyLinked": "Homicidalism",
    "mainDesc": "Submerge your mind into the abyss. \n*+2 torment*\n{m}{q}: For the rest of the showdown, you are unaffected by *knockback* actions and you cannot gain knowledge, observations, disorder, survival, or insanity.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "void knowledge homicidalism +2 torment\n{m}{q}: for the rest of the showdown, you are unaffected by *knockback* actions and you cannot gain knowledge, observations, disorder, survival, or insanity. 0"
  },
  {
    "id": 273,
    "name": "Deconstructive Mind I",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "Thoughts are not permanent. \nWhen you gain a disorder, you may replace one of your disorders with it.",
    "observationText": "When you use  this",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "deconstructive mind i knowledge impermanism when you gain a disorder, you may replace one of your disorders with it. when you use  this 6"
  },
  {
    "id": 274,
    "name": "Deconstructive Mind II",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "When you gain a disorder, you may gain +1 lumi instead. Limit once per a lantern year.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "deconstructive mind ii knowledge impermanism when you gain a disorder, you may gain +1 lumi instead. limit once per a lantern year. 0"
  },
  {
    "id": 275,
    "name": "Hardy Ego",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "When you would suffer a brain trauma, instead draw two knowledges. Replace this without one of them.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hardy ego knowledge impermanism when you would suffer a brain trauma, instead draw two knowledges. replace this without one of them. 0"
  },
  {
    "id": 276,
    "name": "Limit Break",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "At the start of the showdown you may press your breaking points. If you do, gain +1 movement, accuarcy, evasion, strength and luck. You will die during the *Aftermath*, but not before passing on what you have learned. In the *Aftermath*, nominate another survivor. They gain this knowledge.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "limit break knowledge impermanism at the start of the showdown you may gain +1 movement, acc, evasion, str and luck. you will die during the aftermath. nominate another survivor to gain this knowledge. 0"
  },
  {
    "id": 277,
    "name": "Shatterstar I",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "When you attack with a *Frail* weapon. Gain +1 strength until the end of the attack",
    "observationText": "When you attack with a *Frail* weapon",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "shatterstar i knowledge impermanism when you attack with a frail weapon. gain +1 str until the end of the attack when you attack with a frail weapon 4"
  },
  {
    "id": 278,
    "name": "Shatterstar II",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "When you attack with a *Frail* weapon. Gain +2 str until the end of the attack",
    "observationText": "When you archive a *Frail* weapon",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "shatterstar ii knowledge impermanism when you attack with a frail weapon. gain +2 str until the end of the attack when you archive a frail weapon 3"
  },
  {
    "id": 279,
    "name": "Shatterstar III",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "When you would archive a *Frail* weapon without a cracked token, put a cracked token on the weapon instead.\nWhen you attack with a *Frail* weapon. Gain +2 str until the end of the attack. If it has a cracked token, gain +5 str instead.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "shatterstar iii knowledge impermanism when you would archive a frail weapon without a cracked token, put a cracked token on the weapon instead.\nwhen you attack with a frail weapon. gain +2 str until the end of the attack. if it has a cracked token, gain +5 str instead. 0"
  },
  {
    "id": 280,
    "name": "Stone Wrecker",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "Once per showdown, if adjacent to a *Stone Column*, you may spend {q} to lift it as a weapon! Archive the terrain tile and gain the *Stone Column* rare gear. If you still have the gear during the *Aftermath*, archive it.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone wrecker knowledge impermanism once per showdown, if adjacent to a stone column, you may spend {q} to lift it as a weapon! archive the terrain tile and gain the stone column rare gear. if you still have the gear during the aftermath, archive it. 0"
  },
  {
    "id": 281,
    "name": "The Breaking Point",
    "type": "Knowledge",
    "philosophyLinked": "Impermanism",
    "mainDesc": "You take note of when things break. \n+1 luck to wound attempts on hit locations with a persistent injury.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "the breaking point knowledge impermanism +1 luck to wound attempts on hit locations with a persistent injury. 0"
  },
  {
    "id": 282,
    "name": "Light Stealer",
    "type": "Knowledge",
    "philosophyLinked": "Lanterism",
    "mainDesc": "After you successfully wound the monster, you may end your attack and attempt to steal the monster's soul.\nRoll 1d10 and slap one of your spare broken lanterns. On a 3+, it blink to life! A sure sign that you were successful. Gain a death token. <br>Limit {l} Time per showdown.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "light stealer knowledge lanterism after you successfully wound the monster, you may end your attack and attempt to steal the monster's soul.\nroll 1d10 and slap one of your spare broken lanterns. on a 3+, gain a death token. limnit {l} time per showdown. 0"
  },
  {
    "id": 283,
    "name": "Light Whisperer",
    "type": "Knowledge",
    "philosophyLinked": "Lanterism",
    "mainDesc": "On *Arrival*, gain a death token.\n{q}: Revel cards from the top of the {N} deck equal to your death tokens and put them back in any order. Then roll 1d10. On a 1, you *consume* a death token and suffer *frenzy*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "light whisperer knowledge lanterism on *Arrival*, gain a death token.\n{q}: revel cards from the top of the hitlocation deck equal to your death tokens and put them back in any order. then roll 1d10. on a 1, you *consume* a death token and suffer *frenzy*. 0"
  },
  {
    "id": 284,
    "name": "Death Collector I",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "When a survivor dies on the showdown board, replace their mini with a *Fallen Lantern* terrain tile.",
    "observationText": "When you activate a *Fall Lantern*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death collector i knowledge lanternism when a survivor dies on the showdown board, replace their mini with a fallen lantern terrain tile. when you activate a fall lantern 1"
  },
  {
    "id": 285,
    "name": "Death Collector II",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "When a survivor dies on the showdown board, replace their mini with a *Fallen Lantern* terrain tile.\nGain +1 strength and accuracy while you have a death token.",
    "observationText": "When you activate a *Fallen Lantern*",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death collector ii knowledge lanternism when a survivor dies on the showdown board, replace their mini with a fallen lantern terrain tile.\ngain +1 str and accuracy while you have a death token. when you activate a fallen lantern 3"
  },
  {
    "id": 286,
    "name": "Death Collector III",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "When a survivor dies on the showdown board, replace their mini with a *Fallen Lantern* terrain tile.\nGain +1 strength, accuracy and evasion while you have a death token.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death collector iii knowledge lanternism when a survivor dies on the showdown board, replace their mini with a fallen lantern terrain tile.\ngain +1 str, accuracy and evasion while you have a death token. 0"
  },
  {
    "id": 287,
    "name": "Ghostzerker",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "*Subconscious*<br>The light of the dead shines within you. \nTreat all your tokens, including on survivor status cards, as death tokens.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "ghostzerker knowledge lanternism subconscious - treat all your tokens, including on survivor status cards, as death tokens. 0"
  },
  {
    "id": 288,
    "name": "Lanterns' Souls",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "You understand the lantern's truth. \nWhen you *depart*, +1 affinity of your choice",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "lanterns' souls knowledge lanternism when you *depart*, +1 affinity of your choice 0"
  },
  {
    "id": 289,
    "name": "Light Eater",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "*Subconscious*<br>On *Arrival*, gain a death token.\n{q}: *consume* a death token. Archive it and suffer *frenzy*",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "light eater knowledge lanternism subconscious - on *Arrival*, gain a death token.\n{q}: *consume* a death token. archive it and suffer *frenzy* 0"
  },
  {
    "id": 290,
    "name": "Light Warrior",
    "type": "Knowledge",
    "philosophyLinked": "Lanternism",
    "mainDesc": "On *Arrival*, gain a death token.\n{q}: Gain +2 strength for each death token you have until the end of your next attack. Then roll 1d10. On a 1, you *consume* a death token and suffer *frenzy*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "light warrior knowledge lanternism on *Arrival*, gain a death token.\n{q}: gain +2 strength for each death token you have until the end of your next attack. then roll 1d10. on a 1, you *consume* a death token and suffer *frenzy*. 0"
  },
  {
    "id": 291,
    "name": "Marrow Monarch",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "*Marrowist* gain *Cutthroat* ability.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "marrow monarch knowledge marrowism marrowist gain cutthroat ability. 0"
  },
  {
    "id": 292,
    "name": "Osteophage I",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "You may archive a bone resource to *consume* it. If you do, gain the *Marrow Hunger* impairment.",
    "observationText": "When you *consume* a bone",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "osteophage i knowledge marrowism you may archive a bone resource to *consume* it. if you do, gain the *Marrow Hunger* impairment. when you *consume* a bone 3"
  },
  {
    "id": 293,
    "name": "Osteophage II",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "You may archive a bone resource to *consume* it. If you do, gain the *Marrow Hunger* impairment.\nWhen you *depart* with no armor and no shield in your gear grid, add {!} to all hit locations for each observation of this knowledge.",
    "observationText": "When you *consume* a bone",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "osteophage ii knowledge marrowism you may archive a bone resource to *consume* it. if you do, gain the *Marrow Hunger* impairment.\nwhen you *depart* with no armor and no shield in your gear grid, add {!} to all hit locations for each observation of this knowledge. when you *consume* a bone 5"
  },
  {
    "id": 294,
    "name": "Osteophage III",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "You may archive a bone resource to *consume* it. If you do, *heal* your survivor. Limit once per lantern year.\nWhen you *depart* with no armor and no shield in your gear grid, add {&} to all hit locations.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "osteophage iii knowledge marrowism you may archive a bone resource to *consume* it. if you do,  *heal* your survivor. limit once per lantern year.\nwhen you *depart* with no armor and no shield in your gear grid, add 6 armor to all hit locations for each observation of this knowledge. 0"
  },
  {
    "id": 295,
    "name": "Perfect Physique",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "At the beginning of your act, you may hypercontract every muscle in your body. Gain +3 strength and -3 movement until the end of the round.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "perfect physique knowledge marrowism at the beginning of your act, you may gain +3 str and -3 movement until the end of the round. 0"
  },
  {
    "id": 296,
    "name": "Stone Skin I",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "You are protected by an exterior shell. \nWhen a hit causes you to fill in a heavy injury, cancel any remaining damage from that hit.",
    "observationText": "When you fill in a heavy injury level",
    "toRankCount": 9,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone skin i knowledge marrowism when a hit causes you to fill in a heavy injury, cancel any remaining damage from that hit. when you fill in a heavy injury level 9"
  },
  {
    "id": 297,
    "name": "Stone Skin II",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "You are guarded by a robust outer carapace. \nWhen a hit causes you to fill in an injury level (light or heavy), cancel any remaining damage from that hit.",
    "observationText": "When you are *Rank 4 Marrowist*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone skin ii knowledge marrowism when a hit causes you to fill in an injury level (light or heavy), cancel any remaining damage from that hit. when you are rank 4 marrowist 1"
  },
  {
    "id": 298,
    "name": "Stone Skin III",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "Gain an additional light injury box at every hit location.\nWhen a hit causes you to fill in an injury level (light or heavy), cancel any remaining damage from that hit.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "stone skin iii knowledge marrowism gain an additional light injury box at every hit location.\nwhen a hit causes you to fill in an injury level (light or heavy), cancel any remaining damage from that hit. 0"
  },
  {
    "id": 299,
    "name": "Surgical Precision",
    "type": "Knowledge",
    "philosophyLinked": "Marrowism",
    "mainDesc": "If all the gear in your gear grid has the bone keyword, your weapons lose *Frail* and gain *Sharp*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "surgical precision knowledge marrowism if all the gear in your gear grid has the bone keyword, your weapons lose frail and gain sharp. 0"
  },
  {
    "id": 300,
    "name": "Blood Dancer I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When you gain a bleeding token",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "blood dancer i knowledge monster theory when you gain a bleeding token 4"
  },
  {
    "id": 301,
    "name": "Blood Dancer II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "+1 str for each of your bleeding tokens.\nWhile you have any bleeding tokens you are *guardless*.",
    "observationText": "When you wound the monster while *guardless*",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "blood dancer ii knowledge monster +1 str for each of your bleeding tokens.\nwhile you have any bleeding tokens you are guardless. when you wound the monster while guardless 6"
  },
  {
    "id": 302,
    "name": "Blood Dancer III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "+1 strength for each of your bleeding tokens.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "blood dancer iii knowledge monster +1 strength for each of your bleeding tokens. 0"
  },
  {
    "id": 303,
    "name": "Dutybound I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When you *depart*",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dutybound i knowledge monster theory when you *depart* 2"
  },
  {
    "id": 304,
    "name": "Dutybound II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "If you are retired or otherwise cannot *depart*, you may gain +1 systemic pressure to *depart* this lantern year.",
    "observationText": "When you gain systemic pressure",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dutybound ii knowledge monster if you are retired or otherwise cannot *depart*, you may gain +1 systemic pressure to *depart* this lantern year. when you gain systemic pressure 2"
  },
  {
    "id": 305,
    "name": "Dutybound III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "If you are retired or otherwise cannot *depart*, you may gain +1 systemic pressure to *depart* this lantern year.\nOn *Arrival*, gain deflect tokens equal to your systemic pressure.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "dutybound iii knowledge monster if you are retired or otherwise cannot *depart*, you may gain +1 systemic pressure to *depart* this lantern year.\non *Arrival*, gain deflect tokens equal to your systemic pressure. 0"
  },
  {
    "id": 306,
    "name": "Frog Kick III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "Spend {m} to attack with Fist & Tooth with +1 accuracy and +2 strength.\nYou cannot use this if you have a dismembered leg.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "frog kick iii knowledge monster spend {m} to attack with *fist & tooth* with +1 accuracy and +2 strength.\nyou cannot use this if you have a *dismembered leg*."
  },
  {
    "id": 307,
    "name": "Frog Kick II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "Spend {m}{q} to attack with *Fist & Tooth* with +1 accuracy and +2 strength.\nYou cannot use this if you have a *dismembered leg*.",
    "observationText": "When you wound with Fist & Tooth",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "frog kick iii knowledge monster spend {m}{q} to attack with fist & tooth with +1 accuracy and +2 strength.\nyou cannot use this if you have a dismembered leg. when you wound with fist & tooth 8"
  },
  {
    "id": 308,
    "name": "Frog Kick I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "Spend {m}{q} to attack with *Fist & Tooth* with +1  accuracy.\nYou cannot use this if you have a *dismembered leg*.",
    "observationText": "When you attack with Fist & Tooth",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "frog kick iii knowledge monster spend {m}{q} to attack with fist & tooth with +1  acc.\nyou cannot use this if you have a dismembered leg. when you attack with fist & tooth 5"
  },
  {
    "id": 309,
    "name": "Herb Grinder I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When you gain Fresh Acanthus",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "herb grinder i knowledge monster theory when you gain fresh acanthus 1"
  },
  {
    "id": 310,
    "name": "Herb Grinder II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "{m}{q}: Archive a Fresh Acanthus to grind it into a medical paste. You or an adjacent survivor fully *heal* 2 hit locations.",
    "observationText": "Use this knowledge",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "herb grinder ii knowledge monster {m}{q}: archive a fresh acanthus to grind it into a medical paste. you or an adjacent survivor fully *heal* 2 hit locations. use this knowledge 4"
  },
  {
    "id": 311,
    "name": "Herb Grinder III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "{m}{q}: Archive a Fresh Acanthus to grind it into a medical paste. You or an adjacent survivor fully *heal* all hit locations.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "herb grinder iii knowledge monster {m}{q}: archive a fresh acanthus to grind it into a medical paste. you or an adjacent survivor fully *heal* all hit locations. 0"
  },
  {
    "id": 312,
    "name": "Plausibility I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When you suffer a severe injury",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "plausibility i knowledge monster theory when you suffer a severe injury 2"
  },
  {
    "id": 313,
    "name": "Plausibility II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "After you suffer a severe injury, gain a reroll token.",
    "observationText": "When you use a reroll token on a severe injury roll.",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "plausibility ii knowledge monster after you suffer a severe injury, gain a reroll token. when you use a reroll token on a severe injury roll. 4"
  },
  {
    "id": 314,
    "name": "Plausibility III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When you suffer a severe injury, but before you roll, gain a reroll token.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "plausibility iii knowledge monster when you suffer a severe injury, but before you roll, gain a reroll token. 0"
  },
  {
    "id": 315,
    "name": "Relativity",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "+1 torment, *+1 systemic pressure*\nIn the *Aftermath*, each survivor must gain +1 {]} in a knowledge of their choice.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "relativity knowledge monster +1 torment, +1 systemic pressure\nin the aftermath, each survivor must gain +1 observation in a knowledge of their choice. 0"
  },
  {
    "id": 316,
    "name": "Relentless I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When a monster moves away from you during your attack.",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "relentless knowledge monster theory when a monster moves away from you during your attack. 1"
  },
  {
    "id": 317,
    "name": "Relentless II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When a monster moves away from you during your attack, you must *purse*.<br> Limit once per attack.",
    "observationText": "When you *pursue* and wound",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "relentless ii knowledge monster when a monster moves away from you during your attack, you must purse. limit once per attack. when you pursue and wound 4"
  },
  {
    "id": 318,
    "name": "Relentless III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When a monster moves away from you during your attack, you may *purse*. <br>Limit once per attack.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "relentless iii knowledge monster when a monster moves away from you during your attack, you may purse. limit once per attack. 0"
  },
  {
    "id": 319,
    "name": "Tactical Drag I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When you spend {m} to escape a zone",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tactical drag i knowledge monster theory when you spend {m} to escape a zone 3"
  },
  {
    "id": 320,
    "name": "Tactical Drag II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "Spend {m} to drag an adjacent survivor, full move away from the monster, and place the survivor adjacent to you, knocked down. Then you collapse and are also knocked down!",
    "observationText": "When another survivor would be attacked or suffer damage from a zone and your drag avoids that outcome",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tactical drag ii knowledge monster spend {m} to drag an adjacent survivor, full move away from the monster, and place the survivor adjacent to you. both of you are knocked down. when another survivor would be attacked or suffer damage from a zone and your drag avoids that outcome 4"
  },
  {
    "id": 321,
    "name": "Tactical Drag III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "Spend {m} to drag an adjacent survivor, full move away from the monster, and place the survivor adjacent to you, knocked down.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tactical drag iii knowledge monster spend {m} to drag an adjacent survivor, full move away from the monster, and place the survivor adjacent to you, knocked down. 0"
  },
  {
    "id": 322,
    "name": "Believe in Yourself I",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "You are *guardless*.\nOn *Arrival*, if your survival is at the settlement's survival limit, gain +1 evasion token.",
    "observationText": "During the *Aftermath*, if you have no filled heavy injury boxes",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "believe in yourself knowledge optimism you are guardless.\non *Arrival*, if your survival is at the settlement's survival limit, gain +1 evasion token. during the aftermath, if you have no filled heavy injury boxes 3"
  },
  {
    "id": 323,
    "name": "Believe in Yourself II",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "You are *guardless*.\nOn *Arrival*, if your survival is at the settlement's survival limit, gain +2 evasion tokens..",
    "observationText": "During the *Aftermath*, if you have no filled injury boxes",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "believe in yourself ii knowledge optimism you are guardless.\non *Arrival*, if your survival is at the settlement's survival limit, gain +2 evasion tokens.. during the aftermath, if you have no filled injury boxes 4"
  },
  {
    "id": 324,
    "name": "Believe in Yourself III",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "You are *guardless*.\nOn *Arrival*, if your survival is at the settlement's survival limit, gain +3 evasion tokens.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "believe in yourself iii knowledge optimism you are guardless.\non *Arrival*, if your survival is at the settlement's survival limit, gain +3 evasion tokens.. 0"
  },
  {
    "id": 325,
    "name": "Better Than This",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "During your act, you may spend up to 5 insanity to gain that much survival. <br>Limit once per showdown.",
    "observationText": "*Dangerous*: When you suffer a brain trauma",
    "toRankCount": 2,
    "rankUpText": "Lose this knowledge and gain a random disorder",
    "expansion": null,
    "searchableText": "better than this knowledge optimism during your act, you may spend up to 5 insanity to gain that much survival. limit once per showdown. dangerous: when you suffer a brain trauma lose this knowledge and gain a random disorder 2"
  },
  {
    "id": 326,
    "name": "Positivity I",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "On *Arrival*, if your survival is at the settlement's limit, gain 1 reroll token.",
    "observationText": "In the *Aftermath*, if your survival is at the settlment's survival limit.",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "positivity i knowledge optimism on *Arrival*, if your survival is at the settlement's limit, gain 1 reroll token. in the aftermath, if your survival is at the settlment's survival limit. 3"
  },
  {
    "id": 327,
    "name": "Positivity II",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "On *Arrival*, if your survival is at the settlement's survival limit gain 2 reroll tokens.",
    "observationText": "In the *Aftermath* gain +1 {]} for each of your reroll tokens",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "positivity ii knowledge optimism on *Arrival*, if your survival is at the settlement's survival limit gain 2 reroll tokens. in the aftermath gain +1 for each of your reroll tokens 5"
  },
  {
    "id": 328,
    "name": "Positivity III",
    "type": "Knowledge",
    "philosophyLinked": "Optimism",
    "mainDesc": "On *Arrival*, if your survival is at the settlement's survival limit gain 2 reroll tokens.\nWhen your reroll result is 9+, gain another reroll token.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "positivity iii knowledge optimism on *Arrival*, if your survival is at the settlement's survival limit gain 2 reroll tokens.\nwhen your reroll result is 9+, gain another reroll token. 0"
  },
  {
    "id": 329,
    "name": "Braggart",
    "type": "Knowledge",
    "philosophyLinked": "Optismism",
    "mainDesc": "When you *encourage* a survivor, you tell them all about it! Sain +2 survival as they lose 1 survival in fustration.",
    "observationText": "*Dangerous*: When you are *encouraged*",
    "toRankCount": 3,
    "rankUpText": "Lose this knowledge and gain a random disorder.",
    "expansion": null,
    "searchableText": "braggart knowledge optismism when you *encourage* a survivor, gain +2 survival as they lose 1 survival. dangerous: when you are *encouraged* lose this knowledge and gain a random disorder. 3"
  },
  {
    "id": 330,
    "name": "Affirmation",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "It is all real! \nYou can spend insanity as though it were survival.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "affirmation knowledge regalism you can spend insanity as though it were survival. 0"
  },
  {
    "id": 331,
    "name": "Call the Storm",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "Channel your faith. \nOnce per round, you may spend 2 insanity to give your next wound attempt bonus strength equal to your weapon's proficiency.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "call the storm knowledge regalism once per round, you may spend 2 insanity to give your next wound attempt bonus strength equal to your weapon's proficiency. 0"
  },
  {
    "id": 332,
    "name": "Call to Arms",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "Your faithful and resilient battle cry is inspiring. \nDuring your act, you may set all other survivors' insanity equal to your insanity. <br>Limit once per showdown.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "call to arms knowledge regalism during your act, you may set all other survivors' insanity equal to your insanity. limit once per showdown. 0"
  },
  {
    "id": 333,
    "name": "Combat Conviction I",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "A clean strike confirms your faith. \nWhen you *perfect hit* with a sword, gain +1d5 insanity",
    "observationText": "When you *perfect hit* with a sword",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "combat conviction i knowledge regalism when you *perfect hit* with a sword, gain +1d5 insanity when you *perfect hit* with a sword 2"
  },
  {
    "id": 334,
    "name": "Combat Conviction II",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "Combat confirms your faith. \nWhen you *perfect hit* with a sword or when you *Block* / *Deflect* a hit, gain +1d5 insanity",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "combat conviction ii knowledge regalism when you *perfect hit* with a sword or when you block / deflect a hit, gain +1d5 insanity 0"
  },
  {
    "id": 335,
    "name": "Find the Castle I",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "You find a new way to move. Perhaps it will take you to the sky. \nWhile *insane*, you may move 1 space diagonally during a {m} action",
    "observationText": "When you use this",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "find the castle i knowledge regalism while *insane*, you may move 1 space diagonally during a {m} action when you use this 8"
  },
  {
    "id": 336,
    "name": "Find the Castle II",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "You are getting closer. \nWhile *insane*, you may move 2 space diagonally during a {m} action",
    "observationText": "When you use this",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "find the castle ii knowledge regalism while *insane*, you may move 2 space diagonally during a {m} action when you use this 8"
  },
  {
    "id": 337,
    "name": "Find the Castle III",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "Closer stil. \nWhile *insane*, you may move 3 space diagonally during a {m} action",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "find the castle iii knowledge regalism while *insane*, you may move 3 space diagonally during a {m} action 0"
  },
  {
    "id": 338,
    "name": "Sword & Shield Style",
    "type": "Knowledge",
    "philosophyLinked": "Regalism",
    "mainDesc": "When you have sword specialization, you also have shield specialization, and vice versa.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "sword & shield style knowledge regalism when you have sword spec, you also have shield spec, and vice versa. 0"
  },
  {
    "id": 339,
    "name": "Eudaimonia",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "When you make an observation gain +1 understanding.\nBefore making a wound a roll, you may spend any amount of understanding to gain that much luck for that wound attempt.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "eudaimonia knowledge romanticism when you make an observation gain +1 understanding.\nbefore making a wound a roll, you may spend any amount of understanding to gain that much luck for that wound attempt. 0"
  },
  {
    "id": 340,
    "name": "Fortis Fortuna I",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "On a *perfect hit*, gain +1 lumi. Limit once per round.",
    "observationText": "When you spend lumi, gain that amount",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortis fortuna i knowledge romanticism on a *perfect hit*, gain +1 lumi. limit once per round. when you spend lumi, gain that amount 5"
  },
  {
    "id": 341,
    "name": "Fortis Fortuna II",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "On a *perfect hit*, gain +1 lumi.",
    "observationText": "When you spend lumi, gain that amount",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortis fortuna ii knowledge romanticism on a *perfect hit*, gain +1 lumi. when you spend lumi, gain that amount 8"
  },
  {
    "id": 342,
    "name": "Fortis Fortuna III",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "On a *perfect hit*, gain +1 lumi.\nOn *Arrival*, you may spend 3 lumi to increase the range of your *perfect hits* by 1 this lantern year.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortis fortuna iii knowledge romanticism on a *perfect hit*, gain +1 lumi.\non *Arrival*, you may spend 3 lumi to increase the range of your *perfect hits* by 1 this lantern year. 0"
  },
  {
    "id": 343,
    "name": "Freedom",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "Once per round, you may spend 1 lumi to perform a survival action, including repeating survival actions you already performed.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "freedom knowledge romanticism once per round, you may spend 1 lumi to perform a survival action, including repeating survival actions you already performed. 0"
  },
  {
    "id": 344,
    "name": "Imagination",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "You may spend 3 lumi to gain a rank of weapon proficiency. \nLimit once per lantern year.",
    "observationText": "When you *depart* with 12+ lumi",
    "toRankCount": 1,
    "rankUpText": "Epiphany *Freedom*",
    "expansion": null,
    "searchableText": "imagination knowledge romanticism you may spend 3 lumi to gain a rank of weapon proficiency. limit once per lantern year. when you *depart* with 12+ lumi epiphany freedom 1"
  },
  {
    "id": 345,
    "name": "Potentia Est I",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "You test the boundaries of your mind. \nIncrease the total number of knowledges you can have by 1, to a limit of 4.",
    "observationText": "When you *depart* with 4 knowledges",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "potentia est i knowledge romanticism increase the total number of knowledges you can have by 1, to a limit of 4. when you *depart* with 4 knowledges 3"
  },
  {
    "id": 346,
    "name": "Potentia Est II",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "+1 torment\nIncrease the total number of knowledges you can have by 2, to a limit of 5.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "potentia est ii knowledge romanticism +1 torment\nincrease the total number of knowledges you can have by 2, to a limit of 5. 0"
  },
  {
    "id": 347,
    "name": "Wanderlust",
    "type": "Knowledge",
    "philosophyLinked": "Romanticism",
    "mainDesc": "When you gain Hunt XP during the hunt or showdown, gain that much lumi.",
    "observationText": "When you *depart* with 6+ lumi",
    "toRankCount": 1,
    "rankUpText": "Epiphany *Imagination*",
    "expansion": null,
    "searchableText": "wanderlust knowledge romanticism when you gain hunt xp during the hunt or showdown, gain that much lumi. when you *depart* with 6+ lumi epiphany imagination 1"
  },
  {
    "id": 348,
    "name": "Darkness I",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "There is something out to get you. \n*+1 Torment*",
    "observationText": "When you suffer brain damage",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "darkness i knowledge starting +1 torment when you suffer brain damage 5"
  },
  {
    "id": 349,
    "name": "Darkness II",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "You let the darkness in. \nAdd +1 to your brain trauma roll result.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "darkness ii knowledge starting add +1 to your brain trauma roll result. 0"
  },
  {
    "id": 350,
    "name": "Despair I",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "*Theory*",
    "observationText": "When you suffer a brain trauma",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "despair i knowledge starting theory when you suffer a brain trauma 1"
  },
  {
    "id": 351,
    "name": "Despair II",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "If nightmares are real, then are you a living nightmare? \nWhen you *depart*, gain +1 insanity",
    "observationText": "When you suffer a brain trauma",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "despair ii knowledge starting when you *depart*, gain +1 insanity when you suffer a brain trauma 3"
  },
  {
    "id": 352,
    "name": "Despair III",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "Nightmares are real and dreams are the wisdom of the dead. While you sleep, they fill you with guidance. \nWhen you *depart*, gain +2 insanity",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "despair iii knowledge starting when you *depart*, gain +2 insanity 0"
  },
  {
    "id": 353,
    "name": "Fear II",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "When a monster targets you, you may spend 1 survival to suffer the *flee* brain trauma. Limit once per showdown.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fear ii knowledge starting when a monster targets you, you may spend 1 survival to suffer the flee brain trauma. limit once per showdown. 0"
  },
  {
    "id": 354,
    "name": "Fear I",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "*Theory*",
    "observationText": "When you suffer damage",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fear ii knowledge starting theory when you suffer damage 3"
  },
  {
    "id": 355,
    "name": "Hunger I",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "Your body is filled with tiny monsters that are eating you from the inside. \n*+1 systemic pressure*",
    "observationText": "During the *Aftermath*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hunger i knowledge starting +1 systemic pressure during the aftermath 1"
  },
  {
    "id": 356,
    "name": "Hunger II",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "You must eat monsters to feed the monsters inside. \kWhen you *depart*, gain +1 survival",
    "observationText": "When you *consume*",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hunger ii knowledge starting when you *depart*, gain +1 survival when you *consume* 3"
  },
  {
    "id": 357,
    "name": "Hunger III",
    "type": "Knowledge",
    "philosophyLinked": "Starting",
    "mainDesc": "With extreme forcus and controlled hum, you direct your appendix to secrete a unique gut bacteria that allows your intestines to super-absorb nutrients. \nWhen you *depart*, gain +2 survival.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hunger iii knowledge starting when you *depart*, gain +2 survival. 0"
  },
  {
    "id": 358,
    "name": "Accuracy Training I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*Theory*",
    "observationText": "When you successfully hit the monster. Limit once per attack.",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "Accuracy training i knowledge survivalism theory when you successfully hit the monster. limit once per attack. 6"
  },
  {
    "id": 359,
    "name": "Accuracy Training II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*+1 accuracy*",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "Accuracy training i knowledge survivalism +1 accuracy 0"
  },
  {
    "id": 360,
    "name": "Death Sense I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*Theory*",
    "observationText": "When you *dodge*",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death sense i knowledge survivalism theory when you *dodge* 8"
  },
  {
    "id": 361,
    "name": "Death Sense II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "You may *dodge* 1 additional time per round.",
    "observationText": "When you *dodge* for the second time in a round",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death sense ii knowledge survivalism you may *dodge* 1 additional time per round. when you *dodge* for the second time in a round 4"
  },
  {
    "id": 362,
    "name": "Death Sense III",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "You may *dodge* 1 additional time per a round and you may *dodge* while you are attacking or *doomed*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death sense iii knowledge survivalism you may *dodge* 1 additional time per a round and you may *dodge* while you are attacking or *doomed*. 0"
  },
  {
    "id": 363,
    "name": "Death's Edge",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*+1 systemic pressure*\nGain +1 str for each systemic pressure you have",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "death's edge knowledge survivalism +1 systemic pressure\ngain +1 str for each systemic pressure you have 0"
  },
  {
    "id": 364,
    "name": "Demagogue I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When you *encourage* another survivor, they gain +1 insanity",
    "observationText": "When you *encourage*",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "demagogue i knowledge survivalism when you *encourage* another survivor, they gain +1 insanity when you *encourage* 3"
  },
  {
    "id": 365,
    "name": "Demagogue II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When you *encourage* another survivor, they gain +2 insanity",
    "observationText": "When you *encourage*",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "demagogue ii knowledge survivalism when you *encourage* another survivor, they gain +2 insanity when you *encourage* 6"
  },
  {
    "id": 366,
    "name": "Demagogue III",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*+1 torment*\nWhen you *encourage*, all non-deaf survivors are affected. \nWhen you *encourage* a survivor, they gain +2 insanity",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "demagogue iii knowledge survivalism +1 torment\nwhen you *encourage*, all non-deaf survivors are affected. \nwhen you *encourage* a survivor, they gain +2 insanity 0"
  },
  {
    "id": 367,
    "name": "Desperate Strike I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*Theory*",
    "observationText": "On a *perfect hit*",
    "toRankCount": 1,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "desperate strike i knowledge survivalism theory on a *perfect hit* 1"
  },
  {
    "id": 368,
    "name": "Desperate Strike II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "Your desperation becomes your strength. \nOn a *perfect hit*, gain +2 str until the end of the attack.",
    "observationText": "On a *perfect hit*",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "desperate strike ii knowledge survivalism on a *perfect hit*, gain +2 str until the end of the attack. on a *perfect hit* 6"
  },
  {
    "id": 369,
    "name": "Desperate Strike III",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "You master your explosive desperation. \nOn a *perfect hit*, gain +4 str until the end of the attack.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "desperate strike iii knowledge survivalism on a *perfect hit*, gain +4 str until the end of the attack. 0"
  },
  {
    "id": 370,
    "name": "Evasion Training I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*Theory*",
    "observationText": "When you are targeted",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "evasion training i knowledge survivalism theory when you are targeted 5"
  },
  {
    "id": 371,
    "name": "Evasion Training II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": '*+1 evasion, +1 torment*\nWhen you *depart*, subtract {"} from the legs.',
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "evasion training ii knowledge survivalism +1 evasion, +1 torment\nwhen you *depart*, subtract 2 armor from the legs. 0"
  },
  {
    "id": 372,
    "name": "Meat Shield",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "Before resolving damage from a monster's *Move & Attack* action, you may exchange places with a survivor adjacent to you. They suffer any damage in your stead! A switched survivor cannot perform Meat Shield or *dodge*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "meat shield knowledge survivalism before resolving damage from a monster's move & attack action, you may exchange places with a survivor adjacent to you. they suffer any damage in your stead! a switched survivor cannot perform meat shield or *dodge*. 0"
  },
  {
    "id": 373,
    "name": "Rolling Dive",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*+1 torment*\nWhen you are adjacent to the monster, you may spend {m} to place your survivor on any other unoccupied space adjacent to the monster.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "rolling dive knowledge survivalism +1 torment\nwhen you are adjacent to the monster, you may spend {m} to place your survivor on any other unoccupied space adjacent to the monster. 0"
  },
  {
    "id": 374,
    "name": "Strength Training I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*Theory*",
    "observationText": "When you wound the monster, Limit once per attack.",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "strength training i knowledge survivalism theory when you wound the monster, limit once per attack. 6"
  },
  {
    "id": 375,
    "name": "Strength Training II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "*+1 strength, +1 systemic pressure*",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "strength training ii knowledge survivalism +1 strength, +1 systemic pressure 0"
  },
  {
    "id": 376,
    "name": "Tenacity III",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When you *depart*, gain 3 survival tokens. You may spend a survival token at any time to gain +1 survival.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tenacity iii knowledge survivalism when you *depart*, gain 3 survival tokens. you may spend a survival token at any time to gain +1 survival. 0"
  },
  {
    "id": 377,
    "name": "Tenacity II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When you *depart*, gain 2 survival tokens. You may spend survival token at any time to gain +1 survival.",
    "observationText": "When you spend survival token",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tenacity iii knowledge survivalism when you *depart*, gain 2 survival tokens. you may spend survival token at any time to gain +1 survival. when you spend survival token 6"
  },
  {
    "id": 378,
    "name": "Tenacity I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When you *depart*, gain a survival token. You may spend a survival topken at any time to gain +1 survival.",
    "observationText": "When you spend a survival token",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tenacity iii knowledge survivalism when you *depart*, gain a survival token. you may spend a survival topken at any time to gain +1 survival. when you spend a survival token 2"
  },
  {
    "id": 379,
    "name": "Tumble I",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When something would *collide* with you, roll 1d10. On a 7+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside the collision path.",
    "observationText": "When you successfully *Tumble*",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tumble i knowledge survivalism when something would *collide* with you, roll 1d10. on a 7+, place your survivor standing on the closest free space outside the collision path. when you successfully tumble 2"
  },
  {
    "id": 380,
    "name": "Tumble II",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When something would *collide* with you, roll 1d10. On a 6+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside the collision path.",
    "observationText": "When you successfully *Tumble*",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tumble ii knowledge survivalism when something would *collide* with you, roll 1d10. on a 6+, place your survivor standing on the closest free space outside the collision path. when you successfully tumble 5"
  },
  {
    "id": 381,
    "name": "Tumble III",
    "type": "Knowledge",
    "philosophyLinked": "Survivalism",
    "mainDesc": "When something would *collide* with you, roll 1d10. On a 5+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside the collision path.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "tumble iii knowledge survivalism when something would *collide* with you, roll 1d10. on a 5+, place your survivor standing on the closest free space outside the collision path. 0"
  },
  {
    "id": 382,
    "name": "Envenom Edge I",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "When you hit the monster at least 2 time in one attack, it gains a venom token.\nWhen a monster has 3 or more venom tokens, it suffers 1 wound. Then archive all of its venom tokens.",
    "observationText": "When the monster suffers a wound from venom",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "envenom edge i knowledge verminism when you hit the monster at least 2 time in one attack, it gains a venom token.\nwhen a monster has 3 or more venom tokens, it suffers 1 wound. then archive all of its venom tokens. when the monster suffers a wound from venom 3"
  },
  {
    "id": 383,
    "name": "Envenom Edge II",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "When you hit the monster at least 2 time in one attack, it gains a venom token.\nWhen a monster has 2 or more venom tokens, it suffers 1 wound. Then archive all of its venom tokens.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "envenom edge ii knowledge verminism when you hit the monster at least 2 time in one attack, it gains a venom token.\nwhen a monster has 2 or more venom tokens, it suffers 1 wound. then archive all of its venom tokens. 0"
  },
  {
    "id": 384,
    "name": "Hissing Arms I",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "All your weapons gain *paired*. You cannot pair 2-handed weapons this way.\nWhile you have paired weapons in your gear grid, you may spend {q} to *Deflect 1*",
    "observationText": "When you make a paired attack",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hissing arms i knowledge verminism all your weapons gain paired. you cannot pair 2-handed weapons this way.\nwhile you have paired weapons in your gear grid, you may spend {q} to deflect 1 when you make a paired attack 3"
  },
  {
    "id": 385,
    "name": "Hissing Arms II",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "All your weapons gain *paired*. You cannot pair 2-handed weapons this way.\nWhile you have paired weapons in your gear grid, you may spend {q} to *Deflect 2*",
    "observationText": "When you make a paired attack",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hissing arms ii knowledge verminism all your weapons gain paired. you cannot pair 2-handed weapons this way.\nwhile you have paired weapons in your gear grid, you may spend {q} to deflect 2 when you make a paired attack 8"
  },
  {
    "id": 386,
    "name": "Hissing Arms III",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "All your weapons gain *paired*. You cannot pair 2-handed weapons this way.\nWhile you have paired weapons in your gear grid, you may spend {q} to *Deflect 3*.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "hissing arms iii knowledge verminism all your weapons gain paired. you cannot pair 2-handed weapons this way.\nwhile you have paired weapons in your gear grid, you may spend {q} to deflect 3 0"
  },
  {
    "id": 387,
    "name": "Mirror Eyes I",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "*Theory*",
    "observationText": "When you hit the monster at least 2 times in one attack",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "mirror eyes i knowledge verminism theory when you hit the monster at least 2 times in one attack 3"
  },
  {
    "id": 388,
    "name": "Mirror Eyes II",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "When you make a paired attack, it gains *Precision 1*",
    "observationText": "When you hit the monster at least 3 times in one attack",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "mirror eyes ii knowledge verminism when you make a paired attack, it gains precision 1 when you hit the monster at least 3 times in one attack 3"
  },
  {
    "id": 389,
    "name": "Mirror Eyes III",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "When you make a paired attack, it gains *Precision 2*",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "mirror eyes iii knowledge verminism when you make a paired attack, it gains precision 2 0"
  },
  {
    "id": 390,
    "name": "Queen of Hands",
    "type": "Knowledge",
    "philosophyLinked": "Verminism",
    "mainDesc": "*+2 speed, +1 systemic pressure*\nWhen the left and right columns of your gear grid match, you may cancel any number of hits in your attack before drawing {N}. For each cancelled hit, +1 luck for the rest of the attack.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "queen of hands knowledge verminism +2 speed, +1 systemic pressure\nwhen the left and right columns of your gear grid match, you may cancel any number of hits in your attack before drawing hl. for each cancelled hit, +1 luck for the rest of the attack. 0"
  },
  {
    "id": 391,
    "name": "Fortune & Misfortune I",
    "type": "Knowledge",
    "philosophyLinked": "Wanderer",
    "mainDesc": "On *Arrival*, gain +1 luck token, and all other survivors gain +1 systemic pressure token.",
    "observationText": "When you critically wound",
    "toRankCount": 9,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortune & misfortune i knowledge wanderer on *Arrival*, gain +1 luck token, and all other survivors gain +1 systemic pressure token. when you critically wound 9"
  },
  {
    "id": 392,
    "name": "Fortune & Misfortune II",
    "type": "Knowledge",
    "philosophyLinked": "Wanderer",
    "mainDesc": "On *Arrival*, gain +2 luck token, and all other survivors gain +2 systemic pressure token.",
    "observationText": "When a survivor with systemic pressure tokens die from a severe injury",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortune & misfortune ii knowledge wanderer on *Arrival*, gain +2 luck token, and all other survivors gain +2 systemic pressure token. when a survivor with systemic pressure tokens die from a severe injury 6"
  },
  {
    "id": 393,
    "name": "Fortune & Misfortune III",
    "type": "Knowledge",
    "philosophyLinked": "Wanderer",
    "mainDesc": "On *Arrival*, gain +3 luck token, and all other survivors gain +3 systemic pressure token.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": null,
    "searchableText": "fortune & misfortune iii knowledge wanderer on *Arrival*, gain +3 luck token, and all other survivors gain +3 systemic pressure token. 0"
  },
  // --- End Knowledge Items ---
  // --- Secret Fighting Art Items ---
  {
    "id": 394,
    "name": "Actualize",
    "type": "Secret Fighting Art",
    "description": "Gain +1 speed when attacking with a sword.\nAfter you make attack rolls with a sword, you may discard a roll result to increase another roll result by 1. You may do this as many times as you like, so long as there is at least 1 attack left.",
    "expansion": "Atnas",
    "searchableText": "actualize secret fighting art gain +1 speed when attacking with a sword.\nafter you make attack rolls with a sword, you may discard a roll result to increase another roll result by 1. you may do this as many times as you like, so long as there is at least 1 attack left. atnas"
  },
  {
    "id": 395,
    "name": "Aerial Transfusion",
    "type": "Secret Fighting Art",
    "description": "It requires an additional 2 bleeding tokens to kill you.\nDuring your act, you may spend {q} to freely rearrange all survivors' bleeding tokens.",
    "expansion": "Croc",
    "searchableText": "aerial transfusion secret fighting art it requires an additional 2 bleeding tokens to kill you.\nduring your act, you may spend {q} to freely rearrange all survivors' bleeding tokens. croc"
  },
  {
    "id": 396,
    "name": "Altered Destiny",
    "type": "Secret Fighting Art",
    "description": "If you would gain negative attribute token, gain a positive attribute token of that type instead.",
    "expansion": "DK",
    "searchableText": "altered destiny secret fighting art if you would gain negative attribute token, gain a positive attribute token of that type instead. dk"
  },
  {
    "id": 397,
    "name": "Beast of Caratosis",
    "type": "Secret Fighting Art",
    "description": "You may *concentrate*. If you do perform Beast of Caratoisis at the start of your next act.",
    "expansion": null,
    "searchableText": "beast of caratosis secret fighting art you may *concentrate*. if you do perform beast of caratoisis at the start of your next act."
  },
  {
    "id": 398,
    "name": "Black Guard Style",
    "type": "Secret Fighting Art",
    "description": "Swords in your gear grid gain *Block 1*<br>When you block a hit with a sword your next attack that round with a sword gains +2 acc, str, & speed. Limit once per round.<br>{v}: Train a survivor, they gain this fighting art and you lose it and suffer the broken arm severe injury.",
    "expansion": null,
    "searchableText": "black guard style secret fighting art swords in your gear grid gain block 1\nwhen you block a hit with a sword your next attack that round with a sword gains +2 acc, str, & speed. limit once per round.\n[e]: train a survivor, they gain this fighting art and you lose it and suffer the broken arm severe injury."
  },
  {
    "id": 399,
    "name": "Bone Whisperer",
    "type": "Secret Fighting Art",
    "description": "When a survivor dies, place a token where they died. If you pass over it, remove it and *heal* your survivor. Then roll 1d10 + hunt XP<div class='LeftAligin'><table class='TableRoll'><tr><td  class='RollValues'>1-3</td><td>You feel amazing! Gain +1 permanent movement, speed and evasion.</td></tr><tr><td class='RollValues'>4-8</td><td> Gain +1 Permanent strength.</td></tr><tr><td class='RollValues'>9-18</td><td>Gain a fighting art and +5 survival</td></tr><tr><td class='RollValues'>19+</td><td>You run away into exile. At the end of the showdown, you are gone forever.</td></tr></table></div>",
    "expansion": null,
    "searchableText": "bone whisperer secret fighting art when a survivor dies, place a token where they died. if you pass over it, remove it and *heal* your survivor. then roll 1d10 + hunt xp\n1-3: +1 movement, speed and evasion | 4-8: +1 str | 9-18: fighting art and +5 survival | 19+ aftermath you leave "
  },
  {
    "id": 400,
    "name": "Buccal Blood Breathing",
    "type": "Secret Fighting Art",
    "description": "During your act, you have +1 movement for each of your bleeding tokens.",
    "expansion": "Frogdog",
    "searchableText": "buccal blood breathing secret fighting art during your act, you have +1 movement for each of your bleeding tokens. frogdog"
  },
  {
    "id": 401,
    "name": "Devil's Melody",
    "type": "Secret Fighting Art",
    "description": "*Ballad of the Devil's Melody [4]:* Gain +10 survival, +1 movement and speed token. At the start of each round the monster suffers an automatic wound and each survivor suffers a random severe injury.",
    "expansion": "Smog",
    "searchableText": "devil's melody secret fighting art ballad of the devil's melody [4]: gain +10 survival, +1 movement and speed token. at the start of each round the monster suffers an automatic wound and each survivor suffers a random severe injury. smog"
  },
  {
    "id": 402,
    "name": "Eternal Will",
    "type": "Secret Fighting Art",
    "description": "Gain +1 accuracy and str for each permanent injury you have.\nYou may always *depart*, even when retired.",
    "expansion": "Manhunter",
    "searchableText": "eternal will secret fighting art gain +1 accuracy and str for each permanent injury you have.\nyou may always *depart*, even when retired. manhunter"
  },
  {
    "id": 403,
    "name": "Frozen Star",
    "type": "Secret Fighting Art",
    "description": "Once per round, you may spend 1 survival to freeze a monster's brain. They gain -2 accuracy until the end of the round.\nOnce per round, you may spend 1 survival to freeze a survivor's brain, killing them instantly. They die.",
    "expansion": "DK",
    "searchableText": "frozen star secret fighting art once per round, you may spend 1 survival to freeze a monster's brain. they gain -2 accuracy until the end of the round.\nonce per round, you may spend 1 survival to freeze a survivor's brain, killing them instantly. they die. dk"
  },
  {
    "id": 404,
    "name": "God of Cheaters",
    "type": "Secret Fighting Art",
    "description": "Gain +4 luck\nAnd luck attribute to your strength and evasion attributes.",
    "expansion": "Gambler",
    "searchableText": "god of cheaters secret fighting art gain +4 luck\nand luck attribute to your strength and evasion attributes gambler"
  },
  {
    "id": 405,
    "name": "Grace of Dormenatus",
    "type": "Secret Fighting Art",
    "description": "You may *concentrate*. If you do, perform *Grace of Dormenatus* at the start of your next act.",
    "expansion": null,
    "searchableText": "grace of dormenatus secret fighting art you may *concentrate*. if you do, perform grace of dormenatus at the start of your next act."
  },
  {
    "id": 406,
    "name": "Hardheaded",
    "type": "Secret Fighting Art",
    "description": "Reduce all damage to your head location to 1.",
    "expansion": "BK",
    "searchableText": "hardheaded secret fighting art reduce all damage to your head location to 1. bk"
  },
  {
    "id": 407,
    "name": "Heart of Olthawartta",
    "type": "Secret Fighting Art",
    "description": "You may *concentrate*. If you do perform *Heart of Olthawartta* at the start of your next act.",
    "expansion": null,
    "searchableText": "heart of olthawartta secret fighting art you may *concentrate*. if you do perform heart of olthawartta at the start of your next act."
  },
  {
    "id": 408,
    "name": "Joyous",
    "type": "Secret Fighting Art",
    "description": "When you would suffer brain damage, gain that much insanity instead.\nWhen you have 100 insanity, you die.",
    "expansion": null,
    "searchableText": "joyous secret fighting art when you would suffer brain damage, gain that much insanity instead.\nwhen you have 100 insanity, you die."
  },
  {
    "id": 409,
    "name": "King of a Thousand Battles",
    "type": "Secret Fighting Art",
    "description": "Gain +2 accuarcy, strength & evasion.\nYou may *dodge* any number of times in a round.\nOnly 1 survivor may have this secret fighting art.",
    "expansion": null,
    "searchableText": "king of a thousand battles secret fighting art gain +2 acc, str & evasion.\nyou may *dodge* any number of times in a round.\nonly 1 survivor may have this secret fighting art."
  },
  {
    "id": 410,
    "name": "King's Step",
    "type": "Secret Fighting Art",
    "description": "When you attack, you may discard any number of Battle Pressure {N} and draw new {N}.\nWhen you attack, after drawing {N}, but before rolling to wound, you may choose one {N} and discard it to draw a new {N}.\n*Traps* will cancel these effects.",
    "expansion": null,
    "searchableText": "king's step secret fighting art when you attack, you may discard any number of battle pressure hl and draw new hl.\nwhen you attack, after drawing hl, but before rolling to wound, you may choose one hl and discard it to draw a new hl.\ntraps will cancel these effects."
  },
  {
    "id": 411,
    "name": "Legendary Lungs",
    "type": "Secret Fighting Art",
    "description": "Once per attack, for each successful hit, make an additional attack roll.",
    "expansion": null,
    "searchableText": "legendary lungs secret fighting art once per attack, for each successful hit, make an additional attack roll."
  },
  {
    "id": 412,
    "name": "Lucernae's Lantern",
    "type": "Secret Fighting Art",
    "description": "You may *concentrate*. If you do , perform *Lucernae's Lantern* at the start of the next act.",
    "expansion": null,
    "searchableText": "lucernae's lantern secret fighting art you may *concentrate*. if you do , perform lucernae's lantern at the start of the next act."
  },
  {
    "id": 413,
    "name": "Mind Palace",
    "type": "Secret Fighting Art",
    "description": "When you *depart* or gain this, choose a {V} from the deck. For the rest of the lantern year, treat the effects of the chosen card as an ability.",
    "expansion": "King",
    "searchableText": "mind palace secret fighting art when you *depart* or gain this, choose a fa from the deck. for the rest of the lantern year, treat the effects of the chosen card as king"
  },
  {
    "id": 414,
    "name": "Red Fist",
    "type": "Secret Fighting Art",
    "description": "At the start of each showdown, each survivor gains +1 str token.\nSurvivors may spend +1 strength tokens in place of survival.",
    "expansion": null,
    "searchableText": "red fist secret fighting art at the start of each showdown, each survivor gains +1 str token.\nsurvivors may spend +1 strength tokens in place of survival."
  },
  {
    "id": 415,
    "name": "Sacred Code",
    "type": "Secret Fighting Art",
    "description": "Once per showdown, during your act, you may recite the code. Everyone and everything else trambles and collapses into a heap. \nAll other survivors and monsters are knocked down.",
    "expansion": "BK",
    "searchableText": "sacred code secret fighting art once per showdown, during your act, you may recite the code. all other survivors and monsters are knocked down. bk"
  },
  {
    "id": 416,
    "name": "Sad Frogdog Song",
    "type": "Secret Fighting Art",
    "description": "The first time you attack each round, add the values of your failed attack rolls to the strength of this attack.",
    "expansion": "Frogdog",
    "searchableText": "sad frogdog song secret fighting art the first time you attack each round, add the values of your failed attack rolls to the strength of this attack. frogdog"
  },
  {
    "id": 417,
    "name": "Scholar of Death",
    "type": "Secret Fighting Art",
    "description": "On *Arrival*, gain reroll tokens equal to the number of volumes recorded about your quarry",
    "expansion": null,
    "searchableText": "scholar of death secret fighting art on *Arrival*, gain reroll tokens equal to the number of volumes recorded about your quarry"
  },
  {
    "id": 418,
    "name": "Swordsman's Promise",
    "type": "Secret Fighting Art",
    "description": "At the start of each showdown, gain survival up to the settlement's survival limit if you have a sword in your gear grid.",
    "expansion": null,
    "searchableText": "swordsman's promise secret fighting art at the start of each showdown, gain survival up to the settlement's survival limit if you have a sword in your gear grid."
  },
  {
    "id": 419,
    "name": "Synchronized Strike",
    "type": "Secret Fighting Art",
    "description": "When you adjacent to a monster, attack with a melee weapon, and have an *Attack Assist*, your attack gains +1 accuracy & str. Limit once per round",
    "expansion": null,
    "searchableText": "synchronized strike secret fighting art when you adjacent to a monster, attack with a melee weapon, and have an attack assist, your attack gains +1 accuracy & str. limit once per round"
  },
  {
    "id": 420,
    "name": "Zero Presence",
    "type": "Secret Fighting Art",
    "description": "Gain +1 str when attacking a monster from its blind spot.\nWhenever you attack a monster, you are always considered to be in its blind spot.",
    "expansion": null,
    "searchableText": "zero presence secret fighting art gain +1 str when attacking a monster from its blind spot.\nwhenever you attack a monster, you are always considered to be in its blind spot."
  },
	// --- end Secret Fighting Arts
  // --- Ability Items ---
  {
    "id": 421,
    "name": "Feinting Shot",
    "type": "Ability",
    "description": "Spend {m}{q} to move your survivor 3 spaces away from the monster. Activate and attack with a bow or arrow in your gear grid. This attack gains +3 accuracy and +3 range.",
    "expansion": null,
    "searchableText": "feinting shot ability spend {m}{q} to move your survivor 3 spaces away from the monster. activate and attack with a bow or arrow in your gear grid. this attack gains +3 accuracy and +3 range. "
  },
  {
    "id": 422,
    "name": "Hit Song",
    "type": "Ability",
    "description": "Spend {m}{q} to full move forward and attack. If you moved at least 4 spaces, the first time you wound during this attack, *encourage* all survivors.",
    "expansion": null,
    "searchableText": "hit song ability spend {m}{q} to full move forward and attack. if you moved at least 4 spaces, the first time you wound during this attack, *encourage* all survivors. "
  },
  {
    "id": 423,
    "name": "Immortal Spin",
    "type": "Ability",
    "description": "Spend {m}{q} to move 3 spaces forward. If you do, activate a melee weapon with +1 strength for each of your bleeding tokens.",
    "expansion": null,
    "searchableText": "immortal spin ability spend {m}{q} to move 3 spaces forward. if you do, activate a melee weapon with +1 strength for each of your bleeding tokens. "
  },
  {
    "id": 425,
    "name": "Guardless",
    "type": "Ability",
    "description": "A survivor with guardless may not *dodge*, block, deflect, or ignore hits. Attack rolls can still miss guardless survivors, as they still factor their evasion in.",
    "expansion": null,
    "searchableText": "guardless ability a survivor with guardless may not *dodge*, block, deflect, or ignore hits. attack rolls can still miss guardless survivors, as they still factor their evasion in. "
  },
  {
    "id": 426,
    "name": "Rush",
    "type": "Ability",
    "description": "When a survivor hits 3+ times in a single attack, they Rush for that attack.",
    "expansion": null,
    "searchableText": "rush ability when a survivor hits 3+ times in a single attack, they rush for that attack. "
  },
  {
    "id": 427,
    "name": "Subconscious",
    "type": "Ability",
    "description": "You can use this while *frenzied*.",
    "expansion": null,
    "searchableText": "subconscious ability you can use this while *frenzied*. "
  },
  {
    "id": 428,
    "name": "Astute",
    "type": "Ability",
    "description": "On *Arrival*, if possible, add an Acanthus Plant terrain card to the showdown.",
    "expansion": null,
    "searchableText": "astute ability on *Arrival*, if possible, add an acanthus plant terrain card to the showdown. "
  },
  {
    "id": 429,
    "name": "Caratosis",
    "type": "Ability",
    "description": "Before making an attack roll, you may declare \"Caratosis X\" in a loud, booming voice. If you do, that attack gains X automatic hits. X cannot be more than your total red affinities. When the attack ends, gain +X Hunt XP.",
    "expansion": null,
    "searchableText": "caratosis ability before making an attack roll, you may declare \"caratosis x\" in a loud, booming voice. if you do, that attack gains x automatic hits. x cannot be more than your total red affinities. when the attack ends, gain +x hunt xp. "
  },
  {
    "id": 430,
    "name": "Dormenatus",
    "type": "Ability",
    "description": "When you suffer damage, you may declare \"Dormenatus X\" in a loud, booming voice. If you do, add X armor points to each hit location. X cannot be more than your total green affinities. After the damage is resolved, gain +X Hunt XP.",
    "expansion": null,
    "searchableText": "dormenatus ability when you suffer damage, you may declare \"dormenatus x\" in a loud, booming voice. if you do, add x armor points to each hit location. x cannot be more than your total green affinities. after the damage is resolved, gain +x hunt xp. "
  },
  {
    "id": 431,
    "name": "Forgettable",
    "type": "Ability",
    "description": "Gain +2 evasion. Forgettable survivors cannot be *encouraged*.",
    "expansion": null,
    "searchableText": "forgettable ability gain +2 evasion. forgettable survivors cannot be *encouraged*. "
  },
  {
    "id": 432,
    "name": "Homing Instinct",
    "type": "Ability",
    "description": "Add +5 to your rolls on the {s} *Run Away* story event.",
    "expansion": null,
    "searchableText": "homing instinct ability add +5 to your rolls on the {a} *Run Away* story event. "
  },
  {
    "id": 433,
    "name": "Internal Tempo",
    "type": "Ability",
    "description": "You ignore the monster's accuracy tokens and always treat your evasion as 0. Your gear loses the *noisy* keyword while it is in your gear grid.",
    "expansion": null,
    "searchableText": "internal tempo ability you ignore the monster's accuracy tokens and always treat your evasion as 0. your gear loses the *noisy* keyword while it is in your gear grid. "
  },
  {
    "id": 434,
    "name": "Iridescent Hide",
    "type": "Ability",
    "description": "When you *depart*, add {!} to each hit location for each different-colored affinity in your gear grid.",
    "expansion": null,
    "searchableText": "iridescent hide ability when you *depart*, add {!} to each hit location for each different-colored affinity in your gear grid. "
  },
  {
    "id": 435,
    "name": "Lucernae",
    "type": "Ability",
    "description": "Before making a wound attempt, you may declare \"Lucernae X\" in a loud, booming voice. If you do, that wound attempt gains +X luck. X cannot be more than your total blue affinities. When the attack ends, gain +X Hunt XP.",
    "expansion": null,
    "searchableText": "lucernae ability before making a wound attempt, you may declare \"lucernae x\" in a loud, booming voice. if you do, that wound attempt gains +x luck. x cannot be more than your total blue affinities. when the attack ends, gain +x hunt xp. "
  },
  {
    "id": 436,
    "name": "Myopic Fighter",
    "type": "Ability",
    "description": "Gain +2 acc. You may only attack with daggers and katars.",
    "expansion": null,
    "searchableText": "myopic fighter ability gain +2 acc. you may only attack with daggers and katars. "
  },
  {
    "id": 437,
    "name": "Nightmare Blood",
    "type": "Ability",
    "description": "Whenever you gain a bleeding token, add {!} to all hit locations.",
    "expansion": null,
    "searchableText": "nightmare blood ability whenever you gain a bleeding token, add {!}to all hit locations. "
  },
  {
    "id": 438,
    "name": "Nightmare Membrane",
    "type": "Ability",
    "description": "You may spend {q}{m} to exchange any 1 of your tokens for a +1 strength token.",
    "expansion": null,
    "searchableText": "nightmare membrane ability you may spend {a}{m} to exchange any 1 of your tokens for a +1 strength token. "
  },
  {
    "id": 439,
    "name": "Nightmare Spurs",
    "type": "Ability",
    "description": "Once per showdown, you may spend all your survival (at least 1) to lose all your +1 strength tokens and gain that many +1 luck tokens.",
    "expansion": null,
    "searchableText": "nightmare spurs ability once per showdown, you may spend all your survival (at least 1) to lose all your +1 strength tokens and gain that many +1 luck tokens. "
  },
  {
    "id": 440,
    "name": "Oracle's Eye",
    "type": "Ability",
    "description": "At the start of the showdown, look through the AI deck, then shuffle it.",
    "expansion": null,
    "searchableText": "oracle's eye ability at the start of the showdown, look through the ai deck, then shuffle it. "
  },
  {
    "id": 441,
    "name": "Pristine",
    "type": "Ability",
    "description": "When you suffer a dismembered severe injury, ignore it and gain a bleeding token instead.",
    "expansion": null,
    "searchableText": "pristine ability when you suffer a dismembered severe injury, ignore it and gain a bleeding token instead. "
  },
  {
    "id": 442,
    "name": "Reflection",
    "type": "Ability",
    "description": "Your complete affinities and incomplete affinity halves count as all colors. You may *dodge* at any time and as many times as you like each round. When you attack from a blind spot, add +1d10 to all wound attempts for that attack.",
    "expansion": null,
    "searchableText": "reflection ability your complete affinities and incomplete affinity halves count as all colors. you may *dodge* at any time and as many times as you like each round. when you attack from a blind spot, add +1d10 to all wound attempts for that attack. "
  },
  {
    "id": 443,
    "name": "Refraction",
    "type": "Ability",
    "description": "Your complete affinities and incomplete affinity halves count as all colors. During the Showdown, after you perform a survival action, gain +1 survival.",
    "expansion": null,
    "searchableText": "refraction ability your complete affinities and incomplete affinity halves count as all colors. during the showdown, after you perform a survival action, gain +1 survival. "
  },
  {
    "id": 444,
    "name": "Rival's Scar",
    "type": "Ability",
    "description": "This survivor gains +1 permanent strength and suffers -1 permanent evasion.",
    "expansion": null,
    "searchableText": "rival's scar ability this survivor gains +1 permanent strength and suffers -1 permanent evasion. "
  },
  {
    "id": 445,
    "name": "Super Hair",
    "type": "Ability",
    "description": "You may spend {q} to freely exchange any tokens with adjacent survivors who have Super Hair.",
    "expansion": null,
    "searchableText": "super hair ability you may spend {a} to freely exchange any tokens with adjacent survivors who have super hair. "
  },
  {
    "id": 446,
    "name": "True Peace",
    "type": "Ability",
    "description": "Set your systemic pressure and torment to 0.",
    "expansion": null,
    "searchableText": "true peace ability set your systemic pressure and torment to 0. "
  },
  {
    "id": 447,
    "name": "Veteran",
    "type": "Ability",
    "description": "During the Aftermath, gain +1 Hunt XP.",
    "expansion": null,
    "searchableText": "veteran ability during the aftermath, gain +1 hunt xp. "
  },
  {
    "id": 448,
    "name": "Winged Escape",
    "type": "Ability",
    "description": "Once per showdown, you may archive a Cyclops Fly vermin resource to discard the Trap and reshuffle the hit location deck.",
    "expansion": null,
    "searchableText": "winged escape ability once per showdown, you may archive a cyclops fly vermin resource to discard the trap and reshuffle the hit location deck. "
  },
  {
    "id": 449,
    "name": "Unburdened",
    "type": "Ability",
    "description": "You may only wear Cloth (no other armor or accessories). Gain +2 strength from your resolve.",
    "expansion": null,
    "searchableText": "unburdened ability you may only wear cloth (no other armor or accessories). gain +2 strength from your resolve. "
  },
  {
    "id": 450,
    "name": "Acid Palms",
    "type": "Ability",
    "description": "Add 1d10 strength to wound attempts when attacking with Fist & Tooth.",
    "expansion": null,
    "searchableText": "acid palms ability add 1d10 strength to wound attempts when attacking with fist & tooth. "
  },
  {
    "id": 451,
    "name": "Advanced Play",
    "type": "Ability",
    "description": "You may set aside 2 dice with the High Roller knowledge. These dice must be from separate attacks.",
    "expansion": null,
    "searchableText": "advanced play ability you may set aside 2 dice with the high roller knowledge. these dice must be from separate attacks. "
  },
  {
    "id": 452,
    "name": "Ageless",
    "type": "Ability",
    "description": "You may hunt if you are retired. When you gain Hunt XP, you may instead choose not to gain it.",
    "expansion": null,
    "searchableText": "ageless ability you may hunt if you are retired. when you gain hunt xp, you may instead choose not to gain it. "
  },
  {
    "id": 453,
    "name": "Analyze",
    "type": "Ability",
    "description": "At the start of the survivors' turn, if you are adjacent to the monster, reveal the top AI card, then place it back on top of the deck.",
    "expansion": null,
    "searchableText": "analyze ability at the start of the survivors' turn, if you are adjacent to the monster, reveal the top ai card, then place it back on top of the deck. "
  },
  {
    "id": 454,
    "name": "Astute Psyche",
    "type": "Ability",
    "description": "When you make an observation about a knowledge, make two observations instead.",
    "expansion": null,
    "searchableText": "astute psyche ability when you make an observation about a knowledge, make two observations instead. "
  },
  {
    "id": 455,
    "name": "Bitter Frenzy",
    "type": "Ability",
    "description": "You may spend survival and use fighting arts, weapon specialization, and weapon mastery while *frenzied*.",
    "expansion": null,
    "searchableText": "bitter *frenzy* ability you may spend survival and use fighting arts, weapon specialization, and weapon mastery while *frenzied*. "
  },
  {
    "id": 456,
    "name": "Bounding Legs",
    "type": "Ability",
    "description": "When you spend {m}, you must place yourself in an unoccupied space 5 spaces away from your current space and gain a +1 speed token for the rest of the round.",
    "expansion": null,
    "searchableText": "bounding legs ability when you spend {m}, you must place yourself in an unoccupied space 5 spaces away from your current space and gain a +1 speed token for the rest of the round. "
  },
  {
    "id": 457,
    "name": "Bullfrog Neck",
    "type": "Ability",
    "description": "Add +1 to your head severe injury roll results. Double your courage for any rolls that would take it into account.",
    "expansion": null,
    "searchableText": "bullfrog neck ability add +1 to your head severe injury roll results. double your courage for any rolls that would take it into account. "
  },
  {
    "id": 458,
    "name": "Burnt Nerves",
    "type": "Ability",
    "description": "You are immune to bash.",
    "expansion": null,
    "searchableText": "burnt nerves ability you are immune to bash. "
  },
  {
    "id": 459,
    "name": "Cheer Captain",
    "type": "Ability",
    "description": "Spend {v}{v} to cause *departing survivors* to suffer the *frenzy* brain trauma twice and ignore bash for the rest of the lantern year. Limit once per lantern year.",
    "expansion": null,
    "searchableText": "cheer captain ability spend {v}{v} to cause *departing survivors* to suffer the *frenzy* brain trauma twice and ignore bash for the rest of the lantern year. limit once per lantern year. "
  },
  {
    "id": 460,
    "name": "Cutthroat",
    "type": "Ability",
    "description": "On a *perfect hit*, gain {q} after your attack ends, which must be spent immediately. Limit once per round.",
    "expansion": null,
    "searchableText": "cutthroat ability on a *perfect hit*, gain {q} after your attack ends, which must be spent immediately. limit once per round. "
  },
  {
    "id": 461,
    "name": "Dark Calling",
    "type": "Ability",
    "description": "Increase your range of *perfect hits* by 1. When you are a *returning survivor*, roll 1d10. If the result is less than or equal to your HuntXP, you leave the settlement forever.",
    "expansion": null,
    "searchableText": "dark calling ability increase your range of *perfect hits* by 1. when you are a *returning survivor*, roll 1d10. if the result is less than or equal to your huntxp, you leave the settlement forever. "
  },
  {
    "id": 462,
    "name": "Dead Again",
    "type": "Ability",
    "description": "When you die, do not gain the benefits of your Death principle. Instead, gain +1 population. This new survivor adopts the Deadism philosophy, gains Dead Again, and has your name.",
    "expansion": null,
    "searchableText": "dead again ability when you die, do not gain the benefits of your death principle. instead, gain +1 population. this new survivor adopts the deadism philosophy, gains dead again, and has your name. "
  },
  {
    "id": 463,
    "name": "Destructive Vow",
    "type": "Ability",
    "description": "At the end of your act, gain +3 insanity if you have attacked this round. Otherwise, suffer 3 brain damage.",
    "expansion": null,
    "searchableText": "destructive vow ability at the end of your act, gain +3 insanity if you have attacked this round. otherwise, suffer 3 brain damage. "
  },
  {
    "id": 464,
    "name": "Discourse Savant",
    "type": "Ability",
    "description": "When you roll on a table while ranking up your philosophy, you may choose your roll result instead of rolling.",
    "expansion": null,
    "searchableText": "discourse savant ability when you roll on a table while ranking up your philosophy, you may choose your roll result instead of rolling. "
  },
  {
    "id": 465,
    "name": "Dream Keeper's Legacy",
    "type": "Ability",
    "description": "During the showdown, if you have at least 1 permanent luck, you may set your luck to 0 and physically flip any token.",
    "expansion": null,
    "searchableText": "dream keeper's legacy ability during the showdown, if you have at least 1 permanent luck, you may set your luck to 0 and physically flip any token. "
  },
  {
    "id": 466,
    "name": "Engorged Cure",
    "type": "Ability",
    "description": "Once per showdown, you may archive a Nightmare Tick vermin resource to remove all your bleeding tokens and fully *heal* yourself.",
    "expansion": null,
    "searchableText": "engorged cure ability once per showdown, you may archive a nightmare tick vermin resource to remove all your bleeding tokens and fully *heal* yourself. "
  },
  {
    "id": 467,
    "name": "Extra Long Arms",
    "type": "Ability",
    "description": "Your Fist & Tooth has reach 2.",
    "expansion": null,
    "searchableText": "extra long arms ability your fist & tooth has reach 2. "
  },
  {
    "id": 468,
    "name": "Fated Battle",
    "type": "Ability",
    "description": "At the start of a showdown with the picked monster, gain +1 speed token.",
    "expansion": null,
    "searchableText": "fated battle ability at the start of a showdown with the picked monster, gain +1 speed token. "
  },
  {
    "id": 469,
    "name": "Flipper Feet",
    "type": "Ability",
    "description": "Gain +1 movement and +1 evasion. You cannot wear leg armor.",
    "expansion": null,
    "searchableText": "flipper feet ability gain +1 movement and +1 evasion. you cannot wear leg armor. "
  },
  {
    "id": 470,
    "name": "Fortune Sight",
    "type": "Ability",
    "description": "On *Arrival*, gain +1 accuracy tokens equal to your permanent luck.",
    "expansion": null,
    "searchableText": "fortune sight ability on *Arrival*, gain +1 accuracy tokens equal to your permanent luck. "
  },
  {
    "id": 471,
    "name": "Founder's Eye",
    "type": "Ability",
    "description": "A permanent design with intricate line work too fine for the naked eye to see. Gain +1 to all rolls on the Arc *Intimacy* story event.",
    "expansion": null,
    "searchableText": "founder's eye ability a permanent design with intricate line work too fine for the naked eye to see. gain +1 to all rolls on the arc *Intimacy* story event. "
  },
  {
    "id": 472,
    "name": "Game Master",
    "type": "Ability",
    "description": "When you are the monster controller and the monster draws {O}, instead draw 2 cards and select 1 to perform, placing the other back on top of the {O} deck.",
    "expansion": null,
    "searchableText": "game master ability when you are the monster controller and the monster draws {o}, instead draw 2 cards and select 1 to perform, placing the other back on top of the {o} deck. "
  },
  {
    "id": 473,
    "name": "Gravel Guts",
    "type": "Ability",
    "description": "Add +1 to your body severe injury roll results. Ignore monster *knockback* actions.",
    "expansion": null,
    "searchableText": "gravel guts ability add +1 to your body severe injury roll results. ignore monster *knockback* actions. "
  },
  {
    "id": 474,
    "name": "Grounded",
    "type": "Ability",
    "description": "Once per lantern year, at any time, you may set your insanity to 0, 1, or 2.",
    "expansion": null,
    "searchableText": "grounded ability once per lantern year, at any time, you may set your insanity to 0, 1, or 2. "
  },
  {
    "id": 475,
    "name": "Hemostasis",
    "type": "Ability",
    "description": "It takes an additional bleeding token to kill you. This ability can be gained multiple times.",
    "expansion": null,
    "searchableText": "hemostasis ability it takes an additional bleeding token to kill you. this ability can be gained multiple times. "
  },
  {
    "id": 476,
    "name": "Inevitable",
    "type": "Ability",
    "description": "When you gain this, choose a weapon. It gains Sharp. Record this on your survivor record sheet. Erase it when the gear is archived.",
    "expansion": null,
    "searchableText": "inevitable ability when you gain this, choose a weapon. it gains sharp. record this on your survivor record sheet. erase it when the gear is archived. "
  },
  {
    "id": 477,
    "name": "Iron Will",
    "type": "Ability",
    "description": "You cannot be knocked down. Reduce all *knockback* you suffer to *knockback* 1.",
    "expansion": null,
    "searchableText": "iron will ability you cannot be knocked down. reduce all *knockback* you suffer to *knockback* 1. "
  },
  {
    "id": 478,
    "name": "Juice Hunter",
    "type": "Ability",
    "description": "Once per hunt phase, when you are the event revealer, you may take a detour to search for a nest of lantern bugs. Roll a random hunt event. Afterwards, you return with bug juice and all survivors gain +1d5 survival.",
    "expansion": null,
    "searchableText": "juice hunter ability once per hunt phase, when you are the event revealer, you may take a detour to search for a nest of lantern bugs. roll a random hunt event. afterwards, you return with bug juice and all survivors gain +1d5 survival. "
  },
  {
    "id": 479,
    "name": "Largesse",
    "type": "Ability",
    "description": "During your act, if you are Honorable, you may give an adjacent survivor one of your survival. Limit once per round.",
    "expansion": null,
    "searchableText": "largesse ability during your act, if you are honorable, you may give an adjacent survivor one of your survival. limit once per round. "
  },
  {
    "id": 480,
    "name": "Legendcaller",
    "type": "Ability",
    "description": "Once a lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use \"53\" as your result.",
    "expansion": null,
    "searchableText": "legendcaller ability once a lifetime, on a hunt board space after overwhelming darkness, in place of rolling a random hunt event, use \"53\" as your result. "
  },
  {
    "id": 481,
    "name": "Levinblood",
    "type": "Ability",
    "description": "At the end of your attack with a weapon with the metal keyword, if you hit the monster, it is shocked and suffers an automatic wound.",
    "expansion": null,
    "searchableText": "levinblood ability at the end of your attack with a weapon with the metal keyword, if you hit the monster, it is shocked and suffers an automatic wound. "
  },
  {
    "id": 482,
    "name": "Leyline Walker",
    "type": "Ability",
    "description": "While there is no armor or accessory gear in your gear grid, gain +3 evasion.",
    "expansion": null,
    "searchableText": "leyline walker ability while there is no armor or accessory gear in your gear grid, gain +3 evasion. "
  },
  {
    "id": 483,
    "name": "Life Exchange",
    "type": "Ability",
    "description": "In the Aftermath, gain 1 additional Hunt XP. You may not wear other gear. If you trigger the White Secret story event, you cease to exist. When you retire, you cease to exist.",
    "expansion": null,
    "searchableText": "life exchange ability in the aftermath, gain 1 additional hunt xp. you may not wear other gear. if you trigger the white secret story event, you cease to exist. when you retire, you cease to exist. "
  },
 {
    "id": 484,
    "name": "Anemic",
    "type": "Impairment",
    "description": "It takes one fewer bleeding token to kill you. This impairment can be gained multiple times. If you gain Anemic enough times that it takes 0 bleeding tokens to kill you, you instantly die.",
    "expansion": null,
    "searchableText": "anemic it takes one fewer bleeding token to kill you. this impairment can be gained multiple times. if you gain anemic enough times that it takes 0 bleeding tokens to kill you, you instantly die."
  },
  {
    "id": 485,
    "name": "Broken Vow",
    "type": "Impairment",
    "description": "If any survivors with 0 Hunt XP in your hunting party die during the hunt or showdown, you retire.",
    "expansion": null,
    "searchableText": "broken vow if any survivors with 0 hunt xp in your hunting party die during the hunt or showdown, you retire."
  },
  {
    "id": 486,
    "name": "Closed Meridians",
    "type": "Impairment",
    "description": "Gain +6 permanent luck. At the start of your act, suffer -1 permanent luck. When you have 0 or less permanent luck, suffer the head explosion severe injury.",
    "expansion": null,
    "searchableText": "closed meridians gain +6 permanent luck. at the start of your act, suffer -1 permanent luck. when you have 0 or less permanent luck, suffer the head explosion severe injury."
  },
  {
    "id": 487,
    "name": "Cowardly",
    "type": "Impairment",
    "description": "When you would die or cease to exist, you instead retreat to safety and rejoin the survivors during the Aftermath.",
    "expansion": null,
    "searchableText": "cowardly when you would die or cease to exist, you instead retreat to safety and rejoin the survivors during the aftermath."
  },
  {
    "id": 488,
    "name": "Crystal Skin ",
    "type": "Ability",
    "description": "You ignore cursed and cannot wear armor. When you depart gain 3 to all hit locations. Suffer -2 to the result of all severe injury rolls. When you participate in Intimacy, newborns gain Crystal Skin in addition to any other roll results. ",
    "expansion": null,
    "searchableText": "crystal skin you ignore cursed and cannot wear armor. when you depart gain 3 to all hit locations. suffer -2 to the result of all severe injury rolls. when you participate in intimacy, newborns gain crystal skin in addition to any other roll results. "
  },
  {
    "id": 489,
    "name": "Hemerochory",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "You may *depart* with one resource card. If that resource is *Perishable*, it is not destoryed. \nAt the start of any hunt turn, before hunt events are revealed, you may sow a resource. Archive it to gain +{l} survival",
    "observationText": "",
    "toRankCount": null,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 490,
    "name": "Florafantasia",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "When a monster is on or adjacent to terrain, you may *dodge* hits from it as many times as you would like each round without spending survival.",
    "observationText": "When you use this to *dodge*",
    "toRankCount": 6,
    "rankUpText": "Lose this knowlage and suffer *frenzy*",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 491,
    "name": "Botanical Tracker",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "After Hunt Phase setup, place the *Virid Grove* event on any hunt space.",
    "observationText": "",
    "toRankCount": null,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 492,
    "name": "Phytologist I",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "You may add +2 to your roll result for a plant-related hunt event, *Herb Gathering,* or *Virid Grove.* Limit once per lantern year",
    "observationText": "When you use this",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 493,
    "name": "Phytologist II",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "Add +3 to your roll result for a plant-related hunt event, *Herb Gathering,* or *Virid Grove.*",
    "observationText": "When using this causes your roll result to become 10+",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 494,
    "name": "Phytologist III",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "Add your understanding to your roll result for a plant-related hunt event, plant-related terrain, *Herb Gathering,* or *Virid Grove.*",
    "observationText": "",
    "toRankCount": null,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 495,
    "name": "Invasive I",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "During showdown setup, if the Terrain & Deployment section instructs you to set up any random terrain cards, replace one with a Gatherism {Q} of your choice from the terrain deck.",
    "observationText": "When you use this",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 496,
    "name": "Invasive II",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "During showdown setup, add a Gatherism {Q} of your choice from the terrain deck and place it according to its setup rules.",
    "observationText": "When you activate a Gatherism terrain",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 497,
    "name": "Invasive III",
    "type": "Knowledge",
    "philosophyLinked": "Gatherism",
    "mainDesc": "During showdown setup, add a plant-related {Q} of your choice from the terrain deck and place it according to its setup rules. \nAt the start of your act, gain {q} that can only be spent to activate terrain.",
    "observationText": "",
    "toRankCount": null,
    "rankUpText": "",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 498,
    "name": "Gatherism",
    "type": "Philosophy",
    "milestoneNumbers": [2, 5, 8, 12, 16],
    "nerosis": "Inquisitive",
	  "tenetKnowledge": "Invasive",
    "description": "Obsessive curiosity. When the survivors are prompted to *investigate* during the hunt, you must do so (multiple Gatherists roll off if necessary). \nWhile you are on or adjacent to terrain during the showdown, you cannot spend survival.",
    "expansion": "Gatherism",
    "searchableText": ""
  },
  {
    "id": 499,
    "name": "Rooted to All",
    "type": "Ability",
    "description": "If you are standing at teh start of yoru act, reveal the top 2 cards of the AI deck and put them back in any order.",
    "expansion": null,
    "searchableText": ""
  },
  {
    "id": 500,
    "name": "Effervescence",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 6, 13, 16],
    "nerosis": "Compound Grief",
	  "tenetKnowledge": "Reframe",
    "description": "On *Arrival*, Candy gains a random disorder, if all her disorder slots are already filled, she instead gains +1 systemic pressure and suffers -1 ♥",
    "expansion": "Candy & Cola",
    "searchableText": ""
  },
  {
    "id": 501,
    "name": "Reframe",
    "type": "Fighting Art",
    "description": "*Non-Arc Survivor Campagin Only \nDuring your act, you may spend 2 survival to remove one of your disorders. Limit once per round.",
    "expansion": "Candy & Cola",
    "searchableText": ""
  },
  {
    "id": 502,
    "name": "Reframe I",
    "type": "Knowledge",
    "philosophyLinked": "Effervescence",
    "mainDesc": "*Theory*",
    "observationText": "When you gain a disorder",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": "Candy & Cola",
    "searchableText": ""
  },
  {
    "id": 503,
    "name": "Reframe II",
    "type": "Knowledge",
    "philosophyLinked": "Effervescence",
    "mainDesc": "During your act, you may spend 2 survival to remove one of your disorders. Limit once per round.",
    "observationText": "When you remove a disorder",
    "toRankCount": 8,
    "rankUpText": "",
    "expansion": "Candy & Cola",
    "searchableText": ""
  },
  {
    "id": 504,
    "name": "Reframe III",
    "type": "Knowledge",
    "philosophyLinked": "Effervescence",
    "mainDesc": "During your act, you may remove one of your disorders to gain +2 survival. Limit once per round.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Candy & Cola",
    "searchableText": ""
  },
  {
    "id": 505,
    "name": "Disintegration",
    "type": "Philosophy",
    "milestoneNumbers": [2, 5, 9, 16],
    "nerosis": "Rotter",
	  "tenetKnowledge": "Adrenaline",
    "description": "When you *depart,* set your armor points at each hit location to 0 after factoring all bonuses. When you are a returning survivor, you devour another. Suffer -1 population, the settlement does not gain benefits of their death principle.",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 506,
    "name": "Adrenaline",
    "type": "Fighting Art",
    "description": "*Non-Arc Survivor Campagin Only \nAt the start of your act, you may: Gain {m} that must be used to move. | Gain {q} that must be used to activate a weapon. Limit once per showdown, per option",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 507,
    "name": "Adrenaline I",
    "type": "Knowledge",
    "philosophyLinked": "Disintegration",
    "mainDesc": "At the start of the act you may: Gain {m} that must be used to move. Limit once per showdown.",
    "observationText": "When you wound the monster",
    "toRankCount": 6,
    "rankUpText": "",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 508,
    "name": "Adrenaline II",
    "type": "Knowledge",
    "philosophyLinked": "Disintegration",
    "mainDesc": "*+1 systemic pressure*\nAt the start of the act you may: Gain {m} that must be used to move. | Gain {q} that must be used to activate a weapon. Limit once per showdown, per option.",
    "observationText": "When you wound the monster",
    "toRankCount": 12,
    "rankUpText": "",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 509,
    "name": "Adrenaline III",
    "type": "Knowledge",
    "philosophyLinked": "Disintegration",
     "mainDesc": "*+2 systemic pressure*\nAt the start of the act you may: Gain {m} that must be used to move. | Gain {q} that must be used to activate a weapon. | Gain {m} or {q}. Limit once per showdown, per option.",
    "observationText": "When you wound the monster",
    "toRankCount": 24,
    "rankUpText": "",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 510,
    "name": "Adrenaline IV",
    "type": "Knowledge",
    "philosophyLinked": "Disintegration",
    "mainDesc": "*+3 systemic pressure*\nAt the start of the act you may: Gain {m} that must be used to move. | Gain {q} that must be used to activate a weapon. | Gain {m} or {q}. | Gain either a +1 strength token, or add {#} to all hit locations. Limit once per showdown, per option.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Goth",
    "searchableText": ""
  },
  {
    "id": 511,
    "name": "Consumption",
    "type": "Philosophy",
    "milestoneNumbers": [2, 6, 10, 14, 16], // Parsed from "Hunt Milestone"
    "nerosis": "Cravings",
	  "tenetKnowledge": "Dubious Fare",
    "description": "If Aeneas is *Hungry*, she consumes and archives 1 consumable resource or gear in the settlement (including settlement storage) at the start of the Develop Step of the settlement phase",
    "expansion": "Aeneas",
    "searchableText": ""
  },
   {
    "id": 512,
    "name": "Endless Appetite",
    "type": "Impairment",
    "description": "This impairment cannot be removed for any reason. You cannot {s} *Run Away* or {s} *Logistics of Death.* You play with the *Dual Modes - Hunger / Content* tile.",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 513,
    "name": "Moonwolf Style",
    "type": "Secret Fighting Art",
    "description": "When your wound attempt on a hit location succeeds, you may ignore it and attempt to wound the selected hit location again with +2 luck. Limit once per attack.",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 514,
    "name": "Rousing Wail",
    "type": "Secret Fighting Art",
    "description": "{q}: All hearing knocked down survivors stand and gain + {l} insanity. If you are adjacent to the monster, it gains a *flinch token.* Limit once per round.",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 515,
    "name": "Dubuious Fare",
    "type": "Fighting Art",
    "description": "*Non-Arc Survivor Campagin Only \nYou may *consume* a monster roesource from a Node 1, 2, or 3 quarry monster (archive it) to roll 1d10. If the resourece is indomitable, add +3 to the result. 1-7 Gain +2 survival and +2 insanity | 8-11 Gain +1 permanent strength. | 12+ Gain +1 permanent luck",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 516,
    "name": "Dubious Fare I",
    "type": "Knowledge",
    "philosophyLinked": "Consumption",
    "mainDesc": "You may *consume* a monster roesource from a Node 1 quarry monster (archive it) to roll 1d10. If the resourece is indomitable, add +3 to the result. 1-8 Gain +2 survival and +2 insanity | 9-11 Gain +1 permanent strength. | 12+ Gain this monster's secret fighting art",
    "observationText": "When you *consume* to use this",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 517,
    "name": "Dubious Fare II",
    "type": "Knowledge",
    "philosophyLinked": "Consumption",
    "mainDesc": "You may *consume* a monster roesource from a Node 1 or 2 quarry monster (archive it) to roll 1d10. If the resourece is indomitable, add +3 to the result. 1-7 Gain +1 courage and +2 survival. | 8-11 Gain +1 permanent strength. | 12+ Gain this monster's secret fighting art",
    "observationText": "When you *consume* an indomitable resource to use this",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 516,
    "name": "Dubious Fare III",
    "type": "Knowledge",
    "philosophyLinked": "Consumption",
    "mainDesc": "You may *consume* a monster roesource from a Node 1, 2, or 3 quarry monster (archive it) to roll 1d10. If the resourece is indomitable, add +3 to the result. 1-5 Gain +1 courage and +2 survival | 6-9 Gain +1 permanent strength. | 10+ Gain this monster's secret fighting art",
    "observationText": "When you *consume* to use this",
    "toRankCount": 5,
    "rankUpText": "",
    "expansion": "Aeneas",
    "searchableText": ""
  },
  {
    "id": 517,
    "name": "Hyper Light",
    "type": "Philosophy",
    "milestoneNumbers": [2, 4, 8, 14, 16], // Parsed from "Hunt Milestone"
    "nerosis": "Afflicted",
	  "tenetKnowledge": "Chain Dash",
    "description": "At the end of your act, if you did not *dash* this round, you are knocked down and gain a bleeding token.",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 518,
    "name": "Lone Drifter",
    "type": "Ability", //Ability of Impairment
    "description": "You may *dash* 1 addtional time per round. You cannot perform any survival action except for *dash*. At the start of your act, gain survival up to the settlement limit",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 519,
    "name": "Chain Dash",
    "type": "Fighting Art",
    "description": "*Non-Arc Survivor Campagin Only* \nAfter performing *dash*, roll 1d10. On a 5+, you may immediately perform another *dash,* ignoring round limits. On a 10+, you may perform this dash without spending survival.",
    "expansion": "",
    "searchableText": ""
  },
  {
    "id": 520,
    "name": "Chain Dash I",
    "type": "Knowledge",
    "philosophyLinked": "Hyper Light",
    "mainDesc": "*Theory*",
    "observationText": "When you *dash*",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 520,
    "name": "Chain Dash II",
    "type": "Knowledge",
    "philosophyLinked": "Hyper Light",
    "mainDesc": "After performing *dash*, roll 1d10. On a 5+, you may immediately perform another *dash,* ignoring round limits. On a 10+, you may perform this dash without spending survival.",
    "observationText": "When you are a returning survivor",
    "toRankCount": 0,
    "rankUpText": "☐☐☐ Epiphany *Phasing Strike* ☐☐☐ Epiphany *Guarding Rush* ☐☐☐ Epiphany *Dashing Thrust*",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 521,
    "name": "Phasing Strike",
    "type": "Knowledge",
    "philosophyLinked": "Hyper Light",
    "mainDesc": "When you *dash* to move, you may move through (but not end on) spaces the monster occupies. \nAfter moving though a monster, roll 1d10. On a 9+, the monster suffers a wound",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 522,
    "name": "Guarding Rush",
    "type": "Knowledge",
    "philosophyLinked": "Hyper Light",
    "mainDesc": "*+1 movement* \nWhen you *dash*, gain a deflect token until the end of the round. Limit three times per round.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 523,
    "name": "Dashing Thrust",
    "type": "Knowledge",
    "philosophyLinked": "Hyper Light",
    "mainDesc": "If you are standing adjacent to the monster after performing *dash,* you may spend 1 survival to make an automatic hit and attempt to wound with a melee weapon. If you wound the monster this way, it suffers *knockback 2* and an addtional wound. Limit once per round.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Death Drifter",
    "searchableText": ""
  },
  {
    "id": 524,
    "name": "Feedback Loop I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "The first time you gain a token each lantern year, gain a copy of that token.",
    "observationText": "When you gain a token with this",
    "toRankCount": 2,
    "rankUpText": "",
    "expansion": "Pariah",
    "searchableText": ""
  },  
  {
    "id": 525,
    "name": "Feedback Loop II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When you gain a token, you may gain a copy of that token. Limit once per lantern year.",
    "observationText": "When you gain a token with this",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 526,
    "name": "Feedback Loop III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When you or another survivor gain a token, you may gain a copy of that token. Limit once per lantern year.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 527,
    "name": "Sacred Code",
    "type": "Secret Fighting Art",
    "description": "Once per showdown, durning your act, you may recite the code. Everyone and everything else trembles and collapses into a heap. \nAll other survivors and monsters are knocked down.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 528,
    "name": "Quadradept",
    "type": "Secret Fighting Art",
    "description": "You use all your limbs as needed. You may use {q} as {m} and vice versa. \nYour preternatural reflexes sharpen. You cannot be knocked down.",
    "expansion": "Pariah",
    "searchableText": ""
  },
{
    "id": 529,
    "name": "Inversion",
    "type": "Fighting Art",
    "description": "When you gain an attribute token, you may flip it to its opposite side. Limit once per lantern year.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 530,
    "name": "Freeclimber",
    "type": "Fighting Art",
    "description": "Your *Fist & Tooth* gains *Refined* and the climbing keyword.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 531,
    "name": "Anhedonia",
    "type": "Disorder",
    "description": "You are always sane. \nYou cannot gain fighting arts, secret fighting arts, or abilities.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 532,
    "name": "Bile Body",
    "type": "Ability", //Ability of Impairment
    "description": "On Arrival, gain a +1 evasion token. When you suffer a severe injury, adjacent monsters and survivors are knocked down. Limit once per showdown.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 533,
    "name": "Bile Smell",
    "type": "Impairment", //Ability of Impairment
    "description": "You are always stinky. You do not generate endeavors. When a survivor ends their movement adjacent to you, they suffer 1 brain damage.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 534,
    "name": "Boost Heart",
    "type": "Ability", //Ability of Impairment
    "description": "At the start of your act, gain +1 strength token. When you are knocked down, lose all your +1 strength tokens. When you have five or more +1 strength tokens, your heart bursts. Dead",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 535,
    "name": "Ferrous Feed",
    "type": "Ability", //Ability of Impairment
    "description": "During your act, consume and archive 1 of your attribute tokens to suffer bleed 1.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 536,
    "name": "Fused",
    "type": "Ability", //Ability of Impairment
    "description": "When you suffer a severe body injury, the monster suffers an automatic hit that inflicts a critical wound.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 537,
    "name": "Heart Strings",
    "type": "Ability", //Ability of Impairment
    "description": "You cannot be the straggler. On Arrival, choose a board edge. You may move up to three additional spaces towards your chosen board edge after {m} action.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 538,
    "name": "Joyless",
    "type": "Impairment", //Ability of Impairment
    "description": "You cannot surge.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 539,
    "name": "One Two",
    "type": "Ability", //Ability of Impairment
    "description": "When you die, do not gain the benefits of your Death Principle. Two survivors emerge from your corpse.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 540,
    "name": "Sinister Confusion",
    "type": "Impairment", //Ability of Impairment
    "description": "When you activate a weapon, choose either -2 accuracy or -3 strength for your attack.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 541,
    "name": "Sizzling Blood",
    "type": "Impairment", //Ability of Impairment
    "description": "During the showdown, when you gain a bleeding token, also gain a -1 evasion token.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 542,
    "name": "Warmed up",
    "type": "Ability", //Ability of Impairment
    "description": "You never suffer the effects of cold. On Arrival, gain +1 movement and +1 speed token. When you are a returning survivor, +5 {v}. Only you may spend these endeavors.",
    "expansion": "Pariah",
    "searchableText": ""
  },
  {
    "id": 543,
    "name": "Hyperalgesia",
    "type": "Disorder",
    "description": "When you suffer damage, lose 1 survival. Limit once per a round.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 544,
    "name": "Cowardice",
    "type": "Disorder",
    "description": "Ignore your postive evasion attribute modifiers.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 545,
    "name": "Battle Drunk",
    "type": "Disorder",
    "description": "The first time you wound the monster each round, gain +1 strength and -1 accuracy token.s \nWhen you are knocked down, archive all your strength and accuracy tokens.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 546,
    "name": "Vault Key",
    "type": "Secret Fighting Art",
    "description": "This cannot be removed for any reason. \nGain 3 addtional secret fighting art slots. \nWhen you gain understanding, a wave of physical agony accopanies comprehension. Suffer that much damage to each hit location.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 547,
    "name": "Story of the Libary",
    "type": "Secret Fighting Art",
    "description": "East history. Durning the settlement phase, you may return a consequence innovation to the Innovation Deck to gain the benefits of {s} *Age 2*, ignoring once per a lifetime restrictions. If you returned {T} *Records,* gain the benefits of {s} *Age 4* instead.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 548,
    "name": "Story of the Forged",
    "type": "Secret Fighting Art",
    "description": "When you suffer a random severe injury, gaiin the following based on its hit location: \n{+}: +1 permeanent evasion | {-}: +1 permanent speed | {,}: +1 permanent strength | {.}: +1 permanent luck | {/}: +1 permanent movement",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 549,
    "name": "Story of the Forsaker",
    "type": "Secret Fighting Art",
    "description": "When another survivor dies during the showdown, you attacks gain *Sharp* for the rest of the showdown. \nWhile you are the only survivor on the showdown board, gain {q} at the start of your act.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 550,
    "name": "Joint Array I",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "*Theory*",
    "observationText": "When another survivor with *Joint Array* wounds the monster",
    "toRankCount": 4,
    "rankUpText": "",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 551,
    "name": "Joint Array II",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "When you attack, if another survivor with *Joint Array* has already inflicted a wound this round, cancel reactions on your first selected hit location.",
    "observationText": "When another survivor uses *Joint Array* to cancel a reaction",
    "toRankCount": 3,
    "rankUpText": "",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 552,
    "name": "Joint Array III",
    "type": "Knowledge",
    "philosophyLinked": "Monster",
    "mainDesc": "At the start of the survivors' turn choose one effect to apply until the end of the round: When you attack, if no other survivor has inflicted a wound this round, gain +4 strength until the end of the attack. | When you attack, if another survivor with *Joint Array* has already inflicted a wound this round, cancel reactions on your first selected hit location.",
    "observationText": "",
    "toRankCount": 0,
    "rankUpText": "",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 553,
    "name": "Astrocyte Excitation",
    "type": "Ability", //Ability of Impairment
    "description": "You add +4 to your roll results during {s} *Vaultless*.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 554,
    "name": "Hyper Defense",
    "type": "Ability", //Ability of Impairment
    "description": "Durning your act, you may gain a bleeding token to perform *Block 1* at no activation cost. Limit once per a round..",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 555,
    "name": "Improbable Survivor",
    "type": "Ability", //Ability of Impairment
    "description": "When you suffer a severe injury, gain +1 luck token.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 556,
    "name": "Perfect Kidneys",
    "type": "Ability", //Ability of Impairment
    "description": "at the end of your act, remove a negative attribute token. When you suffer the Bleeding Kidneys severe injury, lose this ability.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 557,
    "name": "Red String of Fate",
    "type": "Ability", //Ability of Impairment
    "description": "When you draw a trap, cancel it, discard it, then reshuffle the hit location discard into the hitlocation deck and draw a new card. Limit once per lifetime.",
    "expansion": "Red Witches",
    "searchableText": ""
  },
  {
    "id": 558,
    "name": "Reflexive Shooter",
    "type": "Ability", //Ability of Impairment
    "description": "Ignore Cumbersome on bows in your gear grid and reduce their range by 2.",
    "expansion": "Red Witches",
    "searchableText": ""
  }
  // --- End Ability Items ---
];

// Ensure all items have a unique ID and a fallback searchableText if not perfectly generated above
// This loop is a safeguard. Ideally, searchableText and unique IDs are correctly set during the object creation above.
let maxId = 0;
dataset.forEach(item => {
    if (item.id !== undefined) {
        if (item.id > maxId) maxId = item.id;
    }
});

let nextGeneratedId = maxId + 1;

dataset.forEach(item => {
    if (item.id === undefined) { 
        item.id = nextGeneratedId++;
    }
    if (typeof item.searchableText !== 'string' || !item.searchableText.trim()) {
        // Create a very basic searchableText if it's missing
        let textForSearch = `${item.name || ''} ${item.type || ''} ${item.description || ''} ${item.description || ''} ${item.mainDesc || ''} ${item.spec || ''} ${item.mastery || ''} ${item.nerosis || ''} ${item.observationText || ''} ${item.rankUpText || ''} ${item.philosophyLinked || ''} ${item.traitSubType || ''} ${item.expansion || ''}`;
        item.searchableText = textForSearch.replace(/\s+/g, ' ').trim().toLowerCase();
    } else {
        item.searchableText = item.searchableText.toLowerCase(); // Ensure it's lowercase
    }

    // Ensure specific fields exist, defaulting to empty strings or appropriate types if missing from generation
    // This is a safeguard against potential undefined properties if a CSV column was missing/misnamed
    // For Philosophy
    if (item.type === "Philosophy") {
        item.milestoneNumbers = item.milestoneNumbers || [];
        item.nerosis = item.nerosis || "";
        item.description = item.description || "";
    }
    // For Weapon
    if (item.type === "Weapon") {
        item.spec = item.spec || "";
        item.mastery = item.mastery || "";
    }
    // For Character Trait
    if (item.type === "Character Trait") {
        item.traitSubType = item.traitSubType || "";
        item.description = item.description || "";
    }
    // For Knowledge
    if (item.type === "Knowledge") {
        item.philosophyLinked = item.philosophyLinked || "";
        item.mainDesc = item.mainDesc || "";
        item.observationText = item.observationText || "";
        item.toRankCount = typeof item.toRankCount === 'number' ? item.toRankCount : 0;
        item.rankUpText = item.rankUpText || "";
    }
    // For types that just have a general "description" and "expansion"
    if (["Fighting Art", "Disorder", "Ability", "Secret Fighting Art"].includes(item.type)) {
        item.description = item.description || "";
    }
    item.expansion = item.expansion || null;

});

console.log(`KDM dataset loaded with ${dataset.length} items. All items pre-processed.`);