function focar() {
    document.querySelector('.inpNome').focus();
}

function verificaCalcula() {
    let nome = document.querySelector('.inpNome');
    let peso = document.querySelector('.inpPeso').value;
    let altura = document.querySelector('.inpAltura').value;
    let resultado = document.querySelector('#resultado');
    let imc = peso / (altura ** 2);

    if(imc < 18.5) {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está abaixo do peso.`;
    } else if(imc > 18.5 && imc < 24.9) {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está com peso ideal! <br> <br> Parabéns!!`;
    } else if(imc > 24.9 && imc < 29.9) {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está levemente acima do peso.`;
    } else if(imc > 29.9 && imc < 35) {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está com obesidade grau I.`;
    } else if(imc > 35 && imc < 40) {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está com obesidade grau II.`;
    } else {
        resultado.innerHTML = `${nome.value}, seu IMC é ${imc.toFixed(1)} .<br>Você está com obesidade grau III. <br> <br> Cuidado!!`;;
    }
}

function limpar() {
    document.querySelector('.inpNome').value = "";
    document.querySelector('.inpPeso').value = "";
    document.querySelector('.inpAltura').value = "";
    document.querySelector('#resultado').innerHTML = "";
}