const calcular = document.getElementById("calcular");


function imc() {
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");

    if(nome.value !== "" && altura.value !== "" && peso.value !== ""){
        const valorIMC = (peso.value/ (altura.value * altura.value)).toFixed(2);
        
        let classificacao;

        if(valorIMC < 18.5){
            classificacao = "abaixo do peso";
        }
        else if(valorIMC > 25){
            classificacao = "acima do peso";
        }
        else{
            classificacao = "com peso ideal";
        }

        resultado.textContent = `${nome.value} seu IMC é ${valorIMC} e você está ${classificacao}!`;
    }
    else {
        resultado.textContent = "Preencha todos os campos!";
    }
}

calcular.addEventListener("click", imc);