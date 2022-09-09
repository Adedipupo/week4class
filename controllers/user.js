import { User } from "../models/userModel.js";
import { generateToken } from "../utils/util.js";


export const signUp = async(req, res) => {
    const {name, password,email,role} = req.body;

    const userExists = await User.findOne({ email });

    if(userExists) {
        throw new Error("User already exists");
    }

    const newUser = await User.create({
        name,
        email,
        password,
        role
    })
    if(newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            token: generateToken(newUser._id)
        })
    }

}

export const loginUser = async(req, res) => {
    const { email,password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
        throw new Error("Invalid email or password");
    }

    if (user) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      } 
}