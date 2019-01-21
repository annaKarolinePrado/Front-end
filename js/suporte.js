window.onload = function(){
	$("#iconePesquisa").click(function(){
		validarBotao();
	});
	
	$("#btnEnviar").click(function(){
		validarNome();
	});
	
	$("#btnEnviar").click(function(){
		validarEmail();
	});
	
	$("#btnEnviar").click(function(){
		validarAreaTexto();
	});
}

function validarBotao(){
	if ( $("#buscaGenerica").val() == "" ){
		alert("Informe um valor para ser pesquisado");
		return false;
	}
}
function validarNome(){
	if ( $("#nome").val() == "" ){
		alert("Informe seu nome");
		return false;
	}
}
function validarEmail(){
	if ( $("#email").val() == "" ){
		alert("Informe seu email");
		return false;
	}
}
function validarAreaTexto(){
	if ( $("#areaTexto").val() == "" ){
		alert("Descreva seu problema.");
		return false;
	}
}