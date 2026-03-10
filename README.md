# 📊 Sistema de Gestión y Registro de Proyectos (LUBConsultores)

![Estado del Proyecto](https://img.shields.io/badge/Estado-En_Desarrollo-yellow)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)

## 📝 Descripción del Proyecto (Caso 8)

Sistema web centralizado desarrollado para la firma **LUBConsultores**. Su objetivo principal es automatizar y digitalizar el registro de proyectos de consultoría, eliminando el seguimiento manual en papel.

El sistema permite gestionar la información de empresas clientes, asignar consultores responsables y, de manera crítica, **mantener una bitácora cronológica detallada de los cambios de estado (Ej. Abierto, Suspendido, Finalizado) y observaciones de cada proyecto a lo largo del tiempo.**

---

## 🎯 Objetivos y Alcance

- **Centralización de Datos:** Base de datos única para Clientes, Consultores y Proyectos.
- **Trazabilidad Histórica:** Registro inmutable de la evolución de un proyecto, soportando estados recurrentes (ej. múltiples suspensiones).
- **Eficiencia en Búsquedas:** Reducción del tiempo de consulta del historial de un proyecto específico.
- **Fuera de Alcance:** El sistema _no_ incluye gestión financiera, facturación, cobros, ni portales de acceso para clientes externos. Es de uso exclusivo interno.

---

## 🛠️ Stack Tecnológico (Monorepo)

Este proyecto está construido con una arquitectura moderna basada en JavaScript/TypeScript, separando claramente el cliente del servidor.

### Frontend (Cliente)

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS

### Backend (Servidor/API)

- **Entorno:** Node.js
- **Framework:** Express.js
- **Lenguaje:** TypeScript
- **ORM / Query Builder:** _(Por definir en fase de BD, ej. Prisma, TypeORM o pg-promise)_

### Base de Datos

- **Motor:** PostgreSQL (Relacional)

---

## 📂 Estructura del Repositorio (Monorepo)

El proyecto está organizado en dos directorios principales dentro de un único repositorio:

```text
registro-proyectos-webapp/
├── frontend/          # Aplicación cliente (Vue 3 + Tailwind)
│   ├── src/           # Componentes, vistas y lógica de UI
│   ├── public/        # Activos estáticos
│   └── package.json   # Dependencias del frontend
│
├── backend/           # API RESTful (Express + Node.js)
│   ├── src/           # Controladores, rutas y modelos de BD
│   └── package.json   # Dependencias del backend
│
├── .gitignore         # Reglas de exclusión para Git
└── README.md          # Documentación principal del proyecto
```
