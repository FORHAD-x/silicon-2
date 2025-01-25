
const Banner = () => {
  return (
    <section className="banner">
  <div className="container  flex flex-wrap sm:flex-nowrap">
    {/* Left Side */}
    <div className="b-left w-full pl-4 lg:pl-0  pt-[30px] md:pt-[112px]">
      <h1 className="text-[28px] w-[320px] lg:w-[526px] lg:text-[56px] font-extrabold font-Manrope text-[#131022] ">
        Task Management Assistant You Gonna Love
      </h1>
      <p className="text-[16px] w-[320px] lg:w-[526px] md:text-[18px] font-normal font-Manrope text-[#585C7B] pt-[16px] md:pt-[32px]">
        We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.
      </p>
      <button className="flex items-center mt-[24px] md:mt-[48px] gap-[8px] px-[20px] py-[9px] bg-[#6366F1] rounded-[5px] font-Manrope text-white">
        Get started for free
      </button>
      <h3 className="pt-[48px] md:pt-[112px] text-[14px] md:text-[16px] font-extrabold font-Manrope text-[#131022]">
        Largest companies use our tool to work efficiently
      </h3>
      <div className="logos flex flex-wrap gap-4 lg:gap-6 pt-[20px] md:pt-[40px] pb-[40px] md:pb-[209px]">
        <img src="/logo1.png" alt="Company 1" className="w-20 md:w-auto" />
        <img src="/logo2.png" alt="Company 2" className="w-20 md:w-auto" />
        <img src="/logo3.png" alt="Company 3" className="w-20 md:w-auto" />
        <img src="/logo4.png" alt="Company 4" className="w-20 md:w-auto" />
      </div>
    </div>

    {/* Right Side */}
    <div className="b-right ">
      <img src="/image.png" alt="Task Management Illustration" className="w-full" />
    </div>
  </div>
</section>

  //  <section className="banner">
  //   <div className="container flex  ">
  //     <div className="b-left pt-[112px]">
  //       <h1 className="w-[526px] text-[56px] font-extrabold font-Manrope text-[#131022]">Task Management Assistant You Gonna Love</h1>
  //       <p className="w-[526px] text-[18px] font-normal font-Manrope text-[#585C7B] pt-[32px]">We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
  //       <button className="flex items-center mt-[48px]  gap-[8px] px-[20px] py-[9px] bg-[#6366F1] rounded-[5px] font-Manrope text-white"> Ger started for free</button>
  //       <h3 className="w-[526px] pt-[112px] text-[16px] font-extrabold font-Manrope text-[#131022]">Largest companies use our tool to work efficiently</h3>
  //       <div className="logos flex  gap-6 pt-[40px] pb-[209px]">
  //         <img src="public/logo1.png" alt="" />
  //         <img src="public/logo2.png" alt="" />
  //         <img src="public/logo3.png" alt="" />
  //         <img src="public/logo4.png" alt="" />

  //       </div>
  //     </div>
  //     <div className="b-right">
  //       <img src="public/image.png" alt=""/>
  //     </div>
  //   </div>

  //  </section>
  )
}

export default Banner
