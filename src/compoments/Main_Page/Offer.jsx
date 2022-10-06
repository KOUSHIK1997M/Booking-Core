import React from 'react'

export default function Offer({ index, src, icon, head, pera }) {
    return (
        <div className='head-text h-4/5 md:w-fit '>
            <div className='offersSection'>
                <img  src={src} alt={`${index}`} />
            </div>
            <div className='text-on-image '>
                <i icon={icon}></i>
                <h1 className='mx-10 my-20 text-3xl'>{head}</h1>
                <p className='mx-10 my-10 text-xl'>{pera}</p>
            </div>
        </div>
    )
}
