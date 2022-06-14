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


INSERT INTO usuario VALUES(null,'Gustavo Antonio','gustavo@gmail.com', '(11) 91212-2323', SHA2('gustavo123',512));
INSERT INTO usuario VALUES(null,'Rafaella Pioveza','rafaela@gmail.com', '(11) 92121-3232', SHA2('rafaella123',512));
INSERT INTO usuario VALUES(null,'Gabriel Duarte','gabriel@gmail.com', '(11) 95664-9898', SHA2('gabriel123',512));
INSERT INTO usuario VALUES(null,'Pedro Jesus','pedro@gmail.com', '(11) 91213-4545', SHA2('pedro123',512));
INSERT INTO usuario VALUES(null,'Marise Miranda','marise@gmail.com', '(11) 91909-3450', SHA2('marise123',512));


INSERT INTO  postagens VALUES(null,"Here Comes a Thought",'Gente, acabei de ver a música here comes a thought, que coisa linda gente, eu quero abraçar a criadora do desenho e não soltar ela nunca mais' ,"2022-04-10",1);
INSERT INTO  postagens VALUES(null,"Quero Escapar do Escapismo","Até hoje eu não consegui superar o episódio 156 (Escapismo), eu penso nele todo dia a todo momento, a música dele é maravilhosa, as cenas dele é maravilhosa, ele é a perfeição em forma de desenho.","2022-05-10",1);
INSERT INTO  postagens VALUES(null,"Abalo","Terminei o seriado, não estou bem, acho que vou dormir um pouco e ver o que faço amanhã","2022-06-12",1);
INSERT INTO  postagens VALUES(null,"Comprem o livro", "Eu comprei o livro do seriado, fazia muito tempo que eu queria ter ele em mãos, e vale muito a pena.","2022-05-10",2);
INSERT INTO  postagens VALUES(null,"Quando sai o filme ?", "Quando vai ser o filme do steven universo, quero ver como vai ser esta continuação, estou com medo de ser forçado ?","2022-05-12",4);
INSERT INTO  postagens VALUES(null,"Contiinuação ?", "Eu acho que vai ter uma continuação, o livro termina com cliffhanger genial do Steven com a Peridot","2022-06-12",2);
INSERT INTO  postagens VALUES(null,"Não Gostei", "Muito bla bla bla e pouca ação de verdade, vou ir ver outra coisa que seja mais legal","2022-06-13",5);
INSERT INTO  postagens VALUES(null,"Vou começar agora", "Vou começar a assistir o seriado hoje junto com minha namorada, estou ansioso ","2022-05-12",3);


select * from resultado;
INSERT INTO resultado values(1,100,now(),'Steven');
INSERT INTO resultado values(1,101,now(),'2');
INSERT INTO resultado values(1,101,now(),'6');