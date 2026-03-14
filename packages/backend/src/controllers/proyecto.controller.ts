import { Request, Response } from 'express'
import * as ProyectoService from '../services/proyecto.service'

export const getProyectos = async (req: Request, res: Response) => {
  try {
    const data = await ProyectoService.getProyectos()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' })
  }
}

export const getProyectoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await ProyectoService.getProyectoById(Number(id))
    if (!data) return res.status(404).json({ error: 'Proyecto no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyecto' })
  }
}

export const getProyectoByNoProyecto = async (req: Request, res: Response) => {
  try {
    const no_proyecto = req.params.no_proyecto as string
    const data = await ProyectoService.getProyectoByNoProyecto(no_proyecto)
    if (!data) return res.status(404).json({ error: 'Proyecto no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyecto' })
  }
}

export const createProyecto = async (req: Request, res: Response) => {
  try {

    console.log('Body recibido:', req.body)
    
    const {
      no_proyecto,
      nombre,
      descripcion,
      fecha_inicio,
      fecha_fin,
      id_cliente,
      id_consultor,
      id_estado_proyecto
    } = req.body

    const data = await ProyectoService.createProyecto({
      no_proyecto,
      nombre,
      descripcion,
      fecha_inicio: new Date(fecha_inicio),
      fecha_fin: fecha_fin ? new Date(fecha_fin) : undefined,
      id_cliente,
      id_consultor,
      id_estado_proyecto
    })
    res.status(201).json(data)
  } catch (error: any) {
    if (error?.code === 'P2002') {
      res.status(400).json({ error: `El número de proyecto '${req.body.no_proyecto}' ya existe. Use un número diferente.` })
    } else {
      console.error('Error createProyecto:', error)
      res.status(500).json({ error: 'Error al crear proyecto' })
    }
  }
}

export const updateProyecto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const body = { ...req.body }
    if (body.fecha_inicio) body.fecha_inicio = new Date(body.fecha_inicio)
    if (body.fecha_fin) body.fecha_fin = new Date(body.fecha_fin)
    const data = await ProyectoService.updateProyecto(Number(id), body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar proyecto' })
  }
}

export const deleteProyecto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ProyectoService.deleteProyecto(Number(id))
    res.json({ message: 'Proyecto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar proyecto' })
  }
}