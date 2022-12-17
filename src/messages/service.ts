import { Request} from "express"
import ChatModel from "../chats/model";
import LocationMessageSchema from "./LocationMessage/model";
import textMessageSchema from "./textMessages/model";

export const getMessages = async (req:Request) =>{
    try{
        let messages = ChatModel.find({_id:req.params.chatId}).populate("message").select("message");
        return ({r: {c: 0, m: 'Ok'}, data: messages})
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}

export const createMessages = async (req:Request) =>{
    try{
        if(req.body.typeMessage==1){//type text
            let message= new textMessageSchema({
                text:req.body.text,
            })
            await message.save()
            let chat = await ChatModel.findById(req.params.chatId)
            chat?.message.push(message._id)
            await chat?.save()
            return ({r: {c: 0, m: 'Ok'}})
        }else{ //type location
            let message= new LocationMessageSchema({
                latitude:req.body.latitude,
                longitude:req.body.longitude
            })
            await message.save()
            let chat = await ChatModel.findById(req.params.chatId)
            chat?.message.push(message._id)
            await chat?.save()
            return ({r: {c: 0, m: 'Ok'}})
        }
    }catch(e){
        console.log(e);
        return ({r: {c: 1, m: 'Error: '+e}})
    }
    
}