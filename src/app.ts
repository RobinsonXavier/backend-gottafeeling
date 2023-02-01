import express from 'express';
import { loadEnv } from './config/envs.js';
import cors from 'cors';
import authRouter from './routers/authRouter.js';

loadEnv();

const App = express();

App 
  .use(cors())
  .use(authRouter)

App.listen(4000, () => {
  console.log("listen on 4000");
});
