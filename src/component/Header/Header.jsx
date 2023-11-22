import React from 'react';
import images from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-[#1C2B35] h-[80px]'>
            <nav className='max-w-[1240px] mx-auto  h-full'>
                <div className='flex justify-between items-center h-full'>

                    <img src={images} alt="" />

                   <ul className='text-white flex space-x-10 cursor-pointer'>
                        <li className='hover:text-orange-400'>Order</li>
                        <li className='hover:text-orange-400'>Order Review</li>
                        <li className='hover:text-orange-400'>Manage Inventory</li>
                        <li className='hover:text-orange-400'>Login</li>
                    </ul>


                </div>
            </nav>
        </div>
    );
};

export default Header;