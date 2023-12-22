import mongoose from "mongoose";

const standingsSchema = new mongoose.Schema({
    position: {
        type: Number,
        
        require: true
    }
}) // Ainda vou implementar isso