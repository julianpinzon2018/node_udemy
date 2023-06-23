const empleados = [
  {
    id: 1,
    nombre: "Julian",
    salario: 1000,
  },
  {
    id: 2,
    nombre: "Valentino",
    salario: 2000,
  },
  {
    id: 3,
    nombre: "Fernanda",
    salario: 3000,
  },
  {
    id: 4,
    nombre: "Zally",
    salario: 4000,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`Empleado con id ${id} no exite`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = empleados.find((s) => s.id === id)?.salario;
    salario ? resolve(salario) : reject(`Salario con id ${id} no exite`);
  });
};

const getUnfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 4;

getUnfoUsuario(id)
  .then((msg) => {
    console.log("TODO BIEN");
    console.log(msg);
  })

  .catch((err) => {
    console.log("TODO MAL");
    console.log(err);
  });
