// classes, interfaces, herança e modificadores de acesso

// classe e funçoes
/*    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Player extends User {
       constructor(name, age, game) {
            super(name, age)

            this.game = game;
        }
    }

    const jogador = new Player('Raphael', '24', 'Hollow Knight');
    console.log(jogador)
*/
//----------------------------------------------------------------------------

// static e extends
/*    static = função que não depende de nenhuma variavel de instancia quando invocada 
 executa uma função sem a dependência do conteúdo de um objeto ou a execução da instância 
 de uma classe, conseguindo chamar direto qualquer método da classe e também manipulando 
 alguns campos da classe.
 */
class Usuario {
    public nome;
    public idade;

    constructor(nome: string, idade: string) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;

    constructor(nome: string, idade: string, jogo: string) {
        super(nome, idade)

        this.jogo = jogo;
    }

    dizerOJogoAtual() {
        return `Estou jogando no momento ${this.jogo}`
    }

    static queHorasSao() {
        return Date()
    }
}

const jogador = new Player('Raphael', '24', 'Ghost of Tsushima');
console.log(jogador.dizerOJogoAtual())
console.log(Player.queHorasSao())
//----------------------------------------------------------------------------  

// private, protected, public
// public = Acessivel de modo geral, dentro e fora da classe.
// private = Acessivel apenas dentro da classe, onde o campo foi criado.
// protected = Acessivel apenas dentro da classe e subclasses onde o campo foi criado.
class Jogo {
    protected nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizerNome() {
        return `O nome do jogo é: ${this.nome}`;
    }
}

/*class jogoComDescricao extends Jogo{
    private descricao;

    constructor(nome: string, descricao: string) {
        super(nome);
  
        this.descricao = descricao;
    }

    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`;
    }
}

const ghost = new jogoComDescricao('Ghost of Tsushima', 'É um jogo de samurai em tsushima');
console.log(ghost.dizerNome());
*/
//---------------------------------------------------------------------------- 

// interfaces
interface IjogoComDescricao {
    // nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

//implements
class jogoComDescricao extends Jogo implements IjogoComDescricao{
    public descricao;

    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`;
    }
}

