const express =require('express')
const app = express();
require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 3000;
//dbconnection
const dbConnect = require('./config/dbConfig')
dbConnect();
//routes
const productRoute = require('./Routes/productRoutes')



app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({message:"welcome to server"});
})

app.use('/api',productRoute)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})