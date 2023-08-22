import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const TeamMember = ({ data }) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const { name, image, description, salaryRange } = data;

  return (
    <>
      <Button className='h-16 font-cocogoose text-lg' onPress={onOpen}>
        { name }
      </Button>
      <Modal className="p-2" size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-cocogoose text-lg">
                { name }
              </ModalHeader>
              <ModalBody className="flex flex-col gap-10">
                <div className="flex justify-center items-center gap-6">
                  <img className="w-[400px]" src={ image } alt={ name } />
                </div>
                <p className='h-16 font-cocogoose text-md'> 
                  { description }  
                </p>
                <p className='h-16 font-cocogoose text-md'>
                  Promedio salarial: {salaryRange}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default TeamMember






