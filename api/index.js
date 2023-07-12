const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')
const materiel = require('./src/Routes/materiel.route')

dotenv.config();
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connected successfully');})
.catch(err => console.log(err));

//authorization to use req.body
app.use(express.json())

//authorization


app.use('/materiel/',cors({
  origin:'http://localhost:3000',
  credentials:true
}),materiel)
  

app.listen(8080,()=>{
    console.log("listenning on port:" + 8080)
})
//function to connect on mongodb
async function main(){
    await mongoose.connect(process.env.MongoDB_URL)
}