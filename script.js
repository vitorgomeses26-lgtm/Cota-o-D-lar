//Comunicação com Banco de Dados - NO_SQL - JSON

fetch('dados.json').then(resposta=> resposta.json()).then(banco =>{
    console.log(banco)

    //FRONT END
    document.getElementById('image001').innerHTML = banco[3].imagemProdutos.image001
    document.getElementById('produto1').innerHTML = banco[0].produtos.prod123
    document.getElementById('preco1').innerHTML = "R$" + banco[2].preco.preco789
    document.getElementById('vendedor1').innerHTML = banco[1].vendedor.vend456
    document.getElementById('Client1').innerHTML = banco[4].Client.Client1

    document.getElementById('image002').innerHTML = banco[3].imagemProdutos.image002
    document.getElementById('produto2').innerHTML = banco[0].produtos.prod124 
    document.getElementById('preco2').innerHTML = "R$" + banco[2].preco.preco790
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457
    document.getElementById('Client2').innerHTML = banco[4].Client.Client2

    document.getElementById('image003').innerHTML = banco[3].imagemProdutos.image003
    document.getElementById('produto3').innerHTML = banco[0].produtos.prod125 
    document.getElementById('preco3').innerHTML = "R$" + banco[2].preco.preco791
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458
    document.getElementById('Client3').innerHTML = banco[4].Client.Client3
})