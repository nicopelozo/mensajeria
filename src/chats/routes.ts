import { createChatsCtrl, deleteChatsCtrl, editChatsCtrl, getChatsCtrl } from "./controller"
import { Router } from "express";

const router = Router();
// NORMAL
router.get('/chats',getChatsCtrl)

// ADMIN
router.post('/',createChatsCtrl)
router.put('/',editChatsCtrl)
router.delete('/',deleteChatsCtrl)

export default router;