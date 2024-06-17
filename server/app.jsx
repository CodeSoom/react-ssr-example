import { renderToPipeableStream } from 'react-dom/server';

import express from 'express';

import { App } from '../client/App';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const products = [
    { id: 1, name: '고양이 장난감', price: 5000 },
    { id: 2, name: '강아지 장난감', price: 4500 },
  ];

  const { pipe } = renderToPipeableStream(<App products={products} />, {
    bootstrapScripts: ['main.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res, { end: false });
    },
    onAllReady() {
      res.write(`<script>window.__INITIAL_DATA__ = ${JSON.stringify(products)}</script>`);
      res.end();
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
