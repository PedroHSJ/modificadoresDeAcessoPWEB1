/*4. Faça a classe PessoaFisica, herdando de Pessoa, acrescentando cpf como atributo, 
e como modificador de acesso ele não deveria ser alterado fora, 
nem dentro da própria classe 
(use a palavra chave get no método acessador);*/

class PessoaFisica extends Pessoa{
    private _cpf:string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string){
        super(nome + ' - Tipo => Pessoa Física', idade, dataNascimento)
        this._cpf = cpf;
    }

    get cpf():string{
        return this._cpf;
    }

    toString():string{
        return super.toString() + `\n
        CPF: ${this.cpf}`
    }

}