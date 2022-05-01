

// FORMULÁRIO 
(function () {
    'use strict' 
    var forms = document.querySelectorAll('.needs-validation')    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  $("#telefone").mask("(00) 0000-0000");
  $("#nome").mask("Digite seu nome completo");

  //Código pronto do Matias
  var headers4 = new Headers();
  headers4.set('Accept', 'application/json');
  var dadosForm = new FormData();
   //dadosForm.append("Lat", position.coords.latitude);
	//dadosForm.append("Long", position.coords.longitude);
	dadosForm.append("Width", screen.width);
	dadosForm.append("Height", screen.height);
	dadosForm.append("pixelRatio", window.devicePixelRatio);

//ajustar a busca do campo. Pode usar jQuery também. Precisa buscar o nome e o telefone.

    dadosForm.append("nome", document.getElementsByClassName("whataapp-chat-bubble-user svelte-4c6a6r")[0].querySelector("input").value);
    dadosForm.append("telefone", document.getElementsByClassName("whataapp-chat-bubble-user svelte-4c6a6r")[1].querySelector("input").value);
    dadosForm.append("latitude", latitude);
    dadosForm.append("longitude", longitude);
  
 // essa URL é de um serviço que estamos usando. Ele recebe o POST com os dados do array "dadosForm" e salva em uma planilha do Google para ser utilizada depois.

    var url = 'https://n8n.uneinternet.com.br/webhook/chat';

    var pairs = window.location.search.substring(1).split("&"), pair,i;

    for ( i in pairs ) {
      if ( pairs[i] === "" ) continue;
  
      pair = pairs[i].split("=");
      dadosForm.append(decodeURIComponent( pair[0] ), decodeURIComponent( pair[1] ));
    }
		
  var fetchOptions = { method: "POST", headers4: headers4, body: dadosForm };

  var responsePromise = fetch(url, fetchOptions);