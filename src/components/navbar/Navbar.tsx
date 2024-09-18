import { useState } from 'react';
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";





const Navbar = () => {
    const [mobileNavMenu, setMobileNavMenu] = useState(false)

    const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false)

    const closeNavMenu = () => {
        setMobileNavMenu(false)
    }

    return (
        <>
            <nav className="flex h-10 justify-between text-xs relative">
                <h1 className="logo text-2xl font-medium flex  items-center  gap-1 cursor-pointer tracking-wide">

                    <GiHamburgerMenu className='md:hidden' onClick={() => setMobileNavMenu((prev) => !prev)} />
                    Shop

                </h1>

                <div className='hidden text-xs md:flex'>
                    <ul className='flex gap-2 text-black items-center'>
                        <li className='p-1 hover:-translate-y-0.5 rounded-md cursor-pointer'>Home</li>
                        <li className='p-1  rounded-mdcursor-pointer relative' onMouseOver={() => setDropdownVisibility(true)} onMouseOut={() => setDropdownVisibility(false)}>
                            <div className=' flex items-center gap-1 '>
                                Shop <FaChevronDown className='animate-pulse' />
                            </div>
                            {dropdownVisibility ?
                                <div className='bg-slate-50 absolute top-6 border border-black w-20'>
                                    <ul className='text-center bg-slate-50'>
                                        <li className='cursor-pointer'>Men</li>
                                        <li className='cursor-pointer'>Women</li>
                                        <li className='cursor-pointer'>Unisex</li>
                                    </ul>
                                </div>
                                : null}
                        </li>
                        <li className='p-1 hover:-translate-y-0.5 rounded-md cursor-pointer'>Our Story</li>
                        <li className='p-1 hover:-translate-y-0.5 rounded-md cursor-pointer'>About</li>
                        <li className='p-1 hover:-translate-y-0.5 rounded-md cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex items-center gap-2 text-md'>
                    <CiSearch className='cursor-pointer  hover:text-secondary-400' /><CiHeart className='cursor-pointer  hover:text-red-500' />
                    <CiShoppingCart className='cursor-pointer  hover:text-blue-700' />
                    <div className='hidden md:block'>
                        <button className='ml-2 py-2 px-5 text-xs rounded-md bg-black text-white hover:bg-gray-700'> Login </button>
                    </div>
                </div>
            </nav>

            {
                mobileNavMenu ? <MobileNavMenu closeNavMenu={closeNavMenu} /> : null
            }
        </>
    )
}

export default Navbar

import { IoCloseSharp } from "react-icons/io5";


const MobileNavMenu = ({ closeNavMenu }: { closeNavMenu: () => void }
) => {
    return (
        <div className='w-[100%] md:hidden   z-10 bg-white'>
            <div className='flex justify-end   text-end'>
                <IoCloseSharp className='text-end rounded-md ' onClick={closeNavMenu} />

            </div>
            <div className='text-xs mb-2 h-[calc(100vh - )]'>
                <ul className='flex flex-col gap-2 text-black items-center text-center '>
                    <li className='p-1 w-full rounded-md cursor-pointer'>Home</li>
                    <li className='p-1 w-full rounded-md  cursor-pointer'   >
                        Shop
                    </li>
                    <li className='p-1 w-full rounded-md cursor-pointer'>Our Story</li>
                    <li className='p-1 w-full rounded-md cursor-pointer'>About</li>
                    <li className='p-1 w-full rounded-md cursor-pointer'>Contact Us</li>
                </ul>
            </div>


            <div className='text-center mb-2'>
                <button className='py-2 px-5 text-xs w-28 rounded-md bg-black text-white hover:bg-gray-700'> Login </button>
            </div>
        </div>
    )
}