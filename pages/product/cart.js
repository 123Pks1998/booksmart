import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { MdOutlineDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '@/store/cartSlice';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Checkout from '../checkout';

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {

    const { cartItems } = useSelector((state => state.cart))
    const dispatch = useDispatch()

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, val) => total + val.price, 0)
    }, [cartItems])


    const updteCartItem = ((e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            _id: cartItems._id
        }
        dispatch(updateCart(payload))
    })

    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);


    return (
        <div>
            <ToastContainer
                position="bottom-left"
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
            <section className="text-gray-600 body-font md:ml-8">
                <div className="flex flex-col text-center my-4  ">
                    <h1 className="text-2xl font-bold uppercase title-font mb-4 text-gray-900 tracking-widest">your cart</h1>
                </div>
                {cartItems.length > 0 && (
                    <div className="container md:flex px-5 py-2 justify-between  md:mx-8 md:mb-12">

                        <div className="flex flex-wrap md:w-3/5  ">
                            {Object.keys(cartItems).map((item, i) => {
                                return (
                                    <div key={i} className="px-2 py-1 md:h-32 mt-4 w-screen rounded-md bg-gray-500">
                                        <div className="h-full  flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                            <img alt="team" className="flex-shrink-0 rounded-lg w-28 h-28  object-center sm:mb-0 mb-4" src={cartItems[item].img} />
                                            <div className="flex-grow mt-2 sm:pl-2">
                                                <div className='flex justify-between'>
                                                    <h2 className="title-font ml-8 text-white font-medium text-lg capitalize ">{cartItems[item].title} </h2>
                                                    <h3 className="flex justify-start mr-8 text-white mb-3 font-medium text-lg capitalize ml-10">{cartItems[item].author}</h3>
                                                </div>

                                                <div className="mb-4 mt-6 flex justify-between">
                                                    <h1 className='text-lg md:ml-8 ml-10 font-medium text-white'>₹ {cartItems[item].price}</h1>
                                                    <div className='font-semibold'>
                                                        <select className='bg-gray-500 text-white  mt-2 ' onChange={(e) =>
                                                            updteCartItem(e, "quantity")
                                                        }>
                                                            {Array.from(
                                                                { length: 10 },
                                                                (_, i) => i + 1).map((q, i) => {
                                                                    return (
                                                                        <option key={i}
                                                                            value={cartItems[item].quantity === q}

                                                                        // selected={}
                                                                        >{q}</option>
                                                                    )
                                                                })}
                                                        </select>
                                                    </div>


                                                    <h1 className='text-lg font-medium text-gray-900 md:mt-0  mt-2 md:mr-8 mr-11 cursor-pointer'>
                                                        <MdOutlineDelete className='text-white text-2xl'
                                                            onClick={() =>
                                                                dispatch(removeFromCart({ _id: cartItems[item]._id },
                                                                    toast.success('Item is removed from card', {
                                                                        position: "bottom-left",
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        draggable: true,
                                                                        progress: undefined,
                                                                        theme: "light",
                                                                    })))}
                                                        />
                                                    </h1>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='md:w-3/6 w-3/4 md:h-56 h-64 rounded-md  md:ml-8 ml-8 md:mt-4 mt-4 bg-gray-500'>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='uppercase ml-2 mt-2 text-xl font-semibold text-white'>subtotal</h1>
                                    <p className='mr-4 mt-2 text-xl text-white'>₹ {subTotal}</p>
                                </div>
                                <div className='ml-2 mt-3'>
                                    <p className='text-white p-1'>The year was 1975. The 17-year-old son of a farmer sold milk outside the National Dairy Research Institute (NDRI) and earned Rs 3.</p>
                                </div>
                            </div>
                            <div className='mt-16 '>

                                <div>
                                    <form action="/api/checkout_sessions" method="POST">
                                        <section>
                                            <button type="submit" role="link">
                                                Checkout
                                            </button>
                                        </section>
                                        <style jsx>
                                            {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 36px;
            border-radius: 6px;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
                                        </style>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>)}

                {cartItems.length < 1 && (
                    <div className='mb-10'>
                        <div className='flex justify-center'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiRBR_19JyGdceNZQ2iizUZcJWO53gWLUrkIlvTDAyTK_FBZcQvLNWfnluWoWEctpUE&usqp=CAU" alt="" className='rounded-md' />

                        </div>

                        <div className='flex justify-center'>
                            <Link href='/' className='mt-4 text-center bg-slate-800 w-40 pb-1 capitalize font-semibold text-white rounded-xl'>continue shopping</Link>
                        </div>

                    </div>
                )}

            </section>

        </div>
    )
}

export default Cart
