import { Server } from '@overnightjs/core';
import { Router } from './routes/router';
import SocketIO from 'socket.io';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';

export default class App extends Server {

	private close: http.Server;

	constructor() {
		super();
		this.app.use(express.json());
		this.app.use(morgan('dev'));
		this.app.use(cors());

		this.mongoConnection();
		this.setupControllers();
	}

	private setupControllers() {
		console.log('Loading Controllers');
		let router = new Router();
		super.addControllers([
			router.authController,
		]);
	}

	private mongoConnection() {
		console.log('Connection mongo database...');
	}

	public init() {
		const port = 4000;
		this.close = this.app.listen(port, () => {
			console.log('Server listening on port: ' + port);
		});
	}

	public initSocket() {
		console.log('Initializing socket');
		const io = SocketIO(this.close);

		io.on('connection', (socket: SocketIO.Socket) => {
			console.log('New Socket has been connected');
		});
	}

}