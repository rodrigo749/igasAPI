const { poolPromise } = require('../../config/database'),
 md5 = require('md5');

exports.create = async(dados)=>{
    const senhaCriptografada = md5(dados.senha)
   
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`INSERT INTO usuarios (senha, nome) VALUES ( '${senhaCriptografada}', '${dados.nome}')`)
            
            return rs.rowsAffected;
}

exports.update = async(id, dados) => {
    const pool = await poolPromise;
    const rs = await pool
    .request()
    .query(`UPDATE usuarios SET 
    registro = '${senhaCriptografada}', nome = '${dados.nome}'
     WHERE id = '${id}'`);
return rs.rowsAffected;  

}

exports.logar = async(dados) =>{
  
    senhaCriptografada = md5(dados.senha);
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query (`SELECT * FROM usuarios WHERE senha = '${senhaCriptografada}'
            AND nome = '${dados.nome}'`);


            if(rs.recordset == ''){
                return null;
            }
            else{

            
                return rs.recordset;
            }
}

exports.logar2 = async(dados) =>{
  
    senhaCriptografada = md5(dados.senha);
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query (`SELECT * FROM usuarios2 WHERE senha = '${senhaCriptografada}'
            AND nome = '${dados.nome}'`);


            if(rs.recordset == ''){
                return null;
            }
            else{

            
                return rs.recordset;
            }
}

exports.logar3 = async(dados) =>{
  
    senhaCriptografada = md5(dados.senha);
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query (`SELECT * FROM usuarios3 WHERE senha = '${senhaCriptografada}'
            AND nome = '${dados.nome}'`);


            if(rs.recordset == ''){
                return null;
            }
            else{

            
                return rs.recordset;
            }
}

