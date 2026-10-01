# Project Blaster — Foundations (v0.2 draft)

Working title from the repo name.

Status tags:
- **LOCKED**: agreed.
- **PROPOSED**: my recommendation, waiting on your call.
- **OPEN**: needs discussion.

Influences: Titanfall, Helldivers, Infinity, Stargrave, Arsenal: Fireteam, Anthem, Lancer. Built from scratch; no rules or text from other projects.

---

## Decision log

| # | Topic | Decision | Status |
|---|---|---|---|
| 1 | Tone | Grounded at the boots, satirical at the top | **LOCKED** |
| 2 | Lethality | Infinity-level | **LOCKED** |
| 3 | Activation | Alternating activations in phases ordered by unit importance (Stargrave-style) | **LOCKED** |
| 4 | Dice | Roll-under | **LOCKED** |
| 5 | Board | 36"×36" | **LOCKED** |
| 6 | Scale | 28mm and 32mm are explicitly interchangeable. Base size is what matters. | **LOCKED** |
| 7 | Weapon range | Most weapons have no range limit | **LOCKED** |
| 8 | Orbital call-ins | In, including replacement mechs | **LOCKED** |
| 9 | Reinforcement | On-table cap on infantry; reserves refill losses | PROPOSED (§4) |
| 10 | Die size | d20 | PROPOSED (§6) |
| 11 | Reactions | Free response for the target only; Overwatch costs an action | PROPOSED (§5) |
| 12 | Base sizes | Table in §3 | PROPOSED |

---

## 1. Design pillars — PROPOSED

1. **Crunch at the workbench, speed at the table.** Every build choice compiles down to a short unit card. During play you need only the cards and a one-page keyword sheet.
2. **Combined arms is mandatory.** Mechs own open lanes. Infantry own dense terrain and are the main threat to mechs up close.
3. **Builds are characters; bodies are replaceable.** *(Revised.)* Every trooper is built individually, and that build stays on your roster all game. The body carrying it is expendable. Command sends a new one.
4. **Near-future hardware.** Ballistics are reliable workhorses. Lasers are experimental: accurate and armor-piercing, but they run hot and misbehave.
5. **Big moments.** Mech drops, rodeos, orbital strikes, ejections, and Core abilities should happen every game.

---

## 2. Tone — LOCKED

**"Grounded at the boots, satirical at the top."**

- The fighting is brutal and personal, like Titanfall's frontier war.
- The institutions running the war (corporate charters, orbital command) are absurd and propaganda-soaked, like Helldivers.
- The pilot–mech bond is played straight.

How this shows up in the rules:
- Orbital support is powerful, but it's delayed, it scatters, and friendly fire is on.
- Reinforcements fit the satire: "Your loadout has been reissued to a new volunteer."

---

## 3. Scale, board, terrain

**LOCKED**
- 28mm and 32mm models are interchangeable as long as they're on the correct base.
- Standard board is 36"×36".
- Most weapons have no range limit.

### Base sizes and silhouettes — PROPOSED

Base size sets a fixed silhouette height. Line of sight is checked against the silhouette, not the sculpt, so model poses never decide a shot.

| Unit | Base | Silhouette height |
|---|---|---|
| Trooper, ejected pilot | 25mm | 1" |
| Heavy trooper, drone | 40mm | 1.5" |
| Light mech | 50mm | 3" |
| Medium mech | 60mm | 4" |
| Heavy mech | 80mm | 5" |

### Terrain rules — PROPOSED

With no weapon ranges, line of sight is the only thing limiting fire, so terrain does the work that range would.

- 40–50% of the board covered, multi-level.
- **No clear line of sight longer than 18".** Every long sightline crosses something that blocks it.
- **Mech lanes:** streets at least 4" wide. They are staggered or bent so they never form a straight board-length firing lane.
- Infantry can enter and climb buildings; mechs can't.

### Weapon range — PROPOSED

Weapons work at any distance within line of sight. A few keywords create exceptions:

| Keyword | Effect | Typical weapons |
|---|---|---|
| **Close** | Only works within 8", and gets +3 TN there | SMG, shotgun, flamer |
| **Steady** | +3 TN if the shooter didn't move this activation | Sniper rifles, rail weapons |
| **Indirect** | No line of sight needed if a friendly model can see the target | Mortars, missile racks |

The difference between weapons comes from Burst, Damage, and these keywords.

---

## 4. Lethality and reinforcement

**LOCKED:** Infinity-level lethality.
- A trooper caught without cover, unable to respond, is dead.
- Mechs are durable. Armor stops most fire, and they lose weapons and mobility before they die.
- **Doomed:** at 0 Structure a mech becomes *Doomed*. It keeps fighting, and the next damage destroys it. The pilot may **Eject**, which places a Pilot model on the table.

### Reinforcement — PROPOSED

This combines Arsenal's infantry cap with Helldivers-style reinforcements.

- **Roster:** you build your full force with points. You can build more troopers than can be on the table at once.
- **Deployment cap:** a set number of troopers on the table at once (e.g. 6 in a standard game). Troopers beyond the cap wait in **Reserve**.
- **Reinforce** is a call-in:
  1. An Officer spends Command Points (CP) and places a beacon.
  2. In the Orbital phase, a trooper drop-pods in at the beacon. Scatter and friendly fire apply.
- **Consequence:** body count doesn't decide games. Missions score objectives. Kills matter because they drain the enemy's CP into replacements and pull them off objectives.

### Time-to-kill benchmarks — PROPOSED

These come from simulating the d20 system in §6.

| Situation | Result |
|---|---|
| Rifle (Burst 3) vs trooper, target can't respond, open / cover | 94% / 83% dead |
| Same, target Dodges, open / cover | 71% / 56% |
| Same, target in cover Returns Fire | 56%, and the attacker may die too |
| Anti-tank (AT) launcher vs medium mech, one shot | 40% to penetrate (33% if the mech shoots back) |
| Rifle vs mech | 14% (crits only); elite shooter 27% |
| Medium mech | ~3 penetrating AT hits to reach Doomed |

---

## 5. Activation

**LOCKED:** alternating activations in phases, ordered by how elite or important a unit is.

### Round structure — PROPOSED

Each unit card carries a **Tier** (1–3) that decides its phase. Tier is set at list building: making a trooper a Veteran moves it from Tier 3 to Tier 2 and costs points.

1. **Initiative:** both players roll a d20; the higher roll chooses who activates first in every phase this round.
2. **Command phase (Tier 1): Officers and mechs.**
   - Players alternate activations.
   - An Officer may **group-activate** up to 3 troopers within 3" of them. The group activates together.
3. **Veteran phase (Tier 2):** Veterans and specialists, alternating.
4. **Line phase (Tier 3):** all remaining troopers, alternating.
5. **Orbital phase:**
   - Call-ins land.
   - Reinforcements deploy.
   - Core meters gain +1.
   - Statuses resolve.

How a model's turn works:
- Each model gets **2 actions** when it activates.
- A mech gets **3 actions**.
- If one side runs out of units in a phase, the other side activates its remaining units in that phase one after another.

### Reactions — PROPOSED

The rule that protects the action economy: **only the target of an attack responds for free. Anyone else who wants to react pays an action in advance.**

| Reaction | Who | Cost | Effect |
|---|---|---|---|
| **Response** | The model being attacked | Free, once per attack | **Return Fire** (Burst 1, if it can see the attacker) or **Dodge** (on success, move 2"). Rolled face-to-face against the attack (§6). |
| **Overwatch** | Any model | 1 action | Take an Overwatch token. Spend it to shoot at an enemy that acts in line of sight, before that action finishes. The token lasts until it's used or the model activates again. |

Why this works:
- **Every attack becomes a contest.** The target always gets a response, which gives the game its Infinity feel.
- **The active player always starts the fights.** A free Response only defends or trades fire. It never lets a model attack something that walked past it.
- **The phases and Overwatch tie together.** Overwatch lasts into the next round. A Line trooper that sets it at the end of a round threatens the enemy's Command and Veteran units early in the next one. That gives cheap troopers a real job against elites.

---

## 6. Dice resolution

**LOCKED:** roll-under.

### Core roll — PROPOSED: d20, one roll checked against two numbers

1. Roll d20s equal to the weapon's **Burst**.
2. **Target Number (TN)** = shooter's Skill + modifiers (e.g. −3 if the target is in cover).
   - Each die that rolls ≤ TN is a **hit**.
   - A die that rolls exactly the TN is a **Crit**.
3. A hit **penetrates** if *die + weapon Damage ≥ target Armor*. Crits always penetrate.
4. **Face-to-face:** if the target responds, both sides roll at the same time.
   - A successful die cancels every opposing success that rolled lower.
   - Equal rolls cancel each other.
   - A Crit beats any die that isn't a Crit.

Why this works:
- **High rolls under your TN are always good.** They win face-to-face contests, and they punch through armor. Thematically, a roll just under the TN is a well-aimed shot.
- **No save rolls.** A single roll settles hit, contest, and penetration.
- **Armor only matters when it matters.** A rifle (Damage 2) against an unarmored trooper (Armor 1) always penetrates, so you only check the TN. The second number comes into play against heavy troopers and mechs.
- **Small arms vs mechs falls out naturally.** A rifle against mech Armor 15 needs a 13 or higher, which is above a TN of 12, so only Crits get through. An elite shooter (TN 14) finds weak points.
- **Fine steps for list building.** Each point of Skill, Damage, or Armor is a 5% step.

Why d20 and not d10: roll-under with modifiers on a d10 is too coarse. A −3 cover modifier on a d10 costs 30% of your chance to hit, and two thresholds don't fit cleanly on ten faces.

---

## 7. Mech construction — PROPOSED

This is where most of the list-building crunch lives. It mixes Lancer's frames and mounts, Anthem's javelin classes and gear, and Titanfall's titan kits and Cores.

1. **Chassis**
   - Weight class (Light / Medium / Heavy) and manufacturer.
   - Base stats: Move, Skill, Armor, Structure, Heat Cap.
   - Hardpoint layout, Capacity, a unique Chassis Trait, and a **Core** ability.
2. **Hardpoints:** Light, Medium, and Heavy mounts. A mount holds a weapon of its size or smaller.
3. **Systems:** utility slots for jump jets, ECM, shield, point defense, smoke, and anti-rodeo countermeasures.
4. **Two budgets**
   - **Capacity** is per chassis and keeps each build coherent.
   - **Points** are army-wide and keep forces balanced against each other.
5. **Pilot:** 1–2 perks.
6. **Core:** a chassis-specific ultimate. The Core meter fills over the game (+1 per round, +1 when damaged). It fires once when full.

**Heat** is the in-game tradeoff:
- Lasers, boosting, and overcharging build Heat. Going over Heat Cap triggers overheat effects.
- Ballistics run cool, but heavy ballistics have Limited ammo.

Starting chassis idea: 6 at launch, 2 per weight class.

---

## 8. Infantry construction — PROPOSED

**Trooper = Role + Primary weapon + Secondary weapon + 2 Gear slots + optional Veteran upgrade (moves the trooper to Tier 2).**

- **Roles:** Rifleman, Gunner, Marksman, Breacher, AT Specialist, Tech, Medic, Officer/Uplink.
- **Gear:**
  - Movement: grapple, jump pack.
  - Survival: cloak, stim, shield pack, deployable cover wall.
  - Support: supply pack, drone.
  - Grenades: arc and thermite.
- **Anti-mech tools:**
  - AT launchers and sticky charges.
  - **Rodeo:** a trooper in base contact climbs the mech and attacks a weak point, ignoring Armor. The mech can try to shake them off.

---

## 9. Command Points, call-ins, combos — PROPOSED

**Command Points (CP)** are now only for call-ins. Reactions are handled by §5.
- Generated each round: a base amount, plus 1 for each living Officer or Uplink trooper.
- Killing those troopers starves the enemy's call-ins.

**How call-ins work** (Helldivers stratagems)
1. An Officer or Uplink trooper spends CP and places a beacon during their activation.
2. The call-in lands in the **Orbital phase** of the same round, after scatter. The enemy gets the rest of the round to get clear.
3. Friendly fire is on.

| Call-in | Effect |
|---|---|
| Orbital strike | Damages all models within X" of the beacon |
| Supply drop | Resupplies Limited ammo; removes Heat |
| Support-weapon drop | A heavy weapon any trooper can pick up |
| Reinforce | A Reserve trooper drops in (§4) |
| **Mechfall** | Drops a mech held in orbit. Anything under it takes crush damage. |
| **Replacement Mechfall** | If an ejected pilot is still alive, they call down a replacement mech. Expensive; once per game. Hunting ejected pilots becomes a real tactic. |

Area effects use "all models within X inches of a point." There are no templates.

**Primers and Detonators** (from Anthem)
- There are 3–4 status types: *Burning*, *Shocked*, *Marked*.
- Primer weapons apply a status token. Detonator weapons consume it for a bonus effect.
- Combos work across units: infantry prime, mech detonates.

---

## 10. Components — PROPOSED

- **Dice:** about 6 d20s per player, in two colors (active and reactive).
- **Measuring:** a tape measure. Only movement, area effects, Close weapons, and group activation need measuring.
- **Tokens:**
  - Activated
  - Overwatch
  - Status types (3–4)
  - Doomed
  - Call-in beacons
  - Objectives
- **Mech tracking:** Structure, Heat, and Core tracks on a dry-erase mech card, or dials.
- **Cards:**
  - Compiled unit cards, generated by a list builder
  - A one-page keyword sheet
  - Mission cards
- **Miniatures:**
  - 1–2 mechs per side.
  - Infantry up to the deployment cap, plus any reserves.
- **Terrain:** enough dense, vertical terrain for a 36"×36" board, following the terrain rules in §3.

**Tooling note:** list building carries the crunch, so chassis, weapons, and gear should live as data tables from day one. A builder can then validate lists and print unit cards.

---

## 11. Open questions

1. **Reinforcement:** does a reinforcement pull from a pre-built Reserve, or re-issue a dead trooper's build? Or both?
2. **Mechs and Tier:** do mechs always act in the Command phase, or does pilot quality set their Tier?
3. **Pilots:** do they only appear as a model on ejection, or are they separate models that get in and out of the mech? The Replacement Mechfall in §9 assumes the ejection-only version.
4. **Mode:** player-vs-player only, or a co-op mode against AI enemies as well?
5. **Later:** a campaign mode where builds gain experience?
