CREATE DATABASE projetoIndividual;

USE projetoIndividual;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(45),
	emailUsuario VARCHAR(45) UNIQUE,
	telefoneUsuario CHAR(20),
	senhaUsuario CHAR(128)
);

CREATE TABLE postagens(
idPostagens INT PRIMARY KEY AUTO_INCREMENT,
	tituloPostagens VARCHAR(50),
	textoPostagens VARCHAR(512),
    dataPostagens DATETIME,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

SELECT * FROM usuario; 