# 2. Combat

*Part of the [rules draft](README.md). Tags: **[Proposed]** = awaiting a yes or no. **[Open Q#]** = see [open-questions.md](open-questions.md).*

## 2.1 Melee (FIGHT)

The **attacker** is the model that charged, or the activating model if it did not charge. The other model is the **defender**.

1. **Roll.** Both models roll their melee attack dice at once, with any BOON or BANE. The number of dice comes from the weapons wielded: Inferior weapons roll 2, Quality weapons 3, Magical weapons 4 (see [Equipment](03-equipment.md)). An off-hand weapon adds one die (2.5).
2. **Find hits.** A die that meets or beats its roller's own Fight is a **HIT**. A natural 6 is a **CRIT**. Discard every other die.
3. **Allocate.** Starting with the attacker, the players alternate allocating one hit at a time to either **STRIKE** or **PARRY**.
   - **STRIKE.** The hit is aimed at the opponent, who makes an armor save (2.3). If the save fails, they take the hit's damage: the weapon's damage, or its crit damage for a crit.
     **[Proposed, Open Q3]** A strike resolves immediately. If it slays a model, the sequence ends at once and all unallocated hits are lost.
   - **PARRY.** Choose one of the opponent's hits that has not been allocated and discard it. **A crit strike can only be cancelled by a crit parry.**
     **[Proposed]** A crit can parry either a crit or a normal hit. A normal hit can only parry a normal hit.
4. If one player runs out of hits, the other allocates the rest as strikes.
5. The sequence ends when every hit is allocated or a model is slain.

### Example

A Sellsword (FGT 3+, sword: 3 dice, Dmg 2, Crit D3+1, Save 5+) charges a Brigand (FGT 4+, axe: 3 dice, Dmg 2, Crit D3, Save 6+, 3 Wounds).

- The Sellsword rolls 6, 4, 2. That is one crit and one normal hit. The 2 misses.
- The Brigand rolls 5, 4, 1. That is two normal hits. The 1 misses.

Allocation, attacker first:

1. Sellsword **strikes** with the normal hit. Brigand saves at 6+, rolls a 3 and fails. He takes 2 damage (1 Wound left).
2. Brigand must allocate. A normal hit cannot parry the Sellsword's crit, so he **strikes**. Sellsword saves at 5+, rolls a 5 and shrugs it off.
3. Sellsword **strikes** with the crit. Brigand saves at 6+, rolls a 2 and fails. Crit damage D3+1 rolls 3. The Brigand is slain, and his last hit is lost.

## 2.2 Ranged (SHOOT) [Proposed]

The target must be visible (see [Terrain](05-terrain-and-movement.md)).

1. Roll the weapon's dice, with BOON and BANE from:
   - cover: BANE 1 (2.4)
   - cloak: BANE 1 (see [Equipment](03-equipment.md))
   - vantage: BOON 1 per full 3" above the target
   - AIM: BOON 1
2. A die that meets or beats the attacker's Shoot is a hit. A natural 6 is a crit.
3. The target makes a save against each hit (2.3).

There is no parry against ranged attacks.

**No range bands.** Range is line of sight unless a weapon says otherwise (Voidwatch PT#1: "No rangebands; they're too slow."). **[Open Q8]**

## 2.3 Armor Saves and Damage

- Whenever a hit would deal damage, the target rolls **one die** against its **Save** and shrugs the damage off on a success. Roll one save per hit.
- Every model starts with a **6+** Save. Armor and cover improve it (see [Equipment](03-equipment.md)). A Save is never better than 2+.
- BOON and BANE apply to the save die. **RENDING X** on a weapon gives the target BANE X on saves against that weapon's hits.
- **[Proposed, Open Q4]** Crit hits get a save like any other hit.
- A crit ignores hard leather: use the Save the model would have without it. Everything else still applies (see [Equipment](03-equipment.md)).
- **Damage reduction.** If the save fails, reduce the damage by the stated amount (minimum 1) before applying it.
- Damage is tracked on the model. When the damage sustained equals its Wounds, the model is slain and removed immediately.
- Weapon damage is 1-3. Crit damage is D3, D3+1, D6 or D6+1, as listed on the weapon.

## 2.4 Cover

**[Proposed, Voidwatch §4.2]** A model is in cover if it is within 1" of terrain that obstructs it from its attacker.

A target in cover gets:

- **Ranged and melee:** +1 to its armor save (6+ becomes 5+, and so on, to a best of 2+).
- **Ranged only:** the attacker rolls with BANE 1.

## 2.5 Dual Wielding

A model wielding a weapon in each of two hands can add **exactly one** attack die to its melee sequence, using the off-hand weapon's profile (its damage, crit damage and keywords).

If both weapons are identical, the model also scores **one extra hit** on any natural 6. The extra hit is a normal hit, not a crit. It is allocated like any other hit.

*Example.* Two swords: 3 dice from the main hand plus 1 off-hand die, so 4 dice. Each natural 6 is a crit and also produces one extra normal hit.

Dual wielding uses two of the model's three hands (see [Equipment](03-equipment.md)).

## 2.6 Blasts and Scatter [Proposed, Open Q16]

A weapon with **BLAST X** affects every model within X" of the impact point (measured from the marker to the base edge).

1. Declare a target model or a point. Place an impact marker there.
2. The attacker rolls a SHOOT test: one die against its Shoot, with BOON and BANE (AIM gives BOON 1). On a success it is a **direct hit** and the marker stays.
3. On a failure the marker **scatters**. Roll a d6 for the distance in inches and a d6 for the direction. Direction 1 is straight back toward the attacker. Directions 2-6 follow clockwise in 60 degree steps, so 4 is straight away.
4. Every model within X" of the marker, friend or foe, takes one hit at the weapon's fixed blast damage and rolls a save.

## 2.7 Quick Reference

**Melee:** roll dice > hits are dice that meet the roller's own Fight > attacker allocates first, then alternate: STRIKE (save, then damage) or PARRY (discard an unallocated hit; crits only stop crits) > slain model ends the sequence.

**Save:** one die per hit vs Save (6+ base). Best is 2+. BOON/BANE apply. Cover +1. Crit? Hard leather doesn't count.
