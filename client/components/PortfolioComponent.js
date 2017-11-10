import React from 'react';

class PortfolioComponet extends React.Component {
    render() {
        return (
            <div id='portfolioComponent' className='componentContainer'>
                {/* <span id='portfolioComponentHeader'>Portfolio</span> */}
                {/* gallery container */}
                <div id='portfolioGalleryContainer'>
                    {/* wheel of fortune gif hangman */}
                    <div id='projectOneContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Wheel of Fortune Hangman Game</span>
                        <img src="./images/gifs/hangManGame.gif" className='galleryGif' id='wheelOfFortuneGif' alt="" />
                    </div>
                    {/* bamazon gif */}
                    <div id='projectTwoContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Inventory Mangagement</span>
                        <img src="./images/gifs/bamazonGif.gif" id='bamazonGif' className='galleryGif' alt="" />
                    </div>
                    {/* giphy gif */}
                    <div id='projectThreeContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Gif Gallery</span>
                        <img src="./images/gifs/giphyAppGif.gif" id='giphyGif' className='galleryGif' alt="" />
                    </div>
                    {/* noir gif */}
                    <div id='projectFourContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Noir Clothing Store</span>
                        <img src="./images/gifs/noirGif.gif" id='noirGif' className='galleryGif' alt="" />
                    </div>
                    {/* rpg Gif */}
                    <div id='projectFiveContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Simple Rpg</span>
                        <img src="./images/gifs/rpgGif.gif" id='rpgGif' className='galleryGif' alt="" />
                    </div>
                    {/* trivia game */}
                    <div id='projectSixContainer' className='portfolioProjectContainer'>
                        <span className='portfolioProjectHeader'>Trivia Game</span>
                        <img src="./images/gifs/triviaGameGif.gif" id='triviaGif' className='galleryGif' alt="" />      
                    </div>
                </div> 
            </div>
        )
    }
}

export default PortfolioComponet;