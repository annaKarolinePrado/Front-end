window.onload = function(){
	$("#iconePesquisa").click(function(){
		validar();
	});
}
function validar(){
	if ( $("#buscaGenerica").val() == "" ){
		alert("Informe um valor para ser pesquisado");
		return false;
	}
}