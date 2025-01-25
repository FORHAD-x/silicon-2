import { AiOutlineStar } from "react-icons/ai"; 
import { Link } from "react-router-dom"
import "./OneTool.css"
const OneTool = () => {
  return (
    <>
    <section className="OneTool pt-[96px] pb-[112px]">
      <div className="container">
        <h2 className="text-center text-[40px] font-Manrope font-extrabold text-[#131022]">One Tool — Endless Use Cases</h2>
        <div className="pb-[40px] flex gap-4 items-center justify-center">
            <button> <AiOutlineStar />Project Management</button>
            <button> <AiOutlineStar />Remote Work</button>
            <button> <AiOutlineStar />Product Release</button>
            <button> <AiOutlineStar />Campaign Planning</button>
        </div>

        <div className="project_manage">
          <div className="project_manage-left">
            <h2>Project management</h2>
            <p>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
          </div>

          <div className="project_manage-right">
            <img src="public/dashboard.png" alt="" />
          </div>
        </div>
    
      </div>
    </section>
      
    </>
  )
}

export default OneTool
