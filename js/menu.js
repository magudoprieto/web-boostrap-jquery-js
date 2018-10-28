//evento menu

var btnMenu = document.querySelector('#selector');
btnMenu.addEventListener('click', cambiarMenu);

function cambiarMenu(e){
	$('.menu').fadeIn(1000).css('display','block');
}


//evento close

var btnClose = document.querySelector('#close');
btnClose.addEventListener('click', cierreMenu);

function cierreMenu(e){
	$('.menu').fadeOut(1000);
}
