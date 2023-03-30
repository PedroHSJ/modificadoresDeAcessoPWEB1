"use strict";
/*5. Faça a classe PessoaJuridica, herdando de Pessoa,
 acrescentando cnpj como atributo,
 e como modificador de acesso ele não deveria ser alterado fora,
 nem dentro da própria classe
 (use a palavra chave get no método acessador);*/
class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + ' - Tipo => Pessoa Juridica', idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return super.toString() + `\n
        CNPJ: ${this.cnpj}`;
    }
}
