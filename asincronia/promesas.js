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

const id = 5;

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

// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id)
//       .then((salario) => console.log(salario))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
  )
  .catch((err) => console.log(err));
