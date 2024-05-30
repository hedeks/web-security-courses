import fs from 'node:fs'

export default defineEventHandler((event) => {
    let QUIZ_DIR = './data/quizez/';
    let files = fs.readdirSync(QUIZ_DIR); // Получаем список файлов в директории

    let data: Object[] = [];
    files.forEach((file) => {
        if (file.endsWith('.json')) { // Проверяем, что файл является JSON-файлом
            let content = fs.readFileSync(QUIZ_DIR + file, 'utf-8'); // Читаем содержимое файла
            data.push(JSON.parse(content)); // Парсим JSON и добавляем его в массив
        }
    });

    setResponseHeaders(event, {
        "content-type": "application/json; charset=utf-8",
    });
    return data;
})