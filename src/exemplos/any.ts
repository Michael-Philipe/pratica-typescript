let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

let valorStr2: string = 'testaao';
valorStr2 = valorAny;

const somarStrings = (str1: string, str2: string) => {
  console.log(str1 + str2);
};

somarStrings(valorString, valorStr2);
somarStrings('OLA', ' COMO VAI');
