import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    return (
        <div className=' md:mx-auto md:ml-auto w-full md:h-32 h-32 flex flex-row md:overflow-x-hidden overflow-x-scroll  overflow-y-hidden wrapper border-solid border-gray-500-500 border-2 md:justify-between bg-white'>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href='/product/history' className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20md:w-16 hover:scale-110 hover:duration-700  h-20 rounded-xl' src='https://img.freepik.com/premium-vector/collection-set-old-parchment-paper-scroll-sheet-vintage-aged-texture-isolated_34266-1552.jpg?size=626&ext=jpg&ga=GA1.2.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>history</p>

                </Link>
            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href='/product/science' className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/free-vector/science-lab-objects_23-2148488312.jpg?size=626&ext=jpg&ga=GA1.1.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14  capitalize text-center'>science</p>

                </Link>
            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/literary'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/free-vector/hand-hold-stack-books-isolated-white-hand-drawn-sketch-vector-illustration_460848-15121.jpg?size=626&ext=jpg&ga=GA1.2.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>literary</p>

                </Link>
            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20  justify-center'>
                <Link href={'/product/polytical'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://th.bing.com/th/id/OIP.sBUGPlOUy_bfe6JTmkj5eQHaHa?w=193&h=192&c=7&r=0&o=5&dpr=1.6&pid=1.7' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>polytical</p>
                </Link>

            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/biography'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/premium-vector/feather-pen-inkwell-open-book-isolated-white-ink-pot-with-retro-style-writing-tool-realistic-design-textbook-inkstand_91248-764.jpg?size=626&ext=jpg&ga=GA1.1.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>biography</p>
                </Link>

            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/religious'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/free-vector/open-book-with-mystic-bright-light_1284-12772.jpg?size=626&ext=jpg&ga=GA1.2.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>religious</p>
                </Link>

            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/comics'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/free-vector/comic-burst-text-balloons-flat-icon-collection_74855-5779.jpg?size=626&ext=jpg&ga=GA1.1.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>comics</p>

                </Link>
            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/language'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://th.bing.com/th/id/OIP.6Sg_5w69DmODVT7DBEJoAwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.6&pid=1.7' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>language</p>

                </Link>
            </div>

            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/product/geology'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 hover:scale-110 hover:duration-700 rounded-xl' src='https://img.freepik.com/free-vector/globe-earth-planet-books-isolated-white-background-back-school-day-knowledge-school-supplies-teachers-day-symbol-school-university-education-concept_575670-163.jpg?size=626&ext=jpg&ga=GA1.1.915998643.1683240180&semt=robertav1_2_sidr' alt='pic' />
                    <p className='font-serif md:w-14 w-14 capitalize text-center'>geology</p>
                </Link>

            </div>
            {/* 
            <div className='item md:my-2 my-2 md:mx-7 md:m-5 m-4 md:w-16 w-14 md:h-20 h-20 justify-center'>
                <Link href={'/'} className=" rounded-md  ">
                    <img className='md:w-16 w-14 md:h-20 h-20 rounded-xl' src='https://m.media-amazon.com/images/I/51hzu5v1EVS._AC_UL480_FMwebp_QL65_.jpg' alt='pic' />
 <p className='font-serif md:w-14 w-14 capitalize text-center'>hoodies</p>
 
                </Link>
                          </div> */}
        </div>



    )
}

export default Header
