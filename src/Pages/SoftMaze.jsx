import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

import mazeBorders from "../utils/mazeBorders";
import mazeWelcome from "../utils/mazeWelcome";
import { SnowBackground } from "../Components/SnowBackground/SnowBackground";
import { SoftMazeSquare } from "../Components/SoftMazeSquare";


export const SoftMaze = () => {
  const solutionPaths = [
    ['(9, 0)','(9, 1)','(9, 2)','(9, 3)','(9, 4)','(8, 4)','(8, 5)','(7, 5)','(6, 5)','(5, 5)','(5, 4)','(4, 4)','(4, 5)','(3, 5)','(2, 5)','(1, 5)','(0, 5)','(0, 6)','(1, 6)','(1, 7)','(1, 8)','(1, 9)','(0, 9)'],
    ['(9, 0)','(8, 0)','(7, 0)','(7, 1)','(7, 2)','(6, 2)','(5, 2)','(5, 1)','(4, 1)','(4, 2)','(4, 3)','(3, 3)','(3, 2)','(2, 2)','(2, 1)','(1, 1)','(0, 1)','(0, 2)','(1, 2)','(1, 3)','(2, 3)','(2, 4)','(1, 4)','(1, 5)','(0, 5)','(0, 6)','(1, 6)','(1, 7)','(1, 8)','(1, 9)','(0, 9)']
  ];
  
  const sortedShortestPath = solutionPaths[0].slice().sort().toString();
  const sortedLongestPath = solutionPaths[1].slice().sort().toString();

  const navigate = useNavigate();
  const selectedSquares = [];

  useEffect(() => {
    mazeWelcome();

    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };

    window.onbeforeunload = function () {
      return 0;
    };
  })

  const reviewToken = () => {
    Swal.fire({
      title: '!Lo has conseguido! Ve a los siguientes retos de las otras ingenierías y después continuas al próximo nivel de Ing. de Software',
      showCancelButton: false,
      confirmButtonText: 'Siguiente Nivel',
      confirmButtonColor: 'rgb(0, 218, 185)',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/dev-team-intro');
      }
    })
  }

  const reviewSelectedPath = (selection) => {
    const sortedSelection = selection.slice().sort().toString();
  
    if (sortedSelection === sortedLongestPath) {
      Swal.fire({
        title: '!Esa es una solución!',
        html: 'Pero no la más óptima :(<br>Sigue buscando',
        timer: 4000,
        timerProgressBar: true,
      });
    } else if (sortedSelection === sortedShortestPath) {
      reviewToken();
    } else {
      Swal.fire({
        title: '¿Esa es una solución?',
        html: 'Yo no lo creo',
        timer: 4000,
        timerProgressBar: true,
      });
    }
  }

  const handleSquareClick = (row, col) => {
    const clickedSquare = `(${row}, ${col})`;
    const index = selectedSquares.indexOf(clickedSquare);

    if (index === -1) selectedSquares.push(clickedSquare);
    else selectedSquares.splice(index, 1);
  };

  return (
    <>
      <SnowBackground className='-z-1' />
      <section className='z-10 w-screen h-screen flex flex-row gap-20 justify-center items-center bg-[#232741]'>
        <div className="z-10 w-2/5 flex justify-center items-center animate-wiggle animate-infinite">
          <div className='w-[600px] h-[600px] '>
            {mazeBorders.map((bordersRow, row) => (
              <div key={row} className='grid grid-cols-10'>
                {bordersRow.map((borders, col) => (
                  <SoftMazeSquare key={col} borders={borders} coordinate={[row, col]} onSquareClick={handleSquareClick} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="z-10 w-1/5 h-[100px] flex flex-row justify-center items-center">
          <Button color="primary" className="w-[200px] h-[100px]" onClick={() => reviewSelectedPath(selectedSquares)}>
            <p className="text-white font-cocogoose font-bold text-2xl">VERIFICAR<br/>RUTA</p>
          </Button>
        </div>
      </section>
    </>
  )
}