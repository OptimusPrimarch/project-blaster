# Skirmish Lab

## Purpose
Personal, non-commercial project. Ingest my favorite miniature-wargame rulesets, learn which parts of each I like best, and combine them into one **original** skirmish game to play with friends. It is also a hands-on exercise in how AI ingests and handles varied sources.

Only work inside this folder. Files outside `skirmish-lab/` are unrelated: do not read, use, or reference them.

## Pipeline (each layer is smaller and more distilled than the last)
| Layer | Path | Notes |
|---|---|---|
| 1. Sources | `sources/` | Original PDFs/docs. Local only (gitignored). Never edit. |
| 2. Corpus | `corpus/<slug>/` | Clean Markdown, split by chapter. |
| 3. Game cards | `analysis/games/<slug>.md` | One per game, from `reference/game-card-template.md`. |
| 4. Mechanic comparisons | `analysis/mechanics/<Mnn>-<name>.md` | One mechanic, all games side by side. |
| 5. Preferences | `preferences/` | What I like/dislike; decisions made. |
| 6. Design | `design/` | The new game. |

Supporting files: `manifest.csv` (inventory of books), `reference/taxonomy.md` (the M01-M20 mechanic list), `reference/glossary.md` (canonical vocabulary).

## Conventions
- **Slug**: lowercase-hyphenated game id, e.g. `some-game-2e`. Used in every path and citation.
- **Citation format**: `[slug §3.2 p.14]`. Every factual claim about a game's rules carries one.
- **Corpus format**: one folder per game: `00-index.md` (table of contents) plus `NN-chapter-name.md`. Keep page markers in the text as `<!-- p.14 -->` so citations can be traced.
- **Manifest status flow**: `todo` -> `converted` -> `validated` (I spot-checked it) -> `carded` (game card done).
- **Mechanic IDs**: always use `M01`-`M20` from `reference/taxonomy.md`.

## Hard rules
1. Never edit `sources/`. Never hand-edit `corpus/` after validation; fix problems by re-converting.
2. **Never guess.** If the book doesn't say, write `NOT SPECIFIED`. If it is ambiguous, write `UNCLEAR` and quote the passage.
3. Paraphrase; quote at most ~25 words at a time. Game cards and design text must be in my own/Claude's wording, not copied passages.
4. Use the glossary's canonical terms; keep the book's original term in parentheses on first use.
5. **Never infer my preferences.** Propose, then ask. Ask in small batches (max 4 questions). Record answers in `preferences/` with the date.
6. One game per ingestion session (or subagent). Do not load several full corpora into one context.
7. Every rule in `design/` is tagged with its inspiration (game slug + section) and the preference it serves, and written in original wording.
8. Keep cross-game comparisons fair: compare like with like using the glossary and taxonomy.

## Working agreements
- I know SQL/PL-SQL and Azure SQL well, but I am new to Git, DevOps/CI/CD, and AI tooling. Explain new tools and concepts briefly in plain terms. Be concise and instructive.
- Before bulk or irreversible actions (deleting, overwriting, large batch jobs), say what you will do and wait for me.
- When something fails, report it plainly with the output. Don't paper over it.

## Status log
- Scaffold created. Reference files drafted. Preferences interview in progress.
