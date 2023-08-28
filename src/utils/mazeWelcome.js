import Swal from "sweetalert2";

const mazeWelcome = () => {
  Swal.fire({
    title: 'Reto del Laberinto',
    html: 'Al igual que en la ingeniería de software, acá enfrentarás decisiones cruciales.<br><br>El laberinto tiene dos caminos para llegar al final, ¡pero solo uno es el más corto y eficiente!<br><br>Recuerda, en la programación, siempre hay múltiples soluciones, ¡pero tu objetivo es encontrar la mejor!',
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Instrucciones',
        html: 'Tienes que dar clic en cada uno de los recuadros que consideres parte de la solución hasta conformar la ruta completa.<br><br>Buena suerte!',
        allowOutsideClick: false
      })
    }
  })
}

export default mazeWelcome;