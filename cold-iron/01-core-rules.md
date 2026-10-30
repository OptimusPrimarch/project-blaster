# 1. Core Rules

*Part of the [rules draft](README.md). Tags: **[Proposed]** = awaiting a yes or no. **[Open Q#]** = see [open-questions.md](open-questions.md).*

## 1.1 Dice and Resolution

### The Standard Roll

All rolls use a d6. A die **succeeds** if it shows the target number or higher, written **X+** (a 4+ succeeds on a 4, 5 or 6).

- **A natural 1 always fails.**
- **A natural 6 always succeeds.**

"Natural" means the number showing on the die before any modifier. These two rules override every other rule, including BOON and BANE.

So the best target number is 2+ and the worst is 6+.

**LIMITS. [Proposed]** Rules never worsen a target number. Penalties are applied as BANE instead. A target number is never better than 2+ or worse than 6+.

**ROUNDING. [Proposed, Voidwatch §0]** Whenever a rule requires rounding, round down.

### BOON and BANE

- **BOON X:** roll X extra dice, then discard the X lowest results.
- **BANE X:** roll X extra dice, then discard the X highest results.

The remaining dice are resolved as normal, so the number of dice that count never changes.

- BOON and BANE on the same roll cancel one-for-one. Apply only the net.
- **[Proposed, Open Q2]** The net is capped at 2.
- **[Proposed]** BOON and BANE apply to attack rolls, saves and tests. They do not apply to casting, which adds or removes dice instead (see [Magic](04-magic.md)).

*Examples.* A 3-die attack with BANE 1 rolls 4 dice and discards the highest. A save (1 die) at 4+ with BOON 1 rolls 2 dice and keeps the better. Attacking a target in cover (BANE 1) from 3" above it (BOON 1): they cancel, so roll normally.

### Crits

A natural 6 on an attack die is a **CRIT**.

- A crit always hits and deals the weapon's crit damage instead of its normal damage.
- A crit strike can only be cancelled by a crit parry (see [Combat](02-combat.md)).
- When casting, a natural 6 counts as 2 successes.
- On any other roll (saves, tests), a natural 6 is simply a success.

### Tests

When a rule calls for a test, roll one die against the stated stat (for example, Mettle 4+), with any BOON or BANE. A success passes the test.

## 1.2 Model Profiles

Every model has this profile:

| Stat | Abbr. [Proposed] | Meaning |
|---|---|---|
| Speed | SPD | Inches moved by one MOVE half-action. |
| Fight | FGT | Target number for melee attack dice. |
| Shoot | SHT | Target number for ranged attack dice. |
| Mettle | MET | Target number for courage, leadership and objective-interaction tests. **[Open Q12]** |
| Willpower | WIL | Number of dice rolled to cast a spell. Casters only. |
| Wounds | WND | The model is slain when the damage it has sustained equals its Wounds. |

Fight, Shoot and Mettle are target numbers, so **lower is better** (3+ beats 5+). Speed, Willpower and Wounds are values, so higher is better. A dash (-) means the model cannot do that thing: no Shoot means no ranged attacks, and no Willpower means no casting.

Every profile also lists a **base size** (25-60mm; **[Open Q13]** on what it changes), a **Save** (every model starts at 6+, and armor improves it, see [Equipment](03-equipment.md); a model in hard leather also lists a separate crit Save), its weapons, and its keywords.

### Willpower scale

| WIL | Caster |
|---|---|
| 2 | Cultist or savant |
| 3 | Trained battle caster (the average caster) |
| 4 | Very experienced caster |
| 5 | Master wizard |

Staffs, grimoires and similar gear add to this a little (see [Magic](04-magic.md)).

### Typical ranges [Proposed]

| Stat | Typical |
|---|---|
| Speed | 4"-6" (fast beasts 7"+) |
| Fight / Shoot | 3+ (elite) to 5+ (rabble) |
| Mettle | 3+ (steady) to 6+ (witless) |
| Wounds | Henchmen about 3, beasts about 2. Champions, Leaders and monsters have more. **[Open Q23]** |

### Roles

A warband has 5-15 models:

- **1 LEADER** (required).
- **1 CHAMPION** (required).
- **3 or more HENCHMEN** (required).
- **Any others** are optional: specialists, hirelings, beasts.

Henchmen are meant to die, and die quickly. At about 3 Wounds they survive a glancing hit, but a blow with real force finishes them. Beasts average 2. Only durable characters and heroes have a lot more.

**FERAL. [Proposed]** Beasts such as hounds and dire bats. A FERAL model cannot interact with objectives. A 15-model warband is expected to be rare and built from fragile FERAL models that only pay off if they deliver the first blow. They will not be standing all game.

### Example profiles (illustrative, not balanced)

| Model | Role | SPD | FGT | SHT | MET | WIL | WND | Base |
|---|---|---|---|---|---|---|---|---|
| Cutthroat | Henchman | 5" | 5+ | 5+ | 5+ | - | 3 | 25mm |
| Sellsword | Champion | 5" | 3+ | 4+ | 4+ | - | 5 | 32mm |
| Captain | Leader | 5" | 3+ | 4+ | 3+ | - | 6 | 32mm |
| Hedge-witch | Optional | 5" | 5+ | 5+ | 4+ | 3 | 3 | 28mm |
| Dire hound | Optional, FERAL | 7" | 4+ | - | 6+ | - | 2 | 32mm |

## 1.3 Measuring and Engagement

- Measure in inches from base edge to base edge.
- **[Proposed]** Models cannot move through other models' bases.
- **ENGAGEMENT RANGE is 1".** Two models within 1" of each other are in engagement range. This one distance covers close combat, scoring objectives, using ladders and interactions.
- **[Proposed]** A model in engagement range of an enemy model is **ENGAGED**.

## 1.4 The Round

**[Proposed]** unless noted.

1. **Initiative.** The player with fewer models in play chooses whether to activate first or second this round (Voidwatch §0). On a tie, roll a d6 each and the high roll chooses. **[Open Q10]**
2. **Activations.** Players alternate activating one model at a time. Each model activates once per round. When a player has no models left to activate, the opponent activates their remaining models one after another. (Alternating activations are decided. The rest of this list is the working procedure.)
3. **Henchmen groups.** Henchmen with identical profiles and gear within 3" of each other may activate together as one group, resolving their actions one model at a time (Voidwatch §13.2, swarms). **[Open Q9]**
4. **Neutrals.** Neutral models act at the end of the round (see [Scenarios](06-scenarios.md)). **[Open Q21]**
5. **End of round.** Score objectives. After round 4, roll for a 5th round (see [Scenarios](06-scenarios.md)).

## 1.5 Actions

On its activation a model has **two half-actions**. It may spend both on one **full action** instead. Unless a rule says otherwise, the same half-action may be taken twice.

**Bonus actions** are rare and specific. A bonus action exists only if a particular item or ability grants it. It costs no half-actions and may be used once per activation unless it says otherwise.

The action list below is **[Proposed]**:

| Action | Cost | Effect |
|---|---|---|
| MOVE | Half | Move up to Speed. May include climbing or a ladder (see [Terrain](05-terrain-and-movement.md)). Leaving engagement: **[Open Q6]** |
| FIGHT | Half | Melee attack against an enemy in engagement range (see [Combat](02-combat.md)). |
| SHOOT | Half | Ranged attack against a visible target. Shooting while engaged: **[Open Q7]** |
| AIM | Half | Your next SHOOT this activation gains BOON 1. |
| INTERACT | Half | Use an object or objective within engagement range. Usually a Mettle test if the scenario says so. FERAL models cannot. |
| CAST | As listed, default Full | Cast a spell (see [Magic](04-magic.md)). **[Open Q17]** |
| CHARGE | Full | Move up to 2x Speed, ending engaged with an enemy, then FIGHT. The charger allocates first. **[Open Q5]** |

## 1.6 Design notes

**What a BOON or BANE is worth** (expected hits at 4+):

| Attack dice | Normal | BOON 1 | BANE 1 |
|---|---|---|---|
| 2 | 1.00 | 1.38 | 0.62 |
| 3 | 1.50 | 1.94 | 1.06 |
| 4 | 2.00 | 2.47 | 1.53 |

One BOON or BANE moves a 3-die attack by about 0.44 hits, roughly 30%.
