import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OrderCard = ({ cart }) => {

    // console.log(cart);
    
    // total price  adn shipping carg 
    let totalPrice = 0;
    let  totalShiping = 0;
    let quantity = 0 ;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1
        
        totalPrice = totalPrice + product.price * product.quantity;
        totalShiping = totalShiping + product.shipping;
        quantity = quantity + product.quantity;

    }
     
    

    // Tax total 

    const tax = (totalPrice * 7 / 100).toFixed(2);
    // console.log(tax.toFixed(2));

    // grand  total 

    const grandTotal = parseInt(totalPrice) + parseInt(totalShiping) + parseInt(tax);

    return (
        <div className='sticky top-0'>
            <h2 className='text-center text-2xl mb-5 font-bold'>Order Summery</h2>
            <div className='space-y-5'>
                <p>Seleted Porduct : {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge:${totalShiping}</p>
                <p>Tax: ${tax}</p>
                <p className='text-2xl'>Grand Total:${grandTotal}</p>
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