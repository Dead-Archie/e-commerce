import express from "express";
import cors from 'cors';
import Customer from "./api/customer.js";

const expressApp = (app) =>{
    app.use(cors());
    app.use(express.json());

    Customer(app)
    

    app.get('/', (request, response) => {
        return response.status(234).send('Welcome To MERN Stack Tutorial');
    });

}

export default expressApp;

// create error loger