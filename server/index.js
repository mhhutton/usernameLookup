const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist')));

const PORT = 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
