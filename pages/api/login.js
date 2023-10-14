require('../../middleware/config')
import User from '../../model/user'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        var bytes = CryptoJS.AES.decrypt(user.password, 'pks1998');
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.password == decryptedData) {
                var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret', { expiresIn: '2d' });
                resp.status(200).json({ success: true, token })
            } else {
                resp.status(400).json({ success: false, error: 'Invalid Credentials' })
            }
        } else {
            resp.status(400).json({ success: false, error: 'no user found' })
        }
    } else {
        resp.status(400).json({ error: 'Invalid method' })
    }

}
export default handler