const itemInput = document.getElementById('item');
const quantidadeInput = document.getElementById('quantidade');
const tipoSelect = document.getElementById('tipo');
const adicionarButton = document.getElementById('adicionar');
const tabelaEstoque = document.getElementById('tabela-estoque').getElementsByTagName('tbody')[0];

adicionarButton.addEventListener('click', () => {
    const item = itemInput.value;
    const quantidade = parseInt(quantidadeInput.value);
    const tipo = tipoSelect.value;

    if (item && !isNaN(quantidade)) {
        const novaLinha = tabelaEstoque.insertRow();
        const celulaItem = novaLinha.insertCell();
        const celulaQuantidade = novaLinha.insertCell();
        const celulaTipo = novaLinha.insertCell();
        const celulaAcoes = novaLinha.insertCell();

        celulaItem.textContent = item;
        celulaQuantidade.textContent = quantidade;
        celulaTipo.textContent = tipo;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            tabelaEstoque.deleteRow(novaLinha.rowIndex);
        });

        celulaAcoes.appendChild(botaoRemover);

        itemInput.value = '';
        quantidadeInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
