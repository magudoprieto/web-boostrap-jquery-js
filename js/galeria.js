//abrir foto

var btnFoto = document.querySelector('foto');
btnFoto.addEventListener('click', cambiarMenu);


function cambiarMenu(e){
	$('.fondogaleria').fadeIn(1000).css('display','block');
	
	//let fotosMini = $('.foto');
	console.log(fotosMini);
	
	$('.negro').fadeOut(1000);
}

//cierre galeria

var btnCierre = document.querySelector('.fondogaleria');
btnCierre.addEventListener('click', cierreGaleria);

function cierreGaleria(e){
    $('.fondogaleria').fadeOut(1000);
	$('.negro').fadeIn(1000);
}




let fotosMax = new Array('../images/maxis/arquitectura1.jpg','../images/maxis/arquitectura2.jpg','../images/maxis/arquitectura3.jpg','../images/maxis/arquitectura1.jpg','../images/maxis/paisaje1.jpg','../images/maxis/paisaje2.jpg','../images/maxis/paisaje3.jpg','../images/maxis/paisaje4.jpg');