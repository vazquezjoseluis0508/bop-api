import express, { Application } from 'express'
import morgan from 'morgan'
import cors, { CorsOptions } from 'cors'
import https from 'https';
import fs from 'fs';


// Routes
import IndexRoutes from './routes/index.routes'
import UsuariosRoutes from './routes/usuarios.routes'
import authRoutes from './routes/auth.routes'
import menuRoutes from './routes/menu.routes'
import pedidosRoutes from './routes/pedidos.routes'
import scannerRoutes from './routes/scanner.routes'
import http from 'http'
import { Server as SocketServer } from 'socket.io'





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
        this.app.use(cors({
            origin: '*',
            credentials: true,
        }));
        
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/api/usuarios', UsuariosRoutes);
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/menu', menuRoutes);
        this.app.use('/api/pedidos', pedidosRoutes); // <--- Agregado
        this.app.use('/api/scanner', scannerRoutes);
    }

    async listen(): Promise<void> {
        const options = {
            pfx: fs.readFileSync('bingopilar.pfx'),
            passphrase: 'controlapp'
        };
    
        const server = https.createServer(options, this.app);
    
        const io = new SocketServer(server, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST', 'PUT', 'DELETE'], 
                credentials: true,
            },
        });
    
        io.on('connection', (socket: any) => {
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