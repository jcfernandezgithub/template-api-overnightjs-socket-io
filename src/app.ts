import { Server } from '@overnightjs/core';
import router from './routes/router';
import SocketIO from 'socket.io';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import http from 'http';

export default class App extends Server {

	private close: http.Server;

	constructor() {
		super();
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(router);
		this.app.use(express.static(path.join(__dirname, 'www')));
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