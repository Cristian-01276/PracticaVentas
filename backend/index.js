import cors from 'cors';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import ventaRoutes from './routes/ventaRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api/clientes', clienteRoutes);

app.use('/api/productos', productoRoutes);

app.use('/api/ventas', ventaRoutes);
// api es una interfaz de aplicacion programada , contine un conjunto de reglas que hace que la aplicacion acceda a datos de otras aplicaciones//
// res conjunto de principios de la arquitectura para crear sitios web (configuracion)//
//api res full: interectua con la base de datos , pedir , almacenar, con get ,post, delet//
// los llamados se hacen con fech//
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});