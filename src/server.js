const migrationsRun = require('./database/sqlite/migrations')
const sqliteConnection = require('./database/sqlite')
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
migrationsRun()

async function cadastrar(email){
  const database = await sqliteConnection()
  await database.run("INSERT INTO emails (email) VALUES (?)", [email])
}

const token = process.env.Token_Telegram;
const bot = new TelegramBot(token, { polling: true });
const time = new Date().getHours

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let email = msg.text

    if(time < 18 && time > 9) {
      bot.sendMessage(chatId, 'https://faesa.br');
      
    } else {
      bot.sendMessage(chatId, 'NO MOMENTO NÃO ESTAMOS ATENDENDO, POR FAVOR DEIXE SEU EMAIL');

      cadastrar(email)
    }
  }
);