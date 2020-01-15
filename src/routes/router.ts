import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/', (request: Request, response: Response) => {
	return response.status(200).json(
		{ message: "Hello world!" }
	);
});

export default router;