import api from './api'

export const ClienteService = {
  getClientes: () => api.get('/clientes'),
  getClienteById: (id: number) => api.get(`/clientes/${id}`),
  createCliente: (data: object) => api.post('/clientes', data),
  updateCliente: (id: number, data: object) => api.put(`/clientes/${id}`, data),
  deleteCliente: (id: number) => api.delete(`/clientes/${id}`),
}