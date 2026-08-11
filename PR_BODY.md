PR title: feat(frontend): scaffold New Case, Case Detail, Pricing, Sponsor Signup pages

PR description:
This PR scaffolds the initial frontend pages and shared UI components for the Big Money Maker project as described in INTEGRATION_PLAN.md.

What I added:
- components/Header.tsx — site header and navigation
- lib/api.ts — Axios-based API client stub (baseURL: /api)
- pages/new-case.tsx — New Case form scaffold
- pages/cases/[id].tsx — Case detail scaffold with prediction area
- pages/pricing.tsx — Pricing page scaffold
- pages/sponsor-signup.tsx — Sponsor signup scaffold
- INTEGRATION_PLAN_FRONTEND.md — summary of files added and next steps

Notes / Next steps:
- Hook pages up to backend API endpoints (POST /api/cases, GET /api/cases/:id, sponsor endpoints)
- Add form validation and client-side error handling
- Implement authentication checks and protect routes as needed
- Improve styling and accessibility; consider adding Tailwind config
- Add unit & integration tests for forms and API interactions

Checklist for reviewer:
- [ ] Confirm layout and nav
- [ ] Confirm API endpoint shapes in README or docs
- [ ] Suggest preferred UI library or style system (Tailwind/Chakra/etc.)

