import mongoose from "mongoose";
import MessageModel, { IMessage } from "../model";

export interface ITextMessage extends IMessage{
    text:string
}

const options = { discriminatorKey: 'kind' };

const textMessageSchema = MessageModel.discriminator('textMessageSchema',
    new mongoose.Schema({ 
    text:{
        type:String
    } 
}, options));
export default textMessageSchema;