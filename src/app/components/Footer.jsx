import React from 'react'
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='footer border z-10 border-t-primary-600 border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between' >
                <span>
                    <Image
                        src='/images/logo-image.png'
                        alt='logo image'
                        width={60}
                        height={60}

                    />
                </span>
                <p className='text-primary-600'>
                    All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;