import express from "express"
import {initMongoose} from "./config/mongo";
import "dotenv/config";
const app = express();
app.use(express.json()) 

const PORT = 3000

app.get("/ping", (_req: express.Request, res: express.Response) => {
    res.send("pong")
})
initMongoose();
import chats from './chats/routes';
app.use('/chats', chats)
import message from './messages/routes';
app.use('/messages', message)


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})