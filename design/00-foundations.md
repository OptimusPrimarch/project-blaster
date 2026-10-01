# Project Blaster — Foundations (v0.3 draft)

Working title from the repo name.

Status tags:
- **LOCKED**: agreed.
- **PROPOSED**: my recommendation, waiting on your call.
- **OPEN**: needs discussion.
- **PARKED**: deliberately on hold.

Influences: Titanfall, Helldivers, Infinity, Stargrave, Arsenal: Fireteam, BLKOUT, Anthem, Lancer. Built from scratch; no rules or text from other projects. Being close to Infinity in places is fine.

---

## Decision log

| # | Topic | Decision | Status |
|---|---|---|---|
| 1 | Tone | Grounded at the boots, satirical at the top. Players command mercenary companies. | **LOCKED** |
| 2 | Lethality | Infinity-level | **LOCKED** |
| 3 | Phases | Command → Pilot → Elite → Grunt, with alternating activations inside each phase | **LOCKED** |
| 4 | Dice | d20, roll-under | **LOCKED** |
| 5 | Reactions | Shooting back with 1 die is free. Reacting with full dice requires Overwatch, which costs an action. | **LOCKED** |
| 6 | Board | 36"×36", very dense terrain | **LOCKED** |
| 7 | Weapon range | No range requirements | **LOCKED** |
| 8 | Scale | 28mm and 32mm are interchangeable; base size is what matters | **LOCKED** |
| 9 | Infantry bases | 25mm standard, 40mm heavy armor. Infinity silhouettes. | **LOCKED** |
| 10 | Mech line of sight | True line of sight to the model | **LOCKED** |
| 11 | Mech bases | Reuse Infinity where possible; also accept BLKOUT and Arsenal mech bases | **LOCKED** (sizes in §3) |
| 12 | Force cap | 1 mech or pilot + 10 infantry on the table per side | **LOCKED** |
| 13 | Force building | A credit Allocation (60–100) buys 1 mech + pilot and up to 5 Elites; Grunts fill the remaining slots | **LOCKED** |
| 14 | Replacement mech | A surviving pilot can call in a replacement mech | **LOCKED** |
| 15 | Reinforcements | Come from pre-built reserves; Grunt reserves are unlimited. Three ways to arrive (§5). | **LOCKED** |
| 16 | Customization | Pilots fully custom. Elites: their profile + 1 kit. Grunts: one template each, no customization. | **LOCKED** |
| 17 | Cards | Unit cards, weapon/gear cards, mech component cards | **LOCKED** |
| 18 | Costing | Small numbers; same price means roughly the same power | **LOCKED** |
| 19 | Victory | Objectives, not body count | **LOCKED** |
| 20 | Mode | PvP, plus PvPvE (both players vs each other and AI-run hostiles) | **LOCKED** |
| 21 | Armor and damage model | Waiting on your thinking | **PARKED** |

---

## 1. Design pillars — PROPOSED

1. **Crunch at the workbench, speed at the table.** Every build compiles down to a short unit card plus component cards.
2. **Combined arms is mandatory.** The mech owns open lanes. Infantry own dense terrain and are the main threat to the mech up close.
3. **Customization scales with importance.** *(Revised.)* The pilot and mech are fully built. Elites are tuned. Grunts are company standard issue.
4. **Near-future hardware.** Ballistics are reliable workhorses. Lasers are experimental: accurate, but hot and temperamental.
5. **Big moments.** Mechfall, rodeos, orbital strikes, ejections, and Core abilities should happen every game.

---

## 2. Tone and setting — LOCKED

**"Grounded at the boots, satirical at the top."**

- Each player commands a **mercenary company**.
- The **Allocation** is how many credits the company is willing to commit to this contract, so army points are literally a budget.
- Combat is brutal and personal. The corporate clients and orbital command are absurd and propaganda-soaked.
- The pilot–mech bond is played straight.

---

## 3. Scale, bases, line of sight, terrain

### Infantry — LOCKED
- Standard troopers on 25mm bases. Heavy armored troopers on 40mm bases.
- Infinity's silhouette system decides line of sight for infantry.

### Mechs — LOCKED: true line of sight to the model
Mechs come from several games and in several sizes, so line of sight is checked against the model itself.

Mech base sizes to support:

| Source game | Mech base | Notes |
|---|---|---|
| Infinity (TAGs) | 55mm | |
| BLKOUT (Dusters) | 40–60mm | per the BLKOUT rulebook |
| Arsenal: Fireteam (MCVs) | 75mm | |

**PROPOSED:** any mech base from 40mm to 75mm is legal. Use the base the model was sold on. Base size doesn't affect stats.
- Because line of sight is checked against the model, base size only changes the mech's footprint: how it fits through gaps, and how many troopers can get into base contact for a rodeo.
- Playtest watch: does a small base give an edge in dense terrain?

**OPEN:** Arsenal's infantry ship on 32mm bases. Do we allow 25–32mm as "standard infantry," or require rebasing?

### Terrain — PROPOSED
With no weapon ranges, line of sight is the only thing limiting fire, so terrain does the work that range would.

- Very dense, multi-level.
- No clear line of sight longer than about 18".
- **Mech lanes:** at least 4" wide, so a 75mm base fits. They are staggered or bent so they never form a straight board-length firing lane.
- Infantry can enter and climb buildings; mechs can't.

### Weapon range — LOCKED: no range requirements
Weapons differ through Burst, Damage, and keywords.

**PROPOSED:** allow range *bonuses*, never requirements. For example:
- **Close:** +3 to the Target Number within 8" (shotguns, SMGs).
- **Steady:** +3 if the shooter didn't move this activation (snipers).

---

## 4. Force building

### Allocation — LOCKED
- Players agree an **Allocation** of credits. Suggested sizes: **60** (small) and **100** (standard).
- Costs are small whole numbers, and **same price means roughly the same power**.
- **PROPOSED:** most items cost 1, 2, or 3 credits (price bands).

### Company composition

| Slot | Limit | Customization | Status |
|---|---|---|---|
| **Pilot + mech** | 1 on the table | Pilot fully custom. Mech assembled from component cards. | **LOCKED** |
| **Replacement mech** | Called in by a surviving pilot | See open question 1 | OPEN |
| **Elites** | Up to 5 | Fixed profile + 1 extra piece of kit | **LOCKED** |
| **Grunts** | Fill the rest of the 10 infantry slots | Each picks one template; nothing else | **LOCKED** |

On-table cap: **1 mech or pilot + 10 infantry**. **LOCKED**

**PROPOSED:** grunts cost 0 credits; they're the company's standard issue. Credits go into the mech, the pilot, and Elites. The real trade-off is credits *and* infantry slots. Every Elite you take is one fewer free Grunt.

Illustrative 100-credit company (prices are placeholders, not balanced):

| Item | Credits |
|---|---|
| Medium chassis + components | 26 |
| Pilot + perks | 6 |
| 4 Elites with kit | 36 |
| Reserve mech (if replacements must be bought; see open question 1) | 20 |
| 1 reserve Elite | 9 |
| 6 Grunts (two fireteams of 3) | 0 |
| **Total** | **97** |

### Cards — LOCKED
- **Unit cards:** pilot, each Elite profile, each Grunt template.
- **Weapon and gear cards:** for pilots, Elites, and the mech.
- **Mech component cards:** a chassis card plus component cards. Lay them out together and they form the mech's profile.

---

## 5. Lethality and reinforcement

**LOCKED:** Infinity-level lethality. A trooper caught without cover, unable to respond, is dead.

**PROPOSED** (carried over; not yet discussed):
- **Doomed:** a mech at 0 Structure keeps fighting until the next hit destroys it.
- The pilot may **Eject**, which places the Pilot model on the table.

### Reserves — LOCKED
- Reinforcements come from **pre-built reserves**.
- **Grunt reserves are unlimited**, at least until playtesting says otherwise.

### Arrival methods — LOCKED
All reinforcements arrive in the **Command phase**. Choose one:

1. **Drop pod:** anywhere on the board. It scatters and damages whatever it lands on.
2. **Infiltrate:** within 6" of a friendly unit and out of line of sight of every enemy.
3. **Standard deployment:** in your own deployment zone. Use this only if neither of the other two is possible.

### Replacement mech — LOCKED (details OPEN)
- The surviving pilot places a **Mechfall** beacon during their activation.
- The mech drops in the next Command phase and crushes anything under it.

### Throttle — OPEN
With unlimited Grunts, what limits the flow of reinforcements? Options:
- **(a)** Free. Dead Grunts return next Command phase.
- **(b)** Each reinforcement costs Command Points.
- **(c)** A per-round limit.

---

## 6. Activation and reactions

### Phases — LOCKED
Within each phase, players alternate activations. If one side runs out of units in a phase, the other side activates the rest of theirs one after another.

| # | Phase | Who acts | What happens |
|---|---|---|---|
| 1 | **Command** | Players; nothing on the board | Initiative roll-off. Gain Command Points. Call-ins and Mechfall land. Reinforcements arrive. Core meters +1. Cleanup. |
| 2 | **Pilot** | The mech, or a dismounted pilot | The pilot activates, and the mech they're in activates with them |
| 3 | **Elite** | Elite troopers | Each activates individually |
| 4 | **Grunt** | Grunt fireteams | Each fireteam activates as one unit |

**PROPOSED:**
- Troopers and pilots get 2 actions each when they activate.
- The mech gets 3 actions.
- Beacons placed during a round land in the *next* Command phase. The enemy gets the rest of the round to get clear.

### Reactions — LOCKED

| Reaction | Who | Cost | Effect |
|---|---|---|---|
| **Return Fire** | The model being attacked | Free, once per attack | Shoot back with **1 die**. Rolled face-to-face against the attack. |
| **Overwatch** | Any model | 1 action | Take an Overwatch token. Spend it to react with the weapon's **full Burst** when an enemy acts in line of sight. |

Alternative considered: The Drowned Earth-style reactions (spend an unspent action point). Overwatch was chosen instead.

**PROPOSED:**
- The Overwatch token lasts until used or until the model activates again. Grunts setting Overwatch late in a round then threaten the enemy's Pilot and Elite phases in the next round.
- Add **Dodge** as an alternative free response to Return Fire. It wins the same way and lets the model move 2".

Simulated d20 duels (Burst 3 attacker, Skill 12, one-wound targets):

| Situation | Free 1-die Return Fire | Overwatch (full Burst) |
|---|---|---|
| Both in the open | Target dies 70%, attacker dies 22% | 45% / 45% |
| Target in cover (−3 to hit it), attacker exposed | 56% / 33% | **29% / 64%** |

Overwatch from cover flips the fight. That's why it's worth an action.

---

## 7. Dice resolution — LOCKED: d20 roll-under

1. Roll d20s equal to the weapon's **Burst**.
2. Each die that rolls ≤ the **Target Number (TN)** succeeds. TN = Skill + modifiers.
3. A die that rolls exactly the TN is a **Crit**.
4. **Face-to-face:** when both sides roll, a success cancels every opposing success that rolled lower. Equal rolls cancel each other. A Crit beats anything that isn't a Crit.

**PARKED:** armor, damage, and how hits become wounds or Structure loss. Waiting on your thinking.

---

## 8. Mech construction — PROPOSED

The mech is assembled from **component cards**.

1. **Chassis card**
   - Weight class and manufacturer.
   - Base stats, hardpoint layout, Capacity, Chassis Trait, and a **Core** ability.
2. **Weapon component cards:** Light, Medium, and Heavy mounts. A mount takes a weapon of its size or smaller.
3. **System component cards:** jump jets, ECM, shield, point defense, smoke, anti-rodeo countermeasures.
4. **Capacity:** keeps each build coherent. Credits keep the whole force balanced.
5. **Core:** the meter fills +1 per round and +1 when damaged. Fire it once when full.

**Heat:**
- Lasers, boosting, and overcharging build Heat. Going over Heat Cap triggers overheat effects.
- Ballistics run cool, but heavy ballistics have Limited ammo.

Launch scope idea: 6 chassis, 2 per weight class.

---

## 9. Pilots, Elites, Grunts

### Pilots — LOCKED: fully customizable
- **PROPOSED:** a pilot build is perks + sidearm + 1–2 gear.
- Gear is pilot-style kit from Titanfall: grapple, cloak, stim, jump kit.
- The pilot fights as a 25mm model when dismounted.
- Pilot perks are where mech-handling skills live.

### Elites — LOCKED: fixed profile + 1 kit
**PROPOSED roles:** Officer/Uplink, Marksman, Breacher, Tech, Medic, AT Specialist, Heavy (40mm).

### Grunts — LOCKED: one template each, no customization
**PROPOSED template list:**
1. **Rifleman**
2. **Gunner** (LMG)
3. **Grenadier**
4. **AT Gunner**
5. **Corpsman**

**PROPOSED fireteam rules:**
- 3–5 Grunts, no duplicate templates except Rifleman.
- The team is fully capable while intact. Each loss removes a capability: lose the AT Gunner and the team can't threaten the mech.
- Reinforcements refill the missing template, ideally by Infiltrating within 6" of the team.

**OPEN** (Infinity-adjacent mechanics):
- Coherency distance.
- Whether every member gets actions, or a leader acts and the others follow.
- Any bonus for a full team.

---

## 10. Command Points, call-ins, combos — PROPOSED

**Command Points (CP)**
- Gained in the Command phase: a base amount, plus 1 for each living Officer/Uplink Elite.
- Spent on call-ins (and on reinforcements, if throttle option (b) is chosen).

**Call-ins** (Helldivers stratagems)
1. An Officer/Uplink Elite places a beacon during their activation.
2. The call-in lands in the next Command phase, after scatter.
3. Friendly fire is on.

| Call-in | Effect |
|---|---|
| Orbital strike | Damages all models within X" of the beacon |
| Supply drop | Resupplies Limited ammo; removes Heat |
| Support-weapon drop | A heavy weapon any trooper can pick up |
| **Mechfall** | Replacement mech; only a surviving pilot can call it |

**Primers and Detonators** (from Anthem)
- There are 3–4 status types: *Burning*, *Shocked*, *Marked*.
- Primer weapons apply a status token. Detonator weapons consume it for a bonus effect.
- Combos work across units: Grunts prime, mech detonates.

Area effects use "all models within X inches of a point." There are no templates.

---

## 11. Components — PROPOSED

- **Dice:** about 6 d20s per player, in two colors (active and reactive).
- **Measuring:** a tape measure. Only movement, area effects, and the 6" Infiltrate check need measuring.
- **Tokens:**
  - Activated
  - Overwatch
  - Status types (3–4)
  - Doomed
  - Beacons
  - Objectives
- **Mech tracking:** a dry-erase sleeve or dials for Structure, Heat, and Core.
- **Cards:** unit, weapon/gear, mech component, mission, and a one-page keyword sheet.
- **Miniatures per side:** 1 mech, 1 pilot, up to 10 infantry, plus reserves.
- **Terrain:** a very dense 36"×36" board.

**Tooling note:** keep chassis, components, weapons, gear, and templates as data tables. A list builder can then validate Allocations and print cards.

---

## 12. Open questions

1. **Replacement mech:** a second mech bought in advance as a reserve, or the same build reissued for free (or for CP)?
2. **Grunts:** free filler (my proposal), and what throttles their reinforcements (§5)?
3. **Elite cap:** 5 per company *including* reserves, or 5 on the table at once?
4. **Pilots:** can they get out of the mech voluntarily (full Titanfall), or only by ejecting?
5. **Infantry bases:** allow Arsenal's 32mm infantry bases as standard?
6. **Dodge:** keep it as a free alternative to Return Fire?
7. **PvPvE:** when do AI hostiles act? Their own phase, or during the Command phase? *(Later.)*
8. **Armor and damage model:** PARKED until you're ready.
