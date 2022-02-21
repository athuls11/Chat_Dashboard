import {Request, Response} from 'express';
import Chat from "./model"

export const list = (req: Request,res: Response) => {
    Chat.find({}).then((result) => {
        res.json({data: result, msg: "success", status: true})
    })
}

export const create = (req: Request, res: Response) => {
    Chat.create(req.body).then((data) => {
        res.json({msg: "Created", data})
    }).catch((e) => res.status(500).json({error: e}))
}

export const getById = (req: Request, res: Response) => {
    Chat.findById(req.params).then((result) => {
        res.json({data: result, msg: "success", status: true})
    }).catch((e) => res.status(500).json({error: e}))
}