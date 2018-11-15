import React from 'react';
import Link from 'next/link';

import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

function SocialMedia(props) {
	return(
		<div className="socialMediaContainer">
      <span className="socialMediaTitle">{props.title}</span>
      <div className="socialMedia">
        <a
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://twitter.com/QuPublicidadMX" 
          className="icon">
          <TwitterIcon 
            color={props.color||"#fff"} 
            hoverColor={props.hoverColor ||"#052A4F"} 
            size={props.size||32} 
          />
        </a>

        <a 
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="" 
          className="icon">
          <FacebookIcon 
            color={props.color||"#fff"} 
            hoverColor={props.hoverColor ||"#052A4F"} 
            size={props.size||32} 
          />
        </a>

        <a 
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="" 
          className="icon">
          <InstagramIcon 
            color={props.color||"#fff"} 
            hoverColor={props.hoverColor ||"#052A4F"} 
            size={props.size||32} 
          />
        </a>
      </div>

      <style jsx>{`
        .socialMediaContainer{
          display:grid;
          grid-template-rows: repeat(2, 1fr);
          align-items: center;
          grid-row-gap: 20px;
          margin: 20px;
          justify-content: center;
        }
        .socialMedia{
          display:grid;
          grid-template-columns: repeat(3, 80px);
          grid-column-gap: 20px;
        }
        .icon{
          justify-self: center;
          cursor: pointer;
        }
        .socialMediaTitle{
          font-size: 20px;
          font-weight: bold;
          color: ${props.titleColor||"#fff"}
        }
      `}</style>
    </div>
	);
}

export default SocialMedia;