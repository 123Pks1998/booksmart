import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const router = Router;

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {

    })

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }

    const collectData = async (e) => {
        e.preventDefault()
        let response = await fetch('http://localhost:3000/api/login',
            {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { "content-Type": "application/json" }
            })
        response = await response.json()
        console.log(response)

        setEmail('')
        setPassword('')

        if (response.success) {
            localStorage.setItem('token', response.token)
            toast.success('you are login', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                router.push('/')
            }, 1000)

        }
        else {
            toast.error(response.error, {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

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
            <section className="text-gray-600 body-font mb-28">
                <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl capitalize text-gray-900">books are the bank of knowledge.</h1>
                        <p className="leading-relaxed capitalize mt-4">If You Want To Talk With those Persons They does not exists.then it's Very Simple,just You Have To Read Them.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-xl font-medium title-font mb-2">Sign in to your account</h2>
                        <div className='flex justify-center'>
                            <p className='mr-4 ml-0'>or</p>
                            <Link href={'/auth/signup'} className='font-bold hover:text-gray-900'> sign up</Link>
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input value={email} onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">password</label>
                            <input value={password} onChange={handleChange} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className='flex justify-end'>

                            <Link href={'/auth/forgetPassword'} className='font-bold mb-4 mt-4 hover:text-gray-900'>Forget password</Link>
                        </div>

                        <div className='flex justify-center'>
                            <button onClick={collectData} className="text-white bg-gray-500 border-0 py-1 pr-2 px-2 w-1/3  focus:outline-none hover:bg-gray-700 rounded text-lg">Button</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login
