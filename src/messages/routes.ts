import { createMessagesCtrl } from "./controller"
import { Router } from "express";
const router = Router();
router.get('/:chatId',createMessagesCtrl)
router.post('/:chaId',createMessagesCtrl)

export default router;