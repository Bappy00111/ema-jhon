import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid'

const SinelOrder = ({ data }) => {
    console.log(data);
    const { img, name, price, shipping } = data;
    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex gap-2'>
                <img className='w-[90px] rounded' src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>price:<span className='text-orange-400'> ${price}</span></p>
                    <p>shipingCarg: <span className='text-orange-400'>${shipping}</span></p>
                </div>
            </div>

            <Link className='bg-red-200 rounded-full p-2'>
                <TrashIcon className="h-6 w-6 text-red-400" />
            </Link>
        </div>
    );
};

export default SinelOrder;