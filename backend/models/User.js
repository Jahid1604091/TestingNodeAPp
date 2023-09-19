const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        minlength: [5, 'Name cant be less than 5 char']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Please add a valid email'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    password: {
        type: String,
        // required: [true, 'Please add a password'],
        minlength: 6,
    },

    avatar: {
        url: String,
        secure_url: String,
        public_id: String,
    },

},

    { timestamps: true })


//encrypt pass
userSchema.pre('save', async function (next) {

    //only run when changed
    if (!this.isModified('password')) {
        next();
    }
    //else encrypt

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

//compare password
userSchema.methods.matchPassword = async function (enteredPass) {
    return await bcrypt.compare(enteredPass, this.password)
}

//sign JWT
userSchema.methods.getSignedJwtToken = function () {
    //returning token
    return jwt.sign({ id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRED_IN });
}



const User = mongoose.model('User', userSchema);
module.exports = User;
