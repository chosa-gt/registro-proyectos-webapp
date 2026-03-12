import api from './api'

export const LogMontoService = {
  getLogMontos: (id_proyecto: number) => api.get(`/log-montos/proyecto/${id_proyecto}`),
  getUltimoMonto: (id_proyecto: number) => api.get(`/log-montos/proyecto/${id_proyecto}/ultimo`),
  createLogMonto: (data: object) => api.post('/log-montos', data),
  deleteLogMonto: (id: number) => api.delete(`/log-montos/${id}`),
}