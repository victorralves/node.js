const express = require('express');
const web = express();
const handlebars = require('express-handlebars');

const Sequelize = require('sequelize');
//Conexão com BD
const sequelize = new Sequelize('test', 'root', 'Lufavi396*',{
    host: 'localhost',
    dialect: 'mysql'
});

//Config
    //Template Engine
    web.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    web.set('view engine', 'handlebars');

//Rotas
    web.get('/cad', function(req, res){
        res.render(__dirname+'/views/layouts/formulario')
    });

    web.post('/add', function(req, res){
        res.send('Formulário Recebido!');
    })

web.listen(8081,function(){
    console.log("Servidor rodando em http://localhost:8081");
});