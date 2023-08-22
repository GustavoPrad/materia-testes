const{somar} = require("../calculadora")
describe("Iremos testar os calculos do nosso sistema", 
() =>{
	it("Vai realizar a soma de dois numeros", () => {
		//teste de unidade
		expect(somar(5,5)).toBe(10)
	})
})

const{dividir} = require("../calculadora")
describe("Iremos testar os calculos do nosso sistema", 
() =>{
	it("Vai realizar a divisao de dois numeros", () => {
		//teste de unidade
		expect(dividir(10,2)).toBe(5)
	})
})

const{multiplicar} = require("../calculadora")
describe("Iremos testar os calculos do nosso sistema", 
() =>{
	it("Vai realizar a multiplicacao de dois numeros", () => {
		//teste de unidade
		expect(multiplicar(5,5)).toBe(25)
	})
})

const{subtrair} = require("../calculadora")
describe("Iremos testar os calculos do nosso sistema", 
() =>{
	it("Vai realizar a multiplicacao de dois numeros", () => {
		//teste de unidade
		expect(subtrair(10,5)).toBe(5)
	})
})