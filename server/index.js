import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();



mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(2020, ()=>{
        console.log("server is connected");
    })
  })
  .catch((error) => {
    console.log(error);
  });