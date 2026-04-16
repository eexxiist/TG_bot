import { bot } from "./bot";
import { GlobalContext, YCContext } from "./config/context";

let initialized = false;

export const handler = async function (event: any, context: YCContext) {
    GlobalContext.context = context;

    try {
        const body =
            typeof event.body === "string"
                ? JSON.parse(event.body)
                : event.body;

        if (!initialized) {
            await bot.init(); // 🔥 ВАЖНО
            initialized = true;
        }

        console.log("UPDATE:", body);

        await bot.handleUpdate(body);
    } catch (e) {
        console.error("ERROR:", e);
    }

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: "ok",
    };
};