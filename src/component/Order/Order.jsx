import React, { useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { useLoaderData } from 'react-router-dom';
import SinelOrder from '../SingelOrder/SinelOrder';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const data = useLoaderData();
    const [delet,setDelet] = useState(data)


    const remobeData = (id) =>{
        const remaningData = delet.filter(d => d.id !== id)
        setDelet(remaningData);
        removeFromDb(id)

    }
    return (
        <div className='max-w-[1240px]  mx-auto'>
            <div className='grid md:grid-cols-[1fr,1fr] md:p-20 p-5 gap-10 '>

           <div className='p-5'>
                {
                    delet.map(d => <SinelOrder 
                    key = {d.id}
                    data  = {d}
                    remobeData={remobeData}
                    ></SinelOrder> )
                }
           </div>

                <div className='bg-orange-200 p-5 rounded-xl'>
                    <OrderCard cart={delet}></OrderCard>
                </div>

            </div>
        </div>
    );
};

export default Order;