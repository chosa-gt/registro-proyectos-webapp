# Manual de Usuario

## Sistema de Registro de Proyectos — LUBConsultores

### Caso 8

---

**Versión:** 1.0  
**Fecha:** Marzo 2026  
**Elaborado por:** Daniel Casasola

---

## Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Acceso al Sistema](#2-acceso-al-sistema)
3. [Navegación General](#3-navegación-general)
4. [Módulo de Catálogos](#4-módulo-de-catálogos)
5. [Módulo de Clientes](#5-módulo-de-clientes)
6. [Módulo de Consultores](#6-módulo-de-consultores)
7. [Módulo de Proyectos](#7-módulo-de-proyectos)
8. [Detalle de Proyecto y Bitácora](#8-detalle-de-proyecto-y-bitácora)
9. [Búsqueda y Reportes](#9-búsqueda-y-reportes)
10. [Dashboard](#10-dashboard)
11. [Preguntas Frecuentes](#11-preguntas-frecuentes)

---

## 1. Introducción

El **Sistema de Registro de Proyectos** es una herramienta diseñada para que los consultores y administradores de **LUBConsultores** puedan:

- Registrar y dar seguimiento a los proyectos de la firma.
- Consultar el historial de estados y montos de cada proyecto.
- Gestionar clientes, consultores y catálogos del sistema.
- Generar reportes y exportarlos en formato CSV.

Este manual está dirigido a los consultores y personal administrativo que utilizarán el sistema en su día a día. No se requieren conocimientos técnicos para su uso.

---

## 2. Acceso al Sistema

Para ingresar al sistema abra su navegador web e ingrese la siguiente dirección:

```
http://localhost:5173
```

El sistema cargará directamente el **Dashboard**, que muestra un resumen general de los proyectos activos.

> **Nota:** El sistema debe estar corriendo en el servidor para poder acceder. Si no puede acceder, comuníquese con el administrador del sistema.

---

## 3. Navegación General

El sistema cuenta con un menú lateral izquierdo que permite navegar entre los diferentes módulos:

| Ícono | Módulo              | Descripción                                |
| ----- | ------------------- | ------------------------------------------ |
| 📊    | Dashboard           | Resumen general y alertas                  |
| 📁    | Proyectos           | Lista y gestión de proyectos               |
| 👥    | Clientes            | Registro de clientes                       |
| 👤    | Consultores         | Registro de consultores                    |
| 🔍    | Búsqueda y Reportes | Búsqueda avanzada y generación de reportes |
| 🗂️    | Catálogos           | Configuración de valores del sistema       |

Para navegar entre módulos haga click en el nombre del módulo en el menú lateral. La sección activa se resalta en azul.

---

## 4. Módulo de Catálogos

Los catálogos son los valores base que utiliza el sistema. Deben configurarse antes de registrar clientes, consultores y proyectos.

### 4.1 ¿Qué contiene?

- **Roles** — Roles de los usuarios del sistema (Ej: Administrador, Consultor).
- **Estados de Cliente** — Estados posibles de un cliente (Ej: Activo, Inactivo).
- **Estados de Proyecto** — Estados posibles de un proyecto (Ej: Abierto, Suspendido, Finalizado).
- **Prioridades** — Niveles de prioridad para los seguimientos (Ej: Alta, Media, Baja).
- **Empresas** — Empresas a las que pertenecen los clientes.

### 4.2 Agregar un registro

1. Haga click en **Catálogos** en el menú lateral.
2. Localice la tabla del catálogo que desea modificar.
3. Haga click en el botón **+ Agregar**.
4. Complete el formulario que aparece.
5. Haga click en **Guardar**.

### 4.3 Editar un registro

1. En la tabla del catálogo, localice el registro a editar.
2. Haga click en **Editar**.
3. Modifique los datos en el formulario.
4. Haga click en **Guardar**.

### 4.4 Eliminar un registro

1. En la tabla del catálogo, localice el registro a eliminar.
2. Haga click en **Eliminar**.
3. Confirme la acción en el mensaje que aparece.

> **Importante:** No elimine registros que estén siendo utilizados por clientes o proyectos, ya que esto puede causar errores en el sistema.

### 4.5 Valores recomendados para iniciar

Antes de registrar proyectos se recomienda crear los siguientes valores:

**Estados de Proyecto:**

- Abierto
- Suspendido
- Finalizado

**Estados de Cliente:**

- Activo
- Inactivo

**Prioridades:**

- Alta
- Media
- Baja

**Roles:**

- Administrador
- Consultor

---

## 5. Módulo de Clientes

En este módulo se registran las personas de contacto de las empresas clientes de LUBConsultores.

### 5.1 Ver la lista de clientes

Haga click en **Clientes** en el menú lateral. Verá una tabla con todos los clientes registrados.

Puede buscar un cliente específico escribiendo en la barra de búsqueda superior. La búsqueda filtra por nombre, empresa o correo en tiempo real.

### 5.2 Registrar un nuevo cliente

1. Haga click en el botón **+ Nuevo Cliente**.
2. Complete los siguientes campos:
   - **Nombre** _(obligatorio)_ — Nombre del contacto.
   - **Apellido** _(obligatorio)_ — Apellido del contacto.
   - **Correo** — Correo electrónico del contacto.
   - **Teléfono** — Número de teléfono.
   - **Empresa** _(obligatorio)_ — Busque y seleccione la empresa. Si no existe, puede crearla desde el mismo formulario.
   - **Estado** _(obligatorio)_ — Estado actual del cliente.
3. Haga click en **Guardar**.

### 5.3 Crear una empresa desde el formulario de cliente

Si la empresa del cliente no existe en el sistema:

1. En el campo **Empresa**, haga click en el botón **+ Nueva**.
2. Aparecerá un mini-formulario debajo del campo.
3. Ingrese el nombre y dirección de la empresa.
4. Haga click en **Crear empresa**.
5. La empresa quedará seleccionada automáticamente.

### 5.4 Buscar una empresa

En el campo de empresa escriba las primeras letras del nombre. El sistema mostrará las empresas que coincidan con la búsqueda. Haga click en la empresa deseada para seleccionarla.

### 5.5 Editar un cliente

1. En la tabla de clientes, localice el cliente a editar.
2. Haga click en **Editar**.
3. Modifique los datos necesarios.
4. Haga click en **Guardar**.

### 5.6 Eliminar un cliente

1. En la tabla de clientes, localice el cliente a eliminar.
2. Haga click en **Eliminar**.
3. Confirme la acción.

> **Nota:** No podrá eliminar un cliente que tenga proyectos asociados.

---

## 6. Módulo de Consultores

En este módulo se registran los consultores de LUBConsultores que son asignados a los proyectos.

### 6.1 Ver la lista de consultores

Haga click en **Consultores** en el menú lateral. Verá una tabla con todos los consultores registrados, su información de contacto, usuario vinculado y estado.

Puede buscar un consultor escribiendo en la barra de búsqueda superior.

### 6.2 Registrar un nuevo consultor

1. Haga click en el botón **+ Nuevo Consultor**.
2. Complete los siguientes campos:
   - **Nombre** _(obligatorio)_ — Nombre completo del consultor.
   - **Teléfono** — Número de teléfono.
   - **Correo** — Correo electrónico.
   - **Usuario vinculado** _(opcional)_ — Si el consultor tiene acceso al sistema, búsquelo y selecciónelo aquí.
   - **Estado** _(obligatorio)_ — Activo o Inactivo.
3. Haga click en **Guardar**.

### 6.3 Usuario vinculado

Un consultor puede estar vinculado a un usuario del sistema. Esto permite saber qué usuario del sistema corresponde a cada consultor. Es opcional y puede configurarse después.

### 6.4 Editar y eliminar

El proceso es igual al de clientes. Use los botones **Editar** y **Eliminar** en la tabla.

---

## 7. Módulo de Proyectos

Este es el módulo principal del sistema. Aquí se registran y gestionan todos los proyectos de LUBConsultores.

### 7.1 Ver la lista de proyectos

Haga click en **Proyectos** en el menú lateral. Verá una tabla con todos los proyectos registrados, incluyendo:

- Número de proyecto
- Nombre
- Cliente asignado
- Consultor asignado
- Estado actual
- Monto actual

Puede buscar proyectos escribiendo en la barra de búsqueda. Filtra por número de proyecto, nombre o cliente.

### 7.2 Registrar un nuevo proyecto

1. Haga click en el botón **+ Nuevo Proyecto**.
2. Complete los siguientes campos:
   - **No. Proyecto** _(obligatorio)_ — Número único que identifica al proyecto. No puede repetirse.
   - **Nombre** — Nombre descriptivo del proyecto.
   - **Descripción** — Descripción detallada del proyecto.
   - **Fecha Inicio** _(obligatorio)_ — Fecha en que inicia el proyecto.
   - **Fecha Fin** — Fecha estimada de finalización.
   - **Cliente** _(obligatorio)_ — Seleccione el cliente del proyecto.
   - **Consultor** _(obligatorio)_ — Seleccione el consultor asignado.
   - **Estado** _(obligatorio)_ — Estado inicial del proyecto.
   - **Monto Inicial** — Monto inicial del proyecto.
3. Haga click en **Guardar**.

> **Importante:** El número de proyecto debe ser único. Si intenta registrar un proyecto con un número ya existente, el sistema mostrará un mensaje de error.

### 7.3 Ver el detalle de un proyecto

En la tabla de proyectos, haga click en el botón **Ver** del proyecto que desea consultar. Esto lo llevará a la vista de detalle del proyecto.

### 7.4 Editar un proyecto

1. En la tabla de proyectos, haga click en **Editar**.
2. Modifique los datos necesarios.
3. Haga click en **Guardar**.

### 7.5 Eliminar un proyecto

1. En la tabla de proyectos, haga click en **Eliminar**.
2. Confirme la acción.

> **Nota:** Eliminar un proyecto también elimina todos sus registros de bitácora e historial de montos.

---

## 8. Detalle de Proyecto y Bitácora

La vista de detalle muestra toda la información de un proyecto en un solo lugar.

### 8.1 Información general

En la parte superior encontrará:

- **Estado actual** — El estado más reciente del proyecto.
- **Monto actual** — El monto más reciente registrado.
- **Fecha de inicio y fin** del proyecto.

### 8.2 Información de cliente y consultor

Debajo de las métricas verá dos tarjetas:

- **Cliente** — Nombre, empresa, dirección, teléfono y correo del cliente.
- **Consultor asignado** — Nombre y teléfono del consultor responsable.

### 8.3 Agregar un seguimiento (Bitácora)

La bitácora registra el historial de seguimientos del proyecto. Cada seguimiento indica la fecha, el estado en ese momento, la prioridad y las observaciones.

Para agregar un seguimiento:

1. Haga click en el botón **+ Agregar Seguimiento**.
2. Complete los campos:
   - **Fecha** _(obligatorio)_ — Fecha del seguimiento.
   - **Estado** _(obligatorio)_ — Estado del proyecto en ese momento.
   - **Prioridad** _(obligatorio)_ — Nivel de prioridad.
   - **Observaciones** — Descripción de lo trabajado o acontecido.
3. Haga click en **Guardar**.

> **Importante:** Al agregar un seguimiento, el estado actual del proyecto se actualiza automáticamente al estado seleccionado. El historial anterior no se pierde.

> **Nota:** Un proyecto puede tener el mismo estado registrado múltiples veces. Por ejemplo, puede estar Abierto, luego Suspendido, y volver a estar Abierto. Todos estos cambios quedan registrados en la bitácora.

### 8.4 Eliminar un registro de bitácora

En la tabla de bitácora, haga click en **Eliminar** en el registro que desea quitar. Confirme la acción.

### 8.5 Actualizar el monto del proyecto

El historial de montos registra todos los cambios de monto a lo largo del proyecto.

Para registrar un nuevo monto:

1. En la sección **Historial de montos**, haga click en **+ Actualizar monto**.
2. Complete los campos:
   - **Fecha** _(obligatorio)_ — Fecha del cambio de monto.
   - **Monto** _(obligatorio)_ — Nuevo monto del proyecto.
   - **Observaciones** — Motivo del cambio.
3. Haga click en **Guardar**.

El monto actual que aparece en las métricas superiores siempre corresponde al último monto registrado.

### 8.6 Volver a la lista de proyectos

Haga click en **← Volver a Proyectos** en la parte superior izquierda.

---

## 9. Búsqueda y Reportes

Este módulo permite buscar proyectos con filtros avanzados y generar reportes exportables.

### 9.1 Búsqueda de proyectos

En la barra de búsqueda escriba el término que desea encontrar. El sistema busca simultáneamente en:

- Número de proyecto
- Nombre del proyecto
- Nombre del cliente
- Nombre del consultor

Los resultados se actualizan en tiempo real mientras escribe.

También puede filtrar por estado haciendo click en los botones de estado: **Todos**, **Abierto**, **Suspendido** o **Finalizado**. Los filtros de texto y estado funcionan en conjunto.

Desde los resultados puede hacer click en **Ver detalle** para ir directamente al detalle del proyecto.

### 9.2 Generar reportes

El sistema ofrece cuatro tipos de reporte:

#### Reporte por estado

Muestra todos los proyectos que tienen un estado específico.

1. Seleccione el estado deseado en el desplegable, o deje en **Todos los estados** para incluirlos todos.
2. Haga click en **Generar**.

#### Reporte por consultor

Muestra todos los proyectos asignados a un consultor específico.

1. Seleccione el consultor en el desplegable, o deje en **Todos los consultores**.
2. Haga click en **Generar**.

#### Reporte de historial de proyecto

Muestra la información de un proyecto específico buscado por su número.

1. Ingrese el número de proyecto en el campo de texto.
2. Haga click en **Generar**.

#### Reporte por rango de fechas

Muestra todos los proyectos cuya fecha de inicio está dentro de un período específico.

1. Seleccione la fecha de inicio del rango.
2. Seleccione la fecha de fin del rango.
3. Haga click en **Generar**.

### 9.3 Exportar a CSV

Una vez generado un reporte, haga click en el botón **Exportar CSV** para descargar los resultados en un archivo de hoja de cálculo compatible con Excel y Google Sheets.

El archivo se descargará automáticamente con el nombre `reporte_proyectos_FECHA.csv`.

---

## 10. Dashboard

El Dashboard es la pantalla principal del sistema y ofrece un resumen visual del estado general de LUBConsultores.

### 10.1 Métricas principales

En la parte superior encontrará 4 tarjetas con:

- **Proyectos activos** — Total de proyectos en estado Abierto.
- **Suspendidos** — Total de proyectos en estado Suspendido.
- **Finalizados** — Total de proyectos completados.
- **Clientes activos** — Total de clientes registrados.

### 10.2 Gráfica de proyectos por estado

Muestra una gráfica de dona con la distribución de proyectos por estado, con su leyenda correspondiente.

### 10.3 Carga por consultor

Muestra barras horizontales indicando cuántos proyectos tiene asignado cada consultor, ordenados de mayor a menor.

### 10.4 Proyectos recientes

Lista los 5 proyectos más recientes con su estado actual. Haga click en cualquier proyecto para ir a su detalle.

### 10.5 Alertas

El sistema genera alertas automáticas para:

- **Proyectos próximos a vencer** _(alerta roja)_ — Proyectos activos cuya fecha de fin es en los próximos 7 días.
- **Proyectos sin seguimiento reciente** _(alerta amarilla)_ — Proyectos activos que no tienen un registro de bitácora en los últimos 7 días.

Se recomienda revisar las alertas diariamente para mantener los proyectos al día.

---

## 11. Preguntas Frecuentes

**¿Puedo registrar un proyecto sin monto inicial?**
Sí, el monto inicial es opcional. Puede registrarlo después desde la vista de detalle del proyecto usando el botón **+ Actualizar monto**.

**¿Qué pasa si ingreso un número de proyecto que ya existe?**
El sistema mostrará un mensaje de error indicando que el número ya está registrado. Debe ingresar un número diferente.

**¿Puedo cambiar el consultor asignado a un proyecto?**
Sí. Ingrese al proyecto, haga click en **Editar** y seleccione el nuevo consultor.

**¿Se pierde el historial al cambiar el estado de un proyecto?**
No. Cada vez que agrega un seguimiento en la bitácora, el estado anterior queda guardado en el historial. El sistema nunca borra registros anteriores.

**¿Cómo sé cuál es el monto actual del proyecto?**
El monto actual siempre es el último registrado en el historial de montos. Se muestra en las métricas superiores del detalle del proyecto.

**¿Puedo tener el mismo estado dos veces seguidas en la bitácora?**
Sí. Por ejemplo, si un proyecto estuvo Abierto, luego Suspendido, y volvió a estar Abierto, todos estos cambios quedan registrados aunque se repita el estado.

**¿El CSV exportado funciona en Excel?**
Sí. El archivo CSV es compatible con Microsoft Excel, Google Sheets y LibreOffice Calc.

**¿Qué hago si el sistema no carga?**
Verifique que el servidor esté activo comunicándose con el administrador del sistema.

---

_Manual de Usuario — Sistema de Registro de Proyectos — LUBConsultores — v1.0 — Marzo 2026_
