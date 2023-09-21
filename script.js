let qtd = localStorage.getItem('qtd');

if (qtd === undefined || qtd === "NaN") {
    qtd = 0;
}

qtd++;
localStorage.setItem('qtd', qtd);
document.getElementById('visitantes').innerHTML = "Quantidade de visitantes: " + qtd;

//Modo Noturno e Claro
let modo = localStorage.getItem('modo') === 'true';

function mudarCor() {
    modo = !modo;
    localStorage.setItem('modo', modo);
    atualizarEstilo();
}

function atualizarEstilo() {
    const fundo = document.getElementById("fundo");
    if (modo) {
        fundo.style.backgroundColor = "white";
        fundo.style.color = "black";
        document.getElementById('btModo').innerHTML = "Modo Claro";
    } else {
        fundo.style.backgroundColor = "black";
        fundo.style.color = "white";
        document.getElementById('btModo').innerHTML = "Modo Noturno";
    }
}

atualizarEstilo();