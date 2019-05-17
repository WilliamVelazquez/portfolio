import React from 'react';

function ToneImageToColor(props) {
	return(
    <div className="img-container">
      <img className="tone-to-color" src={props.imgSrc} alt={props.imgAlt || null}></img>
      {
        props.text &&
        <span className="img-text">{props.text}</span>
      }
      <style jsx>{`
        .img-container{
          display: grid;
          grid-row-gap: 5px;
          align-items: center;
          justify-items: center;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          color: ${props.initialTextColor || 'transparent'};
        }
        .img-container:hover{
          color: ${props.hoverTextColor || '#fff'};
        }
        .tone-to-color{
          width: ${props.imgWidth};
          filter: ${props.tone === 'gray'?'gray':''} ${props.tone === 'sepia'?'sepia':''}; /* IE5+ */
          -webkit-filter: ${props.tone === 'gray'?'grayscale(1)':''} ${props.tone === 'sepia'?'sepia(1)':''}; /* Webkit Nightlies & Chrome Canary */
          transition: all .8s ease-in-out;
          -webkit-transition: all .8s ease-in-out;
        }
        .tone-to-color:hover{
          filter: none;
          -webkit-filter: ${props.tone === 'gray'?'grayscale(0)':''} ${props.tone === 'sepia'?'sepia(0)':''};
          transform: scale(1.01);
          -webkit-transform: scale(1.01);
        }
        .img-text{
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          transition: all .8s ease-in-out;
          -webkit-transition: all 1s ease-in-out;
        }
        @media only screen and (max-width : 768px) {
          .img-text{
            font-size: 12px;
          }
          .img-container{
            grid-row-gap: 2px;
          }
        }
      `}</style>
    </div>
	);
}

export default ToneImageToColor;