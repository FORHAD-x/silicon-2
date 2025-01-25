import Banner from "../Components/Banner/Banner"
import Connected from "../Components/Connected/Connected"
import Footer from "../Components/Footer/Footer"
import GetStarted from "../Components/Get_started/GetStarted"
import NavBar from "../Components/NavBar/NavBar"
import OneTool from "../Components/OneTool/OneTool"
import Testimonial from "../Components/testimonial/Testimonial"
import Transparent from "../Components/Transparent/Transparent"
import Work from "../Components/Work/work"
import WorkTool from "../Components/workTool/workTool"

const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden">
    <NavBar/>
    <Banner/> 
    <Connected/>
    <Work/>
    <OneTool/>
    <Transparent/>
    <Testimonial/>
    <WorkTool/>
    <GetStarted/>
    <Footer/>

    </div>
    </>
  )
}

export default Home
