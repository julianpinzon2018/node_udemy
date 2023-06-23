require("colors");
const { guardarBD, leerDB } = require("./guardarArchivo");
// const { inquirerMenu } = require("./helpers/inquirer");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listado();
        break;

      case "3":
        tareas.listadoCompletado();
        break;

      case "4":
        tareas.listadoPendiente();
        break;

      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Está seguro?");
          if (ok) {
            tareas.borrarTareas(id);
            console.log("Tarea borrada");
          }
        }
        break;
    }

    guardarBD(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
