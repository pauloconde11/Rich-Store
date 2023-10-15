
function verificador(verNum) {
    let textValue = document.getElementById(verNum).value.trim().toLowerCase();

let letrasValidas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','á','é','í','ó','ú',];

for (let i = 0; i < textValue.length; i++) {
    
    if (letrasValidas.includes(textValue[i])) {
        document.getElementById(verNum).style.border = "2px solid green";
    } else {
        document.getElementById(verNum).style.border = "2px solid red";
    }
}

}
    

function verificadorNumero(verNum) {
    let textValue = document.getElementById(verNum).value.trim().toLowerCase();

let numerosValidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"];

for (let i = 0; i < textValue.length; i++) {
    
    if (numerosValidas.includes(textValue[i])) {
        document.getElementById(verNum).style.border = "2px solid green";
    } else {
        document.getElementById(verNum).style.border = "2px solid red";
    }
}

}


function idade(p){
     
        let age = document.getElementById(p).value.trim();
        let agex = /^[a-zA-Z\s]+$/;
    
        if (age.match(agex)) {
            console.log("VALOR INVALIDO");
            document.getElementById(p).style.border = "2px solid red"
        } else {
            console.log("VALOR VALIDO");
            document.getElementById(p).trim().style.border = "2px solid green";
        }
}


function leitorCPF(y) {
    let num = document.getElementById(y).value.trim();
    
        if (/^[a-zA-Z ]+$/.test(num)) {
            console.log("erro");
            document.getElementById(y).style.border.trim() = "1px solid red";
            
        } else {
            if (num.length == 3 || num.length == 7) {
                num = num + ".";
                document.getElementById(y).value = num;
                
            }
            if (num.length == 11) {
                num = num + "-";
                document.getElementById(y).value = num;
                document.getElementById(y).style.border = "1px solid green"
            }
        }
}   


function leitorEmail(a) {    
    let data = document.getElementById(a).value.trim();
    let verData = data.includes(".com", "@");
    console.log(verData);
   
   if (verData == true) {
        console.log("é um email");
        document.getElementById(a).style.border = "1px solid green";    
   } else {
    console.log("não é email");
    document.getElementById(a).style.border = "1px solid red";
    
   }
}




function leitorTel2(h) {
    let tel = document.getElementById(h).value.trim();

    if (/^[a-zA-Z]/.test(tel)) {
        console.log("ERRO");
    } else {
        if (tel.length == 2) {
        tel = tel + " ";
        document.getElementById(h).value = tel;
    }
    if (tel.length == 7) {
        tel = tel + "-";
        document.getElementById(h).value = tel;
        document.getElementById(h).style.border = "1px solid green";
    }
    }

    
}

