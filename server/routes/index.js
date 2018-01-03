const todosController = require('../controllers').todos;
const path = require('path');
var fs = require('fs');
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

 app.get('/main', function(req, res){
    res.render('./second_page/main.html');
 });
 app.get('/', function(req, res){
 	app.render('index.html');
 });
  app.post('/api/todos', todosController.create);
};