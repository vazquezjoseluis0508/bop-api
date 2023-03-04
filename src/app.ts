import express, { Application } from 'express'
import morgan from 'morgan'
import cors, { CorsOptions } from 'cors'

// Routes
import IndexRoutes from './routes/index.routes'
import UsuariosRoutes from './routes/usuarios.routes'
import authRoutes from './routes/auth.routes'
import menuRoutes from './routes/menu.routes'
import pedidosRoutes from './routes/pedidos.routes'
import http from 'http'
import { Server as SocketServer } from 'socket.io'

const origin = process.env['ORIGIN'] || 'http://localhost:3001';
export const corsOptions: CorsOptions = {
    origin: [origin],
    credentials: true,
};




export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(cors())
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/api/usuarios', UsuariosRoutes);
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/menu', menuRoutes);
        this.app.use('/api/pedidos', pedidosRoutes); // <--- Agregado
    }

    async listen(): Promise<void> {
        
        const server = http.createServer(this.app);
        const io = new SocketServer(server, {
            cors: {
                origin: '*',
            },
            });
        io.on('connection', (socket) => {
            console.log(`a user ${socket.id} connected`);
            socket.on('disconnect', () => {
                console.log(`user ${socket.id} disconnected`);
            });
        });

        this.app.set('io', io);

        await server.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}