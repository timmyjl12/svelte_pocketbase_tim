import { handler } from '../build/handler.js';
import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(handler);

app.listen(PORT, '0.0.0.0', () => console.log(`Listening on ${ PORT }`))
