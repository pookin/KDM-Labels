// severe-injuries.js
console.log("severe-injuries.js: Loading severe injury data...");

window.severeInjuries = {
  "Severe Injury": [
    {
      "name": "Brain Trauma",
      "type": "Severe Injury",
      "table": [
        "1-2: **Mortal Terror** No ifs, ands, or buts, the survivor is **dead**.",
        "3: **Memory Loss** Lose 2 levels of **weapon proficiency**.",
        "4: **Flee** You are **knocked down** and suffer **knockback** equal to your **movement** towards the closest board edge. Gain 1d5 **insanity**.",
        "5-6: **Danger seizure** You thrash about wildly, dealing 1 damage to yourself and every adjacent survivor. Gain a random **disorder** and 1d5 **insanity**.",
        "7-8: **Lunacy** Gain a random **disorder** and 1d5 **insanity**.",
        "9: **New perspective** You are **knocked down** and gain 1d10 **insanity**.",
        "10: **Frenzy** Gain 1d5 **insanity**, **+1 speed token**, and **+1 strength token**. **Ignore slow** on **melee weapons**. You may not spend **survival**. You may not use **fighting arts**. You may not use **weapon specialization** or **weapon mastery**. Lasts until end of showdown.",
        "11: **Maniacal laughter** You are **knocked down**. Gain **-1 speed token**, the **priority target token**, and 1d5 **insanity**.",
        "12: **Clarity** You are **knocked down**. Add your current **survival** to **insanity** and reduce your **survival** to 0. Gain a random **disorder**. If you already have 3 **disorders**, you **die**.",
        "13: **Impossible!** How could this happen! Gain **+1d10 survival**, **+1d10 insanity** and **+2 luck tokens!**"
      ]
    },
    {
      "name": "Head",
      "type": "Severe Injury",
      "table": [
        "1-2: **Head explosion!** Your head erupts in a shower of gore, killing you instantly. All other survivors are so traumatized that they lose 1 survival.",
        "3-4: **Decapitation.** You are **dead**.",
        "5: **Intracranial hemorrhage.** You can no longer use or spend any **survival**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "6: **Deaf.** You won't hear it coming. Suffer **-1 permanent evasion**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "7: **Blind.** Lose an eye. Suffer **-1 permanent accuracy**. This injury is **permanent**, and can be recorded twice. A survivor with two **blind** severe injuries suffers **-2 permanent accuracy** and retires from the settlement during the showdown or movement phase, having lost all sight. Gain **1 bleeding token**.",
        "8: **Concussion.** Your brain is scrambled like an egg. Gain a random **disorder**. Gain **1 bleeding token**.",
        "9: **Shattered jaw.** You drink your meat through a straw. You can no longer **consume** or be affected by events requiring you to **consume**. You can no longer **encourage**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "10+: **Destroyed tooth.** If you have 3+ courage, you spit out the rotten pulp and gain **+2 insanity!** Otherwise, the blow sends you sprawling and you are **knocked down**."
      ]
    },
    {
      "name": "Arms",
      "type": "Severe Injury",
      "table": [
        "1-2: **Die of shock.** Your vision fades, along with the sight of your mangled, armless torso.",
        "3: **Bleeding.** Gain **2 bleeding tokens**.",
        "4: **Dismembered Arm.** Lose an arm. You can no longer activate **two-handed weapons** or **paired weapons**. This injury is **permanent**, and can be recorded twice. A survivor with two **dismembered arm** severe injuries cannot activate any weapon. Gain **1 bleeding token**.",
        "5: **Ruptured muscle.** A painful rip. The arm hangs limp. You can no longer activate **fighting arts**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "6: **Contracture.** The arm will never be the same. Suffer **-1 permanent accuracy**. This injury is **permanent**, and can be recorded multiple times. Gain **1 bleeding token**.",
        "7: **Broken arm.** An ear shattering crunch. Suffer **-1 permanent accuracy** and **-1 permanent strength**. This injury is **permanent**, and can be recorded twice. Gain **1 bleeding token**.",
        "8: **Spiral fracture.** Your arm twists unnaturally. Gain **-2 strength tokens**. Skip the next hunt. Gain **1 bleeding token**.",
        "9: **Dislocated shoulder.** **Pop!** You cannot activate **two-handed** or **paired weapons** or use **block** until showdown ends. Gain **1 bleeding token**.",
        "10+: **Hit the dirt.** The blow sends you sprawling and you are **knocked down**."
      ]
    },
    {
      "name": "Body",
      "type": "Severe Injury",
      "table": [
        "1-2: **Death.** You vomit blood in a shower of bone fragments, which solidify into your heart, killing you instantly.",
        "3: **Bleeding.** Gain **2 bleeding tokens**.",
        "4: **Shattered rib.** Suffer **-2 permanent armor** on the **body**. This injury is **permanent**, and can be recorded multiple times. Gain **1 bleeding token**.",
        "5: **Destroyed back.** A sharp cracking noise. Suffer **-2 permanent movement**. You can no longer activate any gear that has **2+ strength**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "6: **Broken breastbone.** Your **movement** is reduced to 1 for the remainder of the showdown. Gain **1 bleeding token**.",
        "7: **Bleeding gut.** A shred of flesh hangs from your viscera. If a survivor in your facing or adjacent square is killed, you gain **+2 insanity** and must retire at the end of the next showdown or movement phase. Gain **1 bleeding token**.",
        "8: **Collapsed lung.** You can't catch a breath. Gain **-1 movement token**. Gain **1 bleeding token**.",
        "9: **Broken rib.** Even runs hurt to breathe. Suffer **-1 permanent speed**. This injury is **permanent**, and can be recorded multiple times. Gain **1 bleeding token**.",
        "10+: **Boxed guts.** The blow sends you sprawling and you are **knocked down**."
      ]
    },
    {
      "name": "Waist",
      "type": "Severe Injury",
      "table": [
        "1-2: **Final breath.** With your last breath, you fall in a final word of bravery. Adjacent survivors gain **+1 survival**. You are **dead**.",
        "3: **Bleeding kidneys.** Gain **2 bleeding tokens**.",
        "4: **Intestinal prolapse.** Your gut is gravely injured. You can no longer **pickup** gear on your space, as you are too focused on pain. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "5: **Ripped pelvic.** Your pelvis is destroyed. Suffer **-1 permanent accuracy**. This injury is **permanent**, and can be recorded multiple times. Gain **1 bleeding token**.",
        "6: **Destroyed genitals.** You cannot be **encouraged** for the remainder of the showdown. Gain **1 random disorder**. You are **knocked down**. Gain **3 insanity**. Lose **1 gear** at the utility of your choice. Gain **+3 insanity**. Gain **1 bleeding token**.",
        "7: **Broken hip.** You can no longer **climb**. You can no longer **dodge**. Suffer **-1 permanent movement**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "8: **Shattered Taint.** Horrifying sudden **movement** is blocked by agonizing pain. You cannot surge until showdown ends. Gain **1 bleeding token**.",
        "9: **Bruised tailbone.** The chase is your spine. You may not **dash** until the showdown ends. Gain **1 bleeding token**.",
        "10+: **Hit the dirt.** The blow sends you sprawling and you are **knocked down**."
      ]
    },
    {
      "name": "Legs",
      "type": "Severe Injury",
      "table": [
        "1-2: **Shed Gore.** Blood drains from your femoral artery, all staining nearby squares in a sickening shade. You are **dead**.",
        "3: **Bleeding.** Gain **2 bleeding tokens**.",
        "4: **Dismembered Leg.** Lose a leg. You suffer **-2 permanent movement**, and can no longer **dash**. This injury is **permanent**, and can be recorded twice. A survivor with both legs lost must retire at the end of the next showdown or movement phase. Gain **1 bleeding token**.",
        "5: **Hamstring.** A painful rip. The leg is unusable. You can no longer activate **fighting arts**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "6: **Torn Achilles.** Tendons tear. You can't hear your weight. Suffer **-2 permanent movement**, wherever you are. You are **knocked down**, and you are also **knocked down** (Skip the next hunt). Gain **1 bleeding token**.",
        "7: **Torn muscle.** Your muscles snap. A ripped, hot stench assails you. Gain **-2 movement tokens**. Skip the next hunt. Gain **1 bleeding token**.",
        "8: **Bruised groin.** An ear-shattering crunch! Adherent survivors suffer **Brain Damage** equal to their **permanent survival**. This injury is **permanent**, and can be recorded once. Gain **1 bleeding token**.",
        "9: **Bloody thighs.** Gain **2 bleeding tokens**.",
        "10+: **Lost balance.** The blow sends you sprawling and you are **knocked down**."
      ]
    }
  ]
};