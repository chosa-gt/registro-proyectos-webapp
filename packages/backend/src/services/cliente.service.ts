import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getClientes = async () => {
  return prisma.cliente.findMany({
    include: {
      empresa: true,
      estado_cliente: true
    }
  })
}

export const getClienteById = async (id_cliente: number) => {
  return prisma.cliente.findUnique({
    where: { id_cliente },
    include: {
      empresa: true,
      estado_cliente: true
    }
  })
}

export const createCliente = async (data: {
  nombre: string
  apellido: string
  correo?: string
  telefono?: string
  id_empresa: number
  id_estado_cliente: number
}) => {
  return prisma.cliente.create({ data })
}

export const updateCliente = async (id_cliente: number, data: {
  nombre?: string
  apellido?: string
  correo?: string
  telefono?: string
  id_empresa?: number
  id_estado_cliente?: number
}) => {
  return prisma.cliente.update({ where: { id_cliente }, data })
}

export const deleteCliente = async (id_cliente: number) => {
  return prisma.cliente.delete({ where: { id_cliente } })
}