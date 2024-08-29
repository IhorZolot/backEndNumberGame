# BackEnd Number Game

Це бекенд-додаток для гри "Вгадай число", реалізований на Node.js з використанням Express.js. Додаток дозволяє почати нову гру, згенерувати випадкове число та вгадати його.

[Git/Бекенд](https://github.com/IhorZolot/backEndNumberGame)

## Встановлення

1. **Клонування репозиторію**:
   ```bash
   git clone https://github.com/your-username/backEndNumberGame.git
   cd backEndNumberGame
   ```
2. **Встановлення залежностей**:
```
   npm install
```
3. **Запуск сервера у режимі розробки**:
```
   npm run start:dev
```
4. **Запуск сервера у продуктивному режимі**:
```
   npm start
```
---
# API Ендпоінти
**POST /start_game** - Початок нової гри
Генерує випадкове число і зберігає його в оперативній пам'яті.
---
Запит: Порожнє тіло запиту
Відповідь:
{
"message": "Гра розпочата! Вгадайте число від 1 до 10."
}
---
**POST /guess** - Вгадування числа
Приймає число від гравця і повертає результат - більше, менше або вгадано.

Запит:
json
Копіювати код
{
"guess": 4
}

Відповідь:
Якщо число більше:
{
"message": "Загадане число більше"
}
Якщо число менше:
{
"message": " Загадане число меньше"
}
Якщо число вгадано:
{
"message": "Число вгадано"
}

**Express.js** - Фреймворк для веб-застосунків на Node.js
**Cors** - Middleware для обробки запитів з інших доменів
**Body-parser** - Middleware для парсингу тіла запитів (вже включений в Express 4.16.0+)
**Nodemon** - Інструмент для автоматичного перезапуску сервера при змінах у коді.

[Ihor Zolotoverkh](www.linkedin.com/in/ihor-zolotoverkh)