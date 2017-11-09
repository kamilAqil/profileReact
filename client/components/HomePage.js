import React from 'react';
import NavComponent from './NavComponent';
import AboutComponent from './AboutComponent';
import SkillsComponent from './SkillsComponent';
import PortfolioComponent from './PortfolioComponent.js';
import ContactComponent from './ContactComponent.js';

class HomePage extends React.Component{
    render(){
        return(
            <div id='mainContainer'>
                <NavComponent/>
                <AboutComponent/>
                <SkillsComponent/>
                <PortfolioComponent/>
               {/* <ContactComponent/> */}
            </div> 
        )
    }
}

export default HomePage;
