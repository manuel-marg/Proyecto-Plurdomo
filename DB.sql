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
    administrador boolean,
    active boolean,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS inmuebles (
    id int auto_increment,
    alicuota int,
    numero int,
    nombre varchar(255),
    piso int,
    saldo int,
    id_propietario int,
    id_inmueble int,
    tipo varchar(255) not null,
    active boolean,
    primary key(id)
);

ALTER TABLE inmuebles ADD foreign key(id_propietario) references propietarios(id);
