let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    //Pegando o produto e a quantidade
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    //Guardando o campo do produto no carrinho para modificar assim que for selecionado o produto/quantidade
    let carrinhoCompras = document.getElementById('lista-produtos');
    

    //separando os valores do produto selecionado  "Fone de ouvido - R$100" 
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorProduto = produtoSelecionado.split('R$')[1];

    //Valor do item x quantidade
    let preco = quantidade * valorProduto;
    carrinhoCompras.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}