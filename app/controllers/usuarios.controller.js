const Usuarios = require('../models/usuarios.model')



exports.create = async(req, res) => {
  const usuarios = await Usuarios.create(req.body);

    if(usuarios){
        res.status(200).send( usuarios )
    }else{
        res.status(500).send({ message: 'Erro ao criar registro' } );
    }
}

exports.update = async(req, res) => {
    const usuarios = await Usuarios.update (req.params.id, req.bod);

    if(usuarios){
        res.status(200).send({message: 'Cadastro atualizado com sucesso'})

    }else{
        res.status(500).send({message: 'Erro ao atualizar registro'});
    }
}

exports.logar = async(req, res) => {

    const usuarios = await Usuarios.logar(req.body);

    if(usuarios){
        res.status(200).send({message: 'Logado com sucesso'})

    }else{
        res.status(500).send({message: 'Erro ao logar'});
    }
}

exports.logar2 = async(req, res) => {

    const usuarios = await Usuarios.logar2(req.body);

    if(usuarios){
        res.status(200).send({message: 'Logado com sucesso'})

    }else{
        res.status(500).send({message: 'Erro ao logar'});
    }
}


exports.logar3 = async(req, res) => {

    const usuarios = await Usuarios.logar3(req.body);

    if(usuarios){
        res.status(200).send({message: 'Logado com sucesso'})

    }else{
        res.status(500).send({message: 'Erro ao logar'});
    }
}
