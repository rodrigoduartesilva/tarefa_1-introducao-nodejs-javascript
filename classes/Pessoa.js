const { usuario } = require("../objetos/usuarioObjeto");

class Pessoa {
    constructor(nome, sobrenome, idade, altura) {
        this.nome = nome,
            this.sobrenome = sobrenome,
            this.idade = idade,
            this.altura = altura
    }
}

module.exports = { Pessoa };