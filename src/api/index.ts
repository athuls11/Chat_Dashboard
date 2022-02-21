import {Router} from 'express';
import Chat from "./Chat";

const router = Router();

router.use('/chat', Chat)

export default router