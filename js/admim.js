window.onload = function(){
	$("#btnLogar").click(function(){
		validarNome();
	});
	
	$("#btnLogar").click(function(){
		validarEmail();
	});
}

function validarNome(){
	if ( $("#nome").val() == "" ){
		alert("Informe seu nome");
		return false;
	}
}

function validarEmail(){
	 if ($('#email').val() == "") {
        alert("Informe seu email");
		return false;
    }
}