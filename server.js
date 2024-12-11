// server.js
import { create, router as _router, defaults, rewriter } from 'json-server';
const server = create();
const router = _router('./reviews.json');
const middlewares = defaults({
    static: './dist'
});

const PORT = import.meta.env.PORT || 8000;

server.use(middlewares);
server.use(rewriter({
    '/api/*': '/$1',
}));
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});
