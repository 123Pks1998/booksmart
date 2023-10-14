import React from 'react'
import Link from 'next/link'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdAccountBox } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { cartItems } = useSelector((state => state.cart))

    return (
        <div>
            <header className="bg-slate-700 text-gray-600 body-font">
                <div className="container  flex md:justify-start justify-start  p-1 flex-col md:flex-row items-center">
                    <Link href={'/'} className=' mr-auto md:mx-2 font-bold text-2xl text-white hover:text-red-300 hover:duration-700 hover:scale-90' >BOOKSMART</Link>
                    <span className='font-mono text-yellow-400 hover:text-red-300'>pustkalay</span>

                    <div className="md:ml-auto md:py-1 md:mr-auto flex flex-wrap items-center text-base ">
                        <input
                            type="search"
                            className="md:w-64 w-auto peer block min-h-[auto]  rounded border-0
                             bg-white px-2 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                            id="exampleSearch2"
                            placeholder="Search for Items" />
                    </div>


                    <div className="cart text-white absolute right-0 top-2 md:mx-5 cursor-pointer flex">
                        <Link href={'/auth/login'} className='font-semibold text-2xl mr-4 md:text-3xl'><MdAccountBox /></Link>

                        <Link href={'/product/cart'} className='font-semibold text-2xl mr-1 md:text-3xl'><HiOutlineShoppingCart />

                            {cartItems.length > 0 && (<p className='md:-mt-9 -mt-7 md:ml-5 ml-4 text-center text-red-500 bg-white rounded-xl  md:h-5 md:w-5 h-5 w-5 text-sm'>{cartItems.length}</p>)}

                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar