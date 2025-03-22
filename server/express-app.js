import express from "express";
import cors from 'cors';

const expressApp = (app) =>{
    app.use(cors());
    app.use(express.json());

    

    app.get('/', (request, response) => {
        return response.status(234).send('Welcome To MERN Stack Tutorial');
    });

}

export default expressApp;

// create error loger