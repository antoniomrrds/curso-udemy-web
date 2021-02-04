
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES 
    ('Bradesco',95694186000132),
    ('Vale',12334186430323),
    ('Cielo',23454186020532);

select * from empresas
select * from cidades
desc empresas;
desc prefeitos;


INSERT INTO empresas_unidades 
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1)


