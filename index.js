const express = require('express'),
  app = express()

  app.get('/',(req, res) => {
    res.send('VOCÊ ESTÁ NA HOME')
  })

app.listen(3000, () => console.log('O servidor está rodando...'))