
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const mensaje = document.getElementById('mensaje');


piedra.addEventListener('click', () => jugar('piedra'));
papel.addEventListener('click', () => jugar('papel'));
tijera.addEventListener('click', () => jugar('tijera'));


class Juego {
  constructor() {
    this.opciones = ['piedra', 'papel', 'tijera'];
  }

  generarRespuesta() {
    const randomIndex = Math.floor(Math.random() * this.opciones.length);
    return this.opciones[randomIndex];
  }


  validarGanador(eleccionJugador, eleccionMaquina) {
    if (eleccionJugador === eleccionMaquina) {
      return 'Empate';
    }
    if (
      (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionMaquina === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionMaquina === 'papel')
    ) {
      return 'Ganaste';
    }
    return 'Perdiste';
  }
}

const juego = new Juego();

function jugar(eleccionJugador) {
  const eleccionMaquina = juego.generarRespuesta();
  const resultado = juego.validarGanador(eleccionJugador, eleccionMaquina);

  mensaje.textContent = `El jugador elijio: ${eleccionJugador}. 
                         La máquina eligió: ${eleccionMaquina}. 
                         Resultado: ${resultado}.`;
}
