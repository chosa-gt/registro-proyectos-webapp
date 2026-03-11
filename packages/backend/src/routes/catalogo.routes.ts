import { Router } from 'express'
import * as CatalogoController from '../controllers/catalogo.controller'

const router = Router()

// Roles
router.get('/roles', CatalogoController.getRoles)
router.post('/roles', CatalogoController.createRol)
router.put('/roles/:id', CatalogoController.updateRol)
router.delete('/roles/:id', CatalogoController.deleteRol)

// Estados Cliente
router.get('/estados-cliente', CatalogoController.getEstadosCliente)
router.post('/estados-cliente', CatalogoController.createEstadoCliente)
router.put('/estados-cliente/:id', CatalogoController.updateEstadoCliente)
router.delete('/estados-cliente/:id', CatalogoController.deleteEstadoCliente)

// Estados Proyecto
router.get('/estados-proyecto', CatalogoController.getEstadosProyecto)
router.post('/estados-proyecto', CatalogoController.createEstadoProyecto)
router.put('/estados-proyecto/:id', CatalogoController.updateEstadoProyecto)
router.delete('/estados-proyecto/:id', CatalogoController.deleteEstadoProyecto)

// Prioridades
router.get('/prioridades', CatalogoController.getPrioridades)
router.post('/prioridades', CatalogoController.createPrioridad)
router.put('/prioridades/:id', CatalogoController.updatePrioridad)
router.delete('/prioridades/:id', CatalogoController.deletePrioridad)

// Empresas
router.get('/empresas', CatalogoController.getEmpresas)
router.post('/empresas', CatalogoController.createEmpresa)
router.put('/empresas/:id', CatalogoController.updateEmpresa)
router.delete('/empresas/:id', CatalogoController.deleteEmpresa)

export default router