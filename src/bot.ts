import "dotenv/config";
import { Bot } from "grammy";
import { BotContext } from "./types/bot-types";
import { startHandler } from "./handlers/start";
import { askDeepSeek } from "./services/ai";


const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set in .env file");
}

export const bot = new Bot<BotContext>(BOT_TOKEN);

bot.command('start', startHandler);

bot.on('message:text', async (ctx) => {
  const message = ctx.message.text;
  const response = await askDeepSeek(message);
  await ctx.reply(response)

})

