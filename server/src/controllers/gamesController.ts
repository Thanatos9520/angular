import { Request, Response } from 'express';

import pool from '../database';

class GamesController{

   public list (req: Request, res: Response) {
        res.json('listing games')
    } 

    public getOne (req: Request, res: Response){
        res.json({text: 'This is game' + req.params.id});
    }

    public create (req: Request, res: Response){
        console.log(req.body);
        res.json({text: 'creating game'});
    }

    public update (req: Request, res: Response){
        res.json({text: 'updating a game' + req.params.id})
    }

    public delete (req: Request, res: Response){
        res.json({text: 'deleting a game' + req.params.id});
    }
}

const gamesController = new GamesController();
export default gamesController;