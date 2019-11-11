var arrayUsuarios = []

function adicionarUsuario() {

    var inputNome = document.getElementById('input_nome').value;
    var inputIdade = document.getElementById('input_idade').value;

    if (!verificarNomeUsuario(inputNome)) {
        acrescentarNovoUsuario({ nome: inputNome, idade: inputIdade })
    }
}

function verificarNomeUsuario(nome) {

    for (var index in arrayUsuarios) {

        if (arrayUsuarios[index].nome == nome) {
            alert('Usuário já existe')
            return true
        }
    }
}

function acrescentarNovoUsuario(objetoUsuario) {

    var tbody = document.getElementById('nossosUsuarios')
    var tr = document.createElement('tr');

    for (var prop in objetoUsuario) {

        var td = document.createElement('td');

        td.appendChild(document.createTextNode(objetoUsuario[prop]));

        tr.appendChild(td);
    }

    arrayUsuarios.push(objetoUsuario)

    var indexUsuario = arrayUsuarios.length - 1

    createButtonRemove(tr, indexUsuario)

    tbody.appendChild(tr);
}

function createButtonRemove(tr, indexUsuario) {
    var buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = 'Remover'
    buttonRemove.className = 'botaoRemover'
    buttonRemove.addEventListener('click', function() {

        var remover = confirm("Você deseja remover usuário");
        if (remover) {
            var tbody = document.getElementById('nossosUsuarios')
            tbody.removeChild(tbody.children[indexUsuario])
            arrayUsuarios.splice(indexUsuario, 1)

        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonRemove);
    tr.appendChild(td);
}

function organizarTabela() {
    $(".tabelaUsuarios").tablesorter();
}