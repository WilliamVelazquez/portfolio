import React from 'react';

import TwitterIcon from '../icons/TwitterIcon';
import FacebookIcon from '../icons/FacebookIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import GithubIcon from '../icons/GithubIcon';

function SocialMedia(props) {
  const { title, color, hoverColor, size, withFB, titleColor } = props;
	return(
		<div className="socialMediaContainer">
      {
        title &&
        <span className="socialMediaTitle">{title}</span>
      }
      <div className="socialMedia">
        <a
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://twitter.com/WilliamVlazquez" 
          className="icon">
          <TwitterIcon 
            color={color||"#fff"} 
            hoverColor={hoverColor ||"#052A4F"} 
            size={size||32} 
          />
        </a>

        {
          withFB &&
          <a 
            type="button"
            target="_blank" 
            rel="noopener noreferrer"  
            href="https://www.facebook.com/WilliamVelazquezA" 
            className="icon">
            <FacebookIcon 
              color={color||"#fff"} 
              hoverColor={hoverColor ||"#052A4F"} 
              size={size||32} 
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
            color={color||"#fff"} 
            hoverColor={hoverColor ||"#052A4F"} 
            size={size||32} 
          />
        </a>

        <a 
          type="button"
          target="_blank" 
          rel="noopener noreferrer"  
          href="https://github.com/WilliamVelazquez" 
          className="icon">
          <GithubIcon 
            color={color||"#fff"} 
            hoverColor={hoverColor ||"#052A4F"} 
            size={size||32} 
          />
        </a>
      </div>

      <style jsx>{`
        .socialMediaContainer{
          margin: 20px;
          display:grid;
          grid-row-gap: 20px;
          align-items: center;
          justify-content: center;
          grid-template-rows: repeat(${title?"2":"1"}, 1fr);
        }
        .socialMedia{
          display:grid;
          grid-column-gap: 20px;
          grid-template-columns: repeat(3, 80px);
        }
        .icon{
          cursor: pointer;
          justify-self: center;
        }
        .socialMediaTitle{
          font-size: 20px;
          font-weight: bold;
          white-space: nowrap;
          justify-self: center;
          color: ${titleColor||"#fff"};
        }
      `}</style>
    </div>
	);
}

export default SocialMedia;