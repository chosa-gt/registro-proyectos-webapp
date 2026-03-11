import { Request, Response } from 'express'
import * as UsuarioService from '../services/usuario.service'

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const data = await UsuarioService.getUsuarios()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}

export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await UsuarioService.getUsuarioById(Number(id))
    if (!data) return res.status(404).json({ error: 'Usuario no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' })
  }
}

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, correo, contrasena, id_rol } = req.body
    const data = await UsuarioService.createUsuario({ nombre, apellido, correo, contrasena, id_rol })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' })
  }
}

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await UsuarioService.updateUsuario(Number(id), req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' })
  }
}

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await UsuarioService.deleteUsuario(Number(id))
    res.json({ message: 'Usuario eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' })
  }
}