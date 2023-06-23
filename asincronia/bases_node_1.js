let result = "";
const multiplicacion = (n) => {
  return new Promise((resolve, reject) => {
    if (n) {
      for (let i = 1; i <= 10; i++) {
        //   result.push(`${n} x ${i} = ` + n * i);
        result += `${n} x ${i} = ${n * i}\n`;
      }
      resolve(result);
    } else {
      reject("No ingresaste un número");
    }
  });
};

module.exports = multiplicacion;
