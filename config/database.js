const sql = require('mssql')

//  AMBIENTE DE PRODUÇÃO - ALTERAR SEMPRE QUE FIZER O PULL PARA O SERVIDOR REMOTO
   //REMOTO
      //sql.connect('mssql://usuario:senha>-!@endereçobanco/nomedobanco     
      
      //LOCAL
      //sql.connect('mssql://sa:123456@DESKTOP-CCK7J2F:1433/Luby')
    // .then(conn => global.conn = conn, console.log('Conexão com banco de dados realizada com sucesso'))
    // .catch(err => console.log("erro ao conectar banco de dados! " + err));

// // AMBIENTE DE TESTE
//Local                   usuario:senha@NomeDaMaquina/\Instancia/NomeDoBanco
const config = 'mssql://sa:123456@DESKTOP-CCK7J2F/\SQLEXPRESS/Luby'

//Remoto
//const config = 'mssql://usuario:senha>@endereçobanco/nomedobanco'
 

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Databnodemonase Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};