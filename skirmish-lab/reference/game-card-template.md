# Game Card Template

Copy to `analysis/games/<slug>.md` and fill in from `corpus/<slug>/` only (not from memory of the game). Replace every `<...>`.

**Rules for filling it in** (see `CLAUDE.md` for the full list):
- Cite everything: `[slug §section p.N]`.
- If the book doesn't say: `NOT SPECIFIED`. If ambiguous: `UNCLEAR` plus a short quote.
- Use canonical glossary terms; original term in parentheses on first use.
- Paraphrase. No block quotes.
- Stay neutral: describe, don't judge. My opinions go in `preferences/`, not here.

---

```markdown
---
slug: <slug>
title: <full title>
edition: <edition/year>
publisher: <publisher>
source_files: [<filenames from manifest.csv>]
corpus_path: corpus/<slug>/
carded_on: <YYYY-MM-DD>
conversion_quality: <good | fair | poor, plus one-line note>
scope_covered: <e.g. core rules only; excludes factions/lore>
---

# <Title> - Game Card

## At a glance
- Players: <...>
- Models per side (typical): <...>
- Typical play time: <...>
- Table size: <...>
- Core mechanic in one sentence: <...>
- One-sentence pitch: <...>

## M01 Game structure & victory
**Summary:** <2-5 sentences, paraphrased>
**Key numbers/parameters:** <e.g. 6 rounds; 3 objectives; ...>
**Cites:** [<slug> §.. p..]

<!-- Repeat the block above for every ID M01-M20 in reference/taxonomy.md, in order.
     Never skip one: write NOT SPECIFIED. -->

## Distinctive ideas
Rules or design choices that are unusual compared with typical skirmish games, with cites. Mechanics that fit no taxonomy ID go here.

## Ambiguities & open questions
Places where the text is unclear, contradictory, or depends on an errata/FAQ not in the corpus.

## Conversion issues
Tables, diagrams, or pages that converted badly and may hide rules.
```
