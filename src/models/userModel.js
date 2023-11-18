import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: [true,"Please provide a email"],
        unique: true,
    },

    password:{
        type: String,
        required: [true,"Please Provide a passoword"],
    },

    isVerified:{
        type: Boolean,
        default: false,
    },

    role:{
        type: String,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users" , userSchema)