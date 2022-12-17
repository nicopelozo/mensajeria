import { model, ObjectId, Schema } from "mongoose";

export interface IChat{
    isFavourite:Boolean,
    message: ObjectId,
    customer:ObjectId
}

export const ChatSchema = new Schema({
    isFavourite:{
        type:Boolean,
        default:false
    },
    message: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: false
    }],
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
})
    
const ChatModel = model("chats", ChatSchema);
export default ChatModel;