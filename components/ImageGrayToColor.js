import React from 'react';

function ImageGrayToColor(props) {
	return(
      <div className="img-container">
        <img className="gray-to-color" src={props.imgSrc}></img>
      <style jsx>{`
        .gray-to-color{
            width: ${props.imgWidth};
            filter: gray; /* IE5+ */
            -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
            transition: all .8s ease-in-out;
            -webkit-transition: all .8s ease-in-out;
        }
        .gray-to-color:hover{
            filter: none;
            -webkit-filter: grayscale(0);
            transform: scale(1.01);
            -webkit-transform: scale(1.01);
        }
      `}</style>
    </div>
	);
}

export default ImageGrayToColor;