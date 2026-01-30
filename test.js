const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Lufavi396*',{
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
}
);

Usuario.create({
    nome: 'Victor',
    sobrenome: 'Alves',
    idade: 19,
    email: 'a@gmail.com'
});

// Usuario.sync({force: true});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(error){
    console.log("Falha ao se conectar com o banco!"+error);
});
