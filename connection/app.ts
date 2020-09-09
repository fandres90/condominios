import "reflect-metadata";
import {createConnection} from "typeorm";
import User from '../models/user';
import { Roles } from '../models/roles';

export class Connection {

    constructor(){
        this.initDb();
    }

    public initDb(){
        createConnection({
            name: "default",
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "bd_condominios",
            entities: [
                //__dirname + "\\models\\*.js"
                User,
                Roles
            ],
            synchronize: true,
            logging: false
        }).then(connection => {
            console.log("Creando migración");
        }).catch(error => console.log(error));
    }

}
