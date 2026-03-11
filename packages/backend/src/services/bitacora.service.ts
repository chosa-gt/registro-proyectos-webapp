import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getBitacoraByProyecto = async (id_proyecto: number) => {
  return prisma.bitacora.findMany({
    where: { id_proyecto },
    include: {
      estado_proyecto: true,
      prioridad: true,
      usuario: true
    },
    orderBy: { fecha: 'desc' }
  })
}

export const getBitacoraById = async (id_bitacora: number) => {
  return prisma.bitacora.findUnique({
    where: { id_bitacora },
    include: {
      estado_proyecto: true,
      prioridad: true,
      usuario: true
    }
  })
}

export const createBitacora = async (data: {
  fecha: Date
  observaciones?: string
  id_estado_proyecto: number
  id_proyecto: number
  id_usuario: number
  id_prioridad: number
}) => {
  return prisma.bitacora.create({ data })
}

export const updateBitacora = async (id_bitacora: number, data: {
  fecha?: Date
  observaciones?: string
  id_estado_proyecto?: number
  id_prioridad?: number
}) => {
  return prisma.bitacora.update({ where: { id_bitacora }, data })
}

export const deleteBitacora = async (id_bitacora: number) => {
  return prisma.bitacora.delete({ where: { id_bitacora } })
}