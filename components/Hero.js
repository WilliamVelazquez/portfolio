import React from 'react';

import RoundedImage from './RoundedImage';

function Hero(props) {
	return(
		<div className="hero">
      
      <div className="left">
        {props.children}
      </div>

      <div className="right">
        <RoundedImage
          src={props.imgSrc}
          alt={props.imgAlt}
          size={props.imgSize}
        />
      </div>

      <style jsx global>{`
        body{
          margin-top: 0px;
        }
      `}</style>
      <style jsx>{`
        .hero{
          padding-top: 70px;
          padding-bottom: 25px;
          background: ${props.color};
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        .left{
          text-align: center;
          align-self: center;
        }
        .right{
          text-align: center;
          align-self: center;
        }
        @media only screen and (max-width : 768px) {
          .hero{
            padding-top: 65px;
            padding-bottom: 20px;
          }
        }
        @media only screen and (max-width : 667px) {
          .hero{
            padding-top: 50px;
            padding-bottom: 15px;
          }
        }
      `}</style>
    </div>
	);
}

export default Hero;