const express = require('express')
const app = express();
const port = 3000;
const ApiRouter = require('./routes');
const date = new Date();



app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Up synce ${date}`);
})

app.use('/api', ApiRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})