import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getConsultores = async () => {
  return prisma.consultor.findMany({
    include: { usuario: true }
  })
}

export const getConsultorById = async (id_consultor: number) => {
  return prisma.consultor.findUnique({
    where: { id_consultor },
    include: { usuario: true }
  })
}

export const createConsultor = async (data: {
  nombre: string
  telefono?: string
  correo?: string
  id_usuario?: number
}) => {
  return prisma.consultor.create({ data })
}

export const updateConsultor = async (id_consultor: number, data: {
  nombre?: string
  telefono?: string
  correo?: string
  activo?: boolean
  id_usuario?: number
}) => {
  return prisma.consultor.update({ where: { id_consultor }, data })
}

export const deleteConsultor = async (id_consultor: number) => {
  return prisma.consultor.delete({ where: { id_consultor } })
}