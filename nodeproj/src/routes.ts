// Importa componentes do express
import {Router} from 'express';

import TesteController from './controllers/TesteController';
import ProdutoController from './controllers/ProdutoController';

// Instancia roteador
const Routes = Router();

// rotas CRUD
Routes.get('/produto',new ProdutoController().index);
Routes.get('/produto/:id',new ProdutoController().show);
Routes.post('/produto',new ProdutoController().store);
Routes.put('/produto/:id',new ProdutoController().update);
Routes.delete('/produto/:id',new ProdutoController().delete);

export default Routes;