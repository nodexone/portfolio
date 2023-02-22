import React from 'react';

import andromeda from "../assets/img/andromeda.png";
import sei from "../assets/img/sei.png";
import babylon from "../assets/img/babylon.png";
import blockx from "../assets/img/blockx.png";
import uptick from "../assets/img/uptick.png";
import celestia from "../assets/img/celestia.png";
import coreum from "../assets/img/coreum.png";
import defund from "../assets/img/defund.png";
import dymension from "../assets/img/dymension.png";
import gitopia from "../assets/img/gitopia.png";
import humans from "../assets/img/humans.png";
import mars from "../assets/img/mars.png";
import neutron from "../assets/img/neutron.jpg";
import nibiru from "../assets/img/nibiru.png";
import sui from "../assets/img/sui.png";
import nois from "../assets/img/nois.png";
import nolus from "../assets/img/nolus.jpg";
import okp4 from "../assets/img/okp4.png";
import quasar from "../assets/img/quasar.png";
import realio from "../assets/img/realio.png";
import saage from "../assets/img/saage.png";
import terp from "../assets/img/terp.png";
import tidefi from "../assets/img/tidefi.png";
import lava from "../assets/img/lava.png";
import source from "../assets/img/source.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
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
                        <a class="github-button" href="https://github.com/nodexcapital/testnet"  target="_blank" data-icon="octicon-star" data-size="large" data-show-count="true">Github Stars ⭐</a>
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/andromeda" target="_blank">  <img src={andromeda} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/andromeda" target="_blank">  <h5>Andromeda</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/babylon" target="_blank"> <img src={babylon} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/babylon" target="_blank">  <h5>Babylon</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/blockx" target="_blank"> <img src={blockx} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/blockx" target="_blank">  <h5>BlockX</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/celestia" target="_blank"> <img src={celestia} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/celestia" target="_blank">  <h5>Celestia</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/coreum" target="_blank"> <img src={coreum} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/coreum" target="_blank">  <h5>Coreum</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/defund" target="_blank"> <img src={defund} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/defund" target="_blank">  <h5>Defund</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/dymension" target="_blank"> <img src={dymension} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/dymension" target="_blank">  <h5>Dymnension</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/gitopia" target="_blank"> <img src={gitopia} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/gitopia" target="_blank"> <h5>Gitopia</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/humans" target="_blank"> <img src={humans} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/humans" target="_blank"> <h5>Humans AI</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/lava" target="_blank"><img src={lava} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/lava" target="_blank"> <h5>Lava Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/mars" target="_blank"> <img src={mars} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/mars" target="_blank"> <h5>Mars Protocol</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/neutron" target="_blank"> <img src={neutron} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/neutron" target="_blank"> <h5>Neutron</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nibiru" target="_blank"><img src={nibiru} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nibiru" target="_blank"> <h5>Nibiru</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nois" target="_blank"><img src={nois} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nois" target="_blank"> <h5>Nois Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nolus" target="_blank"><img src={nolus} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nolus" target="_blank"> <h5>Nolus</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/okp4" target="_blank"><img src={okp4} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/okp4" target="_blank"><h5>Okp4 Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/uptick" target="_blank"><img src={uptick} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/uptick" target="_blank"> <h5>Uptick</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/quasar" target="_blank"><img src={quasar} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/quasar" target="_blank"> <h5>Quasar</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/realio" target="_blank"> <img src={realio} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/realio" target="_blank"> <h5>Realio Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sei" target="_blank"> <img src={sei} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sei" target="_blank"> <h5>Sei Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sigma" target="_blank"><img src={saage} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sigma" target="_blank"><h5>Sge Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/source" target="_blank"><img src={source} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/source" target="_blank"><h5>Source Protocol</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sui" target="_blank"><img src={sui} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sui" target="_blank"><h5>Sui Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/terp" target="_blank"><img src={terp} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/terp" target="_blank"><h5>Terp Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/tidechain" target="_blank"><img src={tidefi} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/tidechain" target="_blank"><h5>Tidechain</h5></a>
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
