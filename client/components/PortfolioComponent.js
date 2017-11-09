import React from 'react';

class PortfolioComponet extends React.Component {
    render() {
        return (
            <div id='portfolioComponent' className='componentHeader'>
                <span id='portfolioComponentHeader'>Portfolio</span>
                {/* gallery container */}
                <div id='portfolioGalleryContainer'>
                    {/* wheel of fortune gif hangman */}
                    <div id='projectOneContainer'>
                        {<img src="./images/gifs/hangManGame.gif" className='' id='wheelOfFortuneGif' alt="" />}
                    </div>
                    {/* bamazon gif */}
                    <img src="./images/gifs/bamazonGif.gif" id='bamazonGif' className='galleryGif' alt="" />
                    {/* giphy gif */}
                    <img src="./images/gifs/giphyAppGif.gif" id='giphyGif' className='galleryGif' alt="" />
                    {/* noir gif */}
                    <img src="./images/gifs/noirGif.gif" id='noirGif' className='galleryGif' alt="" />
                    {/* rpg Gif */}
                    <img src="./images/gifs/rpgGif.gif" id='rpgGif' className='galleryGif' alt="" />
                    {/* trivia game */}
                    <img src="./images/gifs/triviaGameGif.gif" id='triviaGif' className='galleryGif' alt="" />      
                </div>
            </div>
        )
    }
}

export default PortfolioComponet;