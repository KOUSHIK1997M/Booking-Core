import React from 'react'
import CardHead from './CardHead '
import PCard  from './PCard '


export default function Heding({ item, Pdata}) {
    return (
        <div>
            <div className='justify-start mx-12 my-6'>
                <CardHead key={item[0].hade} head={item[0].hade} pera={item[0].pera} />
            </div>
            <div className='md:flex offer-hade justify-center my-15 mx-12'>
                {Pdata.map((item, index) => (
                    <PCard key={item.image} index={index} hade={item.hade} src={item.image} revies={item.revies} reting={item.reting} price={item.price} />
                ))}
            </div>
        </div>
    )
}
