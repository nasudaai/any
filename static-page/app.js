const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));



app.get('/', (req, res) => { 
  res.send('Hello World')
})


app.listen(port, () => {
  console.log(`app listen http://localhost:${3001}`)
})
