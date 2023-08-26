import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@nextui-org/react";

export const Outro = () => {
  const navigate = useNavigate();

  const returnToStart = () => {
    navigate('/');
  }

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };

    window.onbeforeunload = function () {
      return 0;
    };
  })

  return (
    <div className="w-screen h-screen flex flex-col gap-32 items-center justify-center bg-cue-blue">
      <div className="w-[70%] h-auto flex gap-20 items-center justify-center">
        <div className="w-[800px] flex justify-center">
          <img src="https://www.pngplay.com/wp-content/uploads/13/Software-Engineering-Transparent-PNG.png" alt="Logo CUE" />
        </div>
        <div className="flex flex-col text-start">
          <p className="text-white font-calibri font-bold text-[50px]">Gracias por jugar</p>
          <p className="text-white font-calibri text-[25px]">Desarrollado con ❤️ por Santiago Jaramillo López, estudiante del programa de Ingeniería de Software Dual para la Facultad de Ingenierías y Ciencias Básicas</p>
        </div>
      </div>
      <Button
        onClick={returnToStart}
        className="w-[300px] h-[70px] text-white font-cocogoose text-[30px]"
        color="primary"
      >
        Volver al inicio
      </Button>
    </div>
  )
}