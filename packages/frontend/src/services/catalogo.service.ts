import api from './api'

export const CatalogoService = {
  // Roles
  getRoles: () => api.get('/roles'),
  createRol: (nombre: string) => api.post('/roles', { nombre }),
  updateRol: (id: number, nombre: string) => api.put(`/roles/${id}`, { nombre }),
  deleteRol: (id: number) => api.delete(`/roles/${id}`),

  // Estados Cliente
  getEstadosCliente: () => api.get('/estados-cliente'),
  createEstadoCliente: (estado: string) => api.post('/estados-cliente', { estado }),
  updateEstadoCliente: (id: number, estado: string) => api.put(`/estados-cliente/${id}`, { estado }),
  deleteEstadoCliente: (id: number) => api.delete(`/estados-cliente/${id}`),

  // Estados Proyecto
  getEstadosProyecto: () => api.get('/estados-proyecto'),
  createEstadoProyecto: (estado: string) => api.post('/estados-proyecto', { estado }),
  updateEstadoProyecto: (id: number, estado: string) => api.put(`/estados-proyecto/${id}`, { estado }),
  deleteEstadoProyecto: (id: number) => api.delete(`/estados-proyecto/${id}`),

  // Prioridades
  getPrioridades: () => api.get('/prioridades'),
  createPrioridad: (nombre_prioridad: string) => api.post('/prioridades', { nombre_prioridad }),
  updatePrioridad: (id: number, nombre_prioridad: string) => api.put(`/prioridades/${id}`, { nombre_prioridad }),
  deletePrioridad: (id: number) => api.delete(`/prioridades/${id}`),

  // Empresas
  getEmpresas: () => api.get('/empresas'),
  createEmpresa: (data: { nombre: string, direccion?: string }) => api.post('/empresas', data),
  updateEmpresa: (id: number, data: { nombre: string, direccion?: string }) => api.put(`/empresas/${id}`, data),
  deleteEmpresa: (id: number) => api.delete(`/empresas/${id}`),
}