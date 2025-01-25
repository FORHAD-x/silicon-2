import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <section className='Footer'>
        <div className="container flex justify-between ">
            {/* subscribe */}
            <div className="subscribe">
                <img src="public/logo.png" alt="" />
                <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
                <label>Subscribe to our newsletter</label>
                <div className='flex '>
                    <input type="text" placeholder='Your Email' width={100} className='py-[11px] pl-[16px] outline-none w-[300px] rounded-s-lg border-2'/>
                    <button className='bg-[#6366F1] text-black py-[11px] px-[28px] rounded-e-lg '>Subscribe</button>
                </div>
                <h3>2021. All rights reserved. Silicon Template</h3>
            </div>
            <div className='footer_right flex justify-between gap-[126px] pt-[72px]'>
                {/* menu  */}
                <div className="menu ">
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Integrations</Link></li>
                        <li><Link>Our Clients</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                    <ul className='pt-[40px]'>
                        <li><Link>Terms & Conditions</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                    </ul>
                </div>
                {/* social media */}
                <div className="social-media">
                    <ul>
                        <li><Link href="#">Facebook</Link></li>
                        <li><Link href="#">Linkedin</Link></li>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                    </ul>
                </div>
                {/* contact */}
                <div className="contact">
                    <p className='font-Manrope font-semibold text-[16px] text-[#131022]'>Contact Us</p>
                    <Link className='text-[#6366F1]'>example@gmail.com</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer