import React from 'react'

const GetStarted = () => {
  return (
    <>
    <section>
        <div className="container bg-black">
            <h2 className='text-center pt-[96px] pb-[24px] text-[40px] font-Manrope font-extrabold text-white'>Ready to Get Started? </h2>
            <p className='text-center pb-[40px] text-[18px] font-Manrope font-normal text-[#ffffffb0]'>Organize your tasks with a 14-day free trial</p>
            <div className='flex justify-center items-center'>
                <input type="text" placeholder='Your Email' width={100} className='py-[13px] pl-[16px] outline-none w-[406px] rounded-s-lg'/>
                <button className='bg-[#6366F1] text-black py-[13px] px-[32px] rounded-e-lg '>Get Started</button>
            </div>
            <p className='text-center pt-[16px] pb-[96px] text-[14px] font-normal font-Manrope text-[#ffffffaf]'>No subscriptions. No annual fees. No lock-ins.</p>
        </div>
    </section>
    </>
  )
}

export default GetStarted