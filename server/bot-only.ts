/**
 * Discord Bot Only - No Web Server
 * For bot-hosting.net deployment
 */

import { startBot } from './discord-bot.js';

console.log('🚀 Starting Moonsec Discord Bot (Bot-Only Mode)...');

(async () => {
  try {
    await startBot();
    console.log('✅ Discord bot started successfully!');
  } catch (error) {
    console.error('❌ Failed to start bot:', error);
    process.exit(1);
  }
})();

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down bot...');
  process.exit(0);
});
