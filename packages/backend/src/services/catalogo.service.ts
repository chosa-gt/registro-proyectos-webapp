import prisma from '../db/prisma'

// ─── ROLES ───────────────────────────────────────────
export const getRoles = async () => {
  return prisma.rol.findMany()
}

export const createRol = async (nombre: string) => {
  return prisma.rol.create({ data: { nombre } })
}

export const updateRol = async (id_rol: number, nombre: string) => {
  return prisma.rol.update({ where: { id_rol }, data: { nombre } })
}

export const deleteRol = async (id_rol: number) => {
  return prisma.rol.delete({ where: { id_rol } })
}

// ─── ESTADOS CLIENTE ─────────────────────────────────
export const getEstadosCliente = async () => {
  return prisma.estadoCliente.findMany()
}

export const createEstadoCliente = async (estado: string) => {
  return prisma.estadoCliente.create({ data: { estado } })
}
    
export const updateEstadoCliente = async (id_estado_cliente: number, estado: string) => {
  return prisma.estadoCliente.update({ where: { id_estado_cliente }, data: { estado } })
}

export const deleteEstadoCliente = async (id_estado_cliente: number) => {
  return prisma.estadoCliente.delete({ where: { id_estado_cliente } })
}

// ─── ESTADOS PROYECTO ────────────────────────────────
export const getEstadosProyecto = async () => {
  return prisma.estadoProyecto.findMany()
}

export const createEstadoProyecto = async (estado: string) => {
  return prisma.estadoProyecto.create({ data: { estado } })
}

export const updateEstadoProyecto = async (id_estado_proyecto: number, estado: string) => {
  return prisma.estadoProyecto.update({ where: { id_estado_proyecto }, data: { estado } })
}

export const deleteEstadoProyecto = async (id_estado_proyecto: number) => {
  return prisma.estadoProyecto.delete({ where: { id_estado_proyecto } })
}

// ─── PRIORIDADES ─────────────────────────────────────
export const getPrioridades = async () => {
  return prisma.prioridad.findMany()
}

export const createPrioridad = async (nombre_prioridad: string) => {
  return prisma.prioridad.create({ data: { nombre_prioridad } })
}

export const updatePrioridad = async (id_prioridad: number, nombre_prioridad: string) => {
  return prisma.prioridad.update({ where: { id_prioridad }, data: { nombre_prioridad } })
}

export const deletePrioridad = async (id_prioridad: number) => {
  return prisma.prioridad.delete({ where: { id_prioridad } })
}

// ─── EMPRESAS ────────────────────────────────────────
export const getEmpresas = async () => {
  return prisma.empresa.findMany()
}

export const createEmpresa = async (nombre: string, direccion?: string) => {
  return prisma.empresa.create({ data: { nombre, direccion } })
}

export const updateEmpresa = async (id_empresa: number, nombre: string, direccion?: string) => {
  return prisma.empresa.update({ where: { id_empresa }, data: { nombre, direccion } })
}

export const deleteEmpresa = async (id_empresa: number) => {
  return prisma.empresa.delete({ where: { id_empresa } })
}