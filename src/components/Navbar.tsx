import React from 'react';
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
  const [isManuOpen, setIsMenuOpen] =useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isManuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Nuzhat Bano</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
          <div className='md:hidden' onClick={toggleMenu}>
             {isManuOpen ? <IoIosClose size={30} /> :
             <IoIosMenu size={30} />
             }
        </div>    
        </div>

        {isManuOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden">
            <li className='menuLink'>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
    </div>
  )
}

export default Navbar
