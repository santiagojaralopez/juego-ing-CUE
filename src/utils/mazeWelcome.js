import Swal from "sweetalert2";

const mazeWelcome = () => {
  Swal.fire({
    title: 'Reto del Laberinto',
    html: 'Al igual que en la ingeniería de software, acá enfrentarás decisiones cruciales.<br><br>El laberinto tiene dos caminos para llegar al final, ¡pero solo uno es el más corto y eficiente!<br><br>Recuerda, en la programación, siempre hay múltiples soluciones, ¡pero tu objetivo es encontrar la mejor!',
    allowOutsideClick: false
  })
}

export default mazeWelcome;