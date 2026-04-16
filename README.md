# 🤖 Telegram AI Bot (vibetoday)

Простой Telegram-бот с AI помощником, развернутый в Yandex Cloud (Serverless).

---

## 🚀 Возможности

* 💬 Ответы на сообщения с помощью AI
* 🧠 Генерация текста (DeepSeek / OpenAI)
* 📋 Генерация тестов
* ℹ️ Справка по командам
* ☁️ Serverless деплой (Yandex Cloud Functions)

---

## 🛠️ Стек технологий

* Node.js
* TypeScript
* [grammy](https://grammy.dev/) — Telegram Bot API
* Yandex Cloud (Cloud Functions + API Gateway)
* AI API (DeepSeek / OpenAI)

---

## 📦 Установка

```bash
git clone https://github.com/your-username/tg-bot-openai.git
cd tg-bot-openai
npm install
```

---

## ⚙️ Настройка

Создай `.env` файл:

```env
BOT_TOKEN=your_telegram_token
OPENAI_API_KEY=your_api_key
```

---

## ▶️ Запуск локально

```bash
npm run dev
```

---

## ☁️ Деплой в Yandex Cloud

### 1. Сборка

```bash
npm run build
```

---

### 2. Деплой

```bash
npm run deploy
```

---

## 📁 Структура проекта

```
src/
 ├── handlers/        # обработчики команд
 ├── services/        # AI логика
 ├── types/           # типы
 ├── bot.ts           # настройка бота
 └── index.ts         # entrypoint для cloud
```

---

## 💬 Команды

| Команда | Описание         |
| ------- | ---------------- |
| /start  | запуск бота      |
| /ai     | задать вопрос AI |
| /test   | генерация теста  |
| текст   | ответ AI         |

---

## ⚠️ Важно

* В облаке `.env` не используется — переменные задаются через `--environment`
* Для работы AI нужен активный API ключ
* При отсутствии баланса API будет возвращать ошибку `402`


---

## 👩‍💻 Автор

Efremova Dilia
