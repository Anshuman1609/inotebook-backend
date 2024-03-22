require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.URL;

const connectToMongo = async () => {
    try{
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB Successfully");
    }catch(error){
        console.log("Error in connection", error);
    }
}

module.exports = connectToMongo;