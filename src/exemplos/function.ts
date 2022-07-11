//void quando a função não tem retorno
const printaValoresNumericos = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

//tipando retorno de função
const somarValoresNumericosETratar = (
  num1: number,
  num2: number,
  callback: (numero: number) => number
): number => {
  let result = num1 + num2;
  return callback(result);
};

const aoQuadrado = (num: number): number => {
  return num * num;
};

const dividirPorEleMesmo = (num: number): number => {
  return num / num;
};

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
