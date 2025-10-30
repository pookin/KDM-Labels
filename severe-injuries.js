// severe-injuries.js
console.log("severe-injuries.js: Loading severe injury data...");

window.severeInjuries = {
  "Severe Injury": [
    {
      "name": "Brain Trauma",
      "type": "Severe Injury",
      "table": [
        "1: **Dead**",
        "2: **Flee** Suffer the flee brain trauma: Immediately move your full movement away from the monster. You cannot spend survival until the end of the round.",
        "3: **Danger Foresight** Suffer the danger foresight brain trauma: You are knocked down. On your next turn, you must spend your activation to stand up. You gain +1 evasion token.",
        "4-5: **Stunned** Suffer the stunned brain trauma: Skip your next act.",
        "6-7: **Frenzy** Suffer the frenzy brain trauma: You are frenzied until the end of the round. While frenzied, you may not spend survival or use fighting arts. Your melee attacks gain +2 strength and you must attack if able. At the end of the round, suffer 1 brain damage.",
        "8: **Memory Loss** Suffer the memory loss brain trauma: You are knocked down. Lose 1 level of weapon proficiency.",
        "9: **New perspective** Suffer the new perspective brain trauma: Gain 1d10 insanity.",
        "10: **Maniacal Laughter** Suffer the maniacal laughter brain trauma: All non-deaf survivors gain +1 insanity. You are knocked down."
      ]
    },
    {
      "name": "Head",
      "type": "Severe Injury",
      "table": [
        "1: **Decapitated** You are dead.",
        "2: **Intracranial Hemorrhage** Gain a bleeding token. Suffer -1 permanent accuracy.",
        "3: **Deaf** Blood pours from your ears, you cannot hear. You cannot be **encouraged**. You cannot use fighting arts that require you to hear.",
        "4: **Blind** A gruesome injury blinds you. Suffer -4 permanent accuracy. You cannot use fighting arts that require sight.",
        "5-6: **Concussion** You are knocked down and suffer the **stunned** brain trauma.",
        "7-10: **Minor Head Injury** Suffer 1 brain damage."
      ]
    },
    {
      "name": "Arms",
      "type": "Severe Injury",
      "table": [
        "1: **Dismembered Arm** You can no longer activate two-handed weapons. If this is your second dismembered arm, you cannot activate any weapons other than **Fist & Tooth**.",
        "2: **Broken Arm** You cannot activate weapons with your broken arm. You cannot activate two-handed weapons.",
        "3: **Ruptured Muscle** Suffer -1 permanent strength.",
        "4: **Spiral Fracture** Suffer -1 permanent accuracy.",
        "5-6: **Dislocated Shoulder** Suffer a -1 accuracy token.",
        "7-10: **Minor Arm Injury** No effect."
      ]
    },
    {
      "name": "Body",
      "type": "Severe Injury",
      "table": [
        "1: **Eviscerated** You are dead.",
        "2: **Gaping Chest Wound** Gain 3 bleeding tokens.",
        "3: **Broken Ribs** Suffer -1 permanent speed. All your gear is **Noisy**.",
        "4: **Intestinal Prolapse** Suffer -1 permanent movement. You are **Stinky**.",
        "5-6: **Busted Knee** Suffer a -1 movement token.",
        "7-10: **Minor Body Injury** No effect."
      ]
    },
    {
      "name": "Waist",
      "type": "Severe Injury",
      "table": [
        "1: **Final Blow** You are dead. Your story ends in a gory spray.",
        "2: **Destroyed Genitals** You can no longer be nominated for **Intimacy**. If you are male, your testicles are destroyed. If you are female, your uterus is ripped out. You cannot give birth.",
        "3: **Broken Hip** Suffer -1 permanent movement and -1 permanent strength.",
        "4: **Slashed Back** Suffer -1 permanent strength.",
        "5-6: **Bruised Tailbone** You are knocked down.",
        "7-10: **Minor Waist Injury** No effect."
      ]
    },
    {
      "name": "Legs",
      "type": "Severe Injury",
      "table": [
        "1: **Dismembered Leg** Suffer -1 permanent movement. If this is your second dismembered leg, your movement is 1.",
        "2: **Broken Leg** Suffer -1 permanent movement. You cannot **dash**.",
        "3: **Hamstrung** You cannot use fighting arts with 'dash' or 'run' in the name. Your move is reduced by 1, to a minimum of 1.",
        "4: **Torn Achilles Tendon** Suffer -1 permanent movement.",
        "5-6: **Torn Muscle** You are knocked down.",
        "7-10: **Minor Leg Injury** No effect."
      ]
    }
  ]
};
