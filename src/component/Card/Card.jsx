import React from 'react';

const Card = (props) => {
    console.log(props);
    const { img, name, seller, ratingsCount, price } = props

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body space-y-10">
                <div>
                    <h2 className="card-title mb-2">{name}</h2>
                    <h3 className='text-xl'>Price:${price}</h3>
                </div>
                <div className="">
                    <p>Manufacturer:{seller}</p>
                    <p>Rating:{ratingsCount}</p>
                </div>
            </div>
            <button className="btn bg-[#FFE0B3] hover:bg-orange-400 ">Add to Cart
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

            </span>
            </button>
           
        </div>
    );
};

export default Card;