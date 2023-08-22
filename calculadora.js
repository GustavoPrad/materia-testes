const somar = (valor1, valor2) => {

    return valor1 + valor2;

}

const dividir(param1, param2) =>{
	
	if param1/param2==0{
		return throw new Error("NAO PODE DIVIDIR POR ZERO")
	}
	return param1/param2;
}

function multiplicar(mult1,mult2) => {
	
	return mult1 * mult2;
	
}

function subtrair(sub1,sub2) => {
	
	return mult1 - mult2;
	
}

module.exports = {

    somar
	dividir

}
