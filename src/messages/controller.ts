import { Request, Response } from "express"
import { createMessages, getMessages } from "./service";

export const getMessagesCtrl = async (req: Request, res: Response) => {
    try {
        const response = await getMessages(req)
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}

export const createMessagesCtrl = async (req: Request, res: Response) => {
    try {
        const response = await createMessages(req)
        return res.send(response)
    } catch (error) {
        console.log(error);
        return res.send({r:{c:1, m: 'error inesperado'}})
    }
}