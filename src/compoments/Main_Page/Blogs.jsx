import React from 'react'
import CardHead from './CardHead '
import Bcard from './Bcard'

export default function Blogs({ item, Pdata}) {
    return (
        <div>
            <div className='justify-start mx-12 my-6'>
                <CardHead key={item[2].hade} head={item[2].hade} pera={item[2].pera} />
            </div>
            <div className='md:flex offer-hade justify-center my-15 mx-12'>
                {Pdata.map((item, index) => (
                    <Bcard key={item.image} index={index} hade={item.hade} src={item.image} revies={item.revies} reting={item.reting} price={item.price} />
                ))}
            </div>
        </div>
    )
}
