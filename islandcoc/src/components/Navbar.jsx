import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Scroll event listener to toggle navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true); // User scrolled past 50px
            } else {
                setScroll(false); // Reset background when scrolled back up
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 flex pl-[5%] pr-[5%] py-4 px-0 text-white items-center justify-between z-10 transition-all duration-300 ${
                scroll ? 'bg-[#03045e]' : 'bg-transparent'
            }`}
        >
            <div className='mr-8'>
                <img src={logo} alt='Logo' className='w-[80px] rounded-full' />
            </div>
            <div className='md:text-white md:min-h-fit md:flex md:items-center gap-8 hidden'>
                <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
                    <li className='mx-4 cursor-pointer hover:text-[#4361ee] hover:bg-white hover:px-4 hover:py-1 hover:rounded-md duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'>
                      <Link to='/'>Home</Link>
                    </li>
                    <li className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition hover:bg-white hover:px-4 hover:py-1 hover:rounded-md'>
                    <Link to='/about'>About</Link>
                    </li>
                    <li className='mx-4 cursor-pointer hover:text-cyan-500 duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition hover:bg-white hover:px-4 hover:py-1 hover:rounded-md'>
                    <Link to='/evangelism'>Evangelism</Link>
                    </li>
                    <li className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition hover:bg-white hover:px-4 hover:py-1 hover:rounded-md'>
                    <Link to='/edification'>Edification</Link>
                    </li>
                    <li className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition hover:bg-white hover:px-4 hover:py-1 hover:rounded-md'>
                    <Link to='/leaders'>Leaders</Link>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6' onClick={onToggleMenu}>
                <button className='btn hover:bg-[#03045e] hover:text-[#fff]'>
                <Link to='/contact'>Contact</Link>
                </button>
                {menuOpen ? (
                    <ion-icon class='text-3xl cursor-pointer md:hidden' name='close'></ion-icon>
                ) : (
                    <ion-icon class='text-3xl cursor-pointer md:hidden' name='menu'></ion-icon>
                )}
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    menuOpen ? 'top-[100%]' : 'hidden'
                } py-5 absolute min-h-[60vh] left-0 bg-white md:w-auto w-full text-black md:text-white md:min-h-fit md:items-center gap-8`}
            >
                <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
                    <li
                        onClick={closeMenu}
                        className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'
                    >
                        <Link to='/'>Home</Link>
                    </li>
                    <li
                        onClick={closeMenu}
                        className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'
                    >
                        <Link to='/about'>About</Link>
                    </li>
                    <li
                        onClick={closeMenu}
                        className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'
                    >
                        <Link to='/evangelism'>Evangelism</Link>
                    </li>
                    <li
                        onClick={closeMenu}
                        className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'
                    >
                        <Link to='/edification'>Edification</Link>
                    </li>
                    <li
                        onClick={closeMenu}
                        className='mx-4 cursor-pointer hover:text-[#4361ee] duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg transition'
                    >
                        <Link to='/leaders'>Leaders</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
