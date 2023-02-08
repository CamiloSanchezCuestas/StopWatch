let timeout;
let ms = 0;
let seg = 0;
let min = 0;
let stopwatch = document.getElementById("Reloj");
let button = document.getElementById("Boton_inicio");

function empezar() {
    button.disabled = true;
    timeout = setTimeout(function() {
        ms = parseInt(ms);
        seg = parseInt(seg);
        min = parseInt(min); 
        ms++;

        if (ms == 100) {
            seg = seg + 1;
            ms = 0;
        } 
        if (seg == 60) {
            min = min + 1;
            seg = 0;
        }

        if (ms<10 && seg<10) {
            Reloj.innerHTML = '0'+ min + ' : 0' + seg + ' , 0' + ms;
        } else if(ms<10){
            Reloj.innerHTML = '0'+ min + ' : ' + seg + ' , 0' + ms;
        }else if (seg < 10){
            Reloj.innerHTML = '0'+ min + ' : 0' + seg + ' , ' + ms;
        } else {
            Reloj.innerHTML = '0'+ min + ' : ' + seg + ' , ' + ms;

        }
        empezar()
        }) 
    };

    function pausa() {
        clearTimeout(timeout);
        button.disabled = false;
    }
    function reset() {
        clearTimeout(timeout);
        Reloj.innerHTML = '00 : 00 : 00';
        button.disabled = false;
        ms = 0;
        seg = 0;
        min = 0;
    } 
