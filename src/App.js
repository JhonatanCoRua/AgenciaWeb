import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';


import AnimatedRoutes from 'AnimatedRoutes';


function App() {
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ingenio Génesis | Software Development Agency</title>
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
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
