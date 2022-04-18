window.addEventListener('load', start);
var globalAlunos = [];
var inputNome = null;

function start() {
    let nome = document.querySelector('#inputNome').value;
    preventSubmitForm();
    activateInput();
    render();
}

function preventSubmitForm() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
    function insertAluno(novoNome) {
        globalAlunos.push(novoNome);
    }
    function handleTyping(event) {
        if (event.key === 'Enter' 
            && event.target.value.trim() !== ''
        ) {
            insertAluno(event.target.value);
        }
        render();
    }
    inputNome.addEventListener('keyup', handleTyping);
    inputNome.focus();
}

function render() {
    
}

function clearInputs() {
    inputName.value = '';
    inputCurso.value = '';
}