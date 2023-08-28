import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Button } from "@nextui-org/react"
import Swal from "sweetalert2"

import MemberSelection from "../Components/MemberSelection"
import roles from "../utils/teamRoles"

const RolesSelection = () => {
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleSelection = (roleName) => {
    const index = selectedRoles.indexOf(roleName);

    if (index === -1) setSelectedRoles((prevRoles) => [...prevRoles, roleName]);
    else selectedRoles.splice(index, 1);
  };

  const checkSelectedRoles = () => {
    const rolesToDiscard = ['Product Owner', 'Scrum Master', 'Especialista en Seguridad'];
    const rolesToDiscardStr = rolesToDiscard.slice().sort().toString();
    const selectedRolesStr = selectedRoles.slice().sort().toString();
    
    if (rolesToDiscardStr === selectedRolesStr) {
      Swal.fire({
        title: 'Bien!',
        text: "Has descartado los roles correctos!",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Finalizar juego'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/outro');
        }
      });
    } else {
      Swal.fire('Nop, no son los correctos')
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-roles-selection bg-cover'>
      <div className="w-4/5 h-auto px-10 py-20 flex flex-col gap-16 justify-center items-center rounded-2xl backdrop-blur-xl bg-white/70">
        <h1 className='font-cocogoose text-4xl font-bold'>Selección del Equipo</h1>
        <div className="flex flex-col gap-2">
          <p className='font-cocogoose text-xl'>
            De los 10 roles presentados, tendrás que descartar 3 de ellos. Esto teniendo en cuenta los requisitos del cliente y las funciones que cada rol lleva a cabo. Selecciona los 3 roles que consideres descartables.
          </p>
          <p className='font-cocogoose text-xl'>
            Considera que, en este proyecto, nuestro enfoque está en desarrollar una interfaz atractiva y funcional para los usuarios, así como en garantizar un proceso de compra eficiente y seguro. Si bien todos los roles son importantes en diferentes contextos, ten en cuenta que algunas funciones pueden no ser tan cruciales para lograr estos objetivos específicos. Presta atención a los requerimientos del cliente y la naturaleza del proyecto mientras tomas tus decisiones.
          </p>
        </div>
        <div className='grid grid-cols-5 grid-flow-row gap-4'>
          {
            roles.map((role, index) => (
              <MemberSelection
                key={index}
                memberName={role.name}
                onMemberClick={handleRoleSelection}
              >
                {role.name}
              </MemberSelection>
            ))
          }
        </div>
        <Button
          className="w-[250px] h-[70px] text-white font-cocogoose text-[30px]"
          onClick={() => checkSelectedRoles()}
          color="primary"
        >
          Verificar
        </Button>
      </div>
    </div>
  )
}

export default RolesSelection