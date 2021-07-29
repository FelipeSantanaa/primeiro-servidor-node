const express = require('express'),
    router = express.Router()

    router.get('/:id/:cor?', (req, res) => {
        if (req.params.cor) {
          res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id} E DE COR ${req.params.cor}</h1>`)
        } else {
          res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id}</h1>`)
        }
      })

module.exports = router