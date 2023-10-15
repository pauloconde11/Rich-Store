
let questao1; 
let questao2;  
let questao3;  
let questao4;  
let questao5;  

let pontos = 0;

function questionario() {
 questao1 = document.getElementById('iquestao1').value.trim().toUpperCase();
 questao2 = document.getElementById('iquestao2').value.trim().toUpperCase();
 questao3 = document.getElementById('iquestao3').value.trim().toUpperCase();
 questao4 = document.getElementById('iquestao4').value.trim().toUpperCase();
 questao5 = document.getElementById('iquestao5').value.trim().toUpperCase();

//Qual é o nome verdadeiro de Rich Brian?

    console.log(questao1);


    if (questao1 === "BRIAN IMANUEL") {
        console.log("acertou!");
        pontos++;

    } else {
        console.log("errou!");
    }

//Qual o nome do seu album mais famoso?

    if (questao2 === "THE SAILOR") {
        console.log("acertou!");
        pontos++;
    } else {
        console.log("errou!");
    }

//Rich Brian ja fez música com o cantor Joji?

    if (questao3 === "SIM") {
        console.log("acertou!");
        pontos++;
    } else {
        console.log("errou!");
    }

//Qual é o nome da primeira musica do álbum The Sailor?

    if (questao4 === "THE SAILOR") {
        console.log("acertou!");
        pontos++;
    } else {
        console.log("errou!");
    }

//Qual a nacionalidade de Rich Brian?

    if (questao5 === "INDONESIO") {
        console.log("acertou!");
        pontos++;
    } else {
        console.log("errou!");
    }

    console.log(pontos);

    if (pontos == 5) {
        alert("VOCÊ GANHOU 5% DE DESCONTO");
    } else {
        alert("Tente outra vez para ganhar desconto!");
    }

}