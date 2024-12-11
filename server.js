// server.js
import { create, router as _router, defaults, rewriter } from 'json-server';
const server = create();
const router = _router('./db.json'); // путь к вашему файлу с данными
const middlewares = defaults({
    static: './dist'
});
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(rewriter({
    '/api/*': '/$1',
}));
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});
