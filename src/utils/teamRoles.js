const roles = [
  {
    name: 'Arquitecto de Software',
    image: 'https://media.istockphoto.com/id/1330669820/vector/smart-house-system-programming-software-engineering-development-of-building-construction.jpg?s=612x612&w=0&k=20&c=qGcNZYm9jccT9Zixp9IcCozURFufzE1HeWrrLvvO2XU=',
    description: 'Responsable de diseñar la estructura y la organización general del software. Define cómo los diferentes componentes del software interactúan entre sí y cómo se ajustan a los requerimientos.',
    salaryRange: '$120,000 - $150,000 USD anuales'
  },
  {
    name: 'Ingeniero DevOps',
    image: 'https://p99soft.com/wp-content/uploads/2022/07/0.jpg',
    description: 'Responsable de automatizar y gestionar los procesos de desarrollo, pruebas y despliegue del software. Asegura una colaboración eficiente entre los equipos de desarrollo y operaciones para lograr entregas rápidas y confiables.',
    salaryRange: '$110,000 - $140,000 USD anuales'
  },
  {
    name: 'Especialista en Seguridad',
    image: 'https://www.gb-advisors.com/wp-content/uploads/2021/06/businessman-using-digital-padlock-secure-his-datas-3d-rendering-1.jpg',
    description: 'Se encarga de identificar y abordar riesgos de seguridad en el software. Implementa medidas de protección y asegura que los datos y la infraestructura estén protegidos contra amenazas externas e internas.',
    salaryRange: '$100,000 - $130,000 USD anuales'
  },
  {
    name: 'Product Owner',
    image: 'https://images.unsplash.com/flagged/photo-1550946107-8842ae9426db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Responsable de definir las características y prioridades del producto, trabajando de cerca con los clientes y el equipo de desarrollo. Toma decisiones sobre qué funcionalidades son más importantes y garantiza que el producto cumpla con las expectativas del cliente y del mercado.',
    salaryRange: '$90,000 - $120,000 USD anuales'
  },
  {
    name: 'Scrum Master',
    image: 'https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    description: 'Es el facilitador del equipo de desarrollo en una metodología ágil como Scrum. Ayuda a eliminar obstáculos que puedan dificultar el progreso del equipo, promueve la colaboración y asegura que se sigan las prácticas y principios de Scrum.',
    salaryRange: '$80,000 - $110,000 USD anuales'
  },
  {
    name: 'Desarrollador Backend',
    image: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Trabaja en la parte "invisible" del software que maneja la lógica y el almacenamiento de datos. Utiliza lenguajes como Java, Python o PHP para crear servidores y bases de datos que respalden la funcionalidad del frontend.',
    salaryRange: '$75,000 - $100,000 USD anuales'
  },
  {
    name: 'Desarrollador Frontend',
    image: 'https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg',
    description: 'Se encarga de crear la interfaz de usuario y la experiencia visual del software. Utiliza tecnologías como HTML, CSS y JavaScript para crear páginas web y aplicaciones interactivas que los usuarios puedan ver y usar.',
    salaryRange: '$70,000 - $95,000 USD anuales'
  },
  {
    name: 'Diseñador UX/UI',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80',
    description: 'Responsable de crear una experiencia de usuario intuitiva y atractiva, así como de diseñar la interfaz gráfica del software.',
    salaryRange: '$65,000 - $90,000 USD anuales'
  },
  {
    name: 'Tester (QA)',
    image: 'https://assets.bedu.org/images/a-que-se-dedica-qa-tester.jpg',
    description: 'Se encarga de probar el software para identificar errores y problemas antes de su lanzamiento. Realiza pruebas exhaustivas para garantizar que el software funcione correctamente y cumpla con los requerimientos.',
    salaryRange: '$60,000 - $85,000 USD anuales'
  },
  {
    name: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1590649942161-2e7eb2032934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Supervisa todo el proceso de desarrollo. Coordina al equipo, establece plazos, gestiona recursos y se asegura de que el proyecto avance de acuerdo con el plan establecido.',
    salaryRange: '$55,000 - $80,000 USD anuales'
  }
];

export default roles;