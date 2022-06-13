CREATE DATABASE projetoIndividual;
-- DROP DATABASE projetoIndividual;
USE projetoIndividual;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(45),
	emailUsuario VARCHAR(45) UNIQUE,
	telefoneUsuario CHAR(15),
	senhaUsuario CHAR(128)
);

CREATE TABLE postagens(
	idPostagens INT PRIMARY KEY AUTO_INCREMENT,
	tituloPostagens VARCHAR(50),
	textoPostagens VARCHAR(255),
    dataPostagens DATETIME,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	tituloQuiz VARCHAR(50),
	tipoQuiz ENUM('personalidade','desafio')
)AUTO_INCREMENT = 100;

INSERT INTO quiz VALUES
(null, 'Quiz Pessoal - Valores','personalidade'),
(null, 'Quiz Serie','desafio');

CREATE TABLE resultado(
    fkUsuario INT,
		fkQuiz INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
    dataResultado DATETIME,
    PRIMARY KEY (fkUsuario,fkQuiz,dataResultado),
    resultado VARCHAR(45)
);


-- insert into postagens VALUES(null,"Exemplo","Exemplo","2022-04-10",1);