import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import OrderCard from '../OrderCard/OrderCard';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    useEffect(()=>{
        console.log( "products",products);
        const savedCart = [];
        // console.log(savedCart);
    
        // step 1 get the id 
        const storeCart = getShoppingCart()
        for(const id in storeCart){
            // step 2 get product using id 
            const saveProduct = products.find(product => product.id === id);
           //    step 3 get quantity of the product 
           if(saveProduct){
            const quantity = storeCart[id]
            saveProduct.quantity = quantity;
            // step : 4 add the added produt savedCart 
            savedCart.push(saveProduct)
           }          
        }
        // step 5 set the cart useSate 
        setCart(savedCart)
    },[products])


    const handelAddToCart = (props) =>{
        const newCart = [...cart,props]

        // let newCart = [];

        // const exsit = cart.find(p => p.id === props.id)
        // if(!exsit){
        //     props.quantity = 1;
        //     newCart = [...cart,props]
        // }



        // let newCart = [];
        // const exists = cart.find(product => product.id === props.id);
        // if(!exists){
        //     props.quantity = 1;
        //     newCart = [...cart, props];
        // }
        // else{
        //     const rest = cart.filter(product => product.id !== props.id);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }
        


        setCart(newCart)
        addToDb(props.id)
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