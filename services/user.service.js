const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

class UserServices{


    //To Register the User
    static async registerUser(email,password){
        try{
                console.log("-----Email --- Password-----",email,password);
                
                const createUser = new UserModel({email,password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    //To Get the User by Email
    static async getUserByEmail(email){
        try{
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
        }
    }

    //To Check if the email is already registered
    static async checkUser(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    //To Generate Access Token
    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = UserServices;