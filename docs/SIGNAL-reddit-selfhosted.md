# SIGNAL: Reddit r/selfhosted — "Deployed my own AI agent cluster using only Docker Compose — zero platform dependency"

**Target:** r/selfhosted (20k+ readers, highly technical)
**Format:** Self-post with link

---

## Title

Deployed Auto-AI-Cluster on a $5/mo VPS: n8n + PostgreSQL HA + AI API gateway — all on Docker Compose

## Body

I've been working on a fully self-hosted AI agent cluster that runs on minimal infrastructure (2C4G VPS, $5/mo). The core stack:

- n8n (workflow engine, stateless)
- PostgreSQL with Patroni HA (auto-failover <15s)
- AI API gateway with circuit breaker (DeepSeek → OpenAI → OLLAMA fallback)
- RSA-4096 license authentication agent

**Why self-host?** The cloud equivalent (n8n cloud + RDS + OpenAI API) runs $314-414/mo. Self-hosted, the same throughput costs $15-55/mo. Break-even at 3 months. 3-year TCO: $540-1,980 vs $11,304-14,904.

I also ran into the usual "how do people find this" problem, and built a distribution engine around the project. The writeup covers both the technical architecture and the distribution approach:

- SPEC-001: Survival-first architecture for constrained infrastructure
- SPEC-002: n8n hardening on 2C4G
- SPEC-003: PostgreSQL HA in limited RAM
- SPEC-004: Multi-provider AI gateway protocol

If you're running AI agents at home or on a cheap VPS, I'd love to hear your setup.

[Auto-AI-Cluster repo](https://github.com/lu7897859-tech/auto-ai-cluster)
[Architecture specs](https://github.com/lu7897859-tech/auto-ai-cluster/tree/main/docs/specs)
[7-layer distribution writeup](https://github.com/lu7897859-tech/launch-torch/docs/CASE-STUDY-auto-ai-cluster.md)
