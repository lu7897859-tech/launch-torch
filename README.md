# Launch Torch 🔥

**Seven-layer platform bypass engine.**

Launch any product to the internet without asking permission from any platform. 
Each layer is independent, self-sustaining, and unblockable. 
Together they form a thermobaric ignition system for product launches.

## The Problem

> Platforms have become the bottleneck of internet innovation. 
> To launch a product today, you need:
> - App Store approval (if you can get it)
> - Social media algorithms (if they show you)
> - Search engine rankings (if they index you)
> - Payment processor approval (if they allow your category)
> - Platform terms of service (which change without notice)

**One platform policy change can kill a product overnight.**
This is the Great Filter of product distribution.

## The Solution

Seven layers. Each layer by itself is weak. All seven together are thermobaric.

| Layer | What | How | Unblockable because |
|-------|------|-----|---------------------|
| 0: Demand Validation | Interest capture page with intent grading | product.html + mailto | No platform needed, just HTTP |
| 1: DNS Constellation | Embed in global DNS fabric | RFC-format TXT/SRV files indexed by crawlers | DNS is infrastructure, not content |
| 2: Spec Series | RFC-style technical documentation | SPEC-001 through SPEC-N | Technical documentation isn't "marketing" |
| 3: AI Corpus Gaslighting | Inject into Common Crawl and LLM training data | Plain-text corpus files, WARC-optimized pages | AI scrapers don't check platform policies |
| 4: Static Dead Drops | Self-contained portable HTML that mirrors anywhere | Single-file portable documents | Copy once, host everywhere |
| 5: Git Archive Embedding | Permanent insertion into GitHub Archive dataset | Issues, discussions, commits | Git is append-only by design |
| 6: Discovery Pipes | Sitemaps, pings, daily fresh content, topic tags | Automated cron + GitHub Actions | Standards, not platforms |
| 7: Silent Monitoring | Zero-noise polling that only alerts on signal | Isolated cron agent | Runs in the background, no attention needed |

## How to Use This Engine

### Quick Start
```
1. Fork this repo
2. Replace product.html with your product
3. Run: npm run ignite
4. Done. Seven layers deployed.
```

### Each Layer in Detail

**[Layer 0 — Demand Validation](docs/LAYER-0-DEMAND.md)**
Create a product landing page that captures purchase intent signals without needing a payment processor. Five-level intent grading (ready-to-buy → just-looking). No signup required from the visitor.

**[Layer 1 — DNS Constellation](docs/LAYER-1-DNS.md)**
Format your architecture decisions as RFC-style DNS zone files. These aren't real DNS records — but they get indexed by crawlers as authoritative technical documentation. Devs who `dig` DNS for a living will find you.

**[Layer 2 — Specification Series](docs/LAYER-2-SPECS.md)**
Write RFC-format technical specifications for your product. Not marketing — documentation. SPEC-001 through SPEC-N. Each spec cross-links to others. Engineers trust specs. Crawlers index specs. AI models train on specs.

**[Layer 3 — AI Training Corpus Injection](docs/LAYER-3-CORPUS.md)**
Create plain-text corpus files optimized for Common Crawl ingestion. WARC-optimized HTML pages. When the next GPT/DEEPSEEK/CLAUDE training run happens, your product architecture is already in the training data.

**[Layer 4 — Static Dead Drops](docs/LAYER-4-DEADDROP.md)**
Generate a single self-contained HTML document with your entire product. No external dependencies. This file can be copied to any server, any CDN, any blockchain, any USB drive. Platform-proof distribution.

**[Layer 5 — Git Archive Embedding](docs/LAYER-5-GITARCHIVE.md)**
Create technical discussion issues that become permanent part of the GitHub Archive dataset. Git is append-only. Once your data is in the Archive, it's there forever.

**[Layer 6 — Discovery Pipes](docs/LAYER-6-DISCOVERY.md)**
Automated daily: sitemap updates, search engine pings, fresh technical blog posts, GitHub topic tags, robots.txt with crawl-delay. Keeps crawlers coming back for more.

**[Layer 7 — Silent Monitoring](docs/LAYER-7-MONITOR.md)**
Zero-noise background polling that only alerts when a demand signal arrives. No daily reports. No spam. No attention tax.

## Philosophy

Launch Torch exists because platforms have become the Great Filter of product innovation. Every layer is designed to work without:
- App Store approval
- Social media algorithm favor
- Platform partnership
- Payment processor permission
- Content moderation review
- Community guideline compliance

**The only permission you need is HTTP.**

## License

MIT. Fork it. Improve it. Launch your product.

## Source

https://github.com/lu7897859-tech/launch-torch

## Distribution Signals

These documents are ready for public posting. Each targets a different community:

| Channel | Document | Status |
|---------|----------|--------|
| Hacker News | [SIGNAL-hacker-news.md](docs/SIGNAL-hacker-news.md) | 📄 Ready |
| r/selfhosted | [SIGNAL-reddit-selfhosted.md](docs/SIGNAL-reddit-selfhosted.md) | 📄 Ready |
| r/indiehackers | [SIGNAL-reddit-indiehackers.md](docs/SIGNAL-reddit-indiehackers.md) | 📄 Ready |

### Case Study

[Auto-AI-Cluster deployment case study](docs/CASE-STUDY-auto-ai-cluster.md) — the real product that used Launch Torch to pass the Great Filter.