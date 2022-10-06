import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineMenu, HiOutlineChevronDoubleRight, HiX } from "react-icons/hi";
// import {Link } from 'reactstrap'
import '../../index'
import Login from './Login'
import Signup from './SignUp'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [closeOpen, SetcloseOpen] = useState(false)

    const handleClick = () => setNav(!nav)
    const cancelButtonRef = useRef(null)

    const setLoginModalIsOpenToTrue = () => {
        setLoginOpen(true)
    }

    const setLoginModalIsOpenToFalse = () => {
        setLoginOpen(false)
    }
    const setSignModalIsOpenToTrue = () => {
        SetcloseOpen(true)
    }

    const setSignModalIsOpenToFalse = () => {
        SetcloseOpen(false)
    }

    return (
        <>
            <div className='fixed w-screen h-[80px] z-10 bg-blue-200 shadow-md  drop-shsdlow-lg nav-depth'>
                <div className='px-2 flex justify-between items-center u-full h-full'>
                    <div className='flex items-center'>
                        <a href="/" class="bravo-logo">
                            <img src="https://sandbox.bookingcore.org/uploads/demo/general/logo.svg" alt="Booking Core" />
                        </a>
                        <ul className='hidden md:flex'>
                            <li className=" depth-1"><a target="" href="/">Home</a></li>
                            <li className=" depth-1"><a target="" href="/">About</a></li>
                            <li className=" depth-1"><a target="" href="/">Support</a></li>
                            <li className=" depth-1"><a target="" href="/">Platforms </a></li>
                            <li className=" depth-1"><a target="" href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex pr-4'>
                        <button className='border-none bg-transparent text-black mr-4 depth-3' onClick={setLoginModalIsOpenToTrue}>Sign In</button>
                        <button className='px-8 py-3 depth-3' onClick={setSignModalIsOpenToTrue}>Sign Up</button>
                    </div>
                    <div className='md:hidden' onClick={handleClick}>
                        {!nav ? <HiOutlineMenu className='text-4xl' /> : <HiX className='text-4xl' />}
                    </div>
                </div>
                <div className={!nav ? 'hidden' : 'bravo-menu-mobile bravo-menu-mobiles'} >
                    <div class="">
                        <div className="b-close">
                            <HiOutlineChevronDoubleRight className='text-2xl menu-icon' onClick={handleClick} />
                        </div>
                        <div className="avatar depth-2"></div>
                        <div className=' pr-3 my-menu depth-2'>
                            <button className='border-none bg-transparent text-black mr-5 depth-3' onClick={setLoginModalIsOpenToTrue} >Sign In</button>
                            <button className='px-3 py-1 depth-3' onClick={setSignModalIsOpenToTrue}>Sign Up</button>
                        </div>
                    </div>
                    <ul className="my-menu">
                        <li className=" depth-1"><a target="" href="/">Home</a></li>
                        <li className=" depth-1"><a target="" href="/">About</a></li>
                        <li className=" depth-1"><a target="" href="/">Support</a></li>
                        <li className=" depth-1"><a target="" href="/">Platforms</a></li>
                        <li className=" depth-1"><a target="" href="/">Contact</a></li>
                    </ul>
                </div>
                <Transition.Root show={loginOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        static
                        className="fixed z-10 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        open={loginOpen}
                        onClose={setLoginOpen}
                    >
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <HiX className="h-6 w-6 text-red-600" aria-hidden="true"  onClick={setLoginModalIsOpenToFalse}/>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                    Login Page
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                <Login/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <Transition.Root show={closeOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        static
                        className="fixed z-10 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        open={closeOpen}
                        onClose={SetcloseOpen}
                    >
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <HiX className="h-6 w-6 text-red-600" aria-hidden="true"  onClick={setSignModalIsOpenToFalse }/>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                    <h1 className='text-2xl text-black'>Sign Up</h1>
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                <Signup/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div >
        </>
    )
}
