"use strict";
/*3. Crie a classe Pessoa, com os atributos: nome (privado), idade (privado), dataNascimento(privado)
(escolha os tipos apropriados para cada um. Pesquise o tipo Date de Typescript).
Deve ter métodos acessadores e modificadores;*/
class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._dataNascimento = dataNascimento;
        this._nome = nome;
        this._idade = idade;
    }
    get idade() {
        return this._idade;
    }
    get nome() {
        return this._nome;
    }
    get dataNacimento() {
        return this._dataNascimento;
    }
    toString() {
        return `Nome: ${this.nome} \n
        Data de Nascimento: ${this.dataNacimento} \n
        Idade: ${this.idade}
        `;
    }
}
