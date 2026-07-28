---
title: Builder Program
---

<span class="eyebrow">02 · Monthly Program</span>

# Builder Program

<p class="lede">A monthly incentive pool layered on top of the Builder phase you're already doing. Builders declare what they intend to build at the start of the month, do the work through their regular quests, and split the pool at month's end based on where they land on the sprint leaderboard.</p>

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
    <div class="stat">1500 XP</div>
    <div class="stat-label">Sprint floor to qualify</div>
  </div>
</div>

This is a bonus on top of the points you're already earning in Zealy — not a wage, and not payment for work. We're not paying people to learn; we're attaching a modest cash reward to points you were already earning, as a reason to activate rather than lurk.

<div class="callout">
  <span class="callout-label">Important — this is about sprint XP, not your total</span>
  <p>The 1500 XP floor here is <strong>separate</strong> from the 1500 XP threshold for Fellowship progression in the <a href="{{ '/builder-guide/' | relative_url }}">Builder Guide</a>. That one is your lifetime Zealy total, earned at your own pace. This one only counts points earned <strong>inside the current month's sprint</strong> — your all-time total doesn't carry over, and points earned outside the sprint window don't count toward payout either.</p>
</div>

## How it works

**1. The pool.** A fixed dollar amount each month, paid out in NIGHT. Start small and realistic: roughly $1,000 for the first month. This keeps the budget a known quantity we can actually manage rather than an open commitment we cannot.

**2. Monthly kickoff — declaration.** Each sprint opens with a declaration thread or a short survey: builders share what they hope to work on. This kicks off the month, builds energy, and lets people self-organize. It is not a gate — payout eligibility is determined solely by the sprint leaderboard, so nobody is penalized for picking up inspiration mid-month or for joining partway through. Declare or don't, the XP is what counts.

**3. The work itself.** Builders work through the quests already on the Zealy board. We do not curate a separate list. The point values already built into Zealy handle the prioritization for us — a technical PR is worth more than a translation, so the existing weighting carries the program without extra overhead.

**4. Earning and ranking.** All work is done in Zealy as a monthly sprint. Builders accrue XP through the sprint, with a minimum XP threshold required to qualify for any payout. Only points earned within that sprint count here — your broader Zealy profile total (the one that counts toward Fellowship progression) is tracked separately and doesn't carry into this calculation.

**5. Payout.** At the end of the sprint, we read the leaderboard, calculate each qualifying builder's share of the pool proportional to their XP, and distribute in NIGHT.

<blockquote>Reward formula: <code>(builder's monthly sprint XP ÷ total sprint XP of all eligible builders) × $1,000</code></blockquote>

We will likely need to reconcile sprint XP against main profile totals by hand at first — that's fine. We keep the record and apply it manually until the tooling catches up.

## Why this approach

- Simple enough for builders to understand on day one, which matters more than elegance
- Uses the Zealy board already built, rather than spinning up a parallel system
- Rewards what we already care about, without hand-picking tasks each month
- Gives us a clear, capped budget we can defend

## Logistics

### Office hours {#office-hours}

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

## Program rules

- Only quests worth **120 points or more** count toward the monthly sprint
- Each quest counts **once per person per sprint**, even if it's normally resubmittable
- The qualifying floor is **1500 XP earned within that sprint** — reaching it is what makes you eligible for a payout share, not a target to just barely hit. Points from outside the sprint window, or from earlier months, don't count toward it
- Payouts follow existing Zealy point values; those values may be adjusted between months, but **never mid-month**
- We reconcile sprint XP against main profile totals by hand — if something looks off, flag it in the Discord channel and we'll sort it out

## Questions?

Drop by [office hours](#office-hours), ask in the async Discord channel, or reach out to **Zsófi** on Discord (*zsofi_m*).
