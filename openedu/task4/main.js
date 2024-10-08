const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 10888;

// Middleware для парсинга text/plain
app.use(bodyParser.text({ type: '*/*' }));

// Middleware для CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "x-test,ngrok-skip-browser-warning,Content-Type,Accept,Access-Control-Allow-Headers");
  next();
});

// Ответ на любой OPTIONS-запрос
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// Маршрут /result4/
app.all('/result4', (req, res) => {
  const xResult = req.headers['x-test'] || ''; // Получаем значение заголовка x-test
  const xBody = req.body; // Получаем тело запроса как текст

  const response = {
    message: "itmo282614",
    "x-result": xResult,
    "x-body": xBody
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
