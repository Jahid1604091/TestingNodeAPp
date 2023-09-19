const User = require("../models/User");


const register = async (req, res) => {
    try {
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.status(400).json({ msg: 'User Already Exists!' });
        }
        const user = await User.create(req.body);

        if (user) {
            return res.status(201).json({
                success: true,
                data: user,
                token: user.getSignedJwtToken(),
            });
        } else {
            return res.status(400).json({ msg: 'Invalid Data' });
        }
    } catch (error) {
        // console.log(error)
        return res.json(error)
    }
};

const getUsers = async (req, res) => {
    const users = await User.find({}).select("-password");
    if (!users) {
        return res.status(404).json({ msg: 'User Not Exists!' });
    } else {
        return res.status(200).json({
            success: true,
            data: users,
        });
    }
};

 const auth_user = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {

      return res.status(200).json({
        success: true,
        data: user,
        token: user.getSignedJwtToken(),
      });
    } else {
      res.status(400);
      throw new Error("Invalid Email or Password");
    }
  }
  
 const logout = async (req, res) => {
   
    res.status(200).json({ message: "User Logged Out!" });
  }

module.exports = { register, getUsers , auth_user, logout};