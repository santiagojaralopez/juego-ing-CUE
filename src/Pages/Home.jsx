import { NavLink } from "react-router-dom"
import { Button } from "@nextui-org/react"


export const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-20 items-center justify-center bg-cue-blue">
      <div className="w-[70%] h-auto flex gap-20 items-center justify-center">
        <div className="w-[400px]">
          <img src="https://www.dhla.org/wp-content/uploads/2019/08/LOGO-uvonhumboldt.png" alt="Logo CUE" />
        </div>
        <div className="flex flex-col text-start">
          <p className="text-white font-calibri font-bold text-[50px]">ProjectCode</p>
          <p className="text-white font-calibri text-[35px]">Un juego del Programa de Ingeniería de Software Dual</p>
        </div>
      </div>
      <NavLink to='/soft-maze'>
        <Button className="w-[250px] h-[70px] text-white font-calibri text-[30px]" color="secondary">Iniciar Juego</Button>
      </NavLink>
    </div>
  )
}