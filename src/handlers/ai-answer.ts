import { markdownToHtml } from "../lib/formatMarkdown";
import { askDeepSeek } from "../services/ai";
import { BotContext } from "../types/bot-types";

export async function AiAnswerHandler(ctx: BotContext) {
    const message = ctx.message?.text;
    if (!message) return;

    console.log("AI HANDLER:", message);

    try {
        const response = await askDeepSeek(message);

        await ctx.reply(markdownToHtml(response), {
            parse_mode: "HTML",
        });
    } catch (error) {
        console.error("AI ERROR FULL:", error);
    
        await ctx.reply(
            "Ошибка при обработке запроса: " + (error as Error).message
        );
    }
}
