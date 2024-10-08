const express = require('express');
const app = express();
const port = 10888;

// Обрабатываем маршрут /login/
app.get('/login/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=UTF-8');
    res.set('Access-Control-Allow-Origin', '*');
    res.send('itmo282614');
});

// Обрабатываем маршрут /sample/
app.get('/sample/', (req, res) => {
    const x = parseFloat(req.query.x); // Получаем аргумент x из query-параметра
    if (isNaN(x)) {
        return res.status(400).send('Invalid input');
    }

    const result = x * Math.pow(x, 2); // task: x * x²
    res.set('Content-Type', 'text/plain; charset=UTF-8');
    res.set('Access-Control-Allow-Origin', '*');
    res.send(result.toString());
});

// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
