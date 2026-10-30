# 3. Equipment

*Part of the [rules draft](README.md). Tags: **[Proposed]** = awaiting a yes or no. **[Open Q#]** = see [open-questions.md](open-questions.md).*

Equipment is modular **[Proposed]**: a model is a base profile plus items. Items change the Save, add dice, grant BOON or BANE, or add keywords.

## 3.1 Hands [Proposed, Open Q1]

Every model has **3 hands**.

- One-handed weapons, shields and torches cost 1 hand.
- Two-handed weapons cost 2 hands.
- Armor, helms and cloaks cost no hands.
- A model cannot carry more than 3 hands' worth of items.

*Examples.* Sword + shield + torch = 3. Greatsword + torch = 3. Two daggers (dual wielding) + torch = 3. Greatsword + shield = 3. Greatsword + shield + torch = 4, which is not allowed.

## 3.2 Armor

Every model starts with a **6+** Save. Armor improves it. The best possible Save is 2+.

| Item | Slot | Effect | Hands |
|---|---|---|---|
| (none) | - | Save 6+ | - |
| Breastplate | Body | Save 5+ | 0 |
| Full plate | Body | Save 4+ | 0 |
| Helm | Head | Downgrades the first crit against the wearer in a sequence to a normal hit. Stacks with any non-headgear armor. | 0 |
| Chainmail | Body, LAYERED | BOON 1 on saves. **[Proposed, see 3.5]** | 0 |
| Shield | Hand | +1 to Save (5+ becomes 4+). | 1 |
| Buckler | Hand | BOON 1 on saves. **[Proposed, Open Q19]** | 1 |
| Great shield | Hand | Bigger Save bonus, but BANE 1 on the wearer's own melee attacks. **[Proposed, Open Q19]** | 1 |
| Cloak | Back | Attackers rolling ranged attacks against the wearer have BANE 1. | 0 |

- A model wears one body armor (breastplate or full plate).
- **LAYERED:** the item's bonus applies even if other armor is worn over it. A breastplate over chainmail gives both.
- **Helm timing. [Proposed]** The first time a crit would be resolved against the wearer in a melee sequence or a ranged attack, it counts as a normal hit instead.
- A shield always occupies a hand.

### Save odds (success chance)

| Save | No BOON | BOON 1 | BOON 2 |
|---|---|---|---|
| 2+ | 83.3% | 97.2% | 99.5% |
| 3+ | 66.7% | 88.9% | 96.3% |
| 4+ | 50.0% | 75.0% | 87.5% |
| 5+ | 33.3% | 55.6% | 70.4% |
| 6+ | 16.7% | 30.6% | 42.1% |

At the top end saves saturate, so heavily armored models become very hard to hurt. RENDING is the intended answer.

## 3.3 Weapons

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

## 3.4 Other gear

Torches, lanterns, banners and similar items cost 1 hand. What a torch actually does is **[Open Q1]**.

## 3.5 Design notes

**Chainmail: BOON 1 or damage reduction?** This draft uses BOON 1 on saves. Reasons:

- Damage reduction "by 1, minimum 1" does nothing for 1-Wound Henchmen or for 1-damage weapons. BOON works for everyone.
- It uses the same language as the rest of the system.
- RENDING 1 cancels it exactly, so a weapon counter exists.

The alternative is "reduce damage from each hit by 1, to a minimum of 1". It is a fine rule and could live on as a keyword for thick-hided beasts.

**Stacking watch.** Plate (4+) + shield (+1) + cover (+1) is a 2+ Save. Add BOON 2 (chainmail and buckler) and it fails about 1 time in 216. Possible fixes: one shield-type item per model, and the BOON cap in 1.1. **[Open Q19]**
