import { Request, Response } from 'express'
import * as LogMontoService from '../services/logMonto.service'

export const getLogMontosByProyecto = async (req: Request, res: Response) => {
  try {
    const { id_proyecto } = req.params
    const data = await LogMontoService.getLogMontosByProyecto(Number(id_proyecto))
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener log de montos' })
  }
}

export const getUltimoMonto = async (req: Request, res: Response) => {
  try {
    const { id_proyecto } = req.params
    const data = await LogMontoService.getUltimoMonto(Number(id_proyecto))
    if (!data) return res.status(404).json({ error: 'No hay montos registrados para este proyecto' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener último monto' })
  }
}

export const createLogMonto = async (req: Request, res: Response) => {
  try {
    const { monto, observaciones, fecha, id_proyecto, id_usuario } = req.body
    const data = await LogMontoService.createLogMonto({
      monto,
      observaciones,
      fecha: new Date(fecha),
      id_proyecto,
      id_usuario
    })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear log de monto' })
  }
}

export const deleteLogMonto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await LogMontoService.deleteLogMonto(Number(id))
    res.json({ message: 'Log de monto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar log de monto' })
  }
}