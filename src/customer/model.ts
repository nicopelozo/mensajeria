import mongoose from "mongoose";

export interface ICustomer{
    firstName:string,
    lasName:string
}

const options = { discriminatorKey: 'kind' };

const customerSchema = new mongoose.Schema({ 
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
}, options);
const CustomerModel = mongoose.model('customer', customerSchema);
export default CustomerModel;