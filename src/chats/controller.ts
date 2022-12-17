
import { Request, Response } from "express"
import { getChats,createChats,editChats,deleteChats } from "./service";

export const getChatsCtrl = async (_req: Request, res: Response) => {
    try {
        const response = await getChats()
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}

export const createChatsCtrl = async (req: Request, res: Response) => {
    try {
        const response = await createChats(req)
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}

export const editChatsCtrl = async (req: Request, res: Response) => {
    try {
        const response = await editChats(req)
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}

export const deleteChatsCtrl = async (req: Request, res: Response) => {
    try {
        const response = await deleteChats(req)
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}