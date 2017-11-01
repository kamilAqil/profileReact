import React from 'react';

class AboutComponet extends React.Component{
    render(){
        return(
                <div id='aboutComponent'>
                    {/* headshot image */}
                    <img src="./images/headShot.jpg" alt="" id='headShotPic' className='img-fluid'/>
                    {/* about header */}
                    <span id='aboutHeader' className='componentHeader'>About</span>
                    {/* about content container */}
                    <div id='aboutContentContainer'>blah blah blah blah</div>
                </div>
        )
    }
}

export default AboutComponet;