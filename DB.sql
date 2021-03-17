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
    id_condominio int not null,
    active boolean not null,
    primary key(id)
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
    primary key(id)
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
    primary key(id)
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
    gastos_comunes varchar(255) not null,
    gastos_nocomunes varchar(255) not null,
    deuda_total float not null,
    alicuota float not null,
    saldo float not null,
    dia_em int not null,
    mes_em int not null,
    anio_em int not null,
    id_inmueble int not null,
    historico boolean not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS otorgas (
    id_gasto_referenciado int not null,
    id_factura_referenciado int not null,
    monto_alicouta float not null,
    active boolean not null,
    KEY id_gasto_referenciado (id_gasto_referenciado),
	KEY id_factura_referenciado (id_factura_referenciado),
	CONSTRAINT gastos_fk_1 FOREIGN KEY (id_gasto_referenciado) REFERENCES gastos (id),
	CONSTRAINT facturas_fk_1 FOREIGN KEY (id_factura_referenciado) REFERENCES facturas (id)
    
);

CREATE TABLE IF NOT EXISTS genera_gastos (
    id_gasto int not null,
    id_inmueble int not null,
    active boolean not null,
    KEY id_gasto (id_gasto),
	KEY id_inmueble (id_inmueble),
	CONSTRAINT gastos_fk_2 FOREIGN KEY (id_gasto) REFERENCES gastos (id),
	CONSTRAINT inmuebles_fk_1 FOREIGN KEY (id_inmueble) REFERENCES inmuebles (id)
);

ALTER TABLE inmuebles ADD foreign key(id_propietario) references propietarios(id);
ALTER TABLE instrumento_pagos ADD foreign key(id_pago) references pagos(id);
ALTER TABLE pagos ADD foreign key(id_factura) references facturas(id);
ALTER TABLE facturas ADD foreign key(id_inmueble) references inmuebles(id);
ALTER TABLE inmuebles ADD foreign key(id_condominio) references condominios(id);

-- DROP DATABASE plurdomo; 