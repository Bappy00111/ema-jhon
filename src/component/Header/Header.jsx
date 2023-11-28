import React, { useState } from 'react';
import images from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#1C2B35] h-[80px]'>
            <nav className='max-w-[1240px] mx-auto  h-full px-3'>
                <div className='flex justify-between items-center h-full'>

                    <img src={images} alt="" />

                    <ul className='lg:flex hidden text-white space-x-10 cursor-pointer text-lg'>
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                            >shop</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order'
                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                            >Order</NavLink>
                        </li>
                        <li>
                            <NavLink to='/inventory'
                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                            >Inventory</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'
                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                            >Login</NavLink>
                        </li>
                    </ul>

                    {/* responsive navber  */}
                    <div className='md:hidden'>
                        <Link>
                            <Bars3BottomRightIcon onClick={() => setOpen(true)} className="h-6 w-6 text-white" />
                        </Link>
                    </div>

                    {/* mobile nav section  */}
                    {
                        open && (

                            <div className='md:hidden absolute top-0 right-0 w-full z-10 p-4'>
                                <div className=' p-5 bg-slate-600 rounded shadow-2xl'>
                                    {/* drop down close menu button  */}
                                    <div>
                                        <Link>
                                            < XMarkIcon onClick={() => setOpen(false)} className="h-6 w-6 text-white" />
                                        </Link>
                                    </div>


                                    {/* mobile nav section  */}
                                    <ul className=' lg:hidden text-white space-y-4 cursor-pointer mt-5'>
                                        <li>
                                            <NavLink to='/'
                                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                                            >shop</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/order'
                                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                                            >Order</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/inventory'
                                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                                            >Inventory</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/login'
                                                className={({ isActive }) => (isActive ? 'text-orange-500' : 'default:')}
                                            >Login</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>




        </div>
    );
};

export default Header;