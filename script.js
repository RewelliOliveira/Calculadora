// Função para inserir números e operadores no visor
function insert(num) {
    const visor = document.getElementById('visor');
    if (visor.textContent === '0' || visor.textContent === 'Erro') {
        visor.textContent = num;
    } else {
        visor.textContent += num;
    }
}

// Função para limpar o visor
function limpar() {
    document.getElementById('visor').textContent = '0';
}

// Função para calcular a expressão no visor
function calcular() {
    const visor = document.getElementById('visor');
    try {
        visor.textContent = eval(visor.textContent.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        visor.textContent = 'Erro';
    }
}

// Função para apagar o último caractere
function backspace() {
    const visor = document.getElementById('visor');
    if (visor.textContent.length > 1) {
        visor.textContent = visor.textContent.slice(0, -1);
    } else {
        visor.textContent = '0';
    }
}
