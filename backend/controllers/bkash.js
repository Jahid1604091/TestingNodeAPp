const axios = require('axios');
const globals = require('node-global-storage');

const paymentCreate = async (req, res) => {
    const { amount } = req.body;
    try {
        const { data } = await axios.post(process.env.bkash_create_payment_url, {
            amount, currency: "BDT", intent: "intent", merchantInvoiceNumber: `invoice_${Math.floor(Math.random() * 100000000000)}`
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": globals.get('id_token'),
                "x-app-key": process.env.bkash_api_key,
            }
        })
        console.log(data)

        globals.set('payment_id', data.paymentID, { protected: true })

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
};

module.exports = {
    paymentCreate
}