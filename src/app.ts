import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Routes
import IndexRoutes from './routes/index.routes'
import UsuariosRoutes from './routes/usuarios.routes'
import authRoutes from './routes/auth.routes'
import menuRoutes from './routes/menu.routes'
import pedidosRoutes from './routes/pedidos.routes'
import scannerRoutes from './routes/scanner.routes'
import preferencia from './routes/preferencia_menu_usuario.routes'
import { Server as HTTPServer } from 'http';





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
        this.app.set('port', this.port || process.env.PORT || 3002);
    }

    private middlewares() {
        this.app.use(cors({
            origin: '*',
            credentials: true,
        }));
        
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            console.log(`${req.method} ${req.path}`);
            next();
        });
          
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/api/usuarios', UsuariosRoutes);
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/menu', menuRoutes);
        this.app.use('/api/pedidos', pedidosRoutes); 
        this.app.use('/api/preferencia_menu_usuario', preferencia); 
        this.app.use('/api/scanner', scannerRoutes);
    }

    async listen(): Promise<void> {

        const server = new HTTPServer(this.app);
    
        await server.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}