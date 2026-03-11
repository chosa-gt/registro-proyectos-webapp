import { Request, Response } from 'express'
import * as ConsultorService from '../services/consultor.service'

export const getConsultores = async (req: Request, res: Response) => {
  try {
    const data = await ConsultorService.getConsultores()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener consultores' })
  }
}

export const getConsultorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await ConsultorService.getConsultorById(Number(id))
    if (!data) return res.status(404).json({ error: 'Consultor no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener consultor' })
  }
}

export const createConsultor = async (req: Request, res: Response) => {
  try {
    const { nombre, telefono, correo, id_usuario } = req.body
    const data = await ConsultorService.createConsultor({ nombre, telefono, correo, id_usuario })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear consultor' })
  }
}

export const updateConsultor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await ConsultorService.updateConsultor(Number(id), req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar consultor' })
  }
}

export const deleteConsultor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ConsultorService.deleteConsultor(Number(id))
    res.json({ message: 'Consultor eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar consultor' })
  }
}