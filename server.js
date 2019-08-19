const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;


if (dev) {
  process.env.baseURL = 'http://localhost:3000';
} else {
  process.env.baseURL = `${process.env.REPOSITORY_URL}/tree/${process.env.COMMIT_REF}`;
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:id', (req, res) => {
      const queryParams = { title: req.params.id };
      app.render(req, res, '/post', queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
