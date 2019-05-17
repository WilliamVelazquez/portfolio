import React from 'react';

import TwitterIcon from '../icons/TwitterIcon';
import FacebookIcon from '../icons/FacebookIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';

function SocialMedia(props) {
	return(
		<div className="socialMediaContainer">
      <span className="socialMediaTitle">{props.title}</span>
      <div className="socialMedia">
        <a
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://twitter.com/WilliamVlazquez" 
          className="icon">
          <TwitterIcon 
            color={props.color||"#fff"} 
            hoverColor={props.hoverColor ||"#052A4F"} 
            size={props.size||32} 
          />
        </a>

        {
          props.withFB &&
          <a 
            type="button"
            target="_blank" 
            rel="noopener noreferrer"  
            href="https://www.facebook.com/WilliamVelazquezA" 
            className="icon">
            <FacebookIcon 
              color={props.color||"#fff"} 
              hoverColor={props.hoverColor ||"#052A4F"} 
              size={props.size||32} 
            />
          </a>
        }

        <a 
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://www.linkedin.com/in/williamvelazquez/" 
          className="icon">
          <LinkedInIcon 
            color={props.color||"#fff"} 
            hoverColor={props.hoverColor ||"#052A4F"} 
            size={props.size||32} 
          />
        </a>

        <a 
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://github.com/WilliamVelazquez" 
          className="icon">
          <GithubIcon 
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
          color: ${props.titleColor||"#fff"};
          justify-self: center;
        }
      `}</style>
    </div>
	);
}

export default SocialMedia;