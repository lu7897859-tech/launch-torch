// Launch Torch — Demand Signal Monitor
const https = require('https');
const TOKEN = process.env.GH_TOKEN || '';
const REPO = process.env.REPO || 'lu7897859-tech/launch-torch';

function getJSON(path) {
  return new Promise((resolve) => {
    https.get({ hostname: 'api.github.com', path, headers: { Authorization: 'token ' + TOKEN, 'User-Agent': 'node' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { resolve([]); } });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const issues = await getJSON('/repos/' + REPO + '/issues?labels=demand-signal&state=all&per_page=100');
  const total = Array.isArray(issues) ? issues.length : 0;
  const ready = Array.isArray(issues) ? issues.filter(i => i.body && (i.body.includes('yes-urgent') || i.body.includes('yes-soon'))).length : 0;
  const recent = Array.isArray(issues) ? issues.filter(i => Date.now() - new Date(i.created_at).getTime() < 7*86400000).length : 0;
  console.log('SIGNALS|total:' + total + '|ready:' + ready + '|7d:' + recent);
}
main();
