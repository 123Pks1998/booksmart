import React from 'react'
import Link from 'next/link'
import Product from '@/model/product'
const Literary = ({ products }) => {
    // console.log(products)
    return (
        <div className='my-4'>

            <div className='mt-1 bg-white ml-1 mr-1 '>
                <section className=" text-gray-600 body-font">
                    <div className="container py-2 md:mx-14">
                        <div className="flex flex-wrap ">
                            {Object.keys(products).map((item) => {
                                return <>
                                    <div key={products[item]._id} className="p-2 md:w-1/4 w-full hover:bg-red-300 rounded-md duration-1000">
                                        <Link href={`/slug/${products[item].slug}`}>
                                            <div className="md:h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className=" md:h-56 md:w-full w-full md:hover:scale-95 hover:rounded-md hover:duration-1000" src={products[item].img} alt="blog" />
                                                <div className=" flex justify-between m-2">
                                                    <div className='flex flex-col'>
                                                        <h2 className="tracking-widest underline text-xs uppercase title-font font-bold
                 text-gray-950 mb-1">title</h2>
                                                        <h1 className="title-font  capitalize font-medium text-gray-700 mb-3">{products[item].title}</h1>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h2 className="flex justify-end  tracking-widest text-xs underline uppercase title-font font-bold text-gray-950 mb-1">CATEGORY</h2>
                                                        <h1 className="flex justify-end  title-font  capitalize font-medium text-gray-700 mb-3">{products[item].category}</h1>
                                                    </div>

                                                </div>

                                                <div className=" flex justify-between m-2">
                                                    <div className='flex flex-col'>
                                                        <h2 className="tracking-widest text-xs underline uppercase title-font font-bold
                 text-gray-950 mb-1">author</h2>
                                                        <h1 className="title-font  capitalize font-medium text-gray-700 mb-3">{products[item].author}</h1>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h2 className="flex justify-end  tracking-widest text-xs underline uppercase title-font font-bold text-gray-950 mb-1">price</h2>
                                                        <h1 className="flex justify-end  title-font capitalize font-medium text-gray-700 mb-3">₹ {products[item].price}</h1>
                                                    </div>

                                                </div>
                                            </div></Link>
                                    </div>
                                </>
                            })}

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default Literary

//...........................................

export async function getServerSideProps() {
    let products = await Product.find({ types: 'literature' })
    return {
        props: { products: JSON.parse(JSON.stringify(products)) }
    }
}