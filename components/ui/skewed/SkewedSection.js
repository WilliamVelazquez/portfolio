import React from 'react';

import SkewedTitle from './SkewedTitle';
import SkewedText from './SkewedText';

function SkewedSection(props) {
	const {id, title, text, children, titleColor, contentColor, primaryColor, secondaryColor, odd} = props;
  return(
    <div id={id||null} className="se-slope">
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
					padding: 100px 100px 210px 100px;
					color: ${contentColor||secondaryColor||'#e90089'};
				}
				.se-slope:nth-child(even) .se-content{
					transform: rotate(5deg);
					color: ${contentColor||primaryColor||'#000'};
					padding: 100px 100px 170px 100px;
				}
				.se-slope:last-child .se-content,
				.se-slope:last-child .se-content{
					padding: 35px 100px 180px 100px;
				}
				.se-slope:first-child .se-content{
					padding: 60px 100px 200px 100px;
				}
				@media only screen and (max-width : 768px) {
					.se-slope:nth-child(odd) .se-content{
						padding: 50px 80px 110px 80px;
					}
					.se-slope:nth-child(even) .se-content{
						padding: 50px 80px 220px 80px;
					}
					.se-slope:first-child .se-content{
						padding-top: 20px;
					}
        }
      `}</style>
    </div>
  );
}

export default SkewedSection;
