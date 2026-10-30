# 4. Magic

*Part of the [rules draft](README.md). Tags: **[Proposed]** = awaiting a yes or no. **[Open Q#]** = see [open-questions.md](open-questions.md).*

Magic is high risk, high reward. It is the **only** place in the game where successes are counted. This is deliberate: it should feel different from mortal fighting and skill.

## 4.1 Casting

1. Spend the action the spell lists (half or full; default Full **[Proposed]**).
2. Roll a number of d6 equal to the caster's **Willpower**, plus or minus dice from gear, statuses and IRON armor.
3. Count successes on each die:
   - **4+** is 1 success.
   - A natural **6** is 2 successes (a crit).
4. Compare the total to the spell's **TN** (the number of successes it needs):

| Result | Outcome |
|---|---|
| 0 successes | **BACKBLAST.** Harmful, randomized effects (4.3). |
| 1 to TN - 1 | The spell fails. Nothing else happens. |
| TN or more | The spell resolves. Each success beyond the TN grants the spell's **extra success bonus**. |

*Naming note:* here "TN" means successes needed, which collides with the target number on a die (X+). **[Open Q17]**

## 4.2 Odds

A WIL 3 caster (a trained battle caster) backblasts 1 time in 8.

| Willpower | BACKBLAST (0 successes) | 1+ | 2+ | 3+ | 4+ | 5+ |
|---|---|---|---|---|---|---|
| 1 | 50.0% | 50.0% | 16.7% | 0.0% | 0.0% | 0.0% |
| 2 | 25.0% | 75.0% | 41.7% | 13.9% | 2.8% | 0.0% |
| 3 | 12.5% | 87.5% | 62.5% | 33.3% | 13.0% | 3.2% |
| 4 | 6.3% | 93.8% | 77.1% | 52.1% | 28.0% | 11.5% |
| 5 | 3.1% | 96.9% | 86.5% | 67.4% | 44.2% | 23.8% |

(Columns 1+ to 5+ are the chance of reaching at least that many successes.)

The 1-die row is what IRON armor does to a weak caster: a WIL 3 caster in chainmail rolls 2 dice (25% backblast), and in chainmail plus a breastplate rolls 1 (50%).

Rule of thumb: TN 1-2 is reliable, TN 3 is a gamble for an average caster, and TN 4+ is for experts.

## 4.3 BACKBLAST [placeholder table, Open Q18]

Roll a d6. The effects are placeholders until the table is designed.

| d6 | Name | Effect |
|---|---|---|
| 1 | Recoil | The caster takes D3 damage. No save. |
| 2 | Seize | The caster takes 1 damage (no save) and its activation ends. |
| 3 | Hex | The caster takes 1 damage (no save) and has BANE 1 on all rolls until the end of its next activation. |
| 4 | Shockwave | Every other model within 3", friend or foe, takes a hit of 1 damage. Saves allowed. |
| 5 | Unravel | The caster misses its next activation. |
| 6 | Wyrd surge | The nearest other model to the caster, friend or foe, takes D3 damage. Save allowed. |

## 4.4 Spell format

| Field | Meaning |
|---|---|
| Name | |
| TN | Successes needed. |
| Cost | Half or Full action. |
| Range / target | Line of sight, self, an area, etc. |
| Effect | What happens at TN. |
| Extra success | The bonus for each success beyond the TN. |

### Example spells (illustrative only)

**Ember Dart.** TN 2. Full. Line of sight. One target takes 2 damage (save allowed). *Extra success:* +1 damage.

**Bone Ward.** TN 2. Full. A friendly model in line of sight has BOON 1 on saves until the end of the round. *Extra success:* one other friendly model within 3" of the target gains the same.

## 4.5 Casters and gear

- A caster's Willpower is its dice pool (see the scale in [Core Rules](01-core-rules.md)).
- **[Proposed]** Gear and statuses add or remove dice directly. A staff adds 1 die.
- **IRON armor. [Proposed, Open Q22]** A caster rolls one fewer Willpower die for each IRON piece it wears (chainmail, breastplate, full plate). A caster reduced to 0 dice cannot cast. Hard leather and gambeson do not count. This is where the name "Cold Iron" pays off: steel is for fighters, and casters dress light.
- How casters get their spells, and whether saves apply to spell damage: **[Open Q17]**.
