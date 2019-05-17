import React from 'react';

function RoundedImage(props) {
	return(
  	<div>
      <img 
        src={props.src} 
        alt={props.alt}
      />
      <style jsx>{`
        img {
          border-radius: 50%;
          width: ${props.size};
        }
      `}</style>
    </div>
	);
}

export default RoundedImage;