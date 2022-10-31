import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Routes
import IndexRoutes from './routes/index.routes'
import UsuariosRoutes from './routes/usuarios.routes'
import authRoutes from './routes/auth.routes'
import menuRoutes from './routes/menu.routes'

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
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}