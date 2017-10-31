import React from 'react';
import NavComponent from './NavComponent';
import AboutComponent from './AboutComponent';
import SkillsComponent from './SkillsComponent';
// const HomePage = () => (
//     <div>
//         <h1>Welcome</h1>
//         <p>This is my site. Take a look around!</p>
//     </div>
// );

class HomePage extends React.Component{
    render(){
        return(
            <div id='mainContainer'>
                <NavComponent/>
                <AboutComponent/>
                <SkillsComponent/>
                {/* Portfolio Component */}
                {/* Contact Component */}
            </div> 
        )
    }
}

export default HomePage;
