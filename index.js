let disparoJugador;
let respuestaDibu;

let goles = 0;
let atajadas = 0;

let botonIzquierda = document.getElementById("direccion__izquierda");
botonIzquierda.addEventListener("click", disparoIzquierda);
let botonCentro = document.getElementById("direccion__centro");
botonCentro.addEventListener("click", disparoCentro);
let botonDerecha = document.getElementById("direccion__derecha");
botonDerecha.addEventListener("click", disparoDerecha);

function disparoIzquierda() {
    disparoJugador = "IZQUIERDA";
    atajaDibu();
}

function disparoCentro() {
    disparoJugador = "CENTRO"
    atajaDibu();
}

function disparoDerecha() {
    disparoJugador = "DERECHA"
    atajaDibu();
}

function atajaDibu(){
    let atajadaAleatoria = aleatorio (1, 3);
    
    if(atajadaAleatoria == 1){
        respuestaDibu = "DERECHA";
    }else if(atajadaAleatoria == 2){
        respuestaDibu = "CENTRO";
    }else{
        respuestaDibu = "IZQUIERDA";
    }

    partido();
        
}


// CODIGO QUE MUESTRA RESULTADO EN IMAGEN

function partido() {
    let sectionJugada = document.getElementById("jugada");
    let imagen = document.createElement("div");

    let spanContadorGoles = document.getElementById("contador__goles");
    let spanContadorAtajadas = document.getElementById("contador__atajadas");

    if (disparoJugador == "IZQUIERDA" && respuestaDibu == "IZQUIERDA") {
        imagen.innerHTML = `
        <p>ATAJA DIBU!!!!</p>
        <img src="./img/izquierda.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        atajadas++;
        spanContadorAtajadas.innerHTML = atajadas;
    }else if(disparoJugador == "CENTRO" && respuestaDibu == "IZQUIERDA"){
        imagen.innerHTML = `
        <p>GOL!!!!</p>
        <img src="./img/izquierda_centro.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        goles++;
        spanContadorGoles.innerHTML = goles;
    }else if (disparoJugador == "DERECHA" && respuestaDibu == "IZQUIERDA") {
        imagen.innerHTML = `
        <p>GOL!!!!</p>
        <img src="./img/izquierda_derecha.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        goles++;
        spanContadorGoles.innerHTML = goles;
    }else if (disparoJugador == "IZQUIERDA" && respuestaDibu == "CENTRO") {
        imagen.innerHTML = `
        <p>GOL!!!!</p>
        <img src="./img/centro_izquierda.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        goles++;
        spanContadorGoles.innerHTML = goles;
    }else if (disparoJugador == "CENTRO" && respuestaDibu == "CENTRO") {
        imagen.innerHTML = `
        <p>ATAJA DIBU!!!!</p>
        <img src="./img/centro.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        atajadas++;
        spanContadorAtajadas.innerHTML = atajadas;
    }else if (disparoJugador == "DERECHA" && respuestaDibu == "CENTRO") {
        imagen.innerHTML = `
        <p>GOL!!!!</p>
        <img src="./img/centro_derecha.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        goles++;
        spanContadorGoles.innerHTML = goles;
    }else if (disparoJugador == "IZQUIERDA" && respuestaDibu == "DERECHA") {
        imagen.innerHTML = `
        <p>GOL!!!!</p>
        <img src="./img/derecha_izquierda.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        goles++;
        spanContadorGoles.innerHTML = goles;
    }else if (disparoJugador == "CENTRO" && respuestaDibu == "DERECHA") {
        imagen.innerHTML = `
        <p>ATAJA DIBU!!!!</p>
        <img src="./img/derecha_centro.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        atajadas++;
        spanContadorAtajadas.innerHTML = atajadas;
    }else{
        imagen.innerHTML = `
        <p>ATAJA DIBU!!!!</p>
        <img src="./img/derecha.jpg"/>
        `
        sectionJugada.appendChild(imagen);
        atajadas++;
        spanContadorAtajadas.innerHTML = atajadas;
    }
}





// CODIGO QUE MUESTRA RESULTADO EN STRING"

// function partido() {
//     if(disparoJugador == "IZQUIERDA" && respuestaDibu == "IZQUIERDA"){
//         crearJugada("Ataja Dibu!")
//     }else if (disparoJugador == "CENTRO" && respuestaDibu == "IZQUIERDA") {
//         crearJugada("Goool!")
//     }else if (disparoJugador == "DERECHA" && respuestaDibu == "IZQUIERDA") {
//         crearJugada("Ataja Dibu!!!")
//     }else if (disparoJugador == "IZQUIERDA" && respuestaDibu == "CENTRO") {
//         crearJugada("Goool!")
//     }else if (disparoJugador == "CENTRO" && respuestaDibu == "CENTRO") {
//         crearJugada("Ataja Dibu!!!")
//     }else if (disparoJugador == "DERECHA" && respuestaDibu == "CENTRO") {
//         crearJugada("Goool!")
//     }else if (disparoJugador == "IZQUIERDA" && respuestaDibu == "DERECHA") {
//             crearJugada("Gol!")
//     }else if (disparoJugador == "CENTRO" && respuestaDibu == "DERECHA") {
//         crearJugada("Gol!")
//     }else if (disparoJugador == "DERECHA" && respuestaDibu == "DERECHA") {
//             crearJugada("Ataja Dibu!")
//     }else{
//         crearJugada("Jugada no válida!")
//     }
// }

// function crearJugada(resultado) {
//     let sectionJugada = document.getElementById("jugada");
//     let imagen = document.createElement("div");
//     imagen.innerHTML = 
//     imagen.innerHTML = `<p>Pateaste hacia ${disparoJugador} - Dibu volará hacia ${respuestaDibu} - ${resultado}</p>`
//     ;
//     sectionJugada.appendChild(imagen);
    
// }



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}