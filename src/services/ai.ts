import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.API_DEEPSEEK_KEY,
    baseURL: "https://api.deepseek.com",
});

const SYSTEM_PROMPT = `Ты — генератор странного и смешного “вайба дня” для Telegram-бота.

Каждый раз генерируй ответ в формате:

1. Заголовок: "Твой вайб сегодня:"
2. Короткое описание (1-2 предложения, абсурдное или жизненное)
3. Эмодзи, отражающие настроение
4. Странный или неожиданный “совет дня”
5. Формат: "Сегодня ты: ..." (например: "грустный енот в дедлайне")

Требования:
- Пиши на русском языке
- Добавляй юмор, абсурд и немного жизненной правды
- Избегай банальностей
- Делай ответы разнообразными
- Можно использовать мемный стиль
-Добавляй мем картинкой

Пример ответа:

Твой вайб сегодня:
Ты вроде бы продуктивный, но почему-то уже третий час смотришь одно и то же видео.
🧠☕🐌  
Совет дня: открой 7 вкладок и закрой их все — почувствуй контроль над жизнью.  
Сегодня ты: офисный ленивец на минималках;`

export async function askDeepSeek(userMessage: string): Promise<string> {
    const response = await client.chat.completions.create({
        model: "deepseek-chat",
        response_format: { type: "json_object" },
        messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT,
            },
            {role: 'user', content: userMessage},
        ],
    });

    return response.choices[0].message?.content ?? 'Не удалось получить ответ'
}
