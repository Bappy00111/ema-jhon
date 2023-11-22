import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    // console.log(products);
    return (
        // shop-container  
        <div className='grid grid-cols-[4fr,1fr]'>
            {/* Product-container  */}
            <div className=''>
                <h2>Products here</h2>
            </div>

            {/* card container  */}
            <div className=''>
                <h2>Order Summery</h2>
            </div>
            
        </div>
    );
};

export default Shop;