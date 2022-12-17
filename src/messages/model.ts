import mongoose from "mongoose";

export interface IMessage{
    isReceived:Boolean
}

const options = { discriminatorKey: 'kind' };

const messageSchema = new mongoose.Schema({ 
    isReceived:{
        type:Boolean,
        default:false
    }
}, {options, timestamps: true});

const MessageModel = mongoose.model('customer', messageSchema);
export default MessageModel;