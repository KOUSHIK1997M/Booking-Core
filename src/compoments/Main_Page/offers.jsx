import React from 'react'
import Offer from './Offer'

export default function Offers({offer}) {
  return (
    <div className='md:flex offer-hade justify-center'>
      {offer.map((item, index)=>(
        <Offer key={item.image} index={index} icon={item.icon} src={item.image} head={item.hade} pera={item.pera} />
        ))}
    </div>
  )
}
