import React from 'react';

function ToneImageToColor(props) {
  const { imgSrc, imgAlt, text, initialTextColor, hoverTextColor, imgWidth, tone, } = props;
	return(
    <div className="img-container">
      <img className="tone-to-color" src={imgSrc} alt={imgAlt || null}></img>
      {
        text &&
        <span className="img-text">{text}</span>
      }
      <style jsx>{`
        .img-container{
          display: grid;
          grid-row-gap: 5px;
          align-items: center;
          justify-items: center;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 18px;
          color: ${initialTextColor || 'transparent'};
        }
        .img-container:hover{
          color: ${hoverTextColor || '#fff'};
        }
        .tone-to-color{
          width: ${imgWidth};
          filter: ${tone === 'gray'?'gray':''} ${tone === 'sepia'?'sepia':''}; /* IE5+ */
          -webkit-filter: ${tone === 'gray'?'grayscale(1)':''} ${tone === 'sepia'?'sepia(1)':''}; /* Webkit Nightlies & Chrome Canary */
          transition: all .8s ease-in-out;
          -webkit-transition: all .8s ease-in-out;
        }
        .img-container:hover > .tone-to-color{
          filter: none;
          width: ${imgWidth+30};
          -webkit-filter: ${tone === 'gray'?'grayscale(0)':''} ${tone === 'sepia'?'sepia(0)':''};
          transform: scale(1.01);
          -webkit-transform: scale(1.01);
        }
        .img-text{
          bottom: -5px;
          line-height: 1;
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          position: relative;
          white-space: nowrap;
          transition: all .8s ease-in-out;
          -webkit-transition: all 1s ease-in-out;
        }
        .img-container:hover > .img-text{
          bottom: 6px;
        }
        @media only screen and (max-width : 768px) {
          .img-text{
            font-size: 12px;
          }
          .img-container{
            grid-row-gap: 2px;
          }
          .img-container:hover > .img-text{
            bottom: 2px;
          }
        }
        @media only screen and (max-width: 667px) {
          .img-text{
            font-size: 10px;
          }
        }
      `}</style>
    </div>
	);
}

export default ToneImageToColor;