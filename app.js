let amigos = [];
let numerosGerados = [];

function adicionarAmigo(){
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (validarNomeAmigo(nomeAmigo)) {
        atualizarArrayAmigo(nomeAmigo);
        atualizarListaExibicao();
        limparInput();
    }
}

function validarNomeAmigo(nome) {
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return false;
    }
    return true;
}

function atualizarArrayAmigo(nome) {
    amigos.push(nome);
}

function limparInput() {
    document.getElementById('amigo').value = '';
}

function atualizarListaExibicao() {
    const listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaExibicao.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    const numero = gerarNumeroAleatorio();
    if (numero !== 'limite') {
        mostrarSorteado(numero);
    }
}

function gerarNumeroAleatorio() {
    const tamanhoArray = amigos.length;
    const novoNumeroGerado = Math.floor(Math.random() * tamanhoArray);

    if (tamanhoArray === numerosGerados.length) {
        alert('Todos os nomes foram sorteados. Por favor reinicie o jogo ou adicione mais amigos.');
        return 'limite';
    }

    if (numerosGerados.includes(novoNumeroGerado)) {
        return gerarNumeroAleatorio();
    } else {
        numerosGerados.push(novoNumeroGerado);
        return novoNumeroGerado;
    }
}

function mostrarSorteado(numero) {
    const sorteado = document.getElementById('resultado');
    sorteado.innerHTML = `<li>${amigos[numero]}</li>`;
}