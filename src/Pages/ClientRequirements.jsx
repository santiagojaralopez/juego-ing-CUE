import { NavLink } from "react-router-dom"
import { Button } from "@nextui-org/react"

const ClientRequirements = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-client-reqs bg-cover'>
      <div class="w-4/5 h-4/5 p-10 flex flex-col gap-8 justify-center items-center rounded-2xl backdrop-blur-xl bg-white/70">
        <h1 className='font-cocogoose text-4xl font-bold'>Requerimientos del Cliente</h1>
        <div className='flex flex-col gap-4'>
          <p className='font-cocogoose text-xl'>
            A continuación, los requerimientos que el cliente ha informado para el desarrollo de un E-Commerce de equipos electrónicos.
          </p>
          <ol className="list-decimal list-inside">
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Catálogo de Productos Atractivo: </b>Necesitamos una interfaz de usuario (UI) atractiva y fácil de usar que muestre nuestros productos electrónicos de manera organizada y atractiva. 
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Sistema de Carrito y Pago Seguro: </b>Requerimos un sistema de carrito de compras intuitivo que permita a los usuarios seleccionar productos y realizar pagos de manera segura.
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Gestión de Inventarios y Stock: </b>Necesitamos un sistema de gestión de inventarios que mantenga un registro preciso de los productos disponibles y notifique automáticamente cuando los niveles de stock sean bajos.
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Personalización de Perfiles de Usuario: </b>Queremos que los usuarios puedan crear perfiles personalizados donde puedan rastrear sus pedidos, historial de compras y guardar productos favoritos.
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Proceso de Compra Rápido: </b>Deseamos una opción de "compra rápida" que permita a los usuarios repetir compras anteriores con unos pocos clics.
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Pruebas de Calidad Rigurosas: </b>Necesitamos que se realicen pruebas exhaustivas para asegurarnos de que el sitio sea confiable y libre de errores.
            </li>
            <li className='mb-4 font-cocogoose text-xl'>
              <b>Despliegue y Mantenimiento Eficiente: </b>Una vez que el sitio esté listo, requerimos un proceso de despliegue y mantenimiento eficiente para garantizar su funcionamiento continuo.
            </li>
          </ol>  
        </div>
        <NavLink to='/team-roles-info'>
          <Button className="w-[250px] h-[70px] text-white font-calibri text-[30px]" color="success">Continuar</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default ClientRequirements