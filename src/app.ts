import express from 'express';
import cors from 'cors';

const App = express();

App 
  .use(cors())

App.listen(4000, () => {
  console.log("listen on 4000");
});
