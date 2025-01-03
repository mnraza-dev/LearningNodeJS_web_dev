import { User } from "../models/User.js";

export const UserRegisterController = async (req, res) => {
    console.log(req.body);
    try {
        let user = await User.create(req.body);
        res.json({
            message: 'User Registered successfully ✅',
            user: user,
            success: true
        });

    } catch (error) {
        res.json({
            message: error.message,
            success: false
        });
    }
}