import { FcNext } from "react-icons/fc"; 
import { FcPrevious } from "react-icons/fc"; 
import { ImQuotesLeft } from "react-icons/im"; 
import React from 'react'
import "./Testimonial.css"
import { GrNext, GrPrevious } from "react-icons/gr";
const Testimonial = () => {
  return (
    <>
    <section className="testimonial ">
        <div className="container flex justify-between  ">
            <div className="t_left">
                <h2>420k</h2>
                <p>users are taking advantage of our <span className='text-white'>Task Manager Tool.</span> It’s a new transparent and efficient way to organize all of your daily tasks.</p>

            </div>
            <div className="t_right">
                <div className="flex justify-between">
                    <div className="quotes"><ImQuotesLeft size={25}/></div>
                    <div className="slider-btns">
                        <span className="prev-btn"><GrPrevious /></span>
                        <span className="next-btn"><GrNext /></span>
                    </div>
                </div>
                <p>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                <div className="flex pl-[48px] items-center gap-4">
                    <img src="public/person.png" alt="" />
                   <div > 
                     <span className="text-[#131022] text-[16px] font-Manrope font-bold ">Annette Black</span>
                     <h3 className="text-[#9397AD] text-[14px]  font-Manrope font-normal ">Marketing Specialist at Create-x Studio</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonial