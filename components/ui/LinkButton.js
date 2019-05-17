import React from 'react';
import Link from 'next/link';

function LinkButton(props) {
	const { href, handleClick, text, color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor } = props;
	return(
		<div className="link-btn-container">
			<Link href={href}>
				<button type="button" onClick={handleClick||null}>{text}</button>
			</Link>
			<style jsx>{`
				.link-btn-container{
					margin: 10px;
          display: grid;
					margin-top: 20px;
          column-gap: 50px;
					grid-auto-flow: column;
				}
				button{
          color: ${color||"#fff"};
          padding: 10px;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          border-radius: 5px;
          background: ${backgroundColor||"#111317"};
          border: 3px solid ${borderColor||"#070708"};
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        button:hover,
        button:active
        {
          color: ${hoverColor||"#111317"};
          background: ${hoverBackgroundColor||"#fff"};
				}
				@media only screen and (max-width : 667px) {
          .btnContainer{
						grid-row-gap: 15px;
            grid-auto-flow: row;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
		</div>
	);
}

export default LinkButton;