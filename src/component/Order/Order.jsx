import React, { useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { useLoaderData } from 'react-router-dom';
import SinelOrder from '../SingelOrder/SinelOrder';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIdCard } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const data = useLoaderData();
    const [delet, setDelet] = useState(data)


    const remobeData = (id) => {
        const remaningData = delet.filter(d => d.id !== id)
        setDelet(remaningData);
        removeFromDb(id)

    }

    const handelClearCart = () => {
        setDelet([])
        deleteShoppingCart()
    }
    return (
        <div className='max-w-[1240px]  mx-auto'>
            <div className='grid md:grid-cols-[1fr,1fr] md:p-20 p-5 gap-10 '>

                <div className='p-5'>
                    {
                        delet.map(d => <SinelOrder
                            key={d.id}
                            data={d}
                            remobeData={remobeData}
                        ></SinelOrder>)
                    }
                </div>

                <div className='bg-orange-200 p-5 rounded-xl'>
                    <OrderCard
                        cart={delet}
                        handelClearCart={handelClearCart}
                    >
                        <Link to='/' className="btn bg-[#FF9900] hover:bg-amber-600 w-full text-white">proced Chakout
                            <FontAwesomeIcon icon={faIdCard} />
                        </Link>
                    </OrderCard>
                </div>

            </div>
        </div>
    );
};

export default Order;