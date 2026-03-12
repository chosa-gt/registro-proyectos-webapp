import api from './api'

export const BitacoraService = {
  getBitacoraByProyecto: (id_proyecto: number) => api.get(`/bitacora/proyecto/${id_proyecto}`),
  getBitacoraById: (id: number) => api.get(`/bitacora/${id}`),
  createBitacora: (data: object) => api.post('/bitacora', data),
  updateBitacora: (id: number, data: object) => api.put(`/bitacora/${id}`, data),
  deleteBitacora: (id: number) => api.delete(`/bitacora/${id}`),
}