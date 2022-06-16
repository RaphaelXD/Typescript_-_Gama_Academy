// type assertions
type JogoAssertions = {
    nome: string;
    descricao: string;
}

let jogo = {} as JogoAssertions;
// let jogo = <JogoAssertions>{};  <--tambem pode ser utilizado assim
jogo.nome = 'elden ring'
jogo.descricao = 'melhor jogo do ano de 2022'