import React from 'react';

import TitleBandShape from './TitleBandShape';

function ArrowBand(props) {
	//console.log(props);
	return(
		<div className="container">
	
			<h2>{props.title}</h2>

			<div className="title-shape">
				<TitleBandShape 
				size="100%"
				color="#8e1a1a"
				viewBox="0 0 1000 56"
				/>
			</div>

			<style jsx>{`
				.container{
					width:100%;
					background: #111317;
					margin:40px 0px;
					margin-bottom: 25px;
				}
				h2{
					margin:0;
					color:#fff;
					padding:15px;
					padding-top:15px;
					text-align: ${props.position || "left"};
				}
				.title-shape{
					bottom: -5px;
					position: relative;
				}
				@media only screen and (max-width : 768px) {
					h2{
						font-size: 18px;
						padding:10px;
					}
				}
			`}</style>
    </div>
	);
}

export default ArrowBand;