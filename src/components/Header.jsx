import React from 'react'
import Button from './Button';
import imgMockup from '../assets/image-mockups.png';

const Header = () => {
  return (
    <header className='bg-veryLightGray header-wrapper sm:flex relative'>
        <div className="text-wrapper pt-[400px] text-center pb-[80px] sm:text-left sm:py-[150px]">
            <h1 className='text-5xl leading-[55px]'>Next generation <br />digital banking</h1>
            <p className='my-8 text-grayishBlue hidden sm:flex'>Take your financial life online. Your Easybank <br /> account will be one-stop-shop for spending,saving, <br /> budgeting, investing, and much more.</p>
            <p className='my-8 text-grayishBlue sm:hidden'>Take your financial life online. Your Easybank <br /> account will be one-stop-shop for spending, br
            saving, budgeting, investing, and much more.</p>
            <Button/>
        </div>
        <div className="img-wrapper">
            <img src={imgMockup} alt="image1" className='absolute -top-[150px] -right-0 sm:-top-[120px] sm:-right-[100px]'/>
        </div>
    </header>
  )
}

export default Header;