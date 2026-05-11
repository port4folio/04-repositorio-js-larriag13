let tareas=["Tarea 1", "Tarea 2"];//Arreglo que tendrá la lista de tareas
let listaTareas=document.getElementById("listaTareas");
//console.log(listaTareas);
listarTareas(tareas);

function listarTareas(t){
    listaTareas.innerHTML="";
    t.forEach(tarea => {
        li=document.createElement("li");
        li.textContent=tarea;
        listaTareas.appendChild(li);
        li.className="list-group-item";
    });
}

let btnAgregar = document.getElementById("btnAgregar"); //captura el botón agregar
btnAgregar.addEventListener("click", agregarTarea); //agrega un evento click al botón agregar que llama a la
// función agregarTarea
function agregarTarea() {
  //función que agrega tareas
  let tarea = document.getElementById("txtTarea").value; //captura el valor del input tarea
  tareas.push(tarea); //agrega la tarea al arreglo de tareas
  listarTareas(tareas); //llama a la función listarTareas para mostrar la tarea en el ul
}



let btnBuscar = document.getElementById("btnBuscar"); //captura el botón buscar
btnBuscar.addEventListener("click", buscarTarea); //agrega un evento click al botón buscar que llama a la
// función buscarTarea
function buscarTarea() {//función que busca tareas
  let tareaBuscada = document.getElementById("txtTarea").value; //captura el valor del input tarea
  if (tareaBuscada == "") {
    //si el input está vacío
    listarTareas(tareas); //llama a la función listarTareas para mostrar todas las tareas en el ul
  } else {
    //si el input no está vacío
    tareasEncontradas = tareas.filter((tarea) => tarea == tareaBuscada); //filtra las tareas que coincidan con
    //  la tarea buscada
    if (tareasEncontradas.length > 0) {
      //si se encontraron tareas
      listarTareas(tareasEncontradas); //llama a la función listarTareas para mostrar las tareas
      // encontradas en el ul
    } else {
      //si no se encontraron tareas
      Swal.fire({
        //muestra un mensaje de error
        icon: "error", //tipo de mensaje
        title: "Oops...", //título del mensaje
        text: "No se encontraron tareas!", //texto del mensaje
        footer: "", //pie del mensaje
      });
    }
  }
}

let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar")); //crea un modal de bootstrap a partir del id modalEditar del html
let btnEditar = document.getElementById("btnEditar"); //captura el botón editar
btnEditar.addEventListener("click", buscarTareaEditar); //agrega un evento click al botón editar que llama a la función buscarTareaEditar
let i = 0; //variable que guardará la posición de la tarea a editar
function buscarTareaEditar() {
  //función que busca tareas para editar
  let tarea_buscada = document.getElementById("tarea").value; //captura el valor del input tarea
  i = tareas.findIndex((tarea) => tarea == tarea_buscada); //busca la tarea en el arreglo de tareas
  if (i == -1) {
    //si no se encontró la tarea
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se encontro tarea para editar, ingrese una existente!",
      footer: "",
    });
  } else {
    //si se encontró la tarea
    let tituloModal = document.getElementById("modalEditarLabel"); //captura el título del modal
    tituloModal.textContent = "Editando " + tareas[i]; //le asigna el texto del título
    modalEditar.show(); //muestra el modal
  }
}