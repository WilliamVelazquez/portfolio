import React from 'react';

function TitleBand(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <h2>{props.title}</h2>

      <style jsx>{`
        .container{
          width:100%;
          background: #111317;
          margin:40px 0px;
          margin-bottom: 25px;
        }
        h2{
          margin:0;
          padding:15px;
          color:#fff;
          text-align: ${props.position || "left"};
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

export default TitleBand;