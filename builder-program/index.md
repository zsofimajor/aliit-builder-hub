---
title: Builder Program
---

<span class="eyebrow">03 · Monthly Program</span>

# Builder Program

<p class="lede">A monthly prize pool that builders compete for by earning XP in Zealy. Builders declare what they intend to build at the start of the month, do the work, and split the pool at month's end based on where they land on the sprint leaderboard.</p>

<div class="card-grid">
  <div class="card">
    <div class="stat">$1,000</div>
    <div class="stat-label">Monthly pool</div>
  </div>
  <div class="card">
    <div class="stat">NIGHT</div>
    <div class="stat-label">Payout currency</div>
  </div>
  <div class="card">
    <div class="stat">500 XP</div>
    <div class="stat-label">Proposed floor to qualify</div>
  </div>
</div>

We are not paying people to learn. We are attaching a modest cash reward to the points they were already earning — a reason to activate rather than lurk.

## How it works

**1. The pool.** A fixed dollar amount each month, paid out in NIGHT. Start small and realistic: roughly $1,000 for the first month. This keeps the budget a known quantity we can actually manage rather than an open commitment we cannot.

**2. Monthly kickoff — declaration.** Each sprint opens with a declaration thread or a short survey: builders share what they hope to work on. This kicks off the month, builds energy, and lets people self-organize. It is not a gate — payout eligibility is determined solely by the sprint leaderboard, so nobody is penalized for picking up inspiration mid-month or for joining partway through. Declare or don't, the XP is what counts.

**3. The work itself.** Builders work through the quests already on the Zealy board. We do not curate a separate list. The point values already built into Zealy handle the prioritization for us — a technical PR is worth more than a translation, so the existing weighting carries the program without extra overhead.

**4. Earning and ranking.** All work is done in Zealy as a monthly sprint. Builders accrue XP through the sprint, with a minimum XP threshold required to qualify for any payout.

**5. Payout.** At the end of the sprint, we read the leaderboard, calculate each qualifying builder's share of the pool proportional to their XP, and distribute in NIGHT.

<blockquote>Reward formula: <code>(builder's monthly sprint XP ÷ total sprint XP of all eligible builders) × $1,000</code></blockquote>

We will likely need to reconcile sprint XP against main profile totals by hand at first — that's fine. We keep the record and apply it manually until the tooling catches up.

## Why this approach

- Simple enough for builders to understand on day one, which matters more than elegance
- Uses the Zealy board already built, rather than spinning up a parallel system
- Rewards what we already care about, without hand-picking tasks each month
- Gives us a clear, capped budget we can defend

## Logistics

### Office hours

- Two sessions per month, run by the Aliit support team and facilitated by a rotating Fellow — open format for builders stuck on scope, approach, or whether their implementation plan makes sense before they get too deep
- Async Discord channel for questions between sessions, becoming a searchable knowledge base over time
- 1:1 support reserved for builders genuinely blocked after using both sessions — the exception, not the default

### The monthly showcase

- 60-minute call at the end of each month
- Each builder who shipped can present their work for 3–5 minutes: what the issue was, what they built, what they learned
- Fellows and the support team give live feedback
- A monthly recap is published after — a short post or highlight reel with builder spotlights, visible to the broader Midnight ecosystem
- Showcase attendance is expected from anyone drawing from the pool that month

### Fellow involvement

Fellows are active builders in their own right — the program is designed to fit around what they're already doing, not pull them away from it.

- Fellows can loosely "adopt" builders for a quarter: no scheduled 1:1s, just enough familiarity to know what their builders are working on, notice if someone goes quiet, and give informed feedback at the showcase
- One office-hours session per month per Fellow, rotating across the cohort so no single Fellow carries it every month — Fellows facilitate rather than lecture, and the "bring your work" format means builders drive the agenda
- Async presence in the Discord channel — Fellows who are active anyway can answer questions in their area of depth; this is natural participation, not on-call support
- At the showcase, Fellows who know their builders' work give specific rather than general feedback — this is where the loose pairing pays off most visibly
- Mentoring is framed as Fellows shaping what gets built in the ecosystem, not a formal obligation — Fellows can informally steer their builders toward issues that complement their own work or areas they know well

## Open items to resolve

<div class="card">

- Set the XP floor for month one — proposed at 500 XP, with the right reserved to change it between months (never mid-month)
- Zsófi to rework the existing doc to match this simpler model and test how end-of-month analytics resolve
- Decide whether every quest is pulled into the sprint, or only some
  - Proposal: don't bring over anything worth less than 120 points
  - Quests currently submittable multiple times should be limited to once a month per person in the sprint
- Legal to draft a contract, and confirm how they'd prefer builders to agree to it
- Be thoughtful about the floor, and what it takes to hit it to get paid

</div>

### Framing note for legal & announcements

- Payouts follow existing Zealy point values; values may be adjusted between months, but never mid-month
- Every public mention frames this as **"a bonus on the points you're already earning"** — never "payment" or "reward for work." One sentence in the announcement should make clear this is a thank-you on top of existing Zealy progress, not a wage. That framing heads off "$58 for a month is insulting"-style complaints before they form, since nobody benchmarks a bonus against an hourly rate.
