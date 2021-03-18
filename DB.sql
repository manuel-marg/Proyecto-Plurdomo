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

-- DROP DATABASE IF EXISTS plurdomo;




SELECT * FROM inmuebles WHERE id_propietario IS NOT NULL;
SELECT * FROM inmuebles WHERE id_inmueble IS NOT NULL;
SELECT * FROM inmuebles WHERE tipo = 'apto';
SELECT * FROM inmuebles WHERE tipo = 'casa';
SELECT * FROM inmuebles WHERE tipo = 'edificio';
SELECT * FROM gastos WHERE tipo = 'Comun';
SELECT * FROM gastos WHERE tipo = 'No Comun';
SELECT * FROM genera_gastos WHERE id_gasto = '1';
SELECT * FROM genera_gastos WHERE id_gasto = '1' AND id_inmueble="1";
SELECT * FROM pagos WHERE id_factura = '1' AND pendiente="1" AND pagado="0";
SELECT * FROM inmuebles INNER JOIN propietarios ON inmuebles.id_propietario = propietarios.id;
SELECT * FROM genera_gastos INNER JOIN gastos ON genera_gastos.id_gasto = gastos.id;
SELECT * FROM genera_gastos INNER JOIN inmuebles ON genera_gastos.id_inmueble = inmuebles.id;
SELECT * FROM genera_gastos INNER JOIN inmuebles ON genera_gastos.id_inmueble = inmuebles.id WHERE tipo='apto';
SELECT * FROM genera_gastos INNER JOIN inmuebles ON genera_gastos.id_inmueble = inmuebles.id WHERE tipo='casa';
SELECT * FROM pagos WHERE pendiente = '1';
SELECT * FROM pagos WHERE pendiente = '0';
SELECT * FROM pagos INNER JOIN facturas ON genera_gastos.id_inmueble = inmuebles.id WHERE tipo='casa';

truncate table condominios;
truncate table facturas;
truncate table gastos;
truncate table genera_gastos;
truncate table inmuebles;
truncate table instrumentos_pagos;
truncate table pagos;
truncate table propietarios;
-- SELECT * FROM gastos;
SELECT * FROM facturas;
-- SELECT * FROM facturas;

-- DROP DATABASE plurdomo; 
