import CasesList from "components/cases/CasesList";
import Footer from "components/navigations/Footer.js";
import Header from "components/cases/Header";
import Layouts from "hocs/layouts/Layouts.js";
import Navbar from "components/navigations/Navbar.js";
import {useEffect} from "react"
import { Helmet } from 'react-helmet-async';




function Cases (){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <layout>
            <Helmet>
                <title>Ingenio Génesis | Cases Studies</title>
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
                <CasesList/>            
            </div>
            <Footer/> 
        </layout>
    )
}
export default Cases
