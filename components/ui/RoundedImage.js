import React from 'react';

function RoundedImage(props) {
  const {src, alt, size='100px', tabletSize, mobileSize} = props;
	return(
  	<div>
      <img
        className='rounded-image'
        src={src} 
        alt={alt}
      />
      <style jsx>{`
        .rounded-image{
          width: ${size};
          border-radius: 50%;
        }
        @media only screen and (max-width : 768px) {
          .rounded-image{
            width: ${tabletSize||size};
          }
        }
        @media only screen and (max-width: 667px) {
          .rounded-image{
            width: ${mobileSize||size};
          }
        }
      `}</style>
    </div>
	);
}

export default RoundedImage;