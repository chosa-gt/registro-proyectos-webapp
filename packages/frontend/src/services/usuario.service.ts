import api from './api'

export const UsuarioService = {
  getUsuarios: () => api.get('/usuarios'),
  getUsuarioById: (id: number) => api.get(`/usuarios/${id}`),
  createUsuario: (data: object) => api.post('/usuarios', data),
  updateUsuario: (id: number, data: object) => api.put(`/usuarios/${id}`, data),
  deleteUsuario: (id: number) => api.delete(`/usuarios/${id}`),
}