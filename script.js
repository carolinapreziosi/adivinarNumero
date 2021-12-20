// definimos un numero random entre el 1 y el 10
let numeroRandom = Math.floor(Math.random() * 10) + 1;

//traemos los elementos "p" del div "resultados" segun su clase.
const suposiciones = document.querySelector('.suposiciones');
const ultimoResultado = document.querySelector('.ultimoResultado');
const indicador = document.querySelector('.indicador');

//clases del form html (dato y boton enviar)
const enviaAdivinanza = document.querySelector('.enviaAdivinanza');
const adivinanza = document.querySelector('.adivinanza');

let contarAdivinanza = 1;
let resetearBoton;

// rellenamos los "p" dependiendo el valor que se ingrese en el formulario
function comprobarAdivinanza() {
    const AdivinanzaUsuario = Number(adivinanza.value);
    if (contarAdivinanza === 1) {
    suposiciones.textContent = 'Adivinanzas Anteriores ';
    }
    suposiciones.textContent += AdivinanzaUsuario + ' ';
  
    if (AdivinanzaUsuario === numeroRandom) {
      ultimoResultado.textContent = 'Felicidades! Adivinaste el numero :)';
      ultimoResultado.style.backgroundColor = 'green';
      indicador.textContent = '';
      establecerFinDelJuego();
    } else if (contarAdivinanza === 3) {
      ultimoResultado.textContent = '!!!PERDISTE!!!';
      indicador.textContent = '';
      establecerFinDelJuego();
    } else {
      ultimoResultado.textContent = 'Felicidades! Adivinaste el numero :)';
      ultimoResultado.textContent = 'INCORRECTO!';
      ultimoResultado.style.backgroundColor = 'red';
      if(AdivinanzaUsuario < numeroRandom) {
        indicador.textContent = 'Ultima supoción es demasiado baja!';
      } else if(AdivinanzaUsuario > numeroRandom) {
        indicador.textContent = 'Ultima supoción es demasiado alta!';
      }
    }
  
    contarAdivinanza++;
    adivinanza.value = '';
    adivinanza.focus();
  }

  enviaAdivinanza.addEventListener('click', comprobarAdivinanza);

  function establecerFinDelJuego() {
    adivinanza.disabled = true;
    enviaAdivinanza.disabled = true;
    resetearBoton = document.createElement('button');
    resetearBoton.textContent = 'Empieza un juego nuevo';
    document.body.append(resetearBoton);
    resetearBoton.addEventListener('click', reiniciarElJuego);
  }


  function reiniciarElJuego() {
    contarAdivinanza = 1;
    const resultado = document.querySelectorAll('.resultados p');
    for (const resultado1 of resultado) {
      resultado.textContent = '';
    }
  
    resetearBoton.parentNode.removeChild(resetearBoton);
  
    adivinanza.disabled = false;
    enviaAdivinanza.disabled = false;
    adivinanza.value = '';
    adivinanza.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numeroRandom = Math.floor(Math.random() * 10) + 1;
  }

