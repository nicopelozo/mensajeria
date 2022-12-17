import mongoose from "mongoose";
import CustomerModel, { ICustomer } from "../model";

export interface IVIPCustomer extends ICustomer{
    creditCard:string
}

const options = { discriminatorKey: 'kind' };

const VIPCustomerSchema = CustomerModel.discriminator('vipCustomerSchema',
    new mongoose.Schema({ 
    creditCard:{
        type:String
    } 
}, options));

export default VIPCustomerSchema;