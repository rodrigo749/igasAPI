CREATE TABLE usuarios(
	id INTEGER PRIMARY KEY IDENTITY,
	nome VARCHAR(30) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	perfil VARCHAR(30) NOT NULL
)

INSERT INTO usuarios(nome, senha, perfil)
VALUES ('admin', 'e10adc3949ba59abbe56e057f20f883e', 'adm')



