import {Request,Response} from 'express';
import User from '../models/user';
import UserCll from "../cll/user.cll";

export class UserController {

    private userStore = [];

    constructor() {
        this.userStore  = [];
    }

    public static getuser(req: Request, res: Response) {
        let cll = new UserCll();
        res.json(cll.index());
    }

    public static getuserbyId(req: Request, res: Response) {
        let id = req.params.id;
        res.json({
            'ok': true,
            'msg': "correcto",
            'std': id
        });
    }

    public static async postUser(req:Request, res: Response){
        let data = req.body;
        let cll = new UserCll();
        res.json(await cll.postUser(data));
    }

    public static putUser(req:Request, res: Response){
        let data = req.body;
        let id = req.params.id;
        let cll = new UserCll();
        res.json(cll.putUser(data,id));
    }

    public static async getUsers(req:Request, res: Response){
        let cll = new UserCll();
        res.json(await cll.getUsers());
    }

    public static async getUserbyId(req:Request, res: Response){
        let id = req.params.id;
        let cll = new UserCll();
        res.json(await cll.getUserbyId(id));
    }

    public static async postLogin(req:Request, res: Response){
        let data = req.body;
        let cll = new UserCll();
        res.json(await cll.postLogin(data));
    }

}