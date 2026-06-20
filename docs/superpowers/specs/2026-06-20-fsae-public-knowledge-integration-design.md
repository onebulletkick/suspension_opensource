# FSAE Public Knowledge Integration Design

Date: 2026-06-20

## Objective

Deeply investigate public FSAE / Formula Student suspension knowledge sharing, audit the existing Chinese suspension manual against those sources, and integrate the useful knowledge into the repository as original, public-safe handbook content.

This is not a link-adding pass. The work should use public sources to check whether the existing writing is correct, too thin, too absolute, outdated, or insufficiently verified. Correct material should be strengthened with better reasoning. Weak or unsupported material should be revised, softened, marked as engineering experience, marked as pending verification, or removed if it creates a misleading conclusion.

## Scope

The rewrite covers both documentation layers:

- `docs/00-overview.md` through `docs/10-checklists.md`
- `docs/advanced/README.md`
- `docs/advanced/01-design-targets.md` through `docs/advanced/10-review-checklists.md`
- `docs/references.md`

The quick layer should become a serious learning-route manual, not just a preview. It should explain what each stage solves, what a beginner should practice, what output proves progress, and where mistakes usually happen.

The advanced layer should become the engineering implementation manual. It should carry fuller reasoning chains, design trade-offs, public case absorption, software and testing workflows, and validation boundaries.

## Source Strategy

Sources should be searched and interpreted by chapter question, not collected randomly. Target source classes:

- official rules, design-event files, and score sheets;
- DesignJudges, OptimumG, and similar design-review commentary;
- FS Wiki and other knowledge-base pages for entry concepts;
- public student theses, design reports, GitHub projects, and university repositories;
- SAE papers, open theses, and vehicle-dynamics or tire-modeling literature where accessible;
- software official examples and documentation for MATLAB, Simscape, Adams, FEA, and data analysis;
- test and validation cases from Dewesoft, HBK, Mantracourt, and similar sources;
- Chinese FSAE knowledge sharing where it is public, useful, and safe to reference.

Firecrawl should be used first for batch search and full-page capture. If Firecrawl credits run out or a site is better reached another way, continue with Codex web search and direct URL checks. The search should not stop merely because one search tool is exhausted.

## Source Priority

Use sources according to their reliability and role:

1. Official rules and competition documents for legality, inspection, and judging boundaries.
2. Textbooks, SAE papers, theses, and peer-reviewed or university-hosted work for theory and method.
3. Software official documentation and examples for tool workflows and supported outputs.
4. Public student reports and project pages for case comparison.
5. Design-review articles, blogs, and Wiki pages for practical framing and beginner language.
6. Supplier articles for test-channel and instrumentation examples, not universal design thresholds.

Blogs, Wiki pages, and public student projects can explain or illustrate, but they must not become parameter authority. Rules, safety, structures, and validation conclusions need higher-confidence support or conservative wording.

## Knowledge Integration Model

Each chapter should follow this internal process:

1. Read the existing chapter and identify its core claims, workflows, implied assumptions, and outputs.
2. Search public sources for the chapter's real engineering questions.
3. Cross-check whether the existing claims are correct, incomplete, too strong, outdated, or unsupported.
4. Rewrite the body in original Chinese-first handbook language.
5. Convert source lessons into design flow, decision logic, check questions, practice tasks, expected outputs, and validation boundaries.
6. Keep citation transparency in the chapter-end source section and in `docs/references.md`.

The public source should disappear into the handbook's reasoning, while remaining traceable. Avoid prose shaped like "source A says, source B says" unless comparing conflicting claims is genuinely useful.

## Chapter Rewrite Pattern

Quick-layer chapters should generally cover:

- what engineering problem the stage solves;
- prerequisite concepts;
- beginner practice tasks;
- minimum useful software or calculation workflow;
- expected deliverables;
- common misleading shortcuts;
- how to continue into the matching advanced chapter.

Advanced chapters should generally cover:

- design inputs and assumptions;
- public knowledge and case lessons absorbed into the method;
- decision workflow and trade-offs;
- calculations, modeling, simulation, testing, or review logic;
- inputs and outputs for software or validation;
- what cannot be copied from public cases;
- evidence level, pending verification items, and downstream links.

This pattern should guide the rewrite, but it should not force every chapter into identical headings if the current chapter reads better with a different structure.

## Per-Chapter Coverage Expectations

Every chapter should absorb at least three source roles where available. Typical combinations:

- design targets: rules, design judging, public design reports;
- tire and vehicle inputs: TTC / tire modeling, tire theory, public fitting workflows, whole-vehicle input examples;
- geometry and hardpoints: FS Wiki, SAE / BYU material, DesignJudges kinematics, public project reports;
- spring, damper, roll, and ride: damper and spring references, vehicle dynamics, aero-platform discussion, tuning cases;
- simulation and optimization: MBD papers, Simscape or other official examples, public student modeling projects, correlation cases;
- loads and metal structure: force extraction methods, suspension force examples, FEA review logic, validation instrumentation;
- composites and manufacturing: composite suspension references, failure modes, manufacturing constraints, conservative validation;
- validation, testing, and defense: instrumentation cases, design-event guidance, static and dynamic test examples;
- software workflows: official software workflows, public templates, data-analysis patterns, version-control and documentation evidence;
- review checklists: score sheets, judging advice, source-handling boundaries, public/private release gates.

## References And Citation Presentation

The body should read like an integrated handbook. References should support traceability without interrupting learning flow.

Each chapter should keep a concise `本章公开来源` section that explains major sources and their role. `docs/references.md` should become the source map for the whole repository, recording:

- source type;
- reliability role;
- supported chapters;
- how the source was adopted;
- what was not adopted;
- verification or use boundary.

The references page should make clear that sources provide public knowledge and comparison material, not universal vehicle parameters.

## Correction Rules

When public investigation conflicts with existing content:

- If the existing content is wrong, revise it.
- If the content is plausible but unsupported, mark it as engineering experience or pending verification.
- If a conclusion depends on rules, state the relevant rule version or tell readers to check the current rule set.
- If a conclusion depends on tire data, test data, load cases, material allowables, or model assumptions, expose the dependency and avoid universal claims.
- If sources disagree, prefer official rules, textbooks, papers, and measured validation evidence. Otherwise rewrite the claim as conditional.
- If a topic remains unclear after searching, keep the uncertainty visible instead of filling the gap with confident prose.

## Public-Safety Boundaries

The rewrite must not publish raw team PDFs, DOCX content, internal filenames in reader-facing docs, exact hardpoints, historical vehicle numbers, original load tables, fitted tire parameters, private material data, raw screenshots, source figures, or reconstructible historical setups.

Use public sources by summarizing, reorganizing, and teaching in original wording. Do not copy long source passages or unlicensed diagrams. When a source has a useful diagram or table, extract the general method and redraw only if the output is self-created and public-safe.

## Verification Plan

Before calling the work complete, verify:

- `mkdocs build --strict` passes;
- all expected chapter files still exist and are linked in `mkdocs.yml`;
- each chapter has a `本章公开来源` section;
- `docs/references.md` has a usable source map and chapter mapping;
- no Firecrawl cache or search artifacts remain tracked;
- sensitive local corpus names, private parameters, raw data markers, and temporary search filenames are not exposed in public docs;
- sampled chapters show real knowledge integration in the body, not only source links at the end;
- source links and anchors used by the new writing resolve as expected where practical.

## Out Of Scope

This pass does not add raw source documents, CAD files, simulation files, screenshots, test data, or new asset directories. It does not publish original team materials. It does not change the public/private repository boundary except to make the documentation clearer and safer.

## Open Decisions Resolved

- Depth: full-book integrated rewrite.
- Style: natural handbook prose, not visible literature-review prose.
- Layers: both quick and advanced layers are rewritten, with advanced carrying the deepest technical reasoning.
- Search fallback: use Codex web search when Firecrawl is exhausted or insufficient.
- Review posture: public sources are used to audit and correct existing content, not merely to justify it.
