const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
})
 
app.listen(5000, function() {
  console.log('listening on 5000');
});