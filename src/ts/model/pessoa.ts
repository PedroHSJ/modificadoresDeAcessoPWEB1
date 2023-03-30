/*3. Crie a classe Pessoa, com os atributos: nome (privado), idade (privado), dataNascimento(privado) 
(escolha os tipos apropriados para cada um. Pesquise o tipo Date de Typescript). 
Deve ter métodos acessadores e modificadores;*/

class Pessoa{
    protected _nome:string;
    private _dataNascimento: Date;
    private _idade:number;
    
    constructor(nome:string, idade:number, dataNascimento: Date){
        this._dataNascimento = dataNascimento;
        this._nome = nome;
        this._idade = idade;
    }

    get idade(): number{
        return this._idade;
    }
    get nome(): string{
        return this._nome;
    }


    get dataNacimento(): Date{
        return this._dataNascimento
    }

    toString():string{
        return `Nome: ${this.nome} \n
        Data de Nascimento: ${this.dataNacimento} \n
        Idade: ${this.idade}
        `
    }
}