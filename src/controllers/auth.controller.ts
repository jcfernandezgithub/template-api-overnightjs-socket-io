import { Controller, Middleware, Post } from '@overnightjs/core';
import { Request, Response, NextFunction } from 'express';

@Controller('api/auth/')
export class AuthController {
	@Post('signin')
	async signin(request: Request, response: Response) {
		const data = request.body;
		return response.status(200).json(data);
	}
}