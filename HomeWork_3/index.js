// импорт модулей
const express = require('express'); 
const fs = require('fs');
const path = require('path');

const app = express(); 

// путь к файлу
const filePath = path.join(__dirname, 'view.json'); 
// счётчики просмотров
// let homePageCounter = 0;
// let aboutPageCounter = 0;
const count = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
// корневая страница
app.get('/', (req, res) => {
  count.homePageCounter++;
  res.send(`<h1>Добро пожаловать на сайт!!!</h1>
            <h2>Количество просмотров: ${count.homePageCounter}</h2>
            <a href="/about">Страница обо мне</a>`);
  fs.writeFileSync(filePath, JSON.stringify(count)); 
});
// страница обо мне
app.get('/about', (req, res) => {
  count.aboutPageCounter++;
  res.send(`<h1>Страница обо мне!!!</h1>
            <h2>Количество просмотров: ${count.aboutPageCounter}</h2>
            <a href="/">Главная страница</a>`);
  fs.writeFileSync(filePath, JSON.stringify(count));
});


const port = 3000;
app.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`);
});