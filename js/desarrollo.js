//evento menu

var btnMenu = document.querySelector('#selector');
btnMenu.addEventListener('click', cambiarMenu);

function cambiarMenu(e){
	$('.fondodos').fadeIn(1000).css('display','block');
}


//evento close

var btnClose = document.querySelector('#close');
btnClose.addEventListener('click', cierreMenu);

function cierreMenu(e){
	$('.fondodos').fadeOut(1000);
}

