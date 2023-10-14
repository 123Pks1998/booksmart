require('../../middleware/config')
import Product from '../../model/product'
const handler = async (req, resp) => {
    if (req.method == 'POST') {
        let data = new Product({
            slug: req.body.slug,
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            types: req.body.types,
            desc: req.body.desc,
            img: req.body.img,
            price: req.body.price
        })
        await data.save()
        resp.status(200).json({ success: 'success' })
    } else {
        resp.status(200).json({ error: "this is not allowed" })

    }
}
export default handler