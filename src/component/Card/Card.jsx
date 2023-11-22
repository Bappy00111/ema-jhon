import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    console.log(props);
    const { img, name, seller, ratingsCount, price, handelAddToCart } = props

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='p-2 rounded-2xl' src={img} alt="Shoes" /></figure>
            <div className="card-body space-y-10">
                <div>
                    <h2 className="card-title mb-2 font-sans">{name}</h2>
                    <h3 className='text-xl'>Price:${price}</h3>
                </div>
                <div className="">
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratingsCount}</p>
                </div>
            </div>
            <button onClick={() => handelAddToCart(props)} className="btn bg-[#FFE0B3] hover:bg-orange-400 ">
                Add to Cart
                <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </button>

        </div>
    );
};

export default Card;