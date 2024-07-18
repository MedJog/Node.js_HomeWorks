/* Домашнее задание №1
Напишите HTTP сервер и реализуйте два обработчика, где:
- По URL “/” будет возвращаться страница, на которой есть гиперссылка на
вторую страницу по ссылке “/about”
- А по URL “/about” будет возвращаться страница, на которой есть гиперссылка
на первую страницу “/”
- Также реализуйте обработку несуществующих роутов (404).
- * На каждой странице реализуйте счетчик просмотров. Значение счетчика
должно увеличиваться на единицу каждый раз, когда загружается страница */
const http = require('http');
let homePageCounter = 0;
let aboutPageCounter = 0;
const server = http.createServer((request, response) => { 
    console.log('Запрос получен');
    if (request.url === '/') {
        homePageCounter++;
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.write(`<h1>Корневая страница</h1>`);
        response.write(`<h2>Количество просмотров:${homePageCounter}</h2>`);
        response.write(`<a href="http://localhost:${port}/about">Перейти на About</a>`);
        response.end();
    } else if (request.url === '/about') {
        aboutPageCounter++;
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.write(`<h1>Cтраница about</h1>`);
        response.write(`<h2>Количество просмотров:${aboutPageCounter}</h2>`);
        response.write(`<a href="http://localhost:${port}">Перейти на корневую страницу</a>`);
        response.end();
    } else {
        response.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end('<h1>Страница не найдена!</h1>')
    }
})

const port = 2000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
}) 