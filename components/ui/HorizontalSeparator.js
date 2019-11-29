import React from 'react';

function HorizontalSeparator (props) {
  const {text, barColor='#111317', centered=false, borderSize='1px'} = props;
  return(
    <div className="horizontalSeparator">
			{text}
      <style jsx>{`
        .horizontalSeparator{
					display: flex;
					font-size: 18px;
					margin: 10px 0px;
          font-weight: bold;
					text-align: center;
					align-items: center;
					${centered?"width: 75%;":""}
					${centered?"margin: 10px auto;":""}
				}
				.horizontalSeparator:before{
					flex: 1;
					content: '';
					margin-right: .25em;
					border-bottom: ${borderSize} solid ${barColor};
				}
				.horizontalSeparator:after{
					flex: 1;
					content: '';
					margin-left: .25em;
					border-bottom: ${borderSize} solid ${barColor};
				}
      `}</style>
    </div>
  );
}

export default HorizontalSeparator;
