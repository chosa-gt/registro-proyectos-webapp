export interface Rol {
  id_rol: number
  nombre: string
}

export interface Usuario {
  id_usuario: number
  nombre: string
  apellido: string
  correo: string
  activo: boolean
  rol: Rol
}

export interface Empresa {
  id_empresa: number
  nombre: string
  direccion?: string
}

export interface EstadoCliente {
  id_estado_cliente: number
  estado: string
}

export interface Cliente {
  id_cliente: number
  nombre: string
  apellido: string
  correo?: string
  telefono?: string
  empresa: Empresa
  estado_cliente: EstadoCliente
}

export interface Consultor {
  id_consultor: number
  nombre: string
  telefono?: string
  correo?: string
  activo: boolean
  usuario?: Usuario
}

export interface EstadoProyecto {
  id_estado_proyecto: number
  estado: string
}

export interface Prioridad {
  id_prioridad: number
  nombre_prioridad: string
}

export interface LogMonto {
  id_log_montos: number
  monto: number
  observaciones?: string
  fecha: string
}

export interface Bitacora {
  id_bitacora: number
  fecha: string
  observaciones?: string
  estado_proyecto: EstadoProyecto
  prioridad: Prioridad
  usuario: Usuario
}

export interface Proyecto {
  id_proyecto: number
  no_proyecto: string
  nombre?: string
  descripcion?: string
  fecha_inicio: string
  fecha_fin?: string
  cliente: Cliente
  consultor: Consultor
  estado_proyecto: EstadoProyecto
  log_montos: LogMonto[]
  bitacoras?: Bitacora[]
}