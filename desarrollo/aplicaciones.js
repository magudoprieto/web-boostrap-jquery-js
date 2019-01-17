// IVA

var total;
var baseImponible;
$('#boton').on('click',function(){
    total = parseInt($('#calcu').val());
    calcular(); 
});

function calcular(){
    var porcentaje = parseInt($('select[name="seleccion"] option:selected').text());
    switch(porcentaje){
        case 21:
        porcentaje = 1.21;
        break;
        case 10:
        porcentaje = 1.10;
        break;
        case 4:
        porcentaje = 1.04;
        break;
    }

    baseImponible = total/porcentaje;

    $('.muestra').text(`La base imponible de tu cifra total es: ${(baseImponible.toFixed(2))}`);
}

//Letra del DNI

$('#letra').on('click',function(){
    numero = parseInt($('#numero').val());
    if(isNaN(numero)){
        alert('Tienes que introducir un número válido');
    }else{
        comprobarLetra();
    }
     
});

var todasLetras = new Array('T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E');

function comprobarLetra(){
    var valor = numero%23;
    for(var i=0;i<=todasLetras.length;i++){
        if(i==valor){
            $('.completo').text(`La letra que corresponde a este DNI es: ${todasLetras[i]}`);
        }
    }

}


//Potencias

var numeroUno;
var numeroDos;
var resultado = 0;

$('#calcular').on('click',function(){
    numeroUno = parseInt($('#numeroUno').val());
    numeroDos = parseInt($('#numeroDos').val());
    resultado = Math.pow(numeroUno,numeroDos);
    $('.resultado').text(`El resultado es de: ${resultado}`);
});



//binarios

$('#binariar').on('click',function(){
    var numeroDecimal = parseInt($('#decimal').val());
    var binario = new Array();
    while(numeroDecimal != 1){
        binario.push(numeroDecimal%2);
        numeroDecimal = parseInt(numeroDecimal/2);
    }
    binario.push(1);
    $('.muestraBinario').text((binario.join('')));
    
});
