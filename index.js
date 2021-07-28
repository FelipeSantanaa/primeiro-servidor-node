const { response } = require('express')

const express = require('express'),
  app = express()


  //app.METODO_DO_EXPRESS(CAMINHO_OU_PATH, FUNCAO_HANDLER)
  app.get('/',(req, res) => {
    res.send('<h1>VOCÊ ESTÁ NA HOME</h1>')
  })

  app.get('/sobre', (req, resp) => {
    resp.send('<h1> VOCÊ ESTÁ NA PÁGINA SOBRE</h1>')
  })

  app.get('/produto/:id/:cor?', (req, res) => {
    console.log(req.params)
    if (req.params.cor) {
      res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id} E DE COR ${req.params.cor}</h1>`)
    } else {
      res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id}</h1>`)
    }
  })
  
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

  app.get('/json', (req, resp) => {
    var frutas = ['banana, maça, uva, pera']
    resp.send(frutas)
  })
app.listen(3000, () => console.log('O servidor está rodando...'))