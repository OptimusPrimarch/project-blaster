# Project Blaster — Foundations (v0.4 draft)

An **unofficial, fan-made mercenary variant of Infinity N5**.

**How to read this doc:** Infinity N5 is the baseline (dice, attributes, weapons, range bands, AROs, states, hacking, armor saves). This document records only:
1. What we **change** from N5 (the "diff").
2. What we **add** on top.

Anything not mentioned here follows N5.

Status tags:
- **LOCKED**: agreed.
- **PROPOSED**: my recommendation, waiting on your call.
- **OPEN**: needs discussion.
- **REVIEW**: one of our earlier ideas that N5 may already cover; keep or cut.

---

## Decision log

| # | Topic | Decision | Status |
|---|---|---|---|
| 1 | Baseline | Infinity N5: dice, attributes, weapons, range bands, AROs, armor | **LOCKED** |
| 2 | Tone | Grounded at the boots, satirical at the top. Players command mercenary companies. | **LOCKED** |
| 3 | Phases | Command → Pilot → Elite → Grunt, with alternating activations inside each phase | **LOCKED** |
| 4 | Reactions | N5 AROs (1 die). Full-Burst reactions come from N5 **Suppressive Fire** (replaces our Overwatch idea). Dodge per N5. | **LOCKED** |
| 5 | Board | 36"×36", very dense terrain | **LOCKED** |
| 6 | Bases | Deliberately size-agnostic: 25, 28.5, and 32mm count as the same | **LOCKED** |
| 7 | TAG line of sight | True line of sight to the model | **LOCKED** |
| 8 | Force cap | 1 TAG or pilot + 10 infantry on the table per side | **LOCKED** |
| 9 | Allocation | 60–100 credits, simpler than N5 points | **LOCKED** |
| 10 | Grunts | 0 credits; shared profile; one equipment template each | **LOCKED** |
| 11 | Elites | Up to 5 per company, *including* reserves. Cap can grow by pre-spending CP. Profile + 1 kit. | **LOCKED** |
| 12 | Pilots | Fully custom. Free mount/dismount. Eject test. Can jockey enemy TAGs. | **LOCKED** |
| 13 | Replacement TAG | Stock lineup costed in CP, not credits. Called in by a surviving pilot. | **LOCKED** |
| 14 | Reinforcement | Paid drop pod (CP), else free Rally out of enemy sight, else your deployment zone. The 10-model cap is the only throttle. | **LOCKED** |
| 15 | Fireteams | Grunt fireteams, players can mix and match. Activate in the Grunt phase. | **LOCKED** (reinforcing them is OPEN) |
| 16 | Cards | Unit cards, weapon/gear cards, TAG component cards | **LOCKED** |
| 17 | Victory | Objectives, not body count | **LOCKED** |
| 18 | Mode | PvP and PvPvE | **LOCKED** |

---

## 1. What this project is

### Identity
A mercenary-company game set in Infinity's universe. Players build a company to their heart's content:
- a **custom TAG** assembled from component cards,
- a **custom pilot**,
- a pool of **Elite specialists** modeled on the specialists in standard Infinity armies,
- **Grunts** as standard issue.

Infinity's own lore already has mercenary companies, so the premise fits the setting.

### Telling it apart from TAG Raid
*Infinity Deathmatch: TAG Raid* is an **official Corvus Belli product**, not a fan project:
- 2–4 players, battle-royale style.
- TAGs are the main characters.
- Runs on the CodeOne engine.
- Players are mining corporations in Khurland.
- An N4 Deathmatch mode adds 2 Heavy Infantry per player.

| | TAG Raid | This project |
|---|---|---|
| Format | 2–4 player free-for-all | 1v1, or 1v1 plus AI hostiles (PvPvE) |
| Focus | TAGs are the stars | Combined arms: 1 TAG supporting up to 10 infantry |
| Engine | CodeOne | Full N5 with a phased turn structure |
| Building | Not confirmed whether TAGs can be customized (check before publishing) | TAGs built from components; custom pilots; specialist pool |
| Unique systems | Neomaterial extraction, multiplayer | Reinforcements, drop pods, replacement TAGs, pilots who dismount and jockey enemy TAGs |

### Fan-project hygiene — PROPOSED
Not legal advice.

- **Reference N5, don't reproduce it.** This document's diff-only structure already does that.
- Write all new content (profiles, components, call-ins) in our own words.
- Label the project unofficial and non-commercial. Use no Corvus Belli logos or art.
- Corvus Belli runs a creator program for fan videos and animations (Corvus Creator Nest), but I found no published policy on fan *rules*. Consider contacting them before public release.

---

## 2. Tone — LOCKED

**"Grounded at the boots, satirical at the top."**

- Each player commands a mercenary company.
- The Allocation is what the company is willing to commit to this contract.
- Combat is brutal and personal. The clients and orbital command are absurd and propaganda-soaked.
- The pilot–TAG bond is played straight.

---

## 3. Changes from N5 (the diff)

### 3.1 Round structure — LOCKED
N5's player turns and Order pool are **replaced** by rounds with four phases. Inside each phase, players alternate activations. If one side runs out of units in a phase, the other side activates the rest of theirs one after another.

| # | Phase | Who acts | What happens |
|---|---|---|---|
| 1 | **Command** | Players; nothing on the board | Initiative. Gain Command Points (CP). Reinforcements, drop pods, and Mechfall land. Upkeep. |
| 2 | **Pilot** | The TAG, or a dismounted pilot | The pilot activates, and the TAG they're in activates with them |
| 3 | **Elite** | Elites | Each activates individually |
| 4 | **Grunt** | Grunts and fireteams | Each Grunt or fireteam activates as one unit |

**Translating N5 timing — PROPOSED:**
- For the length of an activation, the activating player counts as the **active player** for every N5 rule that refers to the active or reactive turn.
- Every enemy model counts as **reactive** and may ARO per N5.

### 3.2 Orders per activation — PROPOSED
One N5 Order is two short skills (e.g. move and shoot), which equals two actions in Stargrave. So one activation = **one Order**.

| Who | Orders per activation |
|---|---|
| Pilot or TAG | 2 |
| Elite | 1 |
| Grunt or fireteam | 1 (a fireteam spends one Order for the whole team, as in N5) |

- An Elite's edge is acting earlier (its phase), better stats, and special skills, not extra Orders.
- Rough order count: about 12 Orders per side per round. Over **3 rounds**, that's close to N5's per-game order count. Three rounds also means N5 missions port over with little change.
- **Alternative:** Elites get 2 Orders. Elites matter more, but games run longer.

### 3.3 Reactions — LOCKED
- N5 AROs are the baseline.
- Full-Burst reaction comes from N5 **Suppressive Fire**.
- **PROPOSED:** Suppressive Fire lasts until the model's next activation. A Grunt that sets it in the Grunt phase then threatens the enemy's Pilot and Elite phases in the next round.

### 3.4 Force building — LOCKED (exact values PROPOSED)

| Slot | Rule |
|---|---|
| **Allocation** | 60 or 100 credits, agreed before the game |
| **Pilot + TAG** | One. Pilot fully custom, TAG assembled from component cards. |
| **Elites** | Up to 5, including reserves. Fixed profile + 1 kit. |
| **Elite cap expansion** | Pre-spend CP before the game to raise the cap; that CP isn't gained in round 1. Exchange rate is OPEN. |
| **Grunts** | 0 credits. Fill the remaining infantry slots. |
| **On-table cap** | 1 TAG or pilot + 10 infantry |

**PROPOSED:** seed Elite and component prices from N5 points (roughly N5 points ÷ 3, rounded). Then simplify into price bands where equal cost means roughly equal power.

### 3.5 Reinforcement — LOCKED

All reinforcements arrive in the **Command phase**. The 10-model cap is the only throttle. Use the first method that applies:

1. **Drop pod (costs CP):** anywhere on the board. It scatters and damages whatever it lands on.
   - **PROPOSED:** reuse N5's airborne-deployment scatter procedure, and add the impact damage.
2. **Rally (free):** within 6" of a friendly unit and out of line of sight of every enemy.
   - *Renamed from "Infiltrate" to avoid clashing with the N5 Infiltration skill.*
3. **Deployment zone (free):** only if neither of the above is possible.

- **Elites** reinforce only from reserves you built before the game.
- **Grunt** reserves are unlimited.

### 3.6 Pilots and TAGs — LOCKED (details PROPOSED)

| Rule | Detail |
|---|---|
| **Mount / dismount** | Free with any movement skill |
| **Eject** | When the TAG is destroyed, the pilot takes a test to eject. **PROPOSED:** a PH roll. |
| **Jockey** | Pilots only (for now). End any movement in base contact with an enemy TAG, then make a face-to-face roll between the two pilots. **PROPOSED:** WIP against WIP. |
| **Replacement TAG** | Choose from a **stock lineup** of TAGs, each costed in CP and paid during the game. Only a surviving pilot can call one, via a Mechfall beacon. It lands next Command phase and crushes anything under it. |

**OPEN:** can a pilot climb into an enemy TAG whose pilot has dismounted? Stealing an unmanned TAG would make dismounting a real risk.

### 3.7 Command Points — PROPOSED

CP is spent on:
- drop pods,
- replacement TAGs,
- Elite cap expansion,
- call-ins (§4.5).

**OPEN:**
- How CP is generated each round. Suggestion: a base amount, plus a bonus while your Lieutenant lives.
- Whether CP **replaces N5 Command Tokens** outright. We need to check every N5 rule that spends Command Tokens and map each one to CP.

### 3.8 Bases and line of sight — LOCKED

- **Infantry:** 25, 28.5, and 32mm bases count as identical. 40mm for heavy armor. Infantry use N5 silhouettes.
- **TAGs:** any base the model shipped on. Infinity TAGs use 55mm, BLKOUT Dusters 40–60mm, Arsenal MCVs 75mm. We *suggest* smaller bases for light TAGs and larger for heavy, but the rules are deliberately agnostic.
- **TAG line of sight:** checked against the model itself.
- If the two players' base sizes differ, they agree how to handle it before the game.

### 3.9 N5 rules that need translating — OPEN

| N5 rule | Problem | Starting suggestion |
|---|---|---|
| Order pool; Regular / Irregular orders | There's no Order pool any more | Drop them |
| Impetuous | No free impetuous orders | The model must move toward an enemy in its activation, or drop the rule |
| Lieutenant / Loss of Lieutenant | Loss of Lieutenant punishes the Order pool, which no longer exists | Lieutenant = an Officer Elite. Losing them reduces CP generation. |
| Retreat! | With unlimited Grunts, a casualty threshold makes little sense | Drop it |
| Command Tokens | Overlap with CP | See §3.7 |
| Specialist troops | ITS mission objectives need Specialists | Elites count as Specialists. Can Grunts ever hold objectives? |

---

## 4. Our content

### 4.1 TAG builder — PROPOSED
This is the main reason the project exists. Infinity's existing TAG profiles become **chassis**, and their weapon loadouts become **mount options**.

1. **Chassis card**
   - Weight class and manufacturer.
   - Base stats in N5 attributes: MOV, BS, ARM, BTS, STR, and the rest.
   - Hardpoint layout and Capacity.
2. **Weapon component cards:** Light, Medium, and Heavy mounts, using N5 weapons.
3. **System component cards:** N5-style equipment such as ECM and jump systems, plus new ones where N5 has a gap.
4. **Capacity** keeps each build coherent. Credits keep the whole force balanced.

### 4.2 Pilots — PROPOSED
- A pilot build is skills + sidearm + 1–2 gear.
- The pilot fights as a 25mm infantry model when dismounted.

### 4.3 Elites — PROPOSED
A large specialist pool modeled on standard Infinity specialists: Hacker, Doctor, Engineer, Forward Observer, Paramedic, Sniper, Missile Launcher, Officer/Lieutenant, and Heavy Infantry on a 40mm base.

Each Elite is a fixed profile plus **1 kit**.

### 4.4 Grunts and fireteams — PROPOSED
**One shared line-trooper profile.** Templates change only equipment:

| Template | Main equipment |
|---|---|
| Rifleman | Combi Rifle |
| Gunner | Spitfire |
| Grenadier | Light Grenade Launcher |
| AT Gunner | Panzerfaust |
| Corpsman | Paramedic + Combi Rifle |

**Fireteams:**
- 3–5 Grunts, with no duplicate templates except Rifleman.
- Fireteams are optional.
- Use N5 fireteam rules unless we decide otherwise.

**OPEN:**
- How a fireteam gets reinforced. Options:
  - **(a)** A Rally arrival within 6" may join the team.
  - **(b)** Teams are fixed at deployment. Survivors and reinforcements act as individuals.
  - **(c)** Something else after more thought.
- Does "mix and match" mean an Elite can join a Grunt fireteam? If so, that Elite activates in the Grunt phase, giving up its early activation.

### 4.5 Call-ins and other additions — REVIEW
These were our ideas before the N5 pivot. Some may now be redundant.

| Idea | What N5 already offers | Suggestion |
|---|---|---|
| Orbital call-ins (strikes, supply, support-weapon drops) | Nothing equivalent | **Keep.** A key difference from TAG Raid. |
| TAG Heat | Nothing; N5 doesn't track heat | Cut, unless the TAG builder needs an in-game tradeoff |
| Core abilities (TAG ultimates) | Nothing | Keep as a chassis feature, or cut for simplicity |
| Primers and Detonators | N5 states and special ammo likely cover some of this (check N5) | Cut. Lean on N5 states instead. |
| Experimental lasers | Check the N5 weapon list | Add only where N5 has a gap |

---

## 5. Components

- **Base game:** the N5 rules.
- **Dice and tokens:** d20s and N5 markers, plus:
  - Command Point (CP) tokens
  - Beacons
  - Drop pod markers
- **Cards:**
  - Unit cards
  - Weapon and gear cards
  - TAG component cards
  - Stock replacement-TAG cards
  - Mission cards
- **Miniatures per side:** 1 TAG, 1 pilot, up to 10 infantry, plus reserves.
- **Terrain:** a very dense 36"×36" board.

**Tooling note:** keep chassis, components, profiles, and templates as data tables. A list builder can then validate Allocations and print cards.

---

## 6. Open questions

1. **Orders per activation:** Pilot 2 / Elite 1 / Grunt 1 (my recommendation), or give Elites 2?
2. **Rounds:** 3, to match N5 and reuse its missions?
3. **Our additions** (§4.5): which survive the N5 pivot?
4. **Objectives:** are Elites the only Specialists, or can some Grunts hold objectives?
5. **Jockeying:** WIP vs WIP? Can a pilot steal an *unmanned* TAG?
6. **Fireteams:** can Elites join Grunt fireteams? How do teams get reinforced?
7. **CP:** how is it generated, what is the exchange rate for Elite cap expansion, and does it replace Command Tokens?
