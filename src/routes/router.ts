import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/', (request: Request, response: Response) => {
	return response.sendFile(path.join(__dirname,'..', 'www', 'index.html'));
});

export default router;