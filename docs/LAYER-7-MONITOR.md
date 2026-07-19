# Layer 7: Silent Monitoring

**Core script:** check_demand.js

Zero-noise background polling that only alerts on signal.

## How it works
- Check demand signal count (GitHub issues, mailto based, etc.)
- If zero new signals: NO_REPLY (complete silence)
- If signal found: alert user with count + link
- Runs every 4 hours via isolated cron

## Why it's unblockable
The poller runs in the background. It requires no user attention until there's actual data. No daily reports, no "this is still running" messages.
