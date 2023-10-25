document.querySelectorAll('.accredited-network__result ')[0].children[0].children[0].children[0].innerText



for (var indiceHospital = 0; indiceHospital >= 0; indiceHospital++) {
  var nomeHospital = document.querySelectorAll('.accredited-network__result ')[indiceHospital].children[0].children[0].children[0].innerText;

  var nomeBairro = document.querySelectorAll('.accredited-network__result ')[indiceHospital].children[2].children[1].children[0].children[0].children[0].children[0].children[1].innerText

  var nomeCidadeUF = document.querySelectorAll('.accredited-network__result ')[indiceHospital].children[2].children[1].children[0].children[0].children[0].children[0].children[2].children[0].innerText

  var primeiroNumeroTelefone = document.querySelectorAll('.accredited-network__result ')[indiceHospital].children[2].children[1].children[0].children[0].children[0].children[0].children[0].children[2].innerText

  var linkSite = document.querySelectorAll('.accredited-network__result ')[indiceHospital].children[0].children[1].innerText

//Cole abaixo o console.log do que busca na page
 console.log(linkSite);
}

/*
  console.log(nomeBairro;
  console.log(nomeHospital);
  console.log(nomeCidadeUF);
  console.log(primeiroNumeroTelefone);
  console.log(linkSite);  
*/