import { Request, Response } from 'express'
import * as ClienteService from '../services/cliente.service'

export const getClientes = async (req: Request, res: Response) => {
  try {
    const data = await ClienteService.getClientes()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes' })
  }
}

export const getClienteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await ClienteService.getClienteById(Number(id))
    if (!data) return res.status(404).json({ error: 'Cliente no encontrado' })
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cliente' })
  }
}

export const createCliente = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, correo, telefono, id_empresa, id_estado_cliente } = req.body
    const data = await ClienteService.createCliente({
      nombre,
      apellido,
      correo,
      telefono,
      id_empresa,
      id_estado_cliente
    })
    res.status(201).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' })
  }
}

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await ClienteService.updateCliente(Number(id), req.body)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar cliente' })
  }
}

export const deleteCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ClienteService.deleteCliente(Number(id))
    res.json({ message: 'Cliente eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar cliente' })
  }
}