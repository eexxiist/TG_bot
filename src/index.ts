import { bot } from "./bot";
import { GlobalContext, YCContext } from "./config/context";

export const handler = async function (event: any, context: YCContext) {
    GlobalContext.context = context;

    try {
        await bot.init();
        await bot.handleUpdate(JSON.parse(event.body));
    } catch (e) {
        console.error("Failed to handle update", (e as Error).message);
    }

    return { statusCode: 200, body: "" };
};

if (process.env.NODE_ENV === "development") {
    bot.start({
        onStart: () => {
            console.log("Start Bot");
        },
    });
}
