import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import catalogoRoutes from './routes/catalogo.routes'
import usuarioRoutes from './routes/usuario.routes'
import consultorRoutes from './routes/consultor.routes'
import clienteRoutes from './routes/cliente.routes'
import proyectoRoutes from './routes/proyecto.routes'
import bitacoraRoutes from './routes/bitacora.routes'
import logMontoRoutes from './routes/logMonto.routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor corriendo' })
})

app.use('/api', catalogoRoutes)
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/consultores', consultorRoutes)
app.use('/api/clientes', clienteRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/bitacora', bitacoraRoutes)
app.use('/api/log-montos', logMontoRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

export default app