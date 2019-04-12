import React from 'react';

function ImageSepiaToColor(props) {
	return(
      <div className="img-container">
        <img className="sepia-to-color" src={props.imgSrc} alt={props.imgAlt || null}></img>
      <style jsx>{`
        .sepia-to-color{
            width: ${props.imgWidth};
            filter: sepia; /* IE5+ */
            -webkit-filter: sepia(1); /* Webkit Nightlies & Chrome Canary */
            transition: all .8s ease-in-out;
            -webkit-transition: all .8s ease-in-out;
        }
        .sepia-to-color:hover{
            filter: none;
            -webkit-filter: sepia(0);
            transform: scale(1.01);
            -webkit-transform: scale(1.01);
        }
      `}</style>
    </div>
	);
}

export default ImageSepiaToColor;