import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import catalogoRoutes from './routes/catalogo.routes'
import usuarioRoutes from './routes/usuario.routes'
import consultorRoutes from './routes/consultor.routes'
import clienteRoutes from './routes/cliente.routes'

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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

export default app