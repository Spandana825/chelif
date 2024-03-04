import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children,title}) => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                
            </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>
        <ToastContainer />
        {children}
        </main>
        <Footer/>
    </div>
  )
}
Layout.defaultProps={
  title:"Chevin Lifestyle"
}

export default Layout
