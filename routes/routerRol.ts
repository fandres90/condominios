import route from './router'
import { RolController } from '../controllers/rol.controller';

route.post('/rol',RolController.postrol);