# Project Blaster — Foundations (v0 draft)

Working title from the repo name. Status tags: **PROPOSED** (my recommendation, awaiting your call), **LOCKED** (agreed), **OPEN** (needs discussion).

Influences: Titanfall, Helldivers, Infinity, Anthem, Lancer. Built from scratch; no rules or text from other projects.

---

## 1. Design pillars — PROPOSED

1. **Crunch at the workbench, speed at the table.** Every build choice compiles down to a short unit card. During play you need the cards plus a one-page keyword sheet, nothing else.
2. **Combined arms is mandatory.** Mechs own open lanes. Infantry own dense terrain and are the main threat to mechs up close. Neither wins alone.
3. **Infantry are characters.** Every trooper is built individually and named.
4. **Near-future hardware.** Ballistics are reliable workhorses. Lasers are experimental: accurate and armor-piercing, but they run hot and misbehave.
5. **Big moments.** Mech drops, rodeos, orbital strikes, ejections, and Core abilities should happen every game.

---

## 2. Tone — PROPOSED

**"Grounded at the boots, satirical at the top."**

- The fighting is brutal and personal, like Titanfall's frontier war.
- The institutions running the war (corporate charters, orbital command) are absurd and propaganda-soaked, like Helldivers.
- The pilot–mech bond is played straight.

How this shows up in the rules:
- Orbital support is powerful, but it's delayed, it scatters, and friendly fire is on.
- Command treats troopers as expendable. You don't, because they're named and built by hand.

Alternatives: straight-faced military SF, or full satire.

---

## 3. Scale, force size, board — PROPOSED

| Item | Recommendation |
|---|---|
| Force | 1–2 mechs + 6–10 infantry per side. The points budget forces a trade: one heavy mech and a bigger squad, or two light/medium mechs and a smaller one. |
| Model scale | 28–32mm (works with Infinity collections). Mechs about 4–6" tall on 50 / 60 / 80mm bases by weight class. Alternative: 15mm, which means cheaper mechs and a table that plays bigger. **OPEN** |
| Board | **36"×36" standard.** 24"×24" for intro or infantry-only games. 48"×48" for games with two heavy mechs. |
| Terrain | Dense and vertical: 40–50% coverage. "Mech lanes" (streets at least 4" wide) cross the board. Infantry can enter and climb buildings; mechs can't. |
| Line of sight | Fixed silhouette height per base size, so model poses never decide a shot. |
| Measuring | Inches. Pre-measuring allowed. Range bands: Short ≤8", Medium ≤16", Long ≤24", Extreme 24"+ (some weapons only). |
| Game length | 5 rounds, 60–90 minutes. |

---

## 4. Lethality — PROPOSED

**Lethality is asymmetric.**

- **Infantry are fragile** (1–2 Wounds). They survive through cover, movement, and stealth, not armor.
- **Mechs are durable and degrade before they die.** Armor cuts the damage of every hit, and a Structure track absorbs what gets through. Crits knock out weapons or mobility.
- **Doomed state:** at 0 Structure a mech becomes *Doomed*. It keeps fighting, and the next damage destroys it. The pilot may **Eject**, which places a Pilot model on the table.

Time-to-kill targets (we tune the numbers to hit these):

| Situation | Target |
|---|---|
| Trooper in the open, one rifle attack | ~70% dead |
| Trooper in heavy cover, one rifle attack | ~50% dead |
| Small arms vs mech | Only crits get through |
| Medium mech under focused anti-tank (AT) fire | Dead in 3–4 activations |
| End of a typical game | ~50–60% infantry casualties, ~1 mech destroyed or Doomed |

---

## 5. Activation — PROPOSED

**Alternating activations by Element.**

- An **Element** is either a fireteam (2–4 troopers) or one mech.
- Players take turns activating one Element at a time.
- When an Element activates, each trooper in it gets **2 actions**. A mech gets **3 actions**.

**Command Points (CP)** are the only shared resource.
- Each side generates CP every round from a base amount, plus Officer/Uplink troopers, plus mech pilots.
- Spend CP on:
  - **Reactions:** when an enemy acts in line of sight of one of your models that hasn't activated yet, pay 1 CP to snap-fire or dodge. This gives you Infinity's tension without its full reaction system.
  - **Call-ins:** see section 9.
  - **Rerolls.**
- Killing the enemy's leaders and Uplinks starves their CP.

Known risk to watch: **activation count**. A two-mech list has fewer Elements than an infantry-heavy list, so it runs out of activations first. The mech's 3 actions are partly there to offset this. We'll test it.

Alternatives: an Infinity-style order pool (more flexible, slower), or random chit-draw activation (more chaos, less control).

---

## 6. Dice resolution — PROPOSED

**d10 opposed pools: one roll per side, made at the same time.**

1. **Attacker** rolls dice equal to the weapon's **Rate**. Each die that meets the shooter's **Aim** (e.g. 6+) is a hit. The range band shifts Aim by ±1. A natural 10 is a **Crit**.
2. **Defender** rolls **Defense dice**: 1 base, +1 in light cover, +2 in heavy cover, plus traits. Each 6+ cancels one normal hit. Crits can't be cancelled.
3. Each hit that remains deals the weapon's **Damage minus the target's Armor**. **Pierce** lowers Armor. There are no further rolls.

Why d10:
- Each pip is a 10% step, so builds have real gradations. Aim 6+ vs 5+ is a meaningful upgrade.
- The natural-10 Crit gives weapon traits a clean hook to hang on.

Sanity check, single-Wound trooper:

| Attack | Open (1 die) | Light cover (2) | Heavy cover (3) |
|---|---|---|---|
| Rifle, Rate 3, Aim 6+ | 73% | 59% | 48% |
| Marksman, Rate 2, Aim 5+ | 64% | 48% | 36% |
| LMG, Rate 5, Aim 6+ | 91% | 83% | 74% |

The rifle hits the targets in section 4. The LMG is too lethal as plain damage, so it should lean on suppression.

Alternatives:
- **d6 opposed** (Kill Team-like): more familiar, but coarser 16.7% steps.
- **d20 face-to-face** (Infinity-like): fine-grained, one die each, but swingier.

---

## 7. Mech construction — PROPOSED

This is where most of the list-building crunch lives. It mixes Lancer's frames and mounts, Anthem's javelin classes and gear, and Titanfall's titan kits and Cores.

1. **Chassis**
   - Weight class (Light / Medium / Heavy) and manufacturer.
   - Base stats: Move, Armor, Structure, Heat Cap, Evasion.
   - Hardpoint layout, Capacity, a unique Chassis Trait, and a **Core** ability.
2. **Hardpoints**
   - Light, Medium, and Heavy mounts.
   - A mount holds a weapon of its size or smaller.
3. **Systems**
   - Utility slots: jump jets, ECM, shield, point defense, smoke, anti-rodeo countermeasures.
4. **Two budgets**
   - **Capacity** is per chassis and keeps each build coherent.
   - **Points** are army-wide and keep forces balanced against each other.
5. **Pilot:** 1–2 perks.
6. **Core:** a chassis-specific ultimate. The Core meter fills over the game (+1 per round, +1 when damaged). It fires once when full.

**Heat** is the in-game tradeoff:
- Lasers, boosting, and overcharging build Heat. Going over Heat Cap triggers overheat effects.
- Ballistics run cool, but heavy ballistics have Limited ammo.

Starting chassis idea: 6 at launch, 2 per weight class, each with a distinct identity. For example: a fast Light with jump jets; a shield-wall Heavy; an experimental laser frame with a high Heat Cap.

---

## 8. Infantry construction — PROPOSED

**Trooper = Role + Primary weapon + Secondary weapon + 2 Gear slots + optional Veteran trait.**

- **Roles:** Rifleman, Gunner, Marksman, Breacher, AT Specialist, Tech, Medic, Officer/Uplink.
- **Gear** (Titanfall pilot tactical abilities + Helldivers backpacks):
  - Movement: grapple, jump pack.
  - Survival: cloak, stim, shield pack, deployable cover wall.
  - Support: supply pack, drone.
  - Grenades: arc and thermite.
- **Anti-mech tools:**
  - AT launchers and sticky charges.
  - **Rodeo:** a trooper in base contact climbs the mech and attacks a weak point, ignoring Armor. The mech can try to shake them off.
  - Ejected pilots fight as infantry.

---

## 9. Combos and call-ins — PROPOSED

**Primers and Detonators** (from Anthem)
- There are 3–4 status types, e.g. *Burning* (thermite), *Shocked* (arc), *Marked* (laser designator).
- Primer weapons apply a status token. Detonator weapons consume it for a bonus effect.
- Combos work across Elements: infantry prime, mech detonates. This rewards combined arms and gives list builders synergies to hunt for.

**Call-ins** (Helldivers stratagems)
1. An Officer or Uplink trooper spends CP and throws a beacon (places a marker).
2. The call-in resolves at the start of the next round, after scatter. Friendly fire is on.
3. Options include orbital strike, supply drop, support-weapon drop, reinforcements, and **Mechfall**.
4. **Mechfall:** a mech held in orbit drops onto the beacon. Anything under it takes crush damage.

Area effects use "all models within X inches of a point." There are no templates.

---

## 10. Components — PROPOSED

- **Dice:** about 10 d10s per player, in two colors (attack and defense).
- **Measuring:** a tape measure, or range-band rulers.
- **Tokens:**
  - Activated
  - Status types (3–4)
  - Doomed
  - Call-in beacons
  - Objectives
- **Mech tracking:** Structure, Heat, and Core tracks on a dry-erase mech card, or dials.
- **Cards:**
  - Compiled unit cards, generated by a list builder
  - A one-page keyword sheet
  - Mission cards
- **Miniatures:** 6–10 infantry and 1–2 mechs per side.
- **Terrain:** enough dense, vertical terrain for a 36"×36" board.

**Tooling note:** list building carries the crunch, so chassis, weapons, and gear should live as data tables from day one. A builder can then validate lists and print unit cards.

---

## 11. Open questions

1. Is the tone right?
2. Is the lethality dial right, or do you want it more Infinity-lethal?
3. PvP only, or a co-op PvE mode as well (Helldivers-style AI enemies)?
4. How should pilots work?
   - (a) Abstract: the pilot only appears as a model on ejection.
   - (b) Full Titanfall: the pilot is a separate model that embarks and disembarks.
5. Dice: d10 opposed, d6, or d20?
6. Scale: 28mm or 15mm? What miniatures do you already own?
7. Later: a campaign mode where named troopers gain experience?

---

## Decision log

| # | Topic | Decision | Status |
|---|---|---|---|
| 1 | Tone | Grounded at the boots, satirical at the top | PROPOSED |
| 2 | Lethality | Asymmetric; time-to-kill targets in section 4 | PROPOSED |
| 3 | Activation | Alternating by Element + CP reactions | PROPOSED |
| 4 | Dice | d10 opposed pools | PROPOSED |
| 5 | Board | 36"×36", dense and vertical | PROPOSED |
| 6 | Scale | 28–32mm | OPEN |
