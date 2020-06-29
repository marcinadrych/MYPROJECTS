var score = 0; 
var total = 3;
var point = 1;
var highest = total * point;

function init(){
	sessionStorage.setItem('a1','c');
	sessionStorage.setItem('a2','b');
	sessionStorage.setItem('a3','a');
	sessionStorage.setItem('a4','b');
	sessionStorage.setItem('a5','a');
}

$(document).ready(function(){
	$('.questionForm').hide();
	
	$('#p1').show();
	
	$('#p1 #submit').click(function(){
		$('.questionForm').hide();
		process('p1');
		$('#p2').fadeIn(300);
		return false;
	});
	
	$('#p2 #submit').click(function(){
		$('.questionForm').hide();
		process('p2');
		$('#p3').fadeIn(300);
		return false;
	});
	
	$('#p3 #submit').click(function(){
		$('.questionForm').hide();
		process('p3');
		$('#p4').fadeIn(300);
		return false;
	});
	
	$('#p4 #submit').click(function(){
		$('.questionForm').hide();
		process('p4');
		$('#p5').fadeIn(300);
		return false;
	});
	
	$('#p5 #submit').click(function(){
		$('.questionForm').hide();
		process('p5');
		$('#results').fadeIn(300);
		return false;
	});
});

function process(p){
	if(p == "p1"){
		var submitted = $('input[name=p1]:checked').val();
		if(submitted == sessionStorage.a1){
			score++;
		}
	}
	if(p == "p2"){
		var submitted = $('input[name=p2]:checked').val();
		if(submitted == sessionStorage.a2){
			score++;
		}
	}
	if(p == "p3"){
		var submitted = $('input[name=p3]:checked').val();
		if(submitted == sessionStorage.a3){
			score++;
		}
	}
		if(p == "p4"){
		var submitted = $('input[name=p4]:checked').val();
		if(submitted == sessionStorage.a4){
			score++;
		}
	}
	if(p == "p5"){
		var submitted = $('input[name=p5]:checked').val();
		if(submitted == sessionStorage.a5){
			score++;
		}
		$('#results').html('<h3>Twój wynik to: '+score+' na 5 możliwych punktów ! </h3><a href=""index.html">Spróbuj jeszcze raz! :) </a>');
	}
	return false;
}

window.addEventListener('load',init,false);