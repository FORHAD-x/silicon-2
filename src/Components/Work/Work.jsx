import { BiRightArrowAlt } from "react-icons/bi"
import { MdOutlineCheckCircle } from "react-icons/md"
import "./work.css"

const Work = () => {
  return (
    <>
      <section className="Work">
        <div className="container flex justify-between ">
          <img src="public/work.png" alt="" />
          <div className="manage_work w-[416px]">
            <h2>Manage Your Work</h2>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Powerful project management</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Transparent work management</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Manage work & focus on the most important tasks</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Track your progress with interactive charts</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Easiest way to track time spent on tasks</p>
                <button>Learn more <BiRightArrowAlt size={20}/></button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Work
