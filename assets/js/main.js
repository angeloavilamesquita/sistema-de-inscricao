// exibe uma caixa de alerta no navegador
//alert('Hello World Extrovertido!');
// exibe a mensagem no console do navegador (F12)
//console.log('Hello World timido!');

function inscrever() {
    let nome = document.querySelector('#inputNome').value
    let curso = document.querySelector('#inputCurso').value
    if (nome && curso) {
        alert(nome + ' ' + curso)
    }
}