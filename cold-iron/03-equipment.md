# 3. Equipment

*Part of the [rules draft](README.md). Tags: **[Proposed]** = awaiting a yes or no. **[Open Q#]** = see [open-questions.md](open-questions.md).*

Equipment is modular **[Proposed]**: a model is a base profile plus items. Items change the Save, add dice, grant BOON or BANE, or add keywords.

## 3.1 Hands [Proposed, Open Q1]

Every model has **3 hands**.

- One-handed weapons, shields and torches cost 1 hand.
- Two-handed weapons cost 2 hands.
- Worn items (body armor, headgear, cloaks) cost no hands.
- Shields and bucklers are **held**, not worn, so they use a hand.
- A model cannot carry more than 3 hands' worth of items.

*Examples.* Sword + shield + torch = 3. Greatsword + torch = 3. Two daggers (dual wielding) + torch = 3. Greatsword + shield = 3. Greatsword + shield + torch = 4, which is not allowed.

## 3.2 Armor

Every model starts with a **6+** Save. Armor improves it. The best possible Save is 2+.

### Categories

| Category | Limit | Items |
|---|---|---|
| Body armor, under (LAYERED) | 1 | Gambeson, chainmail |
| Body armor, over | 1 | Hard leather, breastplate, full plate |
| Headgear | 1 **[Proposed]** | Helm |
| Cloak | 1 **[Proposed]** | Cloak |
| Held | Hands (3.1) | Shield, buckler, great shield |

A model wears up to two pieces of **body armor**: one LAYERED and one non-layered. Headgear and cloaks are their own categories, so they sit outside that limit. Held items are not worn at all.

Five body pieces, plus the option of nothing in each slot, give 12 body-armor builds.

### Items

| Item | Category | Effect |
|---|---|---|
| Gambeson | Under, LAYERED | Reduce the damage of each hit by 1, to a minimum of 1. **[Proposed]** |
| Chainmail | Under, LAYERED, IRON | BOON 1 on saves. **[Proposed]** |
| Hard leather | Over | Save 5+. Crits ignore it (3.3). **[Proposed]** |
| Breastplate | Over, IRON | Save 5+. |
| Full plate | Over, IRON | Save 4+. -1" Speed. **[Proposed, Open Q19]** |
| Helm | Headgear | Downgrades the first crit against the wearer in a sequence to a normal hit. Stacks with all other armor. IRON? **[Open Q22]** |
| Cloak | Cloak | Attackers rolling ranged attacks against the wearer have BANE 1. |
| Shield | Held, 1 hand | +1 to Save (5+ becomes 4+). |
| Buckler | Held, 1 hand | BOON 1 on saves. **[Proposed, Open Q19]** |
| Great shield | Held, 1 hand | Bigger Save bonus, but BANE 1 on the bearer's own melee attacks. **[Proposed, Open Q19]** |

### Keywords

- **LAYERED.** The piece goes in the under slot. Its effect applies whatever is worn over it.
- **IRON. [Proposed, Open Q22]** A caster rolls one fewer Willpower die for each IRON piece it wears (see [Magic](04-magic.md)). Hard leather and gambeson are not IRON.
- **Damage reduction.** If a save fails, reduce the hit's damage by the stated amount, to a minimum of 1, before applying it.
- **Helm timing. [Proposed]** The first time a crit would be resolved against the wearer in a melee sequence or a ranged attack, it counts as a normal hit instead.

## 3.3 Hard Leather and Crits [Proposed]

**Rule:** a crit ignores hard leather. Against a crit, treat the model as not wearing it.

**At the table:**

1. A hit is a crit if its die is a natural 6. Players already check this to pick the right damage and to apply the parry rule, so nothing new is tracked.
2. The defender reads the Save line on their card. A model in hard leather lists two numbers, for example **Save 5+ (crit 6+)**. Work them out when you build the list, not mid-fight.
3. Roll one die against the right number.

Everything else still applies to a crit: shield, cover, BOON and BANE, and the layered armor underneath (gambeson's damage reduction included).

| Hard leather plus... | Normal hit | Crit |
|---|---|---|
| nothing else | 5+ | 6+ |
| shield | 4+ | 5+ |
| shield and cover | 3+ | 4+ |

- **Helm first.** The helm downgrades the first crit to a normal hit before the save, so hard leather works against it.
- **Ranged attacks.** Sort the hit dice into normal hits and crits, then roll the saves in two batches.
- **Spells and blasts** never crit, so hard leather always works against them.

## 3.4 Save Odds

Success chance on a single save:

| Save | No BOON | BOON 1 | BOON 2 |
|---|---|---|---|
| 2+ | 83.3% | 97.2% | 99.5% |
| 3+ | 66.7% | 88.9% | 96.3% |
| 4+ | 50.0% | 75.0% | 87.5% |
| 5+ | 33.3% | 55.6% | 70.4% |
| 6+ | 16.7% | 30.6% | 42.1% |

At the top end saves saturate, so heavily armored models become very hard to hurt. RENDING is the intended answer.

**Hard leather in practice.** The share of an attacker's hits that are crits depends on its Fight, because a 6 is a bigger slice of the dice that hit.

| Attacker's Fight | Crits among its hits | Leather's average Save |
|---|---|---|
| 2+ | 20% | 30.0% |
| 3+ | 25% | 29.2% |
| 4+ | 33% | 27.8% |
| 5+ | 50% | 25.0% |

Bare (6+) is 16.7% and a breastplate (5+) is 33.3%. Leather closes 50-80% of that gap. It helps a little less against weak fighters, whose hits are more often crits.

## 3.5 Weapons

Each weapon lists:

- **Hands:** 1 or 2.
- **Dice:** how many attack dice it rolls. **Inferior** weapons (daggers, crude clubs, staffs) roll **2**. **Quality** weapons roll **3**. **Magical** weapons, or their equivalent, roll **4**.
- **Damage:** 1-3.
- **Crit:** D3, D3+1, D6 or D6+1.
- **Keywords.**

**RENDING X.** The target rolls saves against this weapon's hits with BANE X.

The dice come from the weapon wielded. The off-hand rule is in [Combat](02-combat.md).

### Illustrative weapons (placeholder numbers, not balanced)

| Weapon | Hands | Dice | Damage | Crit | Keywords |
|---|---|---|---|---|---|
| Dagger | 1 | 2 | 1 | D3 | Inferior |
| Crude club | 1 | 2 | 1 | D3 | Inferior |
| Staff | 2 | 2 | 1 | D3 | Inferior, focus (+1 Willpower die) |
| Sword | 1 | 3 | 2 | D3+1 | Quality |
| Mace | 1 | 3 | 2 | D3+1 | Quality, RENDING 1 |
| Spear | 2 | 3 | 2 | D3+1 | Quality |
| Greatsword | 2 | 3 | 3 | D6 | Quality |
| Rune blade | 1 | 4 | 2 | D6 | Magical |
| Short bow | 2 | 3 | 1 | D3+1 | Quality, ranged |
| Crossbow | 2 | 2 | 2 | D6 | Ranged, RENDING 1 |

Ranged numbers are very rough. See **[Open Q8]**.

## 3.6 Other gear

Torches, lanterns, banners and similar items cost 1 hand. What a torch actually does is **[Open Q1]**.

## 3.7 Design notes

**Why two body slots.** LAYERED used to be a one-off keyword (only chainmail had it). Now it is a slot, and each slot has a cheap option and a premium one.

**Gambeson absorbs, chainmail avoids.** Share of expected damage prevented per hit (attacker Fight 4+, so crits are one-third of its hits):

| Save underneath | Chainmail (BOON 1) | Gambeson vs 2-damage weapon | Gambeson vs 3-damage weapon |
|---|---|---|---|
| 6+ | 17% | 43% | 30% |
| 5+ | 33% | 43% | 30% |
| 4+ | 50% | 43% | 30% |
| 3+ | 67% | 43% | 30% |

Damage reduction is flat. BOON scales with the Save underneath it. So gambeson suits light builds, and chainmail pays off once the outer armor is 4+ or better. With Henchmen at about 3 Wounds, damage reduction matters for everyone: a 2-damage sword needs three hits instead of two.

RENDING 1 cancels chainmail's BOON exactly, so a weapon counter exists.

**Ceiling.** Plate + shield + chainmail is an 88.9% Save (97.2% in cover). The two-slot rule does not lower that. The governors are cost (**[Open Q11]**), the Speed penalty on full plate, IRON for casters, and RENDING. Suggested cost order once budgets exist: gambeson and hard leather, then chainmail, then breastplate, then full plate. One shield-type item per model would also help. **[Open Q19]**
