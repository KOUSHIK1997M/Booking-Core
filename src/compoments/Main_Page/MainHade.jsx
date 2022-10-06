import React from 'react'
import {  HiClock } from "react-icons/hi";
import { BiWalk } from "react-icons/bi";

export default function MainHade() {
    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start'>
                    <h1 className='py-3 text-4xl md:text-5xl font-bold'>Book with Booking Core</h1>
                    <p className="text-2xl">Where would you like to go?</p>
                        <form className=' bg-white border-gray-400 broder my-7 shadow-md rounded justify-center md:mt-6 md:my-3 py-5'>
                            <div className="flex md:mx-1px">
                                <HiClock className='flex-none w-7 h-7 mx-1 my-2' />
                                <select
                                    id="favColor"
                                    // value={formData.favColor}
                                    // onChange={handleChange}
                                    name="favColor"
                                    className='flex-initial  w-30 h-7 s-box'
                                >
                                    <option value="red">Select your package</option>
                                    <option value="red">One Day package</option>
                                    <option value="orange">Two Day package</option>
                                    <option value="yellow">Three Day package</option>
                                </select>
                                <BiWalk className='flex-none w-7 h-7 mx-1' />
                                <input
                                    // value={lastName}
                                    // onChange={e => setLastName(e.target.value)}
                                    placeholder="Adult"
                                    type="text"
                                    name="adult"
                                    required
                                    className='flex-initial w-16 h-7 s-box'
                                />
                                <BiWalk className='flex-none w-7 h-7 mx-1' />
                                <input
                                    // value={lastName}
                                    // onChange={e => setLastName(e.target.value)}
                                    placeholder="Childe"
                                    type="Number"
                                    name="childe"
                                    required
                                    className='flex-initial w-16 h-7 s-box'
                                />
                            </div>
                            <div className=''>
                                <button className='px-8 py-2 depth-4 depth-3 '>SEARCH</button>
                            </div>
                        </form>
                </div>
                <div className='hidden md:flex md:grid-cols-4 max-w-[1240px] m-auto '>
                    <img src="https://sandbox.bookingcore.org/landing/img/header_img.png" alt="Booking Core" />
                </div>
            </div>
        </div >
    )
}
// onSubmit={handleSubmit}