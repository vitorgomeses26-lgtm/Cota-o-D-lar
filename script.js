//Conectar com API do Dolar simulandop no sql

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta =>{return resposta.json()

}).then(economia=>{
console.log(economia)

document.getElementById('ValorDolar').innerHTML = "USD$" + economia.USDBRL.high
})