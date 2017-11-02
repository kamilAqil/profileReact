import React from 'react';

class PortfolioComponet extends React.Component {
    render() {
        return (
            <div id='portfolioComponent' class='componentHeader'>
                <span id='portfolioComponentHeader'>Portfolio</span>
                {/* gallery container */}
                <div id='portfolioGalleryContainer'>
                    {/* wheel of fortune gif */}
                    <img src="./images/gifs/hangManGame.gif" class='galleryGif' id='wheelOfFortuneGif' alt=""/>
                    {/* bamazon gif */}
                    <img src="./images/gifs/bamazonGif.gif" id='bamazonGif' class='galleryGif' alt="" />
                    {/* giphy gif */}
                    <img src="./images/gifs/giphyAppGif.gif" id='giphyGif' class='galleryGif' alt="" />
                    {/* noir gif */}
                    <img src="./images/gifs/noirGif.gif" id='noirGif' class='galleryGif' alt="" />
                    {/* rpg Gif */}
                    <img src="./images/gifs/rpgGif.gif" id='rpgGif' class='galleryGif' alt="" />
                    {/* trivia game */}
                    <img src="./images/gifs/triviaGameGif.gif" id='triviaGif' class='galleryGif' alt="" />      
                </div>
            </div>
        )
    }
}

export default PortfolioComponet;