CREATE DATABASE "registro_proyectos_db"
    WITH ENCODING = 'UTF8'
    LC_COLLATE = 'es_ES.UTF-8'
    LC_CTYPE = 'es_ES.UTF-8';

CREATE TABLE rol (
    id_rol INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre VARCHAR(50) NOT NULL,

    CONSTRAINT pk_rol PRIMARY KEY (id_rol)
);

CREATE TABLE usuarios (
    id_usuario INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    id_rol INT NOT NULL,
    activo BOOLEAN DEFAULT TRUE,

    CONSTRAINT pk_usuarios PRIMARY KEY (id_usuario),
    CONSTRAINT fk_rol FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

CREATE TABLE empresa (
    id_empresa INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100),

    CONSTRAINT pk_empresa PRIMARY KEY (id_empresa)
);

CREATE TABLE estado_cliente (
    id_estado_cliente INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    estado VARCHAR(50) NOT NULL,

    CONSTRAINT pk_estado_cliente PRIMARY KEY (id_estado_cliente)
);

CREATE TABLE clientes (
    id_cliente INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE,
    telefono VARCHAR(50),
    id_empresa INT NOT NULL,
    id_estado_cliente INT NOT NULL,

    CONSTRAINT pk_clientes PRIMARY KEY (id_cliente),
    CONSTRAINT fk_empresa FOREIGN KEY (id_empresa) REFERENCES empresa(id_empresa),
    CONSTRAINT fk_estado_cliente FOREIGN KEY (id_estado_cliente) REFERENCES estado_cliente(id_estado_cliente)
);

CREATE TABLE consultores (
    id_consultor    INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre          VARCHAR(100) NOT NULL,
    telefono        VARCHAR(20),
    correo          VARCHAR(100) UNIQUE,
    activo          BOOLEAN DEFAULT TRUE,
    id_usuario      INT,

    CONSTRAINT pk_consultores PRIMARY KEY (id_consultor),
    CONSTRAINT fk_usuario_consultor FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE estado_proyecto (
    id_estado_proyecto INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    estado VARCHAR(50) NOT NULL,

    CONSTRAINT pk_estado_proyecto PRIMARY KEY (id_estado_proyecto)
);

CREATE TABLE proyectos (
    id_proyecto INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    no_proyecto VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(50),
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    id_cliente INT NOT NULL,
    id_consultor        INT NOT NULL,
    id_estado_proyecto INT NOT NULL,

    CONSTRAINT pk_proyectos PRIMARY KEY (id_proyecto),
    CONSTRAINT fk_cliente_proyectos FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    CONSTRAINT fk_consultor_proyectos FOREIGN KEY (id_consultor) REFERENCES consultores(id_consultor),
    CONSTRAINT fk_estado_proyectos FOREIGN KEY (id_estado_proyecto) REFERENCES estado_proyecto(id_estado_proyecto)
);

CREATE TABLE prioridad (
    id_prioridad INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre_prioridad VARCHAR(50),

    CONSTRAINT pk_prioridad PRIMARY KEY (id_prioridad)
);

CREATE TABLE bitacora (
    id_bitacora INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    fecha DATE NOT NULL,
    observaciones TEXT,
    id_estado_proyecto INT NOT NULL,
    id_proyecto INT NOT NULL,
    id_usuario INT NOT NULL,
    id_prioridad INT NOT NULL,

    CONSTRAINT pk_bitacora PRIMARY KEY (id_bitacora),
    CONSTRAINT fk_estado_pro_bitacora FOREIGN KEY (id_estado_proyecto) REFERENCES estado_proyecto(id_estado_proyecto),
    CONSTRAINT fk_proyecto_bitacora FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    CONSTRAINT fk_usuario_bitacora FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_prioridad_bitacora FOREIGN KEY (id_prioridad) REFERENCES prioridad(id_prioridad)
);


CREATE TABLE log_montos_proyectos (
    id_log_montos INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    monto NUMERIC(12, 2) NOT NULL,
    observaciones TEXT,
    fecha DATE NOT NULL,
    id_proyecto INT NOT NULL,
    id_usuario INT NOT NULL,

    CONSTRAINT pk_log_montos PRIMARY KEY (id_log_montos),
    CONSTRAINT fk_proyecto_monto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id_proyecto),
    CONSTRAINT fk_usuario_monto FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);