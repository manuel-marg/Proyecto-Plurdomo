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
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS condominio (
    id int auto_increment,
    nombre varchar(255) not null,
    municipio varchar(255) not null,
    estado varchar(255) not null,
    codigo_urb varchar(255) not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS instrumento_pago (
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

CREATE TABLE IF NOT EXISTS pago (
    id int auto_increment,
    dia int not null,
    mes int not null,
    anio int not null,
    id_factura int not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS gasto (
    id int auto_increment,
    monto float not null,
    dia int not null,
    mes int not null,
    anio int not null,
    concepto varchar(255) not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS factura (
    id int auto_increment,
    n_factura int not null,
    nombre varchar(255) not null,
    gastos_comunes float not null,
    gastos_nocomunes float not null,
    deuda_total float not null,
    alicuota float not null,
    saldo float not null,
    dia_em int not null,
    mes_em int not null,
    anio_em int not null,
    id_inmueble int not null,
    active boolean not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS otorga (
    id_gasto int not null,
    id_factura int not null,
    monto_alicouta float not null,
    active boolean not null,
    primary key(id_gasto, id_factura)
);

CREATE TABLE IF NOT EXISTS genera (
    id_gasto int not null,
    id_inmueble int not null,
    active boolean not null,
    primary key(id_gasto, id_inmueble)
);

ALTER TABLE inmuebles ADD foreign key(id_propietario) references propietarios(id);

-- DROP DATABASE plurdomo; 