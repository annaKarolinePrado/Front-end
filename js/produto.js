window.onload = function(){
	$("#botaoPesquisar").click(function(){
		validarBotao();
	});
	
	$("#botaoPesquisar").click(function(){
		validarCombo();
	});
}

function validarBotao(){
	if ( $("#buscaProduto").val() == "" ){
		alert("Informe um valor para ser pesquisado");
		return false;
	}
}

function validarCombo(){
	 if ($('#comboProduto').val() == "") {
        alert("Selecione um campo");
		return false;
    }
}