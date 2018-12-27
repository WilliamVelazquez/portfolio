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
          src={props.src}
          alt={props.alt}
          size={props.size}
        />
      </div>

      <style jsx global>{`
        body{
          margin-top: 0px;
        }
      `}</style>
      <style jsx>{`
        .hero{
          padding-top: 80px;
          padding-bottom: 10px;
          background: #BF0404;
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        .left{
          text-align: center;
          align-self: center;
        }
        .right{
          text-align: center;
        }
      `}</style>
    </div>
	);
}

export default Hero;