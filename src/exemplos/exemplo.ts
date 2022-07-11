let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

const adicionarNumeros = (
  num1: number,
  num2: number,
  devePrintar: boolean,
  frase: string
) => {
  let result = num1 + num2;
  if (devePrintar) {
    console.log(frase + result);
  }
  return num1 + num2;
};

let devePrintar = true;
//definir explicito o tipo da variavel
let frase: string = 'O valor é: ';

button?.addEventListener('click', () => {
  console.log(
    adicionarNumeros(
      Number(input1?.value),
      Number(input2?.value),
      devePrintar,
      frase
    )
  );
});
