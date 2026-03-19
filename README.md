# 📊 Sistema de Gestión y Registro de Proyectos (LUBConsultores)

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completado-green)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Node](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js)
![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-4169E1?logo=postgresql)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)

## 📝 Descripción del Proyecto (Caso 8)

Sistema web centralizado desarrollado para la firma **LUBConsultores**. Su objetivo principal es automatizar y digitalizar el registro de proyectos de consultoría, eliminando el seguimiento manual en papel.

El sistema permite gestionar la información de empresas clientes, asignar consultores responsables y **mantener una bitácora cronológica detallada de los cambios de estado (Abierto, Suspendido, Finalizado) y observaciones de cada proyecto a lo largo del tiempo**, soportando estados recurrentes sin perder el historial anterior.

---

## 🎯 Objetivos y Alcance

- **Centralización de Datos:** Base de datos única para Clientes, Consultores y Proyectos.
- **Trazabilidad Histórica:** Registro inmutable de la evolución de un proyecto, soportando estados recurrentes (ej. múltiples suspensiones).
- **Historial de Montos:** Registro acumulativo de cambios de monto por proyecto.
- **Eficiencia en Búsquedas:** Búsqueda en tiempo real por número de proyecto, cliente o consultor.
- **Reportes Exportables:** Generación de reportes por estado, consultor, proyecto o rango de fechas, exportables en CSV.
- **Dashboard:** Vista general con métricas, gráficas y alertas automáticas.
- **Fuera de Alcance:** El sistema _no_ incluye gestión financiera, facturación, cobros, ni portales de acceso para clientes externos. Es de uso exclusivo interno.

---

## 🛠️ Stack Tecnológico (Monorepo)

### Frontend

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Estado:** Pinia
- **Routing:** Vue Router 4
- **HTTP Client:** Axios
- **Gráficas:** Chart.js

### Backend

- **Entorno:** Node.js 20+
- **Framework:** Express.js
- **Lenguaje:** TypeScript
- **ORM:** Prisma 7
- **Driver:** @prisma/adapter-pg

### Base de Datos

- **Motor:** PostgreSQL 16+

---

## 📂 Estructura del Repositorio

```text
registro-proyectos-webapp/
├── packages/
│   ├── frontend/                  # Aplicación cliente (Vue 3 + Tailwind)
│   │   └── src/
│   │       ├── components/ui/     # Componentes reutilizables
│   │       ├── layouts/           # Layout principal
│   │       ├── router/            # Definición de rutas
│   │       ├── services/          # Llamadas a la API
│   │       ├── stores/            # Estado global (Pinia)
│   │       ├── types/             # Tipos TypeScript
│   │       └── views/             # Vistas del sistema
│   │
│   └── backend/                   # API RESTful (Express + Prisma)
│       ├── src/
│       │   ├── controllers/       # Controladores por módulo
│       │   ├── services/          # Lógica de negocio
│       │   ├── routes/            # Definición de endpoints
│       │   └── db/                # Cliente Prisma
│       └── prisma/
│           ├── schema.prisma      # Esquema de base de datos
│           └── migrations/        # Historial de migraciones
│
├── docs/
│   ├── manual-tecnico.md          # Manual técnico del sistema
│   └── manual-usuario.md          # Manual de usuario
│
├── .gitignore
├── package.json                   # Raíz del monorepo (npm workspaces)
└── README.md
```

---

## 🚀 Instalación y Configuración

### Requisitos previos

- Node.js 20+
- npm 10+
- PostgreSQL 16+
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/chosa-gt/registro-proyectos-webapp.git
cd registro-proyectos-webapp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

**Backend** — crear `packages/backend/.env`:

```env
DATABASE_URL="postgresql://postgres:tu_contraseña@localhost:5432/registro_proyectos_db"
```

**Frontend** — crear `packages/frontend/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Crear la base de datos

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE "registro_proyectos_db" WITH ENCODING = 'UTF8';
\q
```

### 5. Ejecutar migraciones

```bash
cd packages/backend
npx prisma migrate dev
npx prisma generate
```

### 6. Crear usuario inicial

```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Admin","apellido":"Sistema","correo":"admin@lub.com","contrasena":"admin123","id_rol":1}'
```

---

## ▶️ Ejecutar el Proyecto

**Backend** (desde `packages/backend/`):

```bash
npm run dev
```

**Frontend** (desde `packages/frontend/`):

```bash
npm run dev
```

| Servicio     | URL                          |
| ------------ | ---------------------------- |
| Frontend     | http://localhost:5173        |
| Backend API  | http://localhost:3000/api    |
| Health Check | http://localhost:3000/health |

---

## 📋 Módulos del Sistema

| Módulo                 | Descripción                                             |
| ---------------------- | ------------------------------------------------------- |
| 📊 Dashboard           | Métricas generales, gráficas y alertas automáticas      |
| 📁 Proyectos           | CRUD de proyectos con búsqueda en tiempo real           |
| 🗒️ Bitácora            | Historial de seguimientos y estados por proyecto        |
| 💰 Log de Montos       | Historial acumulativo de montos por proyecto            |
| 👥 Clientes            | Registro de clientes con empresa vinculada              |
| 👤 Consultores         | Registro de consultores con usuario opcional            |
| 🔍 Búsqueda y Reportes | Búsqueda avanzada y exportación CSV                     |
| 🗂️ Catálogos           | Configuración de roles, estados, prioridades y empresas |

---

## 🗄️ Modelo de Base de Datos

El sistema cuenta con las siguientes tablas principales:

- `rol` — Roles de usuarios
- `usuarios` — Usuarios del sistema
- `empresa` — Empresas de los clientes
- `estado_cliente` — Estados posibles de un cliente
- `clientes` — Contactos clientes de LUBConsultores
- `consultores` — Consultores de la firma
- `estado_proyecto` — Estados posibles de un proyecto
- `proyectos` — Proyectos de consultoría
- `prioridad` — Niveles de prioridad para bitácora
- `bitacora` — Historial de seguimientos por proyecto
- `log_montos_proyectos` — Historial de montos por proyecto

> El campo `no_proyecto` es único por proyecto. La bitácora es acumulativa y nunca sobreescribe registros anteriores.

---

## 📄 Documentación

| Documento                                   | Descripción                                    |
| ------------------------------------------- | ---------------------------------------------- |
| [Manual Técnico](docs/manual-tecnico.md)    | Instalación, arquitectura, API y base de datos |
| [Manual de Usuario](docs/manual-usuario.md) | Guía de uso del sistema para consultores       |

---

## 👤 Autor

**Daniel Casasola**

---

_Sistema de Registro de Proyectos — LUBConsultores — Caso 8 — v1.0 — Marzo 2026_
