#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  execSync('npx tsx server/bot-only.ts', { stdio: 'inherit' });
} catch (error) {
  console.error('Bot crashed:', error.message);
  process.exit(1);
}
