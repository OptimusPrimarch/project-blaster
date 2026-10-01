# Project Blaster — Infinity N5 Mercenary Game Mode (v0.6 draft)

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
| 2 | Identity | Mercenary-company game mode in the Infinity universe. Non-commercial. No satire unless the setting supports it. | **LOCKED** |
| 3 | Rounds | 3 | **LOCKED** |
| 4 | Turn structure | Phases: Pilot → Elite → Tactical → Reinforcement. In each phase, one player takes a standard active turn, then the other. Only models of that phase's type spend Orders. | **LOCKED** |
| 5 | Order economy | Orders spent in early phases aren't available in later ones | **LOCKED** (mechanics PROPOSED, §2) |
| 6 | Lieutenant | Costs credits on any eligible model, the pilot included. NCO costs more. Using the Lieutenant Order reveals who the Lieutenant is, which is the counterweight. | **LOCKED** |
| 7 | Command Tokens | Fixed N5 pool, slightly enlarged, so they dwindle over the game. Expanded uses. | **LOCKED** |
| 8 | Suppressive Fire | N5 state, unchanged | **LOCKED** |
| 9 | Force cap | 1 TAG or pilot + 10 infantry on the table | **LOCKED** (see open question 3) |
| 10 | Allocation | 60–100 credits | **LOCKED** |
| 11 | Elites | Up to 5, including reserves. Profile + 1 kit. Cap expandable with Command Tokens. A second pilot is an expensive Elite option. | **LOCKED** |
| 12 | Grunts | 0 credits; shared profile; equipment templates. Corpsman and Spotter are specialists. | **LOCKED** |
| 13 | Fireteams | Dropped | **LOCKED** |
| 14 | Reinforcement | Arrive in the Reinforcement phase and act with their own Orders. Arriving isn't an action. | **LOCKED** (leaning) |
| 15 | Arrival methods | Drop pod (Command Token), else Deployment (Tactical), else deployment zone | **LOCKED** |
| 16 | Deployment (Tactical) | New skill; every reinforcing model has it | **LOCKED** |
| 17 | Calldowns | Orbital and aerial, with Speedballs as the baseline | **LOCKED** |
| 18 | Replacement TAG | Stock lineup costed in Command Tokens; called in by a pilot | **LOCKED** |
| 19 | Pilots | Fully custom. Free mount/dismount. Eject test. Jockey enemy TAGs with WIP vs WIP. Can steal unmanned TAGs. | **LOCKED** |
| 20 | TAG chassis | S6, S7, S8. Built from components. No Heat. | **LOCKED** |
| 21 | Signature slot | Every TAG gets one slot for its "special cool thing." Not called an ultimate; most options have no prerequisites. | **LOCKED** |
| 22 | Miniatures | Corvus Belli miniatures recommended; N5 silhouettes for every unit | **LOCKED** |
| 23 | Board | 36"×36", very dense | **LOCKED** |
| 24 | Victory | Objectives | **LOCKED** |
| 25 | Mode | PvP and PvPvE | **LOCKED** |
| 26 | List-building tool | New Recruit catalogue as the source of truth; cards generated from it later | **PROPOSED** (§8) |

---

## 1. Identity — LOCKED

**What the mode adds to Infinity:** a mercenary company you build to your heart's content.
- A **custom TAG**, assembled from chassis, components, and a Signature slot.
- A **custom pilot**.
- A pool of **Elite specialists**, modeled on the specialists in standard Infinity armies.
- **Grunts** as standard issue.

How it differs from *Infinity Deathmatch: TAG Raid*, Corvus Belli's official TAG-centered free-for-all:

| | TAG Raid | This mode |
|---|---|---|
| Format | 2–4 player free-for-all | 1v1, or 1v1 plus AI hostiles |
| Focus | TAGs are the stars | One TAG supporting up to 10 infantry |
| Engine | CodeOne | Full N5, with phases |
| Building | Not confirmed whether TAGs can be customized | TAGs built from components; custom pilots; specialist pool |
| Unique systems | Multiplayer | Reinforcements, Speedball calldowns, replacement TAGs, pilots who dismount and jockey enemy TAGs |

---

## 2. Round structure — LOCKED (details PROPOSED)

In every phase, the initiative player takes a standard N5 active turn, and the opponent reacts with AROs. Then the roles swap. Only models of that phase's type may spend Orders.

| # | Phase | Who spends Orders | Notes |
|---|---|---|---|
| 0 | **Start of round** *(PROPOSED)* | Nobody | Initiative. **Order Count for the whole round** (§2.1). |
| 1 | **Impetuous** *(PROPOSED)* | Impetuous troops | First, regardless of phase, per your earlier leaning |
| 2 | **Pilot** | Pilots and the TAG they're in | Includes a second pilot taken as an Elite |
| 3 | **Elite** | Elites | |
| 4 | **Tactical** | Grunts | The standard N5 turn, so N5 rules apply here unchanged |
| 5 | **Reinforcement** | New arrivals | Arrivals deploy, then act with their own Orders. Arriving isn't an action. |

### 2.1 Order economy — PROPOSED (my reading; confirm)
"The more Orders you spend up front, the less you'll have in the coming phases" needs a shared pool that lasts across phases. My reading:

- **Pilot and Elites are Regular.** They generate the pool.
- **Grunts are Irregular.** Each keeps its own Order for the Tactical phase.
- **The pilot's Tactical Awareness Order** is Irregular and belongs to the pilot.
- **The pool is counted once, at the start of the round.** Today N5 counts Orders at the start of each player's turn. That step has to move, because the Pilot and Elite phases come before the standard turn.
- Pool Orders left unspent carry down into later phases. Grunts can use them in the Tactical phase.

**The trade-off this creates:** the Pilot phase can pour pool Orders into the TAG, but every Order it takes is one an Elite or Grunt doesn't get. This brings back the standard Infinity choice of concentrating Orders on one model. So counter-TAG tools have to be solid: AT weapons, hacking, and jockeying.

**Watch:** N5 effects that last "until your next turn" (Suppressive Fire, for example). Proposed rule: a player's *turn* is their part of any phase, and such effects last until the start of that player's next **round**.

---

## 3. Orders and command — LOCKED

| Rule | Detail |
|---|---|
| **Lieutenant** | Required. Costs credits. The pilot and some Elites can take it. Using the Lieutenant Order reveals the Lieutenant (N5). |
| **NCO** | Costs more credits than Lieutenant |
| **Command Tokens** | The N5 pool, slightly enlarged. They are not regained. Uses: everything N5 allows, plus drop pods, replacement TAGs, expanding the Elite cap, and calldowns. |

---

## 4. Force building — LOCKED

| Slot | Rule |
|---|---|
| **Allocation** | 60 or 100 credits |
| **Pilot + TAG** | One. Pilot fully custom. TAG = chassis + components + Signature. |
| **Elites** | Up to 5, including reserves. Fixed profile + 1 kit. Cap expandable with Command Tokens. |
| **Second pilot** | An expensive Elite option. They can spend Command Tokens to call in a stock TAG as early as the first Pilot phase. This is intended; both players have the option. |
| **Grunts** | 0 credits. Fill the remaining infantry slots. |
| **On-table cap** | 1 TAG or pilot + 10 infantry (see open question 3) |

**PROPOSED:** seed Elite and component prices from N5 points (roughly N5 points ÷ 3, rounded), then simplify into price bands where equal cost means roughly equal power.

---

## 5. Reinforcement and calldowns — LOCKED

- **Timing:** reinforcements arrive in the **Reinforcement phase**, then act with their own Orders.
- **Throttle:** the 10-model cap is the only limit.

**Arrival methods.** Use the first that applies:
1. **Drop pod (costs a Command Token):** anywhere on the board. It scatters and damages whatever it lands on. Speedballs are the baseline.
2. **Deployment (Tactical):** a new skill that every reinforcing model has. The model must be placed within Zone of Control of an allied model and out of line of sight of every enemy.
3. **Deployment zone:** only if neither of the above is possible.

**Reserves:**
- **Elites** come only from reserves built before the game.
- **Grunt** reserves are unlimited.

**Replacement TAG:**
- Choose from a stock lineup, each TAG costed in Command Tokens.
- A pilot calls it in during the Pilot phase.
- **PROPOSED:** it lands in that round's Reinforcement phase.

**Calldowns:** orbital and aerial support, built on the Speedball baseline.

---

## 6. Pilots and TAGs — LOCKED

| Rule | Detail |
|---|---|
| **Mount / dismount** | Free with any movement skill |
| **Eject** | Test when the TAG is destroyed. **PROPOSED:** a PH roll. |
| **Jockey** | Pilots only. End any movement in base contact with an enemy TAG, then roll WIP vs WIP face-to-face. |
| **Unmanned TAGs** | A pilot can climb into an enemy TAG whose pilot has dismounted, and take it |

**TAG builder:**
- **Chassis** in three sizes: S6, S7, S8.
- **Weapon and system components** on mounts.
- **Signature slot:** one special ability or signature piece of gear. Most options have no prerequisites.
- **Capacity** keeps each build coherent. Credits keep the whole force balanced.
- No Heat.

**Pilots — PROPOSED:**
- Skills + sidearm + 1–2 gear.
- When dismounted, the pilot fights as an infantry model.

---

## 7. Elites and Grunts — LOCKED (lists PROPOSED)

**Elite pool:** Hacker, Doctor, Engineer, Forward Observer, Paramedic, Sniper, Missile Launcher, an Officer who can be Lieutenant, Heavy Infantry, and a **second pilot**.

**Grunts:** one shared profile. Templates change equipment only.

| Template | Equipment | Specialist? |
|---|---|---|
| Rifleman | Combi Rifle | |
| Gunner | Spitfire | |
| Grenadier | Light Grenade Launcher | |
| AT Gunner | Panzerfaust | |
| Corpsman | Paramedic + lighter weapon | Yes |
| Spotter | Forward Observer + lighter weapon | Yes |

---

## 8. List-building tool — PROPOSED: New Recruit first, cards later

### Recommendation
Build the **New Recruit catalogue as the single source of truth**. Generate printable cards from it later.

| | New Recruit catalogue | Hand-built cards |
|---|---|---|
| Rule enforcement | The builder enforces the Allocation, Elite cap, slots, and Capacity | Players check legality by hand |
| Changing a price | Edit once; every list updates | Reprint every affected card |
| Sharing | Players load it from a GitHub repo, on web or mobile | Print-and-play files |
| At the table | Text roster, less tactile | Tactile, and you physically "assemble" the TAG |
| Polish for the love letter | Functional | High |

**Why not choose:** cards made by hand alongside the catalogue would mean two copies of the same data to keep in sync. Instead, the catalogue files (.gst / .cat) are structured data, so a script can read them and lay out unit, weapon, and component cards once balance settles. Cards become a generated output, never a second copy.

### How New Recruit shapes the design
- **Write rules as data constraints wherever possible:** slot counts, min/max limits, cost limits. Prose exceptions are hard to enforce in a builder.
- **Cost types:** Credits, and Command Tokens (for pre-game spends like Elite cap expansion). Capacity could be a third cost type limited per TAG. **Prototype this early** to confirm the editor can cap a cost within one unit.
- **Expanding the Elite cap:** an option that costs Command Tokens and raises the Elite limit. The editor's modifiers should handle this.
- **Profile layouts:** set up N5-style unit attributes and weapon profiles once, and reuse them everywhere.

### Hosting
- New Recruit loads any GitHub repo with the .gst/.cat files **at the repo root**, via "Add or Remove games" → "Add from Github."
- It probably needs to be a public repo.
- Suggestion: a dedicated public repo for the catalogue. This repo stays the design workspace.

---

## 9. Cut list

| Cut | Why |
|---|---|
| Helldivers theme and satire | Satire stays only where the Infinity setting supports it |
| TAG Heat | Not in N5 |
| Primers and Detonators | Only Anthem's chassis variety was kept |
| "Ultimate" / Core abilities | Replaced by the Signature slot |
| Size-agnostic bases; true line of sight for TAGs | Replaced by Corvus Belli miniatures and N5 silhouettes |
| Command Points (CP) | Replaced by Command Tokens |
| Our Overwatch rule | Replaced by N5 Suppressive Fire |
| "Rally" reinforcement | Replaced by Deployment (Tactical) |
| Fireteams | Simplicity |
| Free Lieutenant on the pilot | The Lieutenant now costs credits |

---

## 10. Open questions

1. **Order economy:** is §2.1 the right reading? Pilot and Elites Regular, Grunts Irregular, pool counted once at the start of the round.
2. **Impetuous:** first in the round, before the Pilot phase?
3. **TAG cap:** with a second pilot, can **two TAGs** be on the table at once? Or can the second pilot only call one in after the first TAG is lost?
4. **Catalogue hosting:** a new public repo, or make this one public later?
