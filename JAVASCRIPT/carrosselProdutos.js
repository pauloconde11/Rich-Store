      let i = 0;
      let imagens = [];

      imagens.push('https://images.genius.com/e151675dab6728ffc56540acc093569d.1000x1000x1.jpg');
      imagens.push("https://images-prod.dazeddigital.com/900/azure/dazed-prod/1270/2/1272503.jpg");
      imagens.push("https://images.squarespace-cdn.com/content/v1/5aa6475b50a54f0331abee6d/1571716192847-GMCLMRQ0U9EXJ5LP6DJ8/RichBrian_L1040135.JPG?format=1500w");
      imagens.push("https://i.ytimg.com/vi/DMDD7zR7S44/maxresdefault.jpg");
      imagens.push("https://img.buzzfeed.com/buzzfeed-static/complex/images/baditeic2s39xxptlp8v/rich-brian-press-yellow1.jpg?output-format=jpg&output-quality=auto");
      imagens.push("https://akcdn.detik.net.id/community/media/visual/2019/06/28/d9902fd8-23d2-4969-9b4c-aa5e125c626a_169.jpeg?w=620");
      imagens.push("https://static.fabrik.io/e01/de043778d620bbb1.png?lossless=1&w=2880&h=5120&fit=max&s=91cb6748966a5ef51602e5026a3128e3");


      function anterior() {
        if (i == 0) {
          i = imagens.length - 1;
        } else {
          i--;
        }

        document.getElementById("ifoto").src = imagens[i];
       
        if (i - 1 == -1) {
          document.getElementById("ifoto0").src = imagens[imagens.length - 1];
          
        } else {
          document.getElementById("ifoto0").src = imagens[i - 1];
        }

        if (i + 1 == imagens.length) {
          document.getElementById("ifoto2").src = imagens[0];
        } else {
          document.getElementById("ifoto2").src = imagens[i + 1];
        }
      }

  //AAAAAAAAAAAAAAAAAA
  console.log(i);
  function proximo() {
    i++;
    if (i === imagens.length) {
      i = 0;
    }

    document.getElementById("ifoto").src = imagens[i];

    if (i - 1 == -1) {
      document.getElementById("ifoto0").src = imagens[imagens.length - 1];
    } else {
      document.getElementById("ifoto0").src = imagens[i - 1];
    }

    if (i + 1 == imagens.length) {
      document.getElementById("ifoto2").src = imagens[0];
    } else {
      document.getElementById("ifoto2").src = imagens[i + 1];
    }
  }


  
  

