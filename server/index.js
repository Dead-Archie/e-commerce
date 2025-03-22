import express from "express";
import dotenv from 'dotenv';
import {databaseConnection} from './database/index.js';
import expressApp from './express-app.js';


dotenv.config();


  const app = express();

  databaseConnection();
  
  expressApp(app);
  
  
  app.listen(process.env.PORT, ()=>{
    console.log("server is connected "+ process.env.PORT);
  })
  .on('error',(error)=>{
      console.log("Error in connection ", error);
  })

