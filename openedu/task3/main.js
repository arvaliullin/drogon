const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Маршрут /login/
app.get('/login/', (req, res) => {
    res.send('itmo282614');
});

// Маршрут /promise/
app.get('/promise/', (req, res) => {
    const promiseFunction = `
    function task(x) {
        return new Promise((resolve, reject) => {
            if (x < 18) {
                resolve('yes');
            } else {
                reject('no');
            }
        });
    }`;
    res.send(promiseFunction);
});

// Маршрут /fetch/
app.get('/fetch/', (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Fetch Example</title>
    </head>
    <body>
        <input type="text" id="inp">
        <button id="bt">Fetch</button>
        <script>
            document.getElementById('bt').addEventListener('click', function() {
                const url = document.getElementById('inp').value;
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('inp').value = data;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        </script>
    </body>
    </html>`;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.send(htmlContent);
});

const PORT = 10888;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
