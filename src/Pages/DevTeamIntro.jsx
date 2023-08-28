import { NavLink } from "react-router-dom"
import { Button } from "@nextui-org/react"

const DevTeamIntro = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-dev-team-intro bg-cover'>
      <div class="w-4/5 h-auto px-10 py-20 flex flex-col gap-16 justify-center items-center rounded-2xl backdrop-blur-xl bg-white/70">
        <h1 className='font-cocogoose text-4xl font-bold'>Formando el Equipo</h1>
        <div className='flex flex-col gap-4'>
          <p className='font-cocogoose text-xl'>
            En este nivel, tu capacidad para crear un equipo de desarrollo equilibrado será clave para cumplir los requerimientos del cliente.
          </p>
          <p className='font-cocogoose text-xl'>
            Primero, explora los roles de equipo disponibles y sus habilidades únicas.
          </p>
          <p className='font-cocogoose text-xl'>
            Luego, analiza los requerimientos detallados que el cliente ha presentado.
          </p>
          <p className='font-cocogoose text-xl' >
            Finalmente, selecciona con sabiduría los roles que mejor se ajusten a los requerimientos, considerando el presupuesto disponible.
          </p>
          <p className='font-cocogoose text-xl'>
            ¡Tu misión es crear un equipo capaz de enfrentar cualquier desafío y entregar un software de calidad!
          </p>
        </div>
        <NavLink to='/team-roles-info'>
          <Button className="w-[250px] h-[70px] text-white font-cocogoose text-[30px]" color="success">Iniciar</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default DevTeamIntro