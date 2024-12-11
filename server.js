import 'dotenv/config'; // Подключение .env файла
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./reviews.json');
const middlewares = jsonServer.defaults({
    static: './dist', // Убедитесь, что билд приложения находится в папке dist
});

// Используем process.env для чтения PORT
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
server.use(router);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
