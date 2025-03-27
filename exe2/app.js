const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.json())

let consultas = [

]
let idCounter = 1

app.get('/consultas', (req, res) => {
  res.json({"consultas": consultas})
})

app.post('/agendar', (req, res) => {
  req.body.id = idCounter++

  consultas.push(req.body)
  res.status(201).json({"mensagem": "Consulta agendada", "consultas": consultas})
})

app.delete('/cancelar/:id', (req, res) => {
  let consultaCancelada = parseInt(req.params.id)
  
  let idEncontrado = consultas.findIndex(consulta => consulta.id == consultaCancelada)

  if(idEncontrado == -1){
    res.status(404).json({"mensagem": "Paciente não encontrado"})
  }else{
    consultas.splice(idEncontrado, 1)
  }

  
  res.json({"mensagem": "Consulta cancelada", "consultas": consultas})
})

app.listen(PORT, () => console.log("Servidor rodando"))