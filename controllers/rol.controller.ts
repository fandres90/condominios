import {Request,Response} from 'express';

export class RolController {

    public static postrol(req: Request, res: Response) {
        let data = req.body;
        res.json({
            'ok': true,
            'msg': "correcto",
            'std': 1,
            data
        });
    }

}