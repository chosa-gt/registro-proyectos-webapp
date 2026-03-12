import api from './api'

export const ProyectoService = {
  getProyectos: () => api.get('/proyectos'),
  getProyectoById: (id: number) => api.get(`/proyectos/${id}`),
  getProyectoByNo: (no_proyecto: string) => api.get(`/proyectos/buscar/${no_proyecto}`),
  createProyecto: (data: object) => api.post('/proyectos', data),
  updateProyecto: (id: number, data: object) => api.put(`/proyectos/${id}`, data),
  deleteProyecto: (id: number) => api.delete(`/proyectos/${id}`),
}