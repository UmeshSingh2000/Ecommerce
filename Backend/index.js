const express = require('express')
const app = express();
require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT || 3000;
//dbconnection
const dbConnect = require('./config/dbConfig')
dbConnect();
//routes
const productRoute = require('./Routes/productRoutes')
const paymentRoute = require('./Routes/paymentRouter')

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: "welcome to server" });
})

app.use('/api', productRoute)
app.use('/api/payment', paymentRoute)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})