import React from 'react';
import SkewedTitle from './SkewedTitle';

function SkewedText(props) {
	const {text, children, textColor} = props;
  return(
    <p className="skewed-text">
			{text}
			{children}

			<style jsx>{`
				.skewed-text{
					width: 75%;
					margin: 0 auto;
					font-size: 18px;
					max-width: 500px;
					line-height: 24px;
					padding-top: 10px;
					font-style: italic;
					${textColor && `color: ${textColor}`}
				}
				.skewed-text:first-letter{
					font-size: 40px;
					/*font-family: 'Adobe Garamond Pro', Georgia, serif;*/
				}
      `}</style>
    </p>
  );
}

export default SkewedText;
