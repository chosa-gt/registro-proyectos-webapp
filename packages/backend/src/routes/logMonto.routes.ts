import { Router } from 'express'
import * as LogMontoController from '../controllers/logMonto.controller'

const router = Router()

router.get('/proyecto/:id_proyecto', LogMontoController.getLogMontosByProyecto)
router.get('/proyecto/:id_proyecto/ultimo', LogMontoController.getUltimoMonto)
router.post('/', LogMontoController.createLogMonto)
router.delete('/:id', LogMontoController.deleteLogMonto)

export default router