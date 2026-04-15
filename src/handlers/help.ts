import { BotContext } from "../types/bot-types";

export async function HelpHandler(ctx: BotContext) {
    await ctx.reply(
        `/start - начать работу
    /ai - задать вопрос помощнику
    /test - сгенирировать тест по теме`,
    )
}