import React from 'react';

import RoundedImage from './RoundedImage';

function PhotoBand(props) {
	return(
		<div className="photo-band" id={props.id}>
      
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
        .photo-band{
          padding-top: 70px;
          padding-bottom: 25px;
          background: ${props.color||'#fff'};
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        .left{
          display: grid;
          text-align: center;
          align-self: center;
        }
        .right{
          text-align: center;
          align-self: center;
        }
        @media only screen and (max-width : 768px) {
          .photo-band{
            padding-top: 65px;
            padding-bottom: 20px;
          }
        }
        @media only screen and (max-width : 667px) {
          .photo-band{
            padding-top: 50px;
            padding-bottom: 15px;
          }
        }
      `}</style>
    </div>
	);
}

export default PhotoBand;