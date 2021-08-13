CREATE TABLE users(
	id INTEGER PRIMARY KEY IDENTITY,
	username VARCHAR(254) NOT NULL,
	email VARCHAR(254) NOT NULL,
	password VARCHAR(100) NOT NULL,
	token VARCHAR(254) NULL,
	token_created_at SMALLDATETIME,
	created_at SMALLDATETIME,
	updated_at SMALLDATETIME,
)

INSERT INTO users(username, email, password, token, token_created_at, created_at, updated_at)
VALUES ('admin', 'teste@teste.com', '123','', '', '', '')
