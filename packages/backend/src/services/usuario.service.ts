import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

export const getUsuarios = async () => {
  return prisma.usuario.findMany({
    include: { rol: true }
  })
}

export const getUsuarioById = async (id_usuario: number) => {
  return prisma.usuario.findUnique({
    where: { id_usuario },
    include: { rol: true }
  })
}

export const createUsuario = async (data: {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  id_rol: number
}) => {
  return prisma.usuario.create({ data })
}

export const updateUsuario = async (id_usuario: number, data: {
  nombre?: string
  apellido?: string
  correo?: string
  contrasena?: string
  id_rol?: number
  activo?: boolean
}) => {
  return prisma.usuario.update({ where: { id_usuario }, data })
}

export const deleteUsuario = async (id_usuario: number) => {
  return prisma.usuario.delete({ where: { id_usuario } })
}