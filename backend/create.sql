CREATE TABLE tb_correntista (
    id SERIAL,
    conta_numero BIGINT,
    conta_saldo FLOAT8,
    cpf VARCHAR(15),
    nome VARCHAR(40) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE tb_movimentacao (
	id SERIAL,
	data_hora TIMESTAMP,
	descricao VARCHAR(255),
	tipo VARCHAR(10),
	valor FLOAT8,
	correntista_id INTEGER,

	PRIMARY KEY (id)
);

-- CONSTRAINTS
ALTER TABLE tb_correntista
	ADD CONSTRAINT UK_CORRENTISTA_CPF
	UNIQUE (cpf);

ALTER TABLE tb_movimentacao
       ADD CONSTRAINT FK_CORRENTISTA_ID
FOREIGN KEY (correntista_id)
       REFERENCES tb_correntista;