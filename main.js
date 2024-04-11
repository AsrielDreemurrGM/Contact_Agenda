const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

var linhasTab = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicLinha(); //Função para adicionar nova linha de conteudo na tabela
    atualizTab(); //Mostra a versão atualizada do corpo da tabela após inserir a nova linha
})

function adicLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    //verificador de contato ja adicionado
    if (contatos.includes(nomeContato.value)) {
        alert(`O contato ${nomeContato.value} ja faz parte de sua Agenda de Contatos`);
    } else {
        contatos.push(nomeContato.value);
        numeros.push(numeroContato.value);

    //Parte que adiciona linha nova
    var linhaNova = "<tr>"; //Linha da tabela = <tr> - Célula da linha = <td>
    linhaNova += `<td>${nomeContato.value}</td>`;
    linhaNova += `<td>${numeroContato.value}</td>`;
    linhaNova += "</tr>";

    linhasTab += linhaNova; //Adiciona a linha nova a variavel que contém todo o corpo da tabela
    } //Fim do "if"
     //Limpa o formulário
    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizTab() {
    const corpoDaTabela = document.querySelector('tbody'); //Encontra o corpo da tabela
    corpoDaTabela.innerHTML = linhasTab; //Insere as linhas guardadas na variavel "linhas" no corpo da tabela
}