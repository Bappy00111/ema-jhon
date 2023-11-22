import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

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
        <div className='grid md:grid-cols-[4fr,1fr] mt-10 gap-5 px-2 mb-5'>
            {/* Product-container  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:pl-36 lg:pr-[80px]'>
                {
                    products.map(product => <Card
                    {...product}
                    key={product.id}
                    ></Card>)
                }
            </div>

            {/* card container  */}
            <div className=''>
                <h2>Order Summery</h2>
            </div>
            
        </div>
    );
};

export default Shop;