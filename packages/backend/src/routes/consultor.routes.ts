import { Router } from 'express'
import * as ConsultorController from '../controllers/consultor.controller'

const router = Router()

router.get('/', ConsultorController.getConsultores)
router.get('/:id', ConsultorController.getConsultorById)
router.post('/', ConsultorController.createConsultor)
router.put('/:id', ConsultorController.updateConsultor)
router.delete('/:id', ConsultorController.deleteConsultor)

export default router