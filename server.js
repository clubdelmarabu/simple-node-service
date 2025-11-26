const express = require('express');
const app = express();

// porta di default (può essere sovrascritta da process.env.PORT)
const PORT = process.env.PORT || 3000;

// semplice middleware per loggare le richieste
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// endpoint base
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Simple WS is running' });
});

// un altro endpoint di esempio
app.get('/ping', (req, res) => {
  res.json({ pong: true, timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('AGGIUNTO PER TEST COMMIT 2');
});
