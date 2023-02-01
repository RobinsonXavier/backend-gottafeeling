import express from 'express';
import { loadEnv } from './config/envs';
import cors from 'cors';

loadEnv();

const App = express();

App 
  .use(cors())

App.listen(4000, () => {
  console.log("listen on 4000");
});
