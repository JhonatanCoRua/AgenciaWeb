import Header from "components/about/Header";
import Images from "components/about/Images";
import TestStats from "components/about/TestStats";
import Footer from "components/navigations/Footer.js";
import Navbar from "components/navigations/Navbar.js";
import Layouts from "hocs/layouts/Layouts.js";
import {useEffect} from "react"
import { Helmet } from 'react-helmet-async';

function About (){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <layout>
            <Helmet>
                <title>Ingenio Génesis | About</title>
                <meta name="description" content="Agencia de desarrollo de Software y experiencia de usuario. Servicios de desarrollo de aplicaciones, paginas web y experiencias de usuario."/>
                <meta name="keywords" content='agencia de software, agencia de experiencia de usuario, creacion de paginas web'/>
                <meta name="robots" content='all'/>
                <link rel="canonical" href="https://wwww.ingeniogenesis.com/"/>
                <meta name="author" content='Ingenio Génesis'/>
                <meta name="publisher" content='Ingenio Génesis'/>

                {/* Social Media Tags */}

                <meta property="og:title" content='Ingenio Génesis | Software Development Agency'/>
                <meta property="og:description" content='Agencia de desarrollo de Software y experiencia de usuario. Servicios de desarrollo de aplicaciones, paginas web y experiencias de usuario.'/>
                <meta property="og:url" content="https://wwww.ingeniogenesis.com/"/>
                <meta property="og:image" content='./src/assets/img/Logo.png'/>

                <meta name="twitter:title" content='Ingenio Génesis | Software Development Agency'/>
                <meta
                    name="twitter:description"
                    content='Agencia de desarrollo de Software y experiencia de usuario. Servicios de desarrollo de aplicaciones, paginas web y experiencias de usuario.'
                />
                <meta name="twitter:image" content='./src/assets/img/Logo.png'/>
                <meta name="twitter:card" content=""/>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                {/* <TestStats/> */}
                <Images/>
                <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                    />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                    />
                </div>
                </div>
            </div>
        </div>
                     
            </div>
            <Footer/> 
        </layout>
    )
}
export default About
