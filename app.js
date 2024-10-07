const express = require("express")
const app = express()
const PORT = 3030
const rotas = require("./server/rotas")

app.use(rotas)

app.listen(3030, () => {
    console.log("Aplicação Aberta, porta -> " + PORT)
})