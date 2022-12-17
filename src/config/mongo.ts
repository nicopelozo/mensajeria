// conect to db
import mongoose from 'mongoose';
import { global } from './global';

function initMongoose() {
    mongoose.connect(global.MONGO_URL)
        .then(() => console.log("db connected"))
        .catch(error => console.log(error));
    
    mongoose.connection.on('error', err => {
        console.log(err);
    });
}

export  {initMongoose}