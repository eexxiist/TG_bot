import { askDeepSeek } from "../services/ai";
import { BotContext } from "../types/bot-types";

export async function AiAnswerHandler(ctx : BotContext, next: () => Promise<void>){
    const message = ctx.message?.text;

    if(!message){
        return next()
    }

    const thinkingMessage = await ctx.reply("думаю");

    const safeDelete = async () => {
        await ctx.api.deleteMessage(ctx.chat!.id, thinkingMessage.message_id);
    };

    try {
        const response = await askDeepSeek(message);
        await ctx.reply(response);
    } catch (error) {
        console.log(error);
        await ctx.reply(
            "Произошла ошибка при обработке вашего запроса. Попробуйте похже."
        );
    } finally {
        await safeDelete();
    }
};