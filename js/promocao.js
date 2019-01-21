window.onload = function(){
	$("#iconePesquisa").click(function(){
		validarBotao();
	});
}

function validarBotao(){
	if ( $("#buscaGenerica").val() == "" ){
		alert("Informe um valor para ser pesquisado");
		return false;
	}
}