import { renderToPipeableStream } from 'react-dom/server';

import express from 'express';

import { App } from '../client/App';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['main.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
