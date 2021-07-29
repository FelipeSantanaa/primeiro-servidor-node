const { response } = require('express')

const express = require('express'),
  app = express()
  rotasProdutos = require('./routes/rotasProdutos'),
  rotasSobre = require('./routes/rotasSobre')
  port = 3000

  // Rotas produtos
  app.use('/produtos', rotasProdutos)
  // Rotas sobre
  app.use('/sobre', rotasProdutos)
  
app.get('/usuarios/:nome?', (req, res) => {
  const {nome} = req.params
  nome ? res.send(`Página do usuário ${nome}`) : res.send('Página de usuários')
})

  app.get('/objeto', (req, resp) => {
    resp.send({
      nome: "Joselito",
      sobrenome: "Sem Noção",
      melhoresAmigos: "Jorgin e Buchecha"})
  })

app.listen(port, () => console.log('O servidor está rodando...'))