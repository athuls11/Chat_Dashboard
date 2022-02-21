import { Router } from 'express';
import { jsonBody } from '../../servie/body-parser';
import { create, list, getById } from './controller';

const router = Router();

router.post('/', jsonBody, create);
router.get('/list', list);
router.get('/list/:_id', getById);


export default router