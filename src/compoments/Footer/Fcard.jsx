import React from 'react'

export default function Fcard({ hade, hade1, link1, hade2, link2, hade3, link3 }) {
    return (
        <div>
            <div className='ml-20 mt-10'>
                <h1 className='text-xl bold text-black'>{hade}</h1>
                <div className='fooleft mt-6'>
                    <div className='text-ms bold text-black'><a href={link1}>{hade1}</a></div>
                </div>
                <div className='fooleft mt-6'>
                    <div className='text-ms bold text-black'><a href={link2}>{hade2}</a></div>
                </div>
                <div className='fooleft mt-6'>
                    <label className='text-ms bold text-black'><a href={link3}>{hade3}</a></label>
                </div>
            </div>
        </div>
    )
}
