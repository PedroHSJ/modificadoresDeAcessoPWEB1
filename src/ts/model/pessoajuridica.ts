/*5. Faça a classe PessoaJuridica, herdando de Pessoa,
 acrescentando cnpj como atributo, 
 e como modificador de acesso ele não deveria ser alterado fora, 
 nem dentro da própria classe 
 (use a palavra chave get no método acessador);*/

class PessoaJuridica extends Pessoa{
    private _cnpj:string;

    constructor(nome:string, idade:number, dataNascimento:Date, cnpj:string){
        super(nome + ' - Tipo => Pessoa Juridica', idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj():string{
        return this._cnpj;
    }

    toString():string{
        return super.toString() + `\n
        CNPJ: ${this.cnpj}`
    }
}