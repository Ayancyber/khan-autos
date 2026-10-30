import React from 'react'
import logo from "../assets/logo.png"
import { ChevronDown } from 'lucide-react';
const Navbar = () => {
    return (
        <nav className='bg-transparent h-[89px] z-900 backdrop-blur-sm fixed top-0 left-0 right-0  max-sm:px-2 lg:py-4 lg:px-8 shadow-xl flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="brand-logo" className=' w-20' />
                <span className='text-xl text-white text-bold font-serif'>Khan<span className='text-[14px] italic'> Autos</span></span>
            </div>
            <ul className='flex items-center gap-8 max-sm:hidden'>
                <li className='hover:border-b hover:border-white border-transparent'><a href="#">Home</a></li>
                <li className='hover:border-b hover:border-white border-transparent'><a href="#whyUs">WhyUs?</a></li>
                <li className='hover:border-b hover:border-white border-transparent'><a href="https://wa.me/923134307889" target="_blank">Contact</a></li>
            </ul>
            <a href="#buy">
                <div className='w-fit h-fit border border-white max-sm:py-1 max-sm:px-2 py-2 px-4 flex items-center justify-between gap-3 rounded-[4px]'>
                    <ChevronDown />
                    <span>Shop</span>
                </div>
            </a>
        </nav>
    )
}

export default Navbar
