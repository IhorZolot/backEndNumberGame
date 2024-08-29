
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! Click the button to play the game:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Play Game', 
          web_app: { url: `${process.env.WEB_APP_URL}` } }],
      ],
    },
  });
});

export default bot;
