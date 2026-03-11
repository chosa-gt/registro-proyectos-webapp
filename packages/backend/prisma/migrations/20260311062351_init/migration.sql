-- CreateTable
CREATE TABLE "rol" (
    "id_rol" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "empresa" (
    "id_empresa" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "direccion" VARCHAR(100),

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id_empresa")
);

-- CreateTable
CREATE TABLE "estado_cliente" (
    "id_estado_cliente" SERIAL NOT NULL,
    "estado" VARCHAR(50) NOT NULL,

    CONSTRAINT "estado_cliente_pkey" PRIMARY KEY ("id_estado_cliente")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(100),
    "telefono" VARCHAR(20),
    "id_empresa" INTEGER NOT NULL,
    "id_estado_cliente" INTEGER NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "consultores" (
    "id_consultor" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),
    "correo" VARCHAR(100),
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "id_usuario" INTEGER,

    CONSTRAINT "consultores_pkey" PRIMARY KEY ("id_consultor")
);

-- CreateTable
CREATE TABLE "estado_proyecto" (
    "id_estado_proyecto" SERIAL NOT NULL,
    "estado" VARCHAR(50) NOT NULL,

    CONSTRAINT "estado_proyecto_pkey" PRIMARY KEY ("id_estado_proyecto")
);

-- CreateTable
CREATE TABLE "proyectos" (
    "id_proyecto" SERIAL NOT NULL,
    "no_proyecto" VARCHAR(20) NOT NULL,
    "nombre" VARCHAR(100),
    "descripcion" TEXT,
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin" DATE,
    "id_cliente" INTEGER NOT NULL,
    "id_consultor" INTEGER NOT NULL,
    "id_estado_proyecto" INTEGER NOT NULL,

    CONSTRAINT "proyectos_pkey" PRIMARY KEY ("id_proyecto")
);

-- CreateTable
CREATE TABLE "prioridad" (
    "id_prioridad" SERIAL NOT NULL,
    "nombre_prioridad" VARCHAR(50) NOT NULL,

    CONSTRAINT "prioridad_pkey" PRIMARY KEY ("id_prioridad")
);

-- CreateTable
CREATE TABLE "bitacora" (
    "id_bitacora" SERIAL NOT NULL,
    "fecha" DATE NOT NULL,
    "observaciones" TEXT,
    "id_estado_proyecto" INTEGER NOT NULL,
    "id_proyecto" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_prioridad" INTEGER NOT NULL,

    CONSTRAINT "bitacora_pkey" PRIMARY KEY ("id_bitacora")
);

-- CreateTable
CREATE TABLE "log_montos_proyectos" (
    "id_log_montos" SERIAL NOT NULL,
    "monto" DECIMAL(12,2) NOT NULL,
    "observaciones" TEXT,
    "fecha" DATE NOT NULL,
    "id_proyecto" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "log_montos_proyectos_pkey" PRIMARY KEY ("id_log_montos")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_correo_key" ON "clientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "consultores_correo_key" ON "consultores"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "consultores_id_usuario_key" ON "consultores"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "proyectos_no_proyecto_key" ON "proyectos"("no_proyecto");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "rol"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "empresa"("id_empresa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_id_estado_cliente_fkey" FOREIGN KEY ("id_estado_cliente") REFERENCES "estado_cliente"("id_estado_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultores" ADD CONSTRAINT "consultores_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proyectos" ADD CONSTRAINT "proyectos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proyectos" ADD CONSTRAINT "proyectos_id_consultor_fkey" FOREIGN KEY ("id_consultor") REFERENCES "consultores"("id_consultor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proyectos" ADD CONSTRAINT "proyectos_id_estado_proyecto_fkey" FOREIGN KEY ("id_estado_proyecto") REFERENCES "estado_proyecto"("id_estado_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora" ADD CONSTRAINT "bitacora_id_estado_proyecto_fkey" FOREIGN KEY ("id_estado_proyecto") REFERENCES "estado_proyecto"("id_estado_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora" ADD CONSTRAINT "bitacora_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "proyectos"("id_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora" ADD CONSTRAINT "bitacora_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora" ADD CONSTRAINT "bitacora_id_prioridad_fkey" FOREIGN KEY ("id_prioridad") REFERENCES "prioridad"("id_prioridad") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_montos_proyectos" ADD CONSTRAINT "log_montos_proyectos_id_proyecto_fkey" FOREIGN KEY ("id_proyecto") REFERENCES "proyectos"("id_proyecto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_montos_proyectos" ADD CONSTRAINT "log_montos_proyectos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
