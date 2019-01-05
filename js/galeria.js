//abrir foto


$('.foto').on('click',function(){
	
	
	switch($(this).attr('src')){
		case './images/minis/mini1.jpg':
		$('.fotoGrande').attr('src','./images/maxis/arquitectura1.jpg');
		break;

		case './images/minis/mini2.jpg':
		$('.fotoGrande').attr('src','./images/maxis/arquitectura2.jpg');
		break;

		case './images/minis/mini3.jpg':
		$('.fotoGrande').attr('src','./images/maxis/arquitectura3.jpg');
		break;

		case './images/minis/mini4.jpg':
		$('.fotoGrande').attr('src','./images/maxis/arquitectura4.jpg');
		break;

		case './images/minis/mini5.jpg':
		$('.fotoGrande').attr('src','./images/maxis/paisaje1.jpg');
		break;

		case './images/minis/mini6.jpg':
		$('.fotoGrande').attr('src','./images/maxis/paisaje2.jpg');
		break;

		case './images/minis/mini7.jpg':
		$('.fotoGrande').attr('src','./images/maxis/paisaje3.jpg');
		break;

		case './images/minis/mini8.jpg':
		$('.fotoGrande').attr('src','./images/maxis/paisaje4.jpg');
		break;
	}
	setTimeout( ()=>{
		$('.fondogaleria').fadeIn(1000).css('display','block');
		$('.fotoGrande').fadeIn(1000).css('display','inline');
		$('.negro').fadeOut(1000);
	},500);
	

});


//cierre galeria
$('.fondogaleria').on('click',function(){
	setTimeout(()=>{
		$('.fondogaleria').fadeOut(500);
		$('.negro').fadeIn(500);
	},500);	
});






