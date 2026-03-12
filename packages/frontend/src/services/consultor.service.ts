import api from './api'

export const ConsultorService = {
  getConsultores: () => api.get('/consultores'),
  getConsultorById: (id: number) => api.get(`/consultores/${id}`),
  createConsultor: (data: object) => api.post('/consultores', data),
  updateConsultor: (id: number, data: object) => api.put(`/consultores/${id}`, data),
  deleteConsultor: (id: number) => api.delete(`/consultores/${id}`),
}