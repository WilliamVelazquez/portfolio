import React from 'react';

function SkewedTitle(props) {
	const {text, textColor, backgroundColor} = props;
  return(
    <h2 className="skewed-title">
			{text||'-'}

			<style jsx>{`
				.skewed-title{
					height: 80px;
					font-size: 60px;
					line-height: 80px;
					position: relative;
					margin-bottom: 20px;
					display: inline-block;
					padding: 10px 30px 8px 30px;
					text-shadow: 1px 1px 1px rgba(0,0,0,0.9);
					/*font-family: 'Bitter', 'Trebuchet MS', Arial;*/
				}
				.skewed-title{
					color: ${textColor||'#000'};
					background: ${backgroundColor||'#e90089'};
				}
				.skewed-title:before{
					content: '';
					top: 0px;
					width: 0;
					height: 0;
					left: -59px;
					position: absolute;
					border-top: 38px solid transparent;
					border-bottom: 60px solid transparent;
					border-right: 60px solid ${backgroundColor||'#e90089'};
				}
				.skewed-title:after{
					content: '';
					top: 0px;
					width: 0;
					height: 0;
					right: -59px;
					position: absolute;
					border-top: 38px solid transparent;
					border-bottom: 60px solid transparent;
					border-left: 60px solid ${backgroundColor||'#e90089'};
				}
				@media only screen and (max-width : 768px) {
					.skewed-title{
						height: 60px;
						font-size: 38px;
						line-height: 60px;
					}
					.skewed-title:before,
					.skewed-title:after{
						border-bottom: 40px solid transparent;
					}
        }
        @media only screen and (max-width: 667px) {
					.skewed-title{
						height: 32px;
						font-size: 28px;
						line-height: 32px;
					}
					.skewed-title:before,
					.skewed-title:after{
						border-top: 25px solid transparent;
						border-bottom: 25px solid transparent;
					}
        }
      `}</style>
    </h2>
  );
}

export default SkewedTitle;
