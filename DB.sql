DROP DATABASE IF EXISTS plurdomo;

CREATE DATABASE IF NOT EXISTS plurdomo;

USE plurdomo;

CREATE TABLE IF NOT EXISTS propietarios (
    id int auto_increment,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    email varchar(255) not null,
    cedula varchar(255) not null,
    telefono varchar(255) not null,
    clave varchar(255) not null,
    administrador boolean not null,
    active boolean not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS inmuebles (
    id int auto_increment,
    alicuota float not null,
    numero int,
    nombre varchar(255),
    piso int,
    saldo float,
    id_propietario int,
    id_inmueble int,
    tipo varchar(255) not null,
    id_condominio int,
    active boolean not null,
    primary key(id, id_condominio, id_propietario)
);

CREATE TABLE IF NOT EXISTS condominios (
    id int auto_increment,
    nombre varchar(255) not null,
    municipio varchar(255) not null,
    estado varchar(255) not null,
    codigo_urb varchar(255) not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS instrumento_pagos (
    id int auto_increment,
    tipo varchar(255) not null,
    referencia varchar(255) not null,
    monto float not null,
    dia int not null,
    mes int not null,
    anio int not null,
    id_pago int not null,
    active boolean not null,
    primary key(id, id_pago)
);

CREATE TABLE IF NOT EXISTS pagos (
    id int auto_increment,
    monto float not null,
    dia int not null,
    mes int not null,
    anio int not null,
    id_factura int not null,
    pendiente boolean not null,
    pagado boolean not null,
    active boolean not null,
    primary key(id, id_factura)
);

CREATE TABLE IF NOT EXISTS gastos (
    id int auto_increment,
    monto float not null,
    tipo varchar(255) not null,
    dia int not null,
    mes int not null,
    anio int not null,
    concepto varchar(255) not null,
    historico boolean not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS facturas (
    id int auto_increment,
    n_factura int not null,
    nombre varchar(255) not null,
    gastos_comunes text(65535) not null,
    gastos_nocomunes text(65535) not null,
    deuda_total float not null,
    alicuota float not null,
    saldo float not null,
    dia_em int not null,
    mes_em int not null,
    anio_em int not null,
    id_inmueble int not null,
    historico boolean not null,
    active boolean not null,
    primary key(id, id_inmueble)
);

CREATE TABLE IF NOT EXISTS otorgas (
    id_gasto_referenciado int not null,
    id_factura_referenciado int not null,
    monto_alicouta float not null,
    active boolean not null,
    primary key(id_gasto_referenciado, id_factura_referenciado)
);

CREATE TABLE IF NOT EXISTS genera_gastos (
    id_gasto int not null,
    id_inmueble int not null,
    active boolean not null,
	primary key(id_gasto, id_inmueble)
);

ALTER TABLE inmuebles ADD CONSTRAINT FK_InmueblesCondominios FOREIGN KEY (id_condominio) REFERENCES condominios(id);
ALTER TABLE facturas ADD CONSTRAINT FK_FacturasInmuebles FOREIGN KEY (id_inmueble) REFERENCES inmuebles(id);
ALTER TABLE pagos ADD CONSTRAINT FK_PagosFacturas FOREIGN KEY (id_factura) REFERENCES facturas(id);
ALTER TABLE instrumento_pagos ADD CONSTRAINT FK_InstrumentosPagos FOREIGN KEY (id_pago) REFERENCES pagos(id);
ALTER TABLE inmuebles ADD CONSTRAINT FK_InmueblesPropietarios FOREIGN KEY (id_propietario) REFERENCES propietarios(id);
ALTER TABLE genera_gastos ADD CONSTRAINT FK_Genera_gastosGastos FOREIGN KEY (id_gasto) REFERENCES gastos(id);
ALTER TABLE genera_gastos ADD CONSTRAINT FK_Genera_gastosInmueble FOREIGN KEY (id_inmueble) REFERENCES inmuebles(id);
ALTER TABLE otorgas ADD CONSTRAINT FK_OtorgasGasto FOREIGN KEY (id_gasto_referenciado) REFERENCES gastos(id);
ALTER TABLE otorgas ADD CONSTRAINT FK_OtorgasFactura FOREIGN KEY (id_factura_referenciado) REFERENCES facturas(id);

INSERT INTO condominios (nombre, municipio, estado, codigo_urb, active) VALUES ('Condominio Plurdomo', 'Sucre', 'Miranda', '5421', 1);
INSERT INTO propietarios (nombre,apellido,email,cedula,telefono,clave,administrador,active) VALUES ('Javier', 'Jerez', 'javier@gmail.com', '28180653','04142046640','clave',0, 1);
INSERT INTO propietarios (nombre,apellido,email,cedula,telefono,clave,administrador,active) VALUES ('David', 'Garcia', 'david@gmail.com', '28734568','04242566621','clave',0, 1);
INSERT INTO propietarios (nombre,apellido,email,cedula,telefono,clave,administrador,active) VALUES ('Francisco', 'Jones', 'francisco@gmail.com', '27246739','04242554021','clave',0, 1);
INSERT INTO propietarios (nombre,apellido,email,cedula,telefono,clave,administrador,active) VALUES ('Nelson', 'Casanova', 'nelson@gmail.com', '278345765','04161238475','clave',0, 1);
INSERT INTO propietarios (nombre,apellido,email,cedula,telefono,clave,administrador,active) VALUES ('Gabriel', 'Belisario', 'gabriel@gmail.com', '27123945','0414123091734','clave',0, 1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0,null,'El Paramo',null,null,1,null,'edificio',1,1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0.69,1,'Los Samanes',null,0,1,null,'casa',1,1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0.345,11,null,1,0,1,1,'apto',1,1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0.345,22,null,2,0,1,1,'apto',1,1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0.345,33,null,3,0,1,1,'apto',1,1);
INSERT INTO inmuebles (alicuota,numero,nombre,piso,saldo,id_propietario,id_inmueble,tipo,id_condominio,active) VALUES (0.345,44,null,4,0,1,1,'apto',1,1);

UPDATE facturas SET mes_em='4' WHERE id='6';
UPDATE facturas SET mes_em='4' WHERE id='7';
UPDATE facturas SET mes_em='4' WHERE id='8';
UPDATE facturas SET mes_em='4' WHERE id='9';
UPDATE facturas SET mes_em='4' WHERE id='10';
UPDATE inmuebles SET id_propietario='2' WHERE id='3';
UPDATE inmuebles SET id_propietario='3' WHERE id='4';
UPDATE inmuebles SET id_propietario='4' WHERE id='5';
UPDATE inmuebles SET id_propietario='5' WHERE id='6';

SELECT * FROM inmuebles;
SELECT * FROM propietarios;
SELECT * FROM gastos;
SELECT * FROM genera_gastos;
SELECT * FROM otorgas;
SELECT * FROM facturas;

-- QUERY 1
SELECT otorgas.id_factura_referenciado AS ID_Factura, SUM(otorgas.monto_alicouta) AS Suma_Gastos, facturas.deuda_total AS Deuda_Total_Factura
FROM facturas
JOIN otorgas
ON facturas.id = otorgas.id_factura_referenciado
GROUP BY id_factura_referenciado
ORDER BY id_factura_referenciado;

-- QUERY 2


-- QUERY 3
SELECT facturas.id AS Factura, facturas.mes_em AS Mes, facturas.deuda_total AS Deuda, facturas.id_inmueble AS Inmueble, inmuebles.id_propietario AS ID_Propietario, CONCAT(propietarios.nombre, ' ', propietarios.apellido) AS Propietario, propietarios.cedula AS Cedula, propietarios.telefono AS Telefono, propietarios.email AS Email
FROM facturas
JOIN inmuebles
ON inmuebles.id = facturas.id_inmueble
JOIN propietarios
ON inmuebles.id_propietario = propietarios.id
WHERE facturas.historico = 0
ORDER BY facturas.id_inmueble;