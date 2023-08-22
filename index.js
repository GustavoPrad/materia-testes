const express = require("express")
const {somar, dividir, multiplicar, subtrair } = require("./calculadora")

const app = express()
const porta = 3000;

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaSoma = somar (2,3)
    resposta.send("A resposta do calculo é: " + respostaDaSoma)
})

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaDivisao = dividir (10,2)
    resposta.send("A resposta do calculo é: " + respostaDaDivisao)
})

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaMultiplicacao = multiplicar (5,5)
    resposta.send("A resposta do calculo é: " + respostaDaMultiplicacao)
})

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaSubtracao = subtrair (10,5)
    resposta.send("A resposta do calculo é: " + respostaDaSubtracao)
})

app.listen(porta,() => {
    console.log('Opa, nosso servidor levantou ' + porta)
})