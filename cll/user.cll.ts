import Message from '../entities/message';
import Response from '../entities/response';
import {createConnection,getManager,UpdateResult, DeleteResult, getRepository} from "typeorm";
import User from '../models/user';
import { resolve } from 'path';
import { rejects } from 'assert';

export default class UserCll {

    private message:Message;

    public constructor(){
        this.message = new Message();
    }

    public index():Response{
        let response = new Response();
        response.isOk = true;
        response.content = "Hola mundo";
        response.message = this.message.register;
        return response;
    }

    public async postUser(data: any){
        let response = new Response();
        let sha1 = require('sha1');
        const entityManager = getManager();
        const user = new User(data.name,data.username,data.email,sha1(data.password));
        await entityManager.save(user)
        return new Promise((resolve, reject) => {
            //console.log(user);
            if(user != null){
                response.isOk = true;
                response.content = user;
                response.message = "Guardado correctamente";
            }
            resolve(response);
        }).catch((ex)=>{
            console.log(ex,'Promise error');
        });
    }

    public putUser(data: any,id: any):Response{
        let response = new Response();
        const entityManager = getManager();
        entityManager.getRepository(User).update({id: id},data);
        response.isOk = true;
        response.message = "Modificado correctamente";
        return response;
    }

    public async getUsers(){
        const userRepository = getRepository(User);
        let response = new Response();
        let usuario = await userRepository.find();
        return new Promise((resolve, reject) => {
            if(usuario.length > 0){
                response.isOk = true;
                response.content = usuario;
            }
            else{
                response.isOk = false;
                response.message = this.message.error_query;
            }
            resolve(response);
        });
    }

    public async getUserbyId(id:any){
        const userRepository = getRepository(User);
        let response = new Response();
        let usuario = await userRepository.findByIds(id);
        return new Promise((resolve,rejects) => {
            if(usuario.length > 0){
                response.isOk = true;
                response.content = usuario;
            }else {
                response.isOk = false;
                response.message = this.message.error_query;
            }
            resolve(response);
        });
    }
    
    public async postLogin(data: any){
        const userRepository = getRepository(User);
        let sha1 = require('sha1');
        let response = new Response();
        if(data.email != "" || data.password != "") {
            response.isOk = true;
        }
        let usuario = await userRepository.findOne({email: data.email,password: sha1(data.password)});
        return new Promise((resolve,rejects)=>{
            console.log(response.isOk);
            if(response.isOk == false){
                response.isOk = false;
                response.message = this.message.empty_fields;
            }else{
                if(usuario != undefined){
                    response.isOk = true;
                    response.content = usuario;
                }else{
                    response.isOk = false;
                    response.message = this.message.error_query;
                }
            }
            resolve(response);
        });
    }

}