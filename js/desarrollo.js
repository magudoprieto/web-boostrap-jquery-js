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

//evento abrir menu desarrollo

var btnapp = document.querySelector('.app');
btnapp.addEventListener('click',abrirDesarrollo);

function abrirDesarrollo(){
    $('.negro').fadeIn(1000).css('display','block');
}

//evento cerrar menu desarrollo

var btnCerrarApp = document.querySelector('.cerrarapp');
btnCerrarApp.addEventListener('click', cierreApp);

function cierreApp(e){
	$('.negro').fadeOut(1000);
}