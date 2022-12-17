import ChatModel from "./model"
import { Request} from "express"

export const getChats = async () =>{
    try{
        let chats = ChatModel.find();
        return ({r: {c: 0, m: 'Ok'}, data: chats})
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}

export const createChats = async (req:Request) =>{
    try{
        let chat= new ChatModel({
            customer:req.body?.customer
        })
        await chat.save()
        return ({r: {c: 0, m: 'Ok'}})
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}

export const editChats = async (req:Request) =>{
    try{
        let chat = await ChatModel.findById(req.params?.chatId)
        if(chat){
            chat.customer=req.body?.customer
            chat.isFavourite=req.body?.isFavourite
            chat.message=req.body?.message
            await chat.save()
            return ({r: {c: 0, m: 'Ok'}})
        }else{
            return ({r: {c: 0, m: 'Chat not found'}})
        }
        
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}

export const deleteChats = async (req:Request) =>{
    try{
        let chat = await ChatModel.findOneAndDelete({_id:req.params?.chatId})
        if(chat){
            return ({r: {c: 0, m: 'Ok'}})
        }else{
            return ({r: {c: 0, m: 'Chat not found'}})
        }
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}