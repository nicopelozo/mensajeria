import mongoose from "mongoose";
import MessageModel, { IMessage } from "../model";

export interface ILocationMessage extends IMessage{
    latitude:string,
    longitude:string
}

const options = { discriminatorKey: 'kind' };

const LocationMessageSchema = MessageModel.discriminator('LocationMessageSchema',
    new mongoose.Schema({ 
    latitude:{
        type:String
    },
    longitude:{
        type:String
    }
}, options));

export default LocationMessageSchema;