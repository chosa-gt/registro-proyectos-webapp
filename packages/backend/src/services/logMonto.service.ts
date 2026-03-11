import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getLogMontosByProyecto = async (id_proyecto: number) => {
  return prisma.logMontoProyecto.findMany({
    where: { id_proyecto },
    include: { usuario: true },
    orderBy: [{ fecha: 'desc' }, { id_log_montos: 'desc' }]
  })
}

export const getUltimoMonto = async (id_proyecto: number) => {
  return prisma.logMontoProyecto.findFirst({
    where: { id_proyecto },
    orderBy: [{ fecha: 'desc' }, { id_log_montos: 'desc' }]
  })
}

export const createLogMonto = async (data: {
  monto: number
  observaciones?: string
  fecha: Date
  id_proyecto: number
  id_usuario: number
}) => {
  return prisma.logMontoProyecto.create({ data })
}

export const deleteLogMonto = async (id_log_montos: number) => {
  return prisma.logMontoProyecto.delete({ where: { id_log_montos } })
}