import route from './router'
import { UserController } from '../controllers/user.controller';

route.get('/user/:id',UserController.getUserbyId);
route.post('/user',UserController.postUser);
route.put('/user/:id',UserController.putUser);
route.get('/alluser', UserController.getUsers);
route.post('/login',UserController.postLogin);
