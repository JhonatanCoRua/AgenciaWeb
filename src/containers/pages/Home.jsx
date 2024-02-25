import BlogList from "components/Home/BlogList";
import CTA1 from "components/Home/CTA1";
import Features from "components/Home/Features.js";
import Footer from "components/navigations/Footer.js";
import Header from "components/Home/Header";
import Incentives from "components/Home/Incentives.js";
import LogoCloud1 from "components/Home/LogoCloud1.js";
import Navbar from "components/navigations/Navbar.js";
import UseCases from "components/Home/UseCases.js";
import Layouts from "hocs/layouts/Layouts.js";
import {useEffect} from "react"

function Home (){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
            </div>
            <Footer/>
        </layout>
    )
}
export default Home
