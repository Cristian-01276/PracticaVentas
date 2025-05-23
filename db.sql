create database if not exists clientes_db;
use clientes_db;
create table clientes (
id int auto_increment primary key,
nombre varchar(100),
email varchar(100),
telefono varchar(20)
);

create table productos (
id int AUTO_INCREMENT PRIMARY KEY,
nombre varchar(100),
stock int, 
precio decimal(10, 2)
);

