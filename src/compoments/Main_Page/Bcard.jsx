import React from 'react'

export default function Bcard({ hade, link, index, src, revies, reting, price }) {
  return (
    <div className=''>
      <div className=' bg-white border-black broder shadow-md rounded  my-3 mx-3'>
        <div className=' border-black broder rounded my-3 mx-3'>
          <img className=' tranSection ' src={src} alt={`${index}`} />
        </div>
        <div className='mx-10'>
          <div className='text-2xl'>{hade}</div>
          <div className='flex'>
            <div className='py-3 my-3'>
              <div className='text-xl text-blue-500'>{reting}/Excellent - {revies} Reviews</div>
              <div className='text-xl'>{price}</div>
            </div>
            <div className='my-10 mx-5'>
              <button className='px-5 py-2 depth-3'><a href={link}>Read</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
