import React from 'react';

import SkewedTitle from './SkewedTitle';
import SkewedText from './SkewedText';

function SkewedSection(props) {
	const {title, text, children, titleColor, contentColor, primaryColor, secondaryColor, odd} = props;
  return(
    <div className="se-slope">
			<article className="se-content">
				{
					title && 
					<SkewedTitle 
						text={title} 
						textColor={titleColor||(odd?primaryColor:secondaryColor)}
						backgroundColor={(odd?secondaryColor:primaryColor)} 
					/>
				}
				{
					text && 
					<SkewedText text={text}/>
				}
				{children}
			</article>

			<style jsx>{`
				.se-slope{
					margin: 0 -50px;
					transform-origin: left center;
				}
				.se-slope:nth-child(odd){
					margin-top: -200px;
					transform: rotate(5deg);
					background: ${primaryColor||'#000'};
					box-shadow: 0px -1px 3px rgba(0,0,0,0.4);
				}
				.se-slope:nth-child(even){
					transform: rotate(-5deg);
					background: ${secondaryColor||'#e90089'};
					box-shadow: 0px 2px 3px rgba(0,0,0,0.4) inset;
				}
				.se-content{
					margin: 0 auto;
					text-align: center;
				}	
				.se-slope:nth-child(odd) .se-content{
					transform: rotate(-5deg);
					padding: 130px 100px 250px 100px;
					color: ${contentColor||secondaryColor||'#e90089'};
				}
				.se-slope:nth-child(even) .se-content{
					transform: rotate(5deg);
					color: ${contentColor||primaryColor||'#000'};
					padding: 150px 100px 250px 100px;
				}
      `}</style>
    </div>
  );
}

export default SkewedSection;
