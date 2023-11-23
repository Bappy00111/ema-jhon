import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import OrderCard from '../OrderCard/OrderCard';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    const handelAddToCart = (props) =>{
        const newCart = [...cart,props]
        setCart(newCart)
    }
    // console.log(products);
    return (
        // shop-container  
        <div className='grid md:grid-cols-[4fr,1fr]  gap-5 px-2 mb-5 '>
            {/* Product-container  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:pl-36 lg:pr-[80px] mt-10'>
                {
                    products.map(product => <Card
                    {...product}
                    key={product.id}
                    handelAddToCart={handelAddToCart}
                    ></Card>)
                }
            </div>

            {/* card container  */}
            <div className='bg-[#FFE0B3] p-5 '>
                <OrderCard cart={cart}></OrderCard>
            </div>
            
        </div>
    );
};

export default Shop;