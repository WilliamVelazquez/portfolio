import React from 'react';

function SimpleCard(props) {
	const { href, target, text, children, flow, justify, color, hoverColor, lineColor } = props;
  return(
    <div className="link-container">
			<a
				href={href}
				target={target||"_self"}
				rel="noopener noreferrer"   
				className="animated-link" 
			>
				{text}
				{children}
			</a>
			<style jsx>{`
				.link-container{
					display: grid;
					align-items: center;
					justify-content: ${justify||"center"};
				}
        a{
					display:grid;
					grid-gap: 5px;
					color: ${color};
					cursor: pointer;
					font-weight: bold;
					text-align: center;
					position: relative;
					text-decoration:none;
					-o-text-decoration:none;
					-moz-text-decoration:none;
					-webkit-text-decoration:none;
					transition: all 0.3s;
					-o-transition: all 0.3s;
					-moz-transition: all 0.3s;
					-webkit-transition: all 0.3s;
					grid-auto-flow: ${flow||"column"};
          }
				a:hover{
					color: ${hoverColor};
				}
				.animated-link:before{
					left: 0;
					bottom: 0;
					height: 2px;
					content: "";
					width: 100%;
					position: absolute;
					background-color: ${lineColor};
					visibility: hidden;
					transform: scaleX(0);
					-o-transform: scaleX(0);
					-moz-transform: scaleX(0);
					-webkit-transform: scaleX(0);
					transition: all 0.4s ease-in-out 0s;
					-o-transition: all 0.4s ease-in-out 0s;
					-moz-transition: all 0.4s ease-in-out 0s;
					-webkit-transition: all 0.4s ease-in-out 0s;
				}
				.animated-link:hover:before{
					visibility: visible;
					transform: scaleX(1);
					-o-transform: scaleX(1);
					-moz-transform: scaleX(1);
					-webkit-transform: scaleX(1);
				}
      `}</style>
    </div>
  );
}

export default SimpleCard;