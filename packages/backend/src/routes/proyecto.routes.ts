import { Router } from 'express'
import * as ProyectoController from '../controllers/proyecto.controller'

const router = Router()

router.get('/', ProyectoController.getProyectos)
router.get('/buscar/:no_proyecto', ProyectoController.getProyectoByNoProyecto)
router.get('/:id', ProyectoController.getProyectoById)
router.post('/', ProyectoController.createProyecto)
router.put('/:id', ProyectoController.updateProyecto)
router.delete('/:id', ProyectoController.deleteProyecto)

export default router