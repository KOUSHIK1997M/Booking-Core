import React from 'react'

export default function CardHead({ head, pera }) {
    return (
        <div className=''>
            <h1 className='text-3xl'>{head}</h1>
            <p className='text-xl'>{pera}</p>
        </div>
    )
}
