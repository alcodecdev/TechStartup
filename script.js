//ALEJANDRO ASENCIO GURAU
$(document).ready(function(){
    // Inicializacion de la lista de proyectos
    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    //Variables de filtrado
    let filtroPrioridad="todos";
    let filtroEstado="todos";

    showProyects();

    // Gestion de la creacion de proyectos
    $("#proyectoForm").on("submit", function(e){
        e.preventDefault();

        if ($("#prioridad").val()===""){
            console.error("Selecciona la prioridad del proyecto");
            return;
        }

        let nombre = $("#nombreProyecto").val().trim();
        let descripcion = $("#descripcion").val().trim();
        let prioridad = $("#prioridad").val();

        let newProyect = {
            id: Date.now(),
            nombre: nombre,
            descripcion: descripcion,
            prioridad: prioridad,
            completada: false
        }

        proyectos.push(newProyect);
        saveProyects();
        showProyects();

        this.reset();
    });

    // Gestion de eventos completar y eliminar
    $("#listaProyectos").on("click", ".completar", function(){
        let id = $(this).closest(".proyecto").data("id");
        let proyecto = proyectos.find(p => p.id == id);
        // Verificar si el proyecto existe
        if (proyecto) {
            proyecto.completada = !proyecto.completada;
            saveProyects();
            showProyects();
        }
    }).on("click", ".eliminar", function(){
        let id = $(this).closest(".proyecto").data("id");
        proyectos = proyectos.filter(p => p.id !== id);
        saveProyects();
        showProyects();
    });

    /* Gestion de eventos de filtrado, el .change se utiliza para detectar
    cambios en el valor de un elemento
    */
    $("#filtroPrioridad, #filtroEstado").on("change", function(){
        filtroPrioridad= $("#filtroPrioridad").val();
        filtroEstado=$("#filtroEstado").val();
        showProyects();
    })

    //Reseteo el fiiltrado de proyectos
    $("#resetFiltros").on("click", function(){
        filtroPrioridad = "todos";
        filtroEstado = "todos";

        $("#filtroPrioridad").val(filtroPrioridad);
        $("#filtroEstado").val(filtroEstado);
        showProyects();
    })

    //Funciones de ayuda
    //Guarda la lista de proyectos en localStorage
    function saveProyects(){
        localStorage.setItem("proyectos", JSON.stringify(proyectos));
    }

    //Renderiza la lista de proyectos en el DOM.
    function showProyects(){
        $("#listaProyectos").empty();

        // Sincronizar los selectores del HTML con las variables del estado
        $("#filtroPrioridad").val(filtroPrioridad);
        $("#filtroEstado").val(filtroEstado);

        const proyectosFiltrados=proyectos.filter(p =>{
            const prioridadProyecto = p.prioridad || '';

            const pasaFiltradoPrioridad = filtroPrioridad === "todos" || prioridadProyecto === filtroPrioridad;

            const pasaFiltradoEstado = filtroEstado === "todos" ||
                (filtroEstado === "completado" && p.completada) ||
                (filtroEstado === "pendiente" && !p.completada);

            return pasaFiltradoPrioridad && pasaFiltradoEstado;
    });


        if (proyectosFiltrados.length === 0){
            $("#listaProyectos").append('<p class="noResultados">No hay tickets que coincidan con os filtros seleccionados</p>');
        }

   /* Este codigo comentado muestra el nombre y descripcion del proyecto como los botones de completar y eliminar
   proyectos.forEach(p => {
            // Determina la clase de prioridad
            if (p.prioridad === "baja"){
                prioridadClase = "prioridad-baja";
            } else if (p.prioridad === "media"){
                prioridadClase = "prioridad-media";
            } else if (p.prioridad === "alta"){
                prioridadClase = "prioridad-alta";
            }

            let completadaClase = p.completada ? "proyecto-completado" : "";

            let proyectoHTML = `
            <div class="proyecto ${completadaClase}" data-id="${p.id}">
                <h3>${p.nombre}</h3>
                <p>Descripción: ${p.descripcion}</p> <p class="${prioridadClase}">Prioridad: ${p.prioridad}</p>
                <div class="botones">
                    <button class="completar">${p.completada ? 'Deshacer' : 'Completar'}</button>
                    <button class="eliminar">Eliminar</button>
                </div>
            </div>
            `;

            $("#listaProyectos").append(proyectoHTML);
        });*/

        proyectosFiltrados.forEach(p => {
            //Clase CSS para el color de la prioridad
            let prioridadClase = `prioridad-${p.prioridad}`;
            //Classe CSS para el color del estado
            let completadaClase=p.completada ? "proyecto-completada" : "proyecto-pendiente";

            let proyectoHTML = `
            <div class="proyecto ${completadaClase}" data-id="${p.id}">
                <h3>${p.nombre}</h3>
                <p><strong>Estado:</strong> ${p.completada ? 'Completado' : 'Pendiente'}</p>
                <p class="${prioridadClase}"><strong>Prioridad:</strong> ${p.prioridad.toUpperCase()}</p>
                <p class="descripcion">${p.descripcion}</p>
                <div class="botones">
                    <button class="completar">${p.completada ? 'Marcar Pendiente' : 'Marcar Completado'}</button>
                    <button class="eliminar">Eliminar</button>
                </div>
            </div>
            `;

            $("#listaProyectos").append(proyectoHTML);
        });
    }
});