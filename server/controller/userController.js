import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';


// controller for register
const registerUser = async (req, res) => {
    
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {

            return res.json({success: false, message: "All fields are required"})
            
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const  userData = {
            name,
            email,
            password: hashedPassword
        }
        
        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, message: token, })

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    
    }
}

const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body;

        

        const user = await userModel.findOne({email})

        if (!user) {

            return res.json({success: false, message: "User doesn't exists"})
            
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, message: token, user:{name: user.name}})

            
        }else{
            
            return res.json({success: false, message: "Invalid credentials"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {registerUser, loginUser}