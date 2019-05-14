import React from 'react';

import { scrollToClassElementBottom } from '../../utils/functions';

import ChevronIcon from '../icons/ChevronIcon';

function Hero(props) {
	return(
      <div className="hero">
        <div className="fixed-hero-img"></div>
        <div className="hero-text">
          <p>Hi, I'm</p>
          <h1>William Velazquez</h1>
          <p>Full Stack Developer</p>
        </div>
        <a className="caret" onClick={()=>scrollToClassElementBottom('hero')}>
          <ChevronIcon 
            direction="down" 
            color={"#fff"} 
            hoverColor={"#BF0404"} 
            size={32}
          />
        </a>
      <style jsx>{`
        .hero{
          height: 100vh;
          background-image: linear-gradient(141deg,#111317 10%,#45484e 51%,#111317 75%);
        }
        .fixed-hero-img{
          height: 100vh;
          opacity: 0.15;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-image: url(/static/hero_background.jpg);
        }
        .hero-text{
          top: 30%;
          width: 100%;
          display: grid;
          position: absolute;
          justify-items: center;
        }
        p{
          color: #fff;
          font-size: 24px;
          margin: 10px 0px;
          text-align: center;
        }
        h1{
          color: #fff;
          font-size: 38px;
          text-align: center;
        }
        .caret{
          bottom: 0;
          width: 100%;
          margin-bottom: 20px;
          display: grid;
          position: absolute;
          justify-items: center;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        .caret:hover{
          cursor: pointer;
          margin-bottom: 10px;
        }
        @media only screen and (max-width : 768px) {
          h1{
            font-size: 32px
          }
          p{
            font-size: 18px
          }
        }
        @media only screen and (max-width : 667px) {
          h1{
            font-size: 28px
          }
          p{
            font-size: 16px
          }
        }
      `}</style>
    </div>
	);
}

export default Hero;