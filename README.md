🚀 Gestor de Proyectos (Ticket Tracker)

Este proyecto es un gestor de tickets minimalista y responsivo, diseñado para organizar tareas o bugs de un proyecto con un sistema de prioridades y seguimiento de estado.

La aplicación está construida usando tecnologías web básicas (HTML, CSS, JavaScript), lo que garantiza un funcionamiento rápido, un bajo consumo de recursos y una fácil comprensión del código.

✨ Características Clave

Los puntos fuertes del proyecto se centran en la gestión eficiente de los tickets:

Creación de Tickets: Permite añadir nuevos tickets con nombre, descripción detallada y nivel de prioridad (baja, media, alta).

Sistema de Prioridad Visual: Los tickets se diferencian claramente por color, ofreciendo un indicador visual rápido del riesgo o urgencia:

Baja: Indicador en verde.

Media: Indicador en amarillo/naranja.

Alta: Indicador en rojo.

Gestión de Estado: Los usuarios pueden alternar el estado de cada ticket entre Completado (con un estilo atenuado y tachado) y Pendiente.

Filtros Dinámicos e Instantáneos: Incluye un sistema de filtrado robusto que actualiza la lista en tiempo real, permitiendo buscar por Prioridad y Estado.

Persistencia de Datos: Utiliza el localStorage del navegador para guardar los tickets, asegurando que la información no se pierda al recargar la página.

🎨 Filosofía de Diseño y UX

El diseño está enfocado en el minimalismo y la usabilidad.

Estilos Limpios: Se usa una paleta de colores plana y bordes suaves para una apariencia profesional y despejada.

Diseño Responsivo: La interfaz se adapta automáticamente a cualquier tamaño de pantalla (escritorio, tableta, móvil) gracias al uso estratégico de Media Queries en CSS, asegurando que el formulario y los filtros siempre sean accesibles.

🛠️ Estructura del Proyecto y Tecnologías

Archivo

Rol

Tecnologías

Descripción

index.html

Estructura

HTML5 / jQuery

Contiene la estructura base, formularios, filtros y el contenedor de la lista de tickets.

style.css

Estilos

CSS3

Define la estética, el esquema de colores (prioridades) y la lógica de adaptabilidad (@media queries).

script.js

Lógica

JavaScript (jQuery)

Maneja la creación, eliminación, el cambio de estado, el filtrado dinámico y la interacción con localStorage.

💻 Uso e Instalación

Al ser un proyecto de frontend puro, su instalación y ejecución son inmediatas:

Clona este repositorio: git clone [URL_DEL_REPOSITORIO]

Accede a la carpeta del proyecto.

Abre el archivo index.html en tu navegador web.

¡Empieza a crear y gestionar tus tickets!
