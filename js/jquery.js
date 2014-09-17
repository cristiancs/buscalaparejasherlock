$('.hidden').hide();

var cartas = 0;
var pre = 0;
$('.cartas').click(function(){
	cartas++;
	pre++;
	if(pre == 1){
		var id = $(this).attr('title');
		$('.previo').val(id);
	}
	else if(pre == 2){
		var id2 = $(this).attr('title');
	}

	$('h2', this).hide();
	$('.hidden', this).show();

	if((cartas%2) == 0){
		if(pre == 2){
			var previo = $('.previo').val();
			console.log(previo);
			if(previo == id2){
				//alert('Bien');
				$('.resultado#bien').css({opacity: 1});
				setTimeout(function(){
					$('.resultado#bien').css({opacity: 0});
				}, 500);
			}
			else{
				//alert('Mal');
				$('.resultado#mal').css({opacity: 1});
				setTimeout(function(){
					$('.resultado#mal').css({opacity: 0});
				}, 500);
				setTimeout(function(){
					
				$('.cartas[title='+previo+'] .hidden').hide();
				$('.cartas[title='+id2+'] .hidden').hide();

				$('.cartas[title='+previo+'] h2').show();
				$('.cartas[title='+id2+'] h2').show();
			}, 500);
			}
			pre = 0;
		}
	}
});