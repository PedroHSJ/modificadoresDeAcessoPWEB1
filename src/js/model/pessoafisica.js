"use strict";
/*4. Faça a classe PessoaFisica, herdando de Pessoa, acrescentando cpf como atributo,
e como modificador de acesso ele não deveria ser alterado fora,
nem dentro da própria classe
(use a palavra chave get no método acessador);*/
class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + ' - Tipo => Pessoa Física', idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return super.toString() + `\n
        CPF: ${this.cpf}`;
    }
}
