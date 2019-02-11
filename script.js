var vez = 0;

/*
	essa função "atualizarVez" serve para verificar a variável "vez" 
	pra mostrar de quem é a vez de jogar, de X ou O.
	
*/
function atualizarVez(){
	if(vez == 0){
		$('.vez img').attr('src', 'img/O.png'); //mostra de quem é a vez
		//$('.jogo').css('cursor','url("img/bola_64.ico"), default');
	} else {
		$('.vez img').attr('src', 'img/X_preto.png');
		//$('.jogo').css('cursor','url("img/multiplicacao_64.ico"), default');
	}
}

/*
	essa função verificarGanhador irá analisar as areas marcadas
	e determinar quem ganhou.
*/
function verificarGanhador(){
	var ganhador = "";
	var op = "";
	var a1 = $('.a1').attr('data-marcado');
	var a2 = $('.a2').attr('data-marcado');
	var a3 = $('.a3').attr('data-marcado');
	var b1 = $('.b1').attr('data-marcado');
	var b2 = $('.b2').attr('data-marcado');
	var b3 = $('.b3').attr('data-marcado');
	var c1 = $('.c1').attr('data-marcado');
	var c2 = $('.c2').attr('data-marcado');
	var c3 = $('.c3').attr('data-marcado');

	for(var i=0; i<2; i++){
		if(i == 0){
			op = 'o';
		} else {
			op = 'x';
		}

		if(a1 == op && a2 == op && a3 == op){
			ganhador = op;
			$('.a1, .a2, .a3').addClass('padrao');
		}else if(b1 == op && b2 == op && b3 == op){
			ganhador = op;
			$('.b1, .b2, .b3').addClass('padrao');
		}else if(c1 == op && c2 == op && c3 == op){
			ganhador = op
			$('.c1, .c2, .c3').addClass('padrao');

		}else if(a1 == op && b1 == op && c1 == op){
			ganhador = op;
			$('.a1, .b1, .c1').addClass('padrao');
		}else if(a2 == op && b2 == op && c2 == op){
			ganhador = op;
			$('.a2, .b2, .c2').addClass('padrao');
		}else if(a3 == op && b3 == op && c3 == op){
			ganhador = op;
			$('.a3, .b3, .c3').addClass('padrao');

		}else if(a1 == op && b2 == op && c3 == op){
			ganhador = op;
			$('.a1, .b2, .c3').addClass('padrao');
		}else if(a3 == op && b2 == op && c1 == op){
			ganhador = op;
			$('.a3, .b2, .c1').addClass('padrao');

		}else if(a1 != "" && a2 != "" && a3 != "" &&
			b1 != "" && b2 != "" && b3 != "" &&
			c1 != "" && c2 != "" && c3 != ""){
			ganhador = "Empate!";
			$('.area').addClass('naoPadrao');
		}
	}


	if(ganhador != ""){
		if(ganhador == 'o' || ganhador == 'x'){
			$('.ganhador .result').html('Ganhador: '+ganhador);
			$('.ganhador').css('display','flex');
		}else{
			$('.ganhador .result').html(ganhador);
			$('.ganhador').css('display','flex');
		}

		/*$('.area').attr('data-marcado',"");
		$('.area img').remove();*/
	}
}

$(function(){
	atualizarVez(); //mostra de quem é a vez de jogar

	$('.area').bind('click', function(){
		if($(this).find('img').length == 0){
			if(vez == 0){
				$(this).html('<img src="img/O.png" width="50">');
				$(this).css('cursor','auto');
				$(this).attr('data-marcado','o');
				vez = 1;
			} else {
				$(this).html('<img src="img/X_preto.png" width="50">');
				$(this).css('cursor','auto');
				$(this).attr('data-marcado','x');
				vez = 0;
			}

			verificarGanhador();
		}		

		atualizarVez();
	});

	$('.area').bind('mousemove', function(){
		if($(this).find('img').length == 0){
			if(vez == 0){
				$(this).css('cursor','url("img/bola_64.ico"), default');
			} else {
				$(this).css('cursor','url("img/multiplicacao_64.ico"), default');
			}
		} else {
			$(this).css('cursor','auto');
		}
	});

	$('#recomecar').bind('click', function(){
		$('.ganhador').css('display','none');
		$('.area').attr('data-marcado',"");
		$('.area img').remove();
		$('.area').removeClass('padrao');
		$('.area').removeClass('naoPadrao');
	});
});