// server.js
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('./reviews.json');
const middlewares = jsonServer.defaults({
    static: './dist'
});
const PORT = import.meta.env.PORT || 8000;

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});

