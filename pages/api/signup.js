require('../../middleware/config')
import User from '../../model/user'
var CryptoJS = require("crypto-js");


const handler = async (req, resp) => {
    if (req.method == 'POST') {
        const { name, email, } = req.body
        let user = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, 'pks1998').toString() })
        await user.save()
        resp.status(200).json({ success: "sign up seccessful" })
    } else {
        resp.status(400).json({ error: 'something wrong' })
    }
}
export default handler
