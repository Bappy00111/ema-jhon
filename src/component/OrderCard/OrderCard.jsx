import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OrderCard = ({ cart }) => {
    
    // total price 
    let totalPrice = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price
        
    }

    // total siping 
    let  totalShiping = 0;
    for(const shiping of cart){
        totalShiping = totalShiping + shiping.shipping
        // console.log(totalShiping);
    }

    // Tax total 

    const tax = (totalPrice * 7 / 100).toFixed(2);
    // console.log(tax.toFixed(2));

    // grand  total 

    const grandTotal = parseInt(totalPrice )+ parseInt(totalShiping) + parseInt(tax);





    return (
        <div className='sticky top-0'>
            <h2 className='text-center text-2xl mb-5 font-bold'>Order Summery</h2>
            <div className='space-y-5'>
                <p>Seleted Porduct : {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge:${totalShiping}</p>
                <p>Tax: ${tax}</p>
                <p className='text-2xl'>Grand Total:${grandTotal.toFixed(2)}</p>
            </div>
            <div className='md:mt-20'>
            <button className="btn bg-[#FF3030] w-full mb-3 text-white">Clear Cart
            <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="btn bg-[#FF9900] w-full text-white">Review Order           
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </div>
        </div>
    );
};

export default OrderCard;