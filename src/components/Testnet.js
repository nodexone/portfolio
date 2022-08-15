import React from 'react';
import meter1 from "../assets/img/tidefi.png";
import meter2 from "../assets/img/sei.png";
import meter3 from "../assets/img/stride.png";
import meter4 from "../assets/img/teritori.png";
import meter5 from "../assets/img/uptick.png";
import meter6 from "../assets/img/subquery.png";
import meter7 from "../assets/img/quicksilver.png";
import meter8 from "../assets/img/bundlr.svg";
import meter9 from "../assets/img/aptos.png";
import meter10 from "../assets/img/defund.png";
import meter11 from "../assets/img/deweb.png";
import meter12 from "../assets/img/celestia.png";
import meter13 from "../assets/img/masa.png";
import meter14 from "../assets/img/paloma.png";
import meter15 from "../assets/img/forta.png";
import meter16 from "../assets/img/sui.png";
import meter17 from "../assets/img/peaq.png";
import meter18 from "../assets/img/juno.png";
import meter19 from "../assets/img/rebus.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> Testnet Guide✨</h2>
                        <p>Here's the simply guide from various testnet below! </p>
                        <a class="github-button" href="https://github.com/nodesxploit/testnet"  target="_blank" data-icon="octicon-star" data-size="large" data-show-count="true">Github Stars ⭐</a>
                        <br></br>
                        <br></br>
                        
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/stride" target="_blank">  <img src={meter3} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/stride" target="_blank">  <h5>Stride</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/tidechain" target="_blank"> <img src={meter1} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/tidechain" target="_blank">  <h5>Tidechain</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/sei" target="_blank"> <img src={meter2} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/sei" target="_blank"> <h5>Sei Network</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/bundlr" target="_blank"> <img src={meter8} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/bundlr" target="_blank"> <h5>Bundlr</h5></a>
                            </div>
                            {/* <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/quicksilver" target="_blank"> <img src={meter7} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/quicksilve" target="_blank"> <h5>Quicksilver</h5></a>
                            </div> */}
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/subquery" target="_blank"><img src={meter6} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/subquery" target="_blank"> <h5>Subquery</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/uptick" target="_blank"> <img src={meter5} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/uptick" target="_blank"> <h5>Uptick</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/teritori" target="_blank"> <img src={meter4} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/teritori" target="_blank"> <h5>Teritori</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/aptos" target="_blank"><img src={meter9} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/aptos" target="_blank"> <h5>Aptos</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/defund" target="_blank"><img src={meter10} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/defund" target="_blank"><h5>Defund</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/deweb" target="_blank"><img src={meter11} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/deweb" target="_blank"> <h5>Deweb</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/celestia" target="_blank"><img src={meter12} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/celestia" target="_blank"> <h5>Celestia</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/masa" target="_blank"><img src={meter13} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/masa" target="_blank"> <h5>Masa</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/paloma" target="_blank"> <img src={meter14} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/paloma" target="_blank"> <h5>Paloma</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/forta" target="_blank"> <img src={meter15} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/forta" target="_blank"> <h5>Forta</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/peaq" target="_blank"><img src={meter17} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/peaq" target="_blank"><h5>Peaq</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/juno" target="_blank"><img src={meter18} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/juno" target="_blank"><h5>Juno</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://github.com/nodesxploit/testnet/tree/main/rebus" target="_blank"><img src={meter19} alt="Image" /></a>
                            <a href="https://github.com/nodesxploit/testnet/tree/main/rebus" target="_blank"><h5>Rebus</h5></a>
                                </div>
                                <div className="item">
                                <a href="https://github.com/nodesxploit/testnet/tree/main/sui" target="_blank"><img src={meter16} alt="Image" /></a>
                                <a href="https://github.com/nodesxploit/testnet/tree/main/sui" target="_blank"><h5>Sui Network</h5></a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}