import { Request, Response } from 'express'
import * as BitacoraService from '../services/bitacora.service'

export const getBitacoraByProyecto = async (req: Request, res: Response) => {
  try {
    const { id_proyecto } = req.params
    const data = await BitacoraService.getBitacoraByProyecto(Number(id_proyecto))
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener bitácora' })
  }
}

export const getBitacoraById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await BitacoraService.getBitacoraById(Number(id))
    if (!data) return res.status(404).json({ error: 'Registro de bitácora no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener registro de bitácora' })
  }
}

export const createBitacora = async (req: Request, res: Response) => {
  try {
    const {
      fecha,
      observaciones,
      id_estado_proyecto,
      id_proyecto,
      id_usuario,
      id_prioridad
    } = req.body

    const data = await BitacoraService.createBitacora({
      fecha: new Date(fecha),
      observaciones,
      id_estado_proyecto,
      id_proyecto,
      id_usuario,
      id_prioridad
    })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear registro de bitácora' })
  }
}

export const updateBitacora = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const body = { ...req.body }
    if (body.fecha) body.fecha = new Date(body.fecha)
    const data = await BitacoraService.updateBitacora(Number(id), body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar registro de bitácora' })
  }
}

export const deleteBitacora = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await BitacoraService.deleteBitacora(Number(id))
    res.json({ message: 'Registro de bitácora eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar registro de bitácora' })
  }
}