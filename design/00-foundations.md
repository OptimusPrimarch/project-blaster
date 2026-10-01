# Project Blaster — Infinity N5 Mercenary Game Mode (v0.5 draft)

A **non-commercial, fan-made game mode for Infinity N5**, intended as a love letter to Corvus Belli.

**How to read this doc:** N5 is the baseline for everything. This document records only:
1. What we **change** from N5.
2. What we **add** on top.

Anything not mentioned here follows N5. We reference N5 rules rather than reproducing them.

Status tags:
- **LOCKED**: agreed.
- **PROPOSED**: my recommendation, waiting on your call.
- **OPEN**: needs discussion.
- **CUT**: removed.

---

## Decision log

| # | Topic | Decision | Status |
|---|---|---|---|
| 1 | Baseline | Infinity N5: dice, attributes, weapons, range bands, AROs, armor, states | **LOCKED** |
| 2 | Identity | Mercenary-company game mode set in the Infinity universe. Non-commercial. | **LOCKED** |
| 3 | Rounds | 3 | **LOCKED** |
| 4 | Turn structure | Standard N5 turns, or phased alternating activations | **OPEN** (§2) |
| 5 | Orders | Most troops Irregular. The pilot gets Tactical Awareness. | **LOCKED** |
| 6 | Lieutenant | Kept. The pilot may take it for free, or buy NCO instead. Lieutenant options exist among Elites. | **LOCKED** |
| 7 | Impetuous | Acts first in the round | **LOCKED** (leaning; §3) |
| 8 | Suppressive Fire | N5 state, unchanged | **LOCKED** |
| 9 | Command Tokens | N5 Command Tokens with expanded uses. They replace our CP idea. | **LOCKED** |
| 10 | Force cap | 1 TAG or pilot + 10 infantry on the table | **LOCKED** |
| 11 | Allocation | 60–100 credits | **LOCKED** |
| 12 | Elites | Up to 5, including reserves. Profile + 1 kit. Cap expandable with Command Tokens. | **LOCKED** |
| 13 | Grunts | 0 credits; shared profile; equipment templates; one specialist template | **LOCKED** |
| 14 | Fireteams | Dropped for simplicity | **LOCKED** (tentative) |
| 15 | Reinforcement | Drop pod (Command Token), else Deployment (Tactical), else deployment zone | **LOCKED** |
| 16 | New skill | **Deployment (Tactical)**. N5 Infiltration is unchanged. | **LOCKED** |
| 17 | Calldowns | Orbital and aerial calldowns, with Speedballs as the baseline | **LOCKED** |
| 18 | Replacement TAG | Stock lineup costed in Command Tokens; only a surviving pilot can call one | **LOCKED** |
| 19 | Pilots | Fully custom. Free mount/dismount. Eject test. Jockey enemy TAGs with WIP vs WIP. Can steal unmanned TAGs. | **LOCKED** |
| 20 | TAG chassis | Three sizes from N5 silhouettes: S6, S7, S8. Built from component cards. No Heat. | **LOCKED** |
| 21 | Miniatures | Corvus Belli miniatures recommended; N5 silhouettes for every unit | **LOCKED** |
| 22 | Board | 36"×36", very dense terrain | **LOCKED** |
| 23 | Victory | Objectives, not body count | **LOCKED** |
| 24 | Mode | PvP and PvPvE | **LOCKED** |

---

## 1. Identity

**What the mode adds to Infinity:** a mercenary company you build to your heart's content.
- A **custom TAG**, assembled from chassis and component cards.
- A **custom pilot**.
- A pool of **Elite specialists**, modeled on the specialists in standard Infinity armies.
- **Grunts** as standard issue.

How it differs from *Infinity Deathmatch: TAG Raid*, Corvus Belli's official TAG-centered free-for-all:

| | TAG Raid | This mode |
|---|---|---|
| Format | 2–4 player free-for-all | 1v1, or 1v1 plus AI hostiles |
| Focus | TAGs are the stars | One TAG supporting up to 10 infantry |
| Engine | CodeOne | Full N5 |
| Building | Not confirmed whether TAGs can be customized | TAGs built from components; custom pilots; specialist pool |
| Unique systems | Multiplayer | Reinforcements, Speedball calldowns, replacement TAGs, pilots who dismount and jockey enemy TAGs |

---

## 2. Turn structure — OPEN

If most troops are Irregular, standard N5 turns become workable, so the earlier decision on phases is back on the table.

**Option A — Standard N5 turns, most troops Irregular** (recommended)
- Each player gets a full active turn, as in N5.
- Each model can spend only its own Irregular Order. The pilot has 2, from Tactical Awareness.
- **Pros:**
  - **No translation work.** Every N5 rule that refers to the active turn, the reactive turn, or a start-of-turn step works unchanged. This includes Suppressive Fire timing, Command Token timing, the Impetuous phase, and the Lieutenant.
  - **Irregular Orders already do what the phases were for.** No model can soak up the whole force's Orders, so the TAG can't rampage. That makes counter-TAG balance much easier.
  - **Impetuous-first is already how N5 works.** Impetuous Orders are spent at the start of the active turn.
  - **Familiar.** An Infinity player can pick it up instantly. It reads as a game mode, not a new game.
- **Cost:**
  - You lose the Stargrave-style interleaving and the importance-based activation order.
  - The first turn swings harder, because one side moves everything before the other acts. Irregular Orders soften this: each model gets only its own Order.

**Option B — Phased alternating activations** (Command → Impetuous → Pilot → Elite → Grunt)
- **Pros:**
  - Less downtime.
  - Importance sets the activation order.
  - A more distinctive feel.
- **Cost:**
  - Every N5 rule tied to active or reactive turns needs a translation rule.
  - Command Token timing needs one too.
  - Mission scoring steps need one too.

---

## 3. Orders and command — LOCKED (details PROPOSED)

| Rule | Detail |
|---|---|
| **Orders** | Most troops are Irregular, so each spends only its own Order |
| **Pilot** | Has Tactical Awareness, giving 2 Orders. These Orders also drive the TAG while the pilot is mounted. |
| **Lieutenant** | Required. The pilot may take it for free, or buy NCO instead. Some Elite profiles offer a Lieutenant option. |
| **Impetuous** | Acts first. Native to N5 under Option A; its own phase before Pilot under Option B. |
| **Command Tokens** | N5 uses, plus: drop pods, replacement TAGs, expanding the Elite cap, calldowns |

**Watch: a pilot Lieutenant inside the TAG.** If N5 still gives the Lieutenant an extra Order of its own, a pilot Lieutenant gives the TAG **3 Orders a turn**. That's the counter-TAG risk you flagged. Options:
- Allow it, and price the TAG accordingly.
- The Lieutenant's extra Order can't be spent while the pilot is mounted.
- Make Lieutenant on the pilot cost credits, not come free.

**Check: the Command Token economy.** N5 Command Tokens are (I believe) a fixed allotment per game, not income each round. Verify this. If so, we expand their uses by either:
- Adding per-round income. Then "pre-spend to expand the Elite cap" means "skip round-1 income."
- Enlarging the starting pool. Then pre-spending simply means starting with fewer.

---

## 4. Force building — LOCKED

| Slot | Rule |
|---|---|
| **Allocation** | 60 or 100 credits, agreed before the game |
| **Pilot + TAG** | One. Pilot fully custom; TAG assembled from chassis and component cards. |
| **Elites** | Up to 5, including reserves. Fixed profile + 1 kit. Cap expandable with Command Tokens. |
| **Grunts** | 0 credits. Fill the remaining infantry slots. |
| **On-table cap** | 1 TAG or pilot + 10 infantry |

**Objectives:**
- Elites are the main specialists.
- One Grunt template gives up its heavier weapon to become a specialist.

**PROPOSED:** seed Elite and component prices from N5 points (roughly N5 points ÷ 3, rounded), then simplify into price bands where equal cost means roughly equal power.

---

## 5. Reinforcement and calldowns — LOCKED

The 10-model cap is the only throttle on reinforcements. Use the first method that applies:

1. **Drop pod (costs a Command Token):** anywhere on the board. It scatters and damages whatever it lands on. **Speedballs** are the baseline.
2. **Deployment (Tactical)** — a new skill. Works like N5's other deployment skills. The model must be placed within Zone of Control of an allied model and out of line of sight of every enemy.
3. **Deployment zone:** only if neither of the above is possible.

- **Elites** reinforce only from reserves you built before the game.
- **Grunt** reserves are unlimited.
- **PROPOSED:** every reinforcing model has Deployment (Tactical) by default.
- **OPEN:** can reinforcements act on the turn they arrive?

**Calldowns:**
- Orbital and aerial support, built on the Speedball baseline.
- These are mercenary assets, with no Helldivers theme.

**Replacement TAG:**
- Choose from a stock lineup, each TAG costed in Command Tokens.
- Only a surviving pilot can call one in.

---

## 6. Pilots and TAGs — LOCKED

| Rule | Detail |
|---|---|
| **Mount / dismount** | Free with any movement skill |
| **Eject** | Test when the TAG is destroyed. **PROPOSED:** a PH roll. |
| **Jockey** | Pilots only. End any movement in base contact with an enemy TAG, then roll WIP vs WIP face-to-face. |
| **Unmanned TAGs** | A pilot can climb into an enemy TAG whose pilot has dismounted, and take it |

**TAG builder:**
- **Chassis** come in three sizes, matching N5 TAG silhouettes: **S6, S7, S8**.
- **Weapon and system component cards** on mounts.
- **Capacity** keeps each build coherent. Credits keep the whole force balanced.
- **No Heat.** Customization depth comes from chassis, mounts, systems, and the pilot build.

**Pilots:**
- **PROPOSED:** skills + sidearm + 1–2 gear.
- When dismounted, the pilot fights as an infantry model.

---

## 7. Elites and Grunts

**Elites — PROPOSED pool:** Hacker, Doctor, Engineer, Forward Observer, Paramedic, Sniper, Missile Launcher, Lieutenant-capable Officer, and Heavy Infantry.

**Grunts — LOCKED: one shared profile; templates change equipment only.**

**PROPOSED templates:**

| Template | Equipment |
|---|---|
| Rifleman | Combi Rifle |
| Gunner | Spitfire |
| Grenadier | Light Grenade Launcher |
| AT Gunner | Panzerfaust |
| Corpsman | Paramedic + Combi Rifle |
| **Specialist** | A lighter weapon + N5's Specialist skill |

Check: if N5 still counts Paramedics as Specialist troops, the Corpsman already fills the Specialist role, and the two templates could merge.

---

## 8. Miniatures, bases, board — LOCKED

- Corvus Belli miniatures are recommended.
- Every unit, TAGs included, uses N5 silhouettes and base sizes.
- 36"×36" board with very dense terrain.

---

## 9. Cut list

| Cut | Why |
|---|---|
| Helldivers theme and satire | Fit neatly into the Infinity universe *(confirm the satire goes too)* |
| TAG Heat | Not in N5; customization comes from elsewhere |
| Primers and Detonators | Only Anthem's chassis variety was kept |
| Core abilities (TAG ultimates) | Assumed cut along with the Anthem pieces *(confirm)* |
| Size-agnostic bases; true line of sight for TAGs | Replaced by Corvus Belli miniatures and N5 silhouettes |
| Command Points (CP) | Replaced by Command Tokens |
| Our Overwatch rule | Replaced by N5 Suppressive Fire |
| "Rally" reinforcement | Replaced by the Deployment (Tactical) skill |
| Fireteams | Simplicity (tentative) |

---

## 10. Components

- **Base game:** the N5 rules.
- **Dice and tokens:** d20s and N5 markers, plus drop-pod and calldown markers.
- **Cards:**
  - Unit cards
  - Weapon and gear cards
  - TAG chassis and component cards
  - Stock replacement-TAG cards
  - Mission cards
- **Miniatures per side:** 1 TAG, 1 pilot, up to 10 infantry, plus reserves.
- **Terrain:** a very dense 36"×36" board.

**Tooling note:** keep chassis, components, profiles, and templates as data tables. A list builder can then validate Allocations and print cards.

---

## 11. Open questions

1. **Turn structure:** Option A (standard N5, recommended) or Option B (phased)?
2. **Pilot as Lieutenant:** how do we handle the possible 3-Order TAG (§3)?
3. **Command Tokens:** per-round income, or a bigger starting pool?
4. **Reinforcements:** can they act on the turn they arrive?
5. **Confirm the cuts:** Core abilities, and the satirical tone.
