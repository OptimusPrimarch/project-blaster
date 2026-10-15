# Hex Deck MOBA — Design Doc v0.1

Working title. A separate game from Voidwatch (different rules, setting and stat names).

**All numbers are placeholders.** v0.1 exists to be playtested and broken. See [Tuning knobs](#9-tuning-knobs--open-questions).

---

## 1. Overview

| | |
|---|---|
| Players | 2 (PvP). Co-op vs AI is a later mode. |
| Forces | 3 hero miniatures per side |
| Length | 45–60 min target |
| Board | Hex grid, radius 5 (91 hexes) |
| Win | Destroy the enemy **Core**. Fallback: after Round 10, the Core with more HP left wins. |

### Pillars

1. **Attributes are deck "colors."** STR / DEX / INT gate which cards a hero can play and scale how hard they hit.
2. **A MOBA in miniature.** Heroes level up, earn gold and fight over objectives.
3. **Deck-building happens twice.** Before the match (construct) and during it (buy cards from the Market with gold).
4. **Hexes make position matter.** Facing, flanking, push/pull and area shapes.
5. **The deck is the dice.** Damage is deterministic; variance comes from what you draw.

---

## 2. Attributes

Every hero has STR, DEX and INT scores. Each does three jobs: a **hero stat**, a **card gate**, and a **card scaling** source.

| | STR | DEX | INT |
|---|---|---|---|
| **Hero stat** | Health = 10 + 3 × STR | Move = 3 + ⌊DEX ÷ 3⌋ hexes | Energy = 2 + ⌊INT ÷ 2⌋ per round |
| **Card flavor** | Melee, Block, push | Range, dashes, flanking | Spells, areas, card draw |
| **Weakness** | Slow, low Energy | Fragile | Low Health |

- **Gate:** a card lists a requirement like `STR 3`. The hero playing it must have at least that score. Some cards need two (`STR 2 + INT 2`) to reward mixed heroes.
- **Scaling:** card text uses the playing hero's scores, e.g. "Deal 2 + STR."
- Round all fractions **down**.

---

## 3. Heroes

Starting scores total 9 (primary 5, others 2). Level cap is 4; each level gives +1 to any attribute.

| Hero | STR | DEX | INT | Health | Move | Energy | Passive |
|---|---|---|---|---|---|---|---|
| **Warden** (STR) | 5 | 2 | 2 | 25 | 3 | 3 | Adjacent allies gain 1 Block at the start of each round |
| **Ranger** (DEX) | 2 | 5 | 2 | 16 | 4 | 3 | +1 damage on attacks from 3+ hexes away |
| **Mystic** (INT) | 2 | 2 | 5 | 16 | 3 | 4 | Draw 1 extra card at the start of a round if Mystic is alive |

Each hero also has one **Signature card** (see §4), unlocked at Level 3.

---

## 4. Cards & Decks

### Card anatomy

`Name | Energy cost | Attribute requirement | Type | Range / Area | Effect`

**Types:** Attack · Skill · Gear (stays attached to the hero; max 2 slots) · Signature (hero-locked).

### Deck construction (before the match)

- **27 pool cards** chosen from the card pool, max 3 copies of any card.
- **+ 3 Signature cards**, one per hero, added automatically (only that hero can play it).
- One shared **team deck**: any hero meeting a card's requirement can play it.
- Total warband attributes act like color identity: a STR-heavy team plays heavy cards well, a mixed team has flexibility but weaker cards.

### Market (during the match)

- A shared face-up row of **5 Market cards**, refilled from a Market deck. Each has a **Gold cost**.
- Buying a card puts it in **your discard pile**, so it joins your deck at the next reshuffle (like Dominion).

### Draw rules

- Draw pile empty → shuffle discard pile to form a new one.
- **Hand limit 8**; discard down at end of round.

---

## 5. Round Structure

1. **Start:** Each player draws 2 cards per living hero. All heroes refresh Energy. First player alternates each round.
2. **Activation phase:** Players alternate activating one hero at a time until all living heroes have activated once. An activation is:
   - **Move** up to the hero's Move in hexes. May be split before and after playing cards. Then pivot freely to any facing.
   - **Play cards** by spending that hero's Energy. A card must meet its attribute requirement and have a legal target.
3. **End:** Towers fire. Collect Gold and XP. Level up. Buy from the Market (non-first player buys first). Respawns happen. Discard to hand limit.

---

## 6. Hex Rules

- **Board:** Radius-5 hex grid, mirrored. Cores in opposite corners. Each Core has a **Tower** in front of it.
- **One model per hex.** Models cannot move through other models. No zones of control in v0.1.
- **Distance:** counted in hexes. **Line of sight:** a straight line between hex centers; **Wall** hexes block it.
- **Facing:** each hero points at one of the 6 edges. The 3 hexes behind a hero are its **rear arc**.
  - A **melee** attack from the rear arc deals **+2 damage** (flank). Ranged attacks get no flank bonus in v0.1.
- **Push / Pull:** move the target along a hex line. If blocked by a Wall or model, the target takes 2 damage instead.
- **Area shapes:** *Flower* (a hex + its 6 neighbors), *Line* (N hexes straight), *Cone* (3 wide at distance 2).
- **Terrain:** *Wall* (blocks movement and LoS), *Brush* (a hero inside can't be targeted from more than 2 hexes away).
- **Buildings:**
  - **Tower:** 12 HP. At end of round, deals 3 damage to the nearest enemy within 3 hexes.
  - **Core:** 20 HP. Cannot be damaged while its Tower stands.
- **Camps:** 4 neutral camps in the central ring. A camp has 6 HP and no attacks. Killing it gives 2 Gold + 1 XP, and it returns after 2 rounds.

---

## 7. Economy & Progression

| Source | Reward |
|---|---|
| Each round | +2 Gold to both players |
| Camp kill | +2 Gold, +1 XP to the killer |
| Enemy hero kill | +2 + victim's Level Gold; +2 XP to the killer |
| Tower kill | +3 Gold to your team |
| Every 2nd round | +1 XP to every hero (catch-up) |

- **Level thresholds:** 3 / 6 / 10 XP → Levels 2 / 3 / 4. Each level: +1 attribute of your choice (stats recalculate).
- **Respawn:** a dead hero returns to its Core at the start of its owner's 3rd round after death, at full Health. Dead heroes don't generate draws.

---

## 8. Sample Cards

**STR (Brawl)**

| Card | Cost | Req | Effect |
|---|---|---|---|
| Shield Bash | 1 | STR 2 | Melee. Deal 2 + STR. Push the target 1 hex. |
| Bulwark | 1 | STR 2 | Gain Block equal to 2 + STR until your next activation. |
| Cleave | 2 | STR 4 | Melee. Deal 2 + STR to every enemy in your 3 front hexes. |

**DEX (Skirmish)**

| Card | Cost | Req | Effect |
|---|---|---|---|
| Quick Shot | 1 | DEX 2 | Range 4. Deal 1 + DEX. |
| Slipstep | 1 | DEX 3 | Move up to 2 hexes. Draw 1 card. |
| Backstab | 1 | DEX 3 | Melee. Deal 2 + DEX. Double damage if you attack from the target's rear arc. |

**INT (Arcane)**

| Card | Cost | Req | Effect |
|---|---|---|---|
| Arc Bolt | 1 | INT 2 | Range 5, Line of Sight. Deal 1 + INT. |
| Frost Ring | 2 | INT 3 | Range 3, Flower. Deal INT to all enemies. They get −1 Move next activation. |
| Insight | 1 | INT 2 | Draw 2 cards, then discard 1. |

**Hybrid & Market examples**

| Card | Cost | Req | Effect |
|---|---|---|---|
| Runic Strike | 2 | STR 2 + INT 2 | Melee. Deal STR + INT. |
| Boots of Haste *(Gear, 4 Gold)* | 1 | none | Attach. +1 Move. |
| Healing Salve *(Skill, 2 Gold)* | 1 | none | Heal an adjacent ally or yourself for 4. |

---

## 9. Tuning Knobs & Open Questions

**First things to tune**
- Time to kill: aim for a hero to die after ~2 rounds of focused fire. Current numbers may be faster.
- Draw rate (2 per hero) vs Energy: the hand should be the bottleneck, not Energy.
- Gold per round vs Market prices.

**Open questions**
- Do **Signature cards** feel bad when stuck in hand while their hero is dead?
- Is melee-only flanking enough, or does INT/ranged need a counter to it?
- Are **minions or lanes** needed for the MOBA feel, or are camps + towers enough?
- Does the shared deck let one hero hog all the good cards?
- Is a no-ZOC board too slippery for melee?

---

## 10. Prototype Plan

1. Print/draw a radius-5 hex map. Use coins or any figures as heroes.
2. Write the 12 cards above on index cards. Fill out to ~30 with copies.
3. Play 1v1 team-vs-team against yourself or a friend. Log: which round was the first kill, who won and what felt bad.
4. Update this doc, bump to v0.2 and commit. Git history becomes your changelog.
