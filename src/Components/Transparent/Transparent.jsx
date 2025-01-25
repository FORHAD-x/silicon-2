import { AiOutlineStar } from "react-icons/ai"; 
import { RxCross2 } from "react-icons/rx"; 
import { BsCheck2 } from "react-icons/bs"; 
import { MdCheckCircle, MdOutlineCheckCircle } from "react-icons/md"
import "./Transparent.css"
const Transparent = () => {
  return (
    <>
      <section className="Transparent pb-[112px]">
        <div className="container">
          <h2 className="text-center  text-[40px] font-Manrope font-extrabold text-[#131022]">Transparent Pricing for You</h2>
          <div className="flex py-[40px] justify-center gap-4">
            <p className="text-[16px] font-Manrope font-semibold text-[#3E4265]">Bill Monthly</p>
            <img src="public/mode.png" alt="" />
            <p className="text-[#6366F1] text-[16px] font-Manrope font-semibold">Bill Annualy</p>
          </div>
        <div className="trial_main flex justify-center gap-6">

          
          {/* trial -1 */}
          <div className="trial">
              <div className="icon">
                <img src="public/icon.png" alt="" />
              </div>

              <div className="basic">
                <p>Basic</p>
                <h3>$5</h3>
              </div>
              <div className="trial_des">
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Aenean neque tortor, purus faucibus</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Nullam augue vitae et volutpat sagittis augue</p>
                  <p><RxCross2 size={20} className="text-[#6366F1]"/> Mauris massa penatibus enim elit quam</p>
                  <p><RxCross2 size={20} className="text-[#6366F1]"/> Nec ac sagittis nunc bibendum</p>
                  <p><RxCross2 size={20} className="text-[#6366F1]"/> Odio ut orci volutpat ultricies eleifend</p>
              </div>
              <div className="Start_free flex">
                <button className="button">Start Free Trial</button>
              </div>
          </div>
          {/* trial -2 */} 
          <div className="trial relative">
            <div className="flex items-center absolute top-4 left-0 gap-1 text-white text-[14px] font-Manrope font-semibold w-[88px]  rounded-e-md bg-[#22C55E] py-1 px-2"><AiOutlineStar />Popular</div>
              <div className="icon">
                <img src="public/icon2.png" alt="" />
              </div>

              <div className="basic">
                <p>Basic</p>
                <h3>$10</h3>
              </div>
              <div className="trial_des">
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Aenean neque tortor, purus faucibus</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Nullam augue vitae et volutpat sagittis augue</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Mauris massa penatibus enim elit quam</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Nec ac sagittis nunc bibendum</p>
                  <p><RxCross2 size={20} className="text-[#6366F1]"/> Odio ut orci volutpat ultricies eleifend</p>
              </div>
              <div className="Start_free flex">
                <button className="button">Start Free Trial</button>
              </div>
          </div>
          {/* trial -3 */}
            <div className="trial">
              <div className="icon">
                <img src="public/icon3.png" alt="" />
              </div>

              <div className="basic">
                <p>Basic</p>
                <h3>$15</h3>
              </div>
              <div className="trial_des">
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Aenean neque tortor, purus faucibus</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Nullam augue vitae et volutpat sagittis augue</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Mauris massa penatibus enim elit quam</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Nec ac sagittis nunc bibendum</p>
                  <p><BsCheck2 size={20} className="text-[#6366F1]"/> Odio ut orci volutpat ultricies eleifend</p>
              </div>
              <div className="Start_free flex">
                <button className="button">Start Free Trial</button>
              </div>
          </div>
        </div>

        </div>

      </section>
    </>
  )
}

export default Transparent
