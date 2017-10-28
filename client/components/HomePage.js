import React from 'react';
import NavComponent from './NavComponent'
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
                {/* About Component */}
                {/* Skills Component */}
                {/* Portfolio Component */}
                {/* Contact Component */}
            </div> 
        )
    }
}

export default HomePage;
