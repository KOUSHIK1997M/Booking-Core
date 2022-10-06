import React from 'react'
import { HiBriefcase } from "react-icons/hi";
import Fcard from './Fcard';

export default function Footer({ foonav }) {
  return (
    <div className=' md:py-5 md:px-5 footer-depth'>
      <div className=''>
        <div className='md:flex offer-hade justify-center my-15 mx-12'>
          <HiBriefcase className='text-4xl md:my-5 text-blue-500 md:mx-12' />
          <div className=''>
            <h1 className='text-2xl text-blue-800'>Get Updates & More</h1>
            <p className='text-xl text-gray-500'>Thoughtful thoughts to your inbox</p>
          </div>
          <div className='email-box flex-auto hidden md:flex'>
            <input
              // value={lastName}
              // onChange={e => setLastName(e.target.value)}
              placeholder="Enter your email"
              type="email"
              name="email"
              required
              className='fooinput px-35 py-5 s-box'
            />
            <button className='fooinput py-5 px-8 bg-blue-700'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='flex md:flex-initial bg-white'>
          <div className='ml-20 mt-10'>
            <h1 className='text-xl bold text-black'>NEED HELP?</h1>
            <div className='fooleft mt-6'>
              <label className='text-sm text-black'>Call Us</label>
              <p className='text-xl bold text-gray-500'>+91 6296783642</p>
            </div>
            <div className='fooleft mt-6'>
              <label className='text-sm text-black'>Email for Us</label>
              <p className='text-xl bold text-gray-500'>math.koushik1997@gmail.com</p>
            </div>
          </div>
          <div className='ml-20 hidden md:flex'>
            <div className='flex ml-10'>
              {foonav.map((item, index) => (
                <Fcard key={item.image} index={index} hade={item.hade} hade1={item.hade1} link1={item.link1} hade2={item.hade2} link2={item.link2} hade3={item.hade3} link3={item.link3} />
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className='mt-10 '>
        <label className='text-sm bold text-black '>Copyright © 2022 by Koushik Mandal</label>
      </div>
    </div>
  )
}
