import { Router } from 'express'
import * as BitacoraController from '../controllers/bitacora.controller'

const router = Router()

router.get('/proyecto/:id_proyecto', BitacoraController.getBitacoraByProyecto)
router.get('/:id', BitacoraController.getBitacoraById)
router.post('/', BitacoraController.createBitacora)
router.put('/:id', BitacoraController.updateBitacora)
router.delete('/:id', BitacoraController.deleteBitacora)

export default router