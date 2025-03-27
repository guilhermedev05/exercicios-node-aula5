const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.static('public'))
app.use(express.json())

const informacoes = {
  "feedbacks": [
    
  ]
}

app.post('/feedback', (req, res) => {
  informacoes.feedbacks.push(req.body.mensagem)
  res.json({ "mensagem": "dados enviados com sucesso", "dados": informacoes.feedbacks})
})

app.get('/feedbacks', (req, res) => {
  res.json({"mensagem": informacoes.feedbacks})
})

app.listen(PORT, () => console.log("Criado com sucesso!"))