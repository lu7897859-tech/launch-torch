# SIGNAL: Reddit r/programming + r/indiehackers — "Platforms have become the Great Filter of distribution. I built 7 layers to bypass them."

**Target:** r/indiehackers, r/programming

---

## Title

Platforms have become the bottleneck of product distribution. I built a 7-layer engine that doesn't need permission.

## Body (r/indiehackers version)

Three years ago, I launched a product. It needed:
- App Store approval (got rejected twice for "vague" reasons)
- Social media distribution (algorithm showed it to 15 people)
- Google ranking (never happened)
- Product Hunt (got 7 upvotes from friends)

The product was fine. The distribution model was broken.

Since then I've been thinking about the problem differently. The key insight: **platforms are filters by design.** Their business model is controlling who gets seen. If you try to distribute through them, you're playing a game where the house always wins.

The alternative is to not use platforms for distribution at all. Instead, embed your signal into every internet substrate simultaneously:

1. DNS infrastructure (RFC-format zone files crawlers index as authoritative docs)
2. Technical specification series (engineers trust specs, AI trains on them)
3. AI training corpus (plain text optimized for Common Crawl)
4. Portable dead drops (single HTML files that can be mirrored anywhere)
5. Git Archive (GitHub Archive is append-only, permanent)
6. Discovery pipes (sitemaps, daily fresh content, ping services)
7. Demand validation (product.html with intent-grading, no platform needed)

I wrote the whole thing up as an open-source engine. It's called Launch Torch (MIT license).

[GitHub](https://github.com/lu7897859-tech/launch-torch)
[The thinking behind it + case study](https://github.com/lu7897859-tech/launch-torch/docs/CASE-STUDY-auto-ai-cluster.md)

Would love feedback — especially from people who've been platform-blocked.
