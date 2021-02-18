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
    active boolean,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS aptos (
    id int auto_increment,
    nro int,
    piso int,
    id_edf int,
    id_inmueble int,
    active boolean,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS inmuebles (
    id int auto_increment,
    alicuota int,
    saldo int,
    calle varchar(255) not null,
    codigo_postal int,
    zona varchar(255) not null,
    id_propietario int,
    active boolean,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS casas (
    id int auto_increment,
    nombre varchar(255) not null,
    id_inmueble int,
    active boolean,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS edfs (
    id int auto_increment,
    nombre varchar(255) not null,
    active boolean,
    primary key(id)
);

ALTER TABLE inmuebles ADD foreign key(id_propietario) references propietarios(id);

ALTER TABLE aptos ADD foreign key(id_inmueble) references inmuebles(id);
ALTER TABLE casas ADD foreign key(id_inmueble) references inmuebles(id);