const multiplicacion = require("./bases_node_1");

const getMultiplicacion = async (n) => {
  try {
    const resultado = await multiplicacion(n);
    return resultado;
  } catch (error) {
    throw error;
  }
};

let numero = 5;

getMultiplicacion(numero)
  .then((rs) => {
    console.log("La multiplicación ha salido bien");
    console.log(
      `Los resultados de la multiplicacion de ${numero} por todos lo numeros menores e igual a diez es ${rs}`
    );
  })
  .catch((err) => console.log(err));
