import express from 'express';
import { loadEnv } from './config/envs.js';
import cors from 'cors';
import authRouter from './routers/authRouter.js';
import welcomeRouter from './routers/welcomeRouter.js';

loadEnv();

const App = express();

App 
  .use(cors())
  .use(welcomeRouter)
  .use(authRouter)

App.listen(4000, () => {
  console.log("listen on 4000");
});
