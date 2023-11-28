import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { useLoaderData } from 'react-router-dom';
import SinelOrder from '../SingelOrder/SinelOrder';

const Order = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className='max-w-[1240px]  mx-auto'>
            <div className='grid md:grid-cols-[1fr,1fr] md:p-20 p-5 gap-10'>

           <div className='p-5'>
                {
                    data.map(d => <SinelOrder 
                    key = {d.id}
                    data  = {d}
                    ></SinelOrder> )
                }
           </div>

                <div className='bg-orange-200 p-5 rounded-xl'>
                    <OrderCard cart={[]}></OrderCard>
                </div>

            </div>
        </div>
    );
};

export default Order;