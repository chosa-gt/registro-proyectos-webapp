import { Request, Response } from 'express'
import * as CatalogoService from '../services/catalogo.service'

// ─── ROLES ───────────────────────────────────────────
export const getRoles = async (req: Request, res: Response) => {
  try {
    const data = await CatalogoService.getRoles()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener roles' })
  }
}

export const createRol = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body
    const data = await CatalogoService.createRol(nombre)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear rol' })
  }
}

export const updateRol = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { nombre } = req.body
    const data = await CatalogoService.updateRol(Number(id), nombre)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar rol' })
  }
}

export const deleteRol = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await CatalogoService.deleteRol(Number(id))
    res.json({ message: 'Rol eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar rol' })
  }
}

// ─── ESTADOS CLIENTE ─────────────────────────────────
export const getEstadosCliente = async (req: Request, res: Response) => {
  try {
    const data = await CatalogoService.getEstadosCliente()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estados de cliente' })
  }
}

export const createEstadoCliente = async (req: Request, res: Response) => {
  try {
    const { estado } = req.body
    const data = await CatalogoService.createEstadoCliente(estado)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear estado de cliente' })
  }
}

export const updateEstadoCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { estado } = req.body
    const data = await CatalogoService.updateEstadoCliente(Number(id), estado)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar estado de cliente' })
  }
}

export const deleteEstadoCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await CatalogoService.deleteEstadoCliente(Number(id))
    res.json({ message: 'Estado de cliente eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar estado de cliente' })
  }
}

// ─── ESTADOS PROYECTO ────────────────────────────────
export const getEstadosProyecto = async (req: Request, res: Response) => {
  try {
    const data = await CatalogoService.getEstadosProyecto()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estados de proyecto' })
  }
}

export const createEstadoProyecto = async (req: Request, res: Response) => {
  try {
    const { estado } = req.body
    const data = await CatalogoService.createEstadoProyecto(estado)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear estado de proyecto' })
  }
}

export const updateEstadoProyecto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { estado } = req.body
    const data = await CatalogoService.updateEstadoProyecto(Number(id), estado)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar estado de proyecto' })
  }
}

export const deleteEstadoProyecto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await CatalogoService.deleteEstadoProyecto(Number(id))
    res.json({ message: 'Estado de proyecto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar estado de proyecto' })
  }
}

// ─── PRIORIDADES ─────────────────────────────────────
export const getPrioridades = async (req: Request, res: Response) => {
  try {
    const data = await CatalogoService.getPrioridades()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener prioridades' })
  }
}

export const createPrioridad = async (req: Request, res: Response) => {
  try {
    const { nombre_prioridad } = req.body
    const data = await CatalogoService.createPrioridad(nombre_prioridad)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear prioridad' })
  }
}

export const updatePrioridad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { nombre_prioridad } = req.body
    const data = await CatalogoService.updatePrioridad(Number(id), nombre_prioridad)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar prioridad' })
  }
}

export const deletePrioridad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await CatalogoService.deletePrioridad(Number(id))
    res.json({ message: 'Prioridad eliminada correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar prioridad' })
  }
}

// ─── EMPRESAS ────────────────────────────────────────
export const getEmpresas = async (req: Request, res: Response) => {
  try {
    const data = await CatalogoService.getEmpresas()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empresas' })
  }
}

export const createEmpresa = async (req: Request, res: Response) => {
  try {
    const { nombre, direccion } = req.body
    const data = await CatalogoService.createEmpresa(nombre, direccion)
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear empresa' })
  }
}

export const updateEmpresa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { nombre, direccion } = req.body
    const data = await CatalogoService.updateEmpresa(Number(id), nombre, direccion)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar empresa' })
  }
}

export const deleteEmpresa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await CatalogoService.deleteEmpresa(Number(id))
    res.json({ message: 'Empresa eliminada correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar empresa' })
  }
}