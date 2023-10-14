import React from 'react'
import { useRouter } from 'next/router'
import Product from '@/model/product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Products = ({ product }) => {
    // console.log(product)
    const router = useRouter()
    const dispatch = useDispatch()
    const { slug } = router.query;
    return (
        <div className='bg-white  my-4'>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-8 md:mx-20  ">
                    <div className="lg:w-4/5 md:mx-10  flex flex-wrap justify-center w-full my-10 ">
                        <img alt="ecommerce" className="lg:w-1/2 w-96 md:w-60 h-96  object-center rounded" src={product.img} />
                        <div className="lg:w-1/2 md:w-96 w-96  lg:pl-10 lg:py-6  lg:mt-0 border-2 rounded-sm p-2">
                            <div className='flex md:justify-around justify-between'>
                                <div >
                                    <h2 className="font-bold title-font capitalize text-gray-950 tracking-widest">title</h2>
                                    <h3 className="text-gray-700  title-font font-medium mb-1">{product.title}</h3>
                                </div>
                                <div>
                                    <h2 className=" font-bold title-font capitalize text-gray-950 tracking-widest">author</h2>
                                    <h3 className="text-gray-700  title-font font-medium mb-1">{product.author}</h3>
                                </div>
                            </div>
                            <div className='md:w-72 md:ml-10'>
                                <h2 className=' mt-4 font-bold title-font capitalize text-gray-950 tracking-widest'>description</h2>
                                <p className="leading-relaxed  p-2 border-2  rounded-sm text-gray-700">{product.desc}</p>
                            </div>

                            <div className='flex mt-4 md:justify-around justify-between'>
                                <div>
                                    <h2 className=" font-bold title-font capitalize text-gray-950 tracking-widest">category</h2>
                                    <h3 className="text-gray-700  title-font font-medium mb-1">{product.category}</h3>
                                </div>
                                <div>
                                    <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                                </div>

                            </div>


                            <div className="flex md:ml-4 justify-around mt-4">
                                <button className=" text-white font-semibold bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 capitalize rounded" onClick={() => {
                                    dispatch(addToCart({
                                        ...product,
                                        oneQuantityPrice: product.price
                                    }))
                                    toast.success('Item is added to card', {
                                        position: "bottom-left",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    })
                                }

                                }>add to card</button>


                                <button className="  font-semibold text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 capitalize rounded">buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div>
                <h1>releted items</h1>
            </div> */}

        </div>
    )
}
export default Products

//..............................................

export async function getServerSideProps(context) {
    let product = await Product.findOne({ slug: context.query.slug })
    return {
        props: { product: JSON.parse(JSON.stringify(product)) }
    }
}
