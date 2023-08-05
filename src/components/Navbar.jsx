import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    const handleLinkClick = () => {
        setNav(false);
      };
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to="home" smooth={true} duration={500} offset={-80}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} offset={-200}>About</Link></li>
                        <li><Link to="support" smooth={true} duration={500} offset={-80}>Support</Link></li>
                        <li><Link to="platforms" smooth={true} duration={500} offset={-80}>Platforms</Link></li>
                        <li><Link to="pricing" smooth={true} duration={500} offset={-80}>pricing</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden duration-1000' : 'absolute bg-zinc-200 w-full px-8 duration-1000'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="home" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="about" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="support" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>Support</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="platforms" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>Platforms</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="pricing" smooth={true} duration={500} offset={-80} onClick={handleLinkClick}>Pricing</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar