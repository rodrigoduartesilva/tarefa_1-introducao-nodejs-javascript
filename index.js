const { usuario } = require("./objetos/usuarioObjeto");
const { Usuario } = require("./classes/Usuario");

const newUser = new Usuario(usuario.nome, usuario.sobrenome, usuario.idade, usuario.altura, usuario.endereco, usuario.cidade, usuario.estadoResidencia, usuario.email);


console.log(newUser);
console.log(newUser.info());