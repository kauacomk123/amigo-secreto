//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigoSecreto = [];

function adicionarAmigo(){
    let amigoSecreto = document.getElementById('amigo').value;
    if (amigoSecreto == ''){
        alert ("Informe um nome válido!");
    } else {
        listaAmigoSecreto.push(amigoSecreto);
        let exibirNaTela = document.getElementById('listaAmigos');
        exibirNaTela.innerHTML = listaAmigoSecreto.map(nome => `<li>${nome}</li>`).join('');

        limparCampo();
    }
}

function limparCampo(){
    let amigoSecreto = document.getElementById('amigo');
    amigoSecreto.value = '';
}

function sortearAmigo(){
    if(listaAmigoSecreto == ''){
        alert("Você precisa adicionar os nomes para sortear!");
    } else{
        const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length); // Gera um número aleatório entre 0 e o comprimento do array - 1
        const nomeSorteado = listaAmigoSecreto[indiceAleatorio];

        // Só para teste no console
        console.table(listaAmigoSecreto); 
        console.log(`O índice sorteado foi: ${indiceAleatorio}`); 

        let exibirResultado = document.getElementById('resultado');
        exibirResultado.innerHTML = `<li>O sorteado foi: ${nomeSorteado}</li>`;
    }

    
}

