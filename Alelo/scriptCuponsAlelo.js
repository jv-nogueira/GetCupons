for (var indiceEmpresas = 0; indiceEmpresas >= 0; indiceEmpresas++) {
  var porcentagemDesconto = document.querySelectorAll('.-discount.tag')[indiceEmpresas].children[0].innerText;
  var nomeEmpresa = document.querySelectorAll('.partner')[indiceEmpresas].children[0].innerText;
  var dataValidade = document.querySelectorAll('.expiry')[indiceEmpresas].innerText;

//Cole abaixo o console.log do que busca na page
 console.log(porcentagemDesconto);
}

/*
  console.log(nomeEmpresa);
  console.log(porcentagemDesconto);
  console.log(dataValidade);
*/