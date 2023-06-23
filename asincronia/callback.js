const salarios = [
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

const id = 2;

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  salario ? callback(null, salario) : callback(`Salario con id ${id} no exite`);
};

getSalario(id, (err, salario) => {
  err ? console.log("ERROR!", err) : console.log("Empleado existe!", salario);
});
