import Footer from "components/navigations/Footer.js";
import Navbar from "components/navigations/Navbar.js";
import Header from "components/services/Header";
import ServicesList from "components/services/ServicesList";
import Layouts from "hocs/layouts/Layouts.js";
import {useEffect} from "react"
import { Helmet } from 'react-helmet-async';

const posts_software = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

function Services (){
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    return(
        <layout>
              <Helmet>
                <title>Ingenio Génesis | Services</title>
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
                <ServicesList posts={posts_software} section_title={'Products'}/>   
            </div>
            <Footer/> 
        </layout>
    )
}
export default Services
