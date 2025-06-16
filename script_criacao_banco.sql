--------------- SQL ---------------

CREATE TABLE public.veiculos (
  id_veiculo SERIAL NOT NULL,
  modelo VARCHAR(25) NOT NULL,
  marca VARCHAR(25) NOT NULL,
  ano INTEGER NOT NULL,
  cor VARCHAR(20) NOT NULL,
  tag VARCHAR(20) NOT NULL,
  PRIMARY KEY(id_veiculo)
) ;

--------------- SQL ---------------

CREATE TABLE public.clientes (
  id_cliente SERIAL NOT NULL,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(20) NOT NULL UNIQUE,
  tag VARCHAR(20) NOT NULL,
  PRIMARY KEY(id_cliente)
) ;

--------------- SQL ---------------

ALTER TABLE public.clientes
  ADD COLUMN data_nascimento TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL;

  --------------- SQL ---------------

ALTER TABLE public.veiculos
  ADD COLUMN disponivel BOOLEAN DEFAULT TRUE NOT NULL;

--------------- SQL ---------------

CREATE TABLE public.tags (
  id_tag SERIAL NOT NULL,
  descricao VARCHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY(id_tag)
) ;

ALTER TABLE public.tags
  ALTER COLUMN descricao SET STATISTICS 0;