import 'reflect-metadata';
import express from 'express';
// src/server.ts
import routes from './routes';
import uploadConfig from './config/upload';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// app.get('/', (request, response) => response.json({ message: 'hello goStack' }));

app.listen(3333, () => {
  console.log('server started on port 3333');
});
