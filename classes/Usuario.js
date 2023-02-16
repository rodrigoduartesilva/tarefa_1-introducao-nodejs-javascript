const { Pessoa } = require("./Pessoa");

class Usuario extends Pessoa {
    constructor(nome, sobrenome, idade, altura, endereco, cidade, estadoResidencia, email) {
        super(
            nome,
            sobrenome,
            idade,
            altura
        );

        this.endereco = endereco,
            this.cidade = cidade,
            this.estadoResidencia = estadoResidencia,
            this.email = email
    }

    info = () => {
        console.log(`Nome Completo: ${this.nome} ${this.sobrenome} 
               Idade: ${this.idade} Altura: ${this.altura}
               Endereço: ${this.endereco}
               Cidade: ${this.cidade} Estado: ${this.estadoResidencia}
               E-mail: ${this.email}`);
    }
}

module.exports = { Usuario };