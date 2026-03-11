import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getProyectos = async () => {
  return prisma.proyecto.findMany({
    include: {
      cliente: true,
      consultor: true,
      estado_proyecto: true,
      log_montos: {
        orderBy: [{ fecha: 'desc' }, { id_log_montos: 'desc' }],
        take: 1
      }
    }
  })
}

export const getProyectoById = async (id_proyecto: number) => {
  return prisma.proyecto.findUnique({
    where: { id_proyecto },
    include: {
      cliente: true,
      consultor: true,
      estado_proyecto: true,
      bitacoras: {
        include: { estado_proyecto: true, prioridad: true, usuario: true },
        orderBy: { fecha: 'desc' }
      },
      log_montos: {
        orderBy: [{ fecha: 'desc' }, { id_log_montos: 'desc' }]
      }
    }
  })
}

export const getProyectoByNoProyecto = async (no_proyecto: string) => {
  return prisma.proyecto.findUnique({
    where: { no_proyecto },
    include: {
      cliente: true,
      consultor: true,
      estado_proyecto: true,
      bitacoras: {
        include: { estado_proyecto: true, prioridad: true, usuario: true },
        orderBy: { fecha: 'desc' }
      },
      log_montos: {
        orderBy: [{ fecha: 'desc' }, { id_log_montos: 'desc' }]
      }
    }
  })
}

export const createProyecto = async (data: {
  no_proyecto: string
  nombre?: string
  descripcion?: string
  fecha_inicio: Date
  fecha_fin?: Date
  id_cliente: number
  id_consultor: number
  id_estado_proyecto: number
}) => {
  return prisma.proyecto.create({ data })
}

export const updateProyecto = async (id_proyecto: number, data: {
  no_proyecto?: string
  nombre?: string
  descripcion?: string
  fecha_inicio?: Date
  fecha_fin?: Date
  id_cliente?: number
  id_consultor?: number
  id_estado_proyecto?: number
}) => {
  return prisma.proyecto.update({ where: { id_proyecto }, data })
}

export const deleteProyecto = async (id_proyecto: number) => {
  return prisma.proyecto.delete({ where: { id_proyecto } })
}