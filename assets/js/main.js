// Capturando a tabela
var tabela = document.querySelector('#table-inscricoes')
var inputNome = document.querySelector('#input-nome')
var inputCurso = document.querySelector('#input-curso')

function ehParaAdicionarInscricao() {
    // Evitando o reload da página
    const formulario = document.querySelector('form')
    formulario.addEventListener('submit', event => event.preventDefault())    
    // Verificando se é inserção ou criação de inscrições
    let id = document.querySelector('#input-id').value
    if (id == '') {
        return adicionarInscricao()
    }
    return editarInscricao(id)
}

function adicionarInscricao() {
    // Capturando valores dos campos dos formulários
    let nome = inputNome.value
    let curso = inputCurso.value
    // Preparando a tabela para inserir novos registros
    let tamanhoTabela = tabela.rows.length
    let linha = tabela.insertRow(tamanhoTabela)
    let colunaId = linha.insertCell(0)
    let colunaNome = linha.insertCell(1)
    let colunaCurso = linha.insertCell(2)
    let colunaEditar = linha.insertCell(3)
    let colunaApagar = linha.insertCell(4)
    linha.id = tamanhoTabela
    // Criando o botão de remoção da tabela
    let botaoEditar = "<button class='btn btn-warning' onClick='preencherCampos(this)'>editar</button>"
    let botaoRemover = "<button class='btn btn-danger' onClick='removeInscricao(this)'>apagar</button>"
    // Preenchendo as colunas da tabela
    colunaId.innerHTML = linha.id
    colunaNome.innerHTML = nome
    colunaCurso.innerHTML = curso
    colunaEditar.innerHTML = botaoEditar
    colunaApagar.innerHTML = botaoRemover
    limparCampos()
    return false
}

function editarInscricao(idInscricao) {
    tabela.rows[idInscricao].cells[1].innerHTML = inputNome.value
    tabela.rows[idInscricao].cells[2].innerHTML = inputCurso.value
    limparCampos()
}

function preencherCampos(inscricao) {
    let linha = inscricao.parentNode.parentNode.id
    linha = document.getElementById(linha)
    let nome = tabela.rows[linha.id].cells[1].innerHTML
    let curso = tabela.rows[linha.id].cells[2].innerHTML
    let inputId = document.querySelector('#input-id')
    inputId.value = linha.id
    inputNome.value = nome
    inputCurso.value = curso
    inputNome.focus()
    return false
}

function removeInscricao(inscricao) {
    let linha = inscricao.parentNode.parentNode.id
    linha = document.getElementById(linha)
    linha.parentNode.removeChild(linha)
    limparCampos()
    return false
}

function limparCampos() {
    const inputId = document.querySelector('#input-id').value = ''
    inputNome.value = ''
    inputCurso.value = ''
    inputNome.focus()
}