
console.log('funcionou');

var produtosRoupa = [];

produtosRoupa.push("THE_SAILOR_FAMILY_PORTRAIT_TEE");
produtosRoupa.push("THE_SAILOR_OPEN_YOUR_EYES");
produtosRoupa.push("THE_SAILOR_FAMILY_PORTRAIT_TEE");
produtosRoupa.push("THE_SAILOR_FAMILY_PORTRAIT_TEE");
produtosRoupa.push("THE SAILOR_FULL_ALBUM_VINYL");

var precos = [];

precos.push('$24.99');


//tamanhos das roupas

let tamanhos = [];

tamanhos.push(document.getElementById('itamanhopp').value);
tamanhos.push(document.getElementById('itamanhop').value);
tamanhos.push(document.getElementById('itamanhom').value);
tamanhos.push(document.getElementById('itamanhog').value);
tamanhos.push(document.getElementById('itamanhogg').value);

function seletorTamanho(x) {
  
  let roupaselect = document.getElementById(x).value;
  console.log(roupaselect);

  /*
  if (roupaselect == tamanhos[0]) {
    comprafinal = roupaselect;
    console.log("bbb" + comprafinal);
  } else {
    if (roupaselect == tamanhos[1]) {
      comprafinal = roupaselect;
    } else {
      if (roupaselect == tamanhos[2]) {
        comprafinal = roupaselect;
      } else {
        if (roupaselect == tamanhos[3]) {
          comprafinal = roupaselect;
        } else {
          if (roupaselect == tamanhos[4]) {
            comprafinal = roupaselect;
          } else {
            comprafinal = tamanhos[5];
          }
        }
      }
    }
  }
console.log("COMPRAFINAL"+comprafinal);
  return comprafinal;
  */

  switch (roupaselect) {
    case "PP":
      alert("Produto tamanho PP adicionado ao carrinho!");
      break;

    case "P":
      alert("Produto tamanho P adicionado ao carrinho!");
      break;

    case "M":
      alert("Produto tamanho M adicionado ao carrinho!");
      break;
    
    case "G":
      alert("Produto tamanho G adicionado ao carrinho!");
      break;

    case "GG":
      alert("Produto tamanho GG adicionado ao carrinho!");
      break;
  
    default:
      break;
  }

}


//leitor CEP

function getProductqty(number) {
    console.log(number.value);
}




function leitorCEP(y) {
    let cepcheck = document.getElementById(y).value.trim();
    
        if (/^[a-zA-Z ]+$/.test(cepcheck)) {
            console.log("erro");
            document.getElementById(y).style.border = "1px solid red";
        }else{
            console.log('funcionou');
    }        
} 








