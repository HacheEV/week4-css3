import './page.css';
import React from 'react';
import Navbar from '../navbar';
import Body from '../body';
import Footer from '../footer';


const Page = () =>{
    return(
        <div className="page">
            <Navbar/>
            <Body />
            <Footer />
          
        </div>
    )
}
export default Page; 