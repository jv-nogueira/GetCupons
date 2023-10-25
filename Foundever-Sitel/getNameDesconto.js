
//O script abaixo pega o nome de todas as empresas visíveis na página
for (var listaLojas = 0; listaLojas >= 0; listaLojas++) {
    var title = document.querySelectorAll('.row.justify-content-center')[6].children[listaLojas].children[1].children[0].children[0].children[0].children[0].title;
        console.log(title);
  }
  
//O script abaixo pega o desconto de todas as respectivas empresas vísiveis na página
for (var listaCupons = 0; listaCupons >= 0; listaCupons++) {
    var innerText = document.querySelectorAll('.row.justify-content-center')[6].children[listaCupons].children[1].children[0].children[2].children[0].children[0].children[0].innerText;
        console.log(innerText);
  }

//O script abaixo pega o site de todas as respectivas empresas vísiveis na página
for (var listaLinks = 0; listaLinks >= 0; listaLinks++) {
    var href = document.querySelectorAll('.btn.my-btn.btn-cta')[listaLinks].href
        console.log(href);
    }
