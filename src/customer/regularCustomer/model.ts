import mongoose from "mongoose";
import CustomerModel, { ICustomer } from "../model";

export interface IRegularCustomer extends ICustomer{
    phoneNumber:string
}

const options = { discriminatorKey: 'kind' };

const RegularCustomerSchema = CustomerModel.discriminator('regularCustomerSchema',
    new mongoose.Schema({ 
    phoneNumber:{
        type:String
    } 
}, options));

export default RegularCustomerSchema;