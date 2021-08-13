module.exports = app => {
    const usuariosController = require('../controllers/usuarios.controller');

    app.route('/api/usuarios')
    .post(usuariosController.create);
    // .get(usuariosController.getAll)

    app.route('/api/usuarios/logar')
    .post(usuariosController.logar);

    app.route('/api/usuarios/logar2')
    .post(usuariosController.logar2);

    app.route('/api/usuarios/logar3')
    .post(usuariosController.logar3);

    

    

  
}

