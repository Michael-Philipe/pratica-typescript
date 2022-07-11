const pessoa = {
  name: 'Mariana',
  age: 28,
  occupation: 'Developer',
};
pessoa.age = 25;

const andre: {
  name: string;
  age: number;
  occupation: string;
} = {
  name: 'Andre',
  age: 25,
  occupation: 'pintor',
};

const paula: {
  name: string;
  age: number;
  occupation: string;
} = {
  name: 'Andre',
  age: 25,
  occupation: 'developer',
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraFutebol,
}

interface Pessoa {
  name: string;
  age: number;
  occupation?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  name: 'Vanessa',
  age: 23,
  occupation: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  name: 'Maria',
  age: 23,
  occupation: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  name: 'Jessica',
  age: 28,
  occupation: Profissao.Desenvolvedora,
  materias: ['Matematica discreta', 'Programação'],
};
const monica: Estudante = {
  name: 'Jessica',
  age: 28,
  materias: ['Matematica discreta', 'Programação'],
};

const listar = (list: string[]) => {
  for (const item of list) {
    console.log('- ', item);
  }
};

listar(monica.materias);
