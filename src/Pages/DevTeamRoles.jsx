import { NavLink } from "react-router-dom"
import { Button, Card, CardBody } from "@nextui-org/react"

import TeamMember from "../Components/TeamMember"
import roles from "../utils/teamRoles"

const DevTeamRoles = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-dev-team-roles bg-cover'>
      <div class="w-4/5 h-4/5 p-10 flex flex-col gap-16 justify-center items-center rounded-2xl backdrop-blur-xl bg-white/70">
        <h1 className='font-cocogoose text-4xl font-bold'>Roles en el Equipo</h1>
        <p className='font-cocogoose text-xl'>
          Aquí podrás conocer en detalle los roles clave que puedes elegir para conformar tu equipo de desarrollo. Cada rol desempeña un papel fundamental en la creación del software exitoso. Tómate un momento para explorar y aprender más sobre las habilidades y responsabilidades de cada rol.
        </p>
        <div className='grid grid-cols-4 grid-flow-row gap-5'>
          {
            roles.map((role, index) => (
              <TeamMember key={index} data={role} />
            ))
          }
        </div>
        <NavLink to='/team-roles-info'>
          <Button className="w-[250px] h-[70px] text-white font-calibri text-[30px]" color="success">Iniciar Juego</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default DevTeamRoles