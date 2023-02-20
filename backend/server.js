import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import CV_router from './routes/CV_routes.js'
import routerCL from './routes/CL_routes.js';

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(cors())
app.use('/',CV_router);
app.use('/',routerCL);

mongoose.connect('mongodb://127.0.0.1:27017/cv_db')
.then((res)=>{
    app.listen(PORT,()=>console.log(`App is running on port ${PORT}`))
})
.catch((err)=>{
    console.log(`Error starting Db ${err}`)
})



app.all('*',(req,res)=>{
    res.status(404).json({'message':'Page Not Found'})
 })

