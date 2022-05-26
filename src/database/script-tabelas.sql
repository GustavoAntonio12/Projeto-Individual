CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(45),
	emailUsuario VARCHAR(45) UNIQUE,
	telefoneUsuario CHAR(15),
	senhaUsuario CHAR(128)
);