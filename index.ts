import { SERVER_PORT } from './enviroments/enviroments';
import Server from './server/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/router';
import "reflect-metadata";
import { Connection } from './connection/app';

const con = new Connection(); ///se descomenta cuando se va a iniciar la base de datos

const server = Server.instance;

server.app.use(bodyParser.json()); //formato json
server.app.use(bodyParser.urlencoded({extended: true})); //formato x-wwww-form

//migrations database and much


//cors
server.app.use(cors({origin: true,credentials: true}));

server.app.use('/',router);

server.start(()=>{
    console.log(`Server run in port ${SERVER_PORT}`);
});