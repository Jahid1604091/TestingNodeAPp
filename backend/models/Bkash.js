const mongoose = require('mongoose');


const bkashSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    paymentId:{
        type:String
    }
},
    { timestamps: true }
)




const Bkash = mongoose.model('Bkash', bkashSchema);
module.exports = Bkash;
