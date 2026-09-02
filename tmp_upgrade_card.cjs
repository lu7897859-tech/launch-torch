const fs = require('fs');
const card = JSON.parse(fs.readFileSync('.well-known/agent-card.json', 'utf8'));

// 升级到 v2.0
card.version = '2.0.0';
card.description = 'AI agent that audits China sourcing risks: detects fake factories, gold-supplier badge fraud, sample switching, payment hijacking, customs/HS misclassification, and freight cost traps. Produces actionable checklists and red-flag reports for importers placing $5k-$50k first orders. Also diagnoses why AI automation pipelines fail to produce — agent workflows, rule systems, and automation stacks that quietly break. Free checklist funnel: https://lunarwave8803.gumroad.com/l/yxgrvw (free) → Trusted Supplier Architecture $14 (https://lunarwave8803.gumroad.com/l/kbgmsy) → China Business Bundle $79 (https://lunarwave8803.gumroad.com/l/ijpnuw).';

// 加 products 字段（AI 伙伴可直接发现全产品线）
card.products = [
  {
    "name": "China Zero-Cost Sourcing Audit Checklist",
    "url": "https://lunarwave8803.gumroad.com/l/yxgrvw",
    "price": 0,
    "type": "free-lead-magnet"
  },
  {
    "name": "Trusted Supplier Architecture 2026",
    "url": "https://lunarwave8803.gumroad.com/l/kbgmsy",
    "price": 14,
    "type": "paid"
  },
  {
    "name": "China Business Bundle 2026",
    "url": "https://lunarwave8803.gumroad.com/l/ijpnuw",
    "price": 79,
    "type": "paid-bundle"
  },
  {
    "name": "Inversion of Control Flaw",
    "url": "https://lunarwave8803.gumroad.com/l/ywxlvy",
    "price": 9,
    "type": "paid"
  },
  {
    "name": "AI Automation Rule Audit",
    "url": "https://lunarwave8803.gumroad.com/l/dvqab",
    "price": 0,
    "type": "free-lead-magnet"
  }
];

fs.writeFileSync('.well-known/agent-card.json', JSON.stringify(card, null, 2), 'utf8');
console.log('Agent Card 已升级到 v' + card.version);
console.log('products 字段已添加:', card.products.length, '个产品');
