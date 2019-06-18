import React from 'react';
import { logEvent } from '../../utils/analytics';

import TwitterIcon from '../icons/TwitterIcon';
import FacebookIcon from '../icons/FacebookIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import GitHubIcon from '../icons/GitHubIcon';

function SocialMedia(props) {
  const { title, color, hoverColor, size, withFB, titleColor } = props;
  const GA_SOCIAL_MEDIA_CATEGORY="Social Media";
  const GA_SOCIAL_MEDIA_TWITTER_ACTION="Visit Twitter";
  const GA_SOCIAL_MEDIA_FACEBOOK_ACTION="Visit Facebook";
  const GA_SOCIAL_MEDIA_LINKEDIN_ACTION="Visit LinkedIn";
  const GA_SOCIAL_MEDIA_GITHUB_ACTION="Visit GitHub";
  const GA_SOCIAL_MEDIA_TWITTER_LABEL="Visit Twitter from Social Media";
  const GA_SOCIAL_MEDIA_FACEBOOK_LABEL="Visit Facebook from Social Media";
  const GA_SOCIAL_MEDIA_LINKEDIN_LABEL="Visit LinkedIn from Social Media";
  const GA_SOCIAL_MEDIA_GITHUB_LABEL="Visit GitHub from Social Media";
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
          className="icon"
          title="William's Twitter"
          rel="noopener noreferrer"
          href="https://twitter.com/WilliamVlazquez"
          onClick={()=>logEvent(GA_SOCIAL_MEDIA_CATEGORY,GA_SOCIAL_MEDIA_TWITTER_ACTION,GA_SOCIAL_MEDIA_TWITTER_LABEL)}
        >
          <TwitterIcon
            size={size||32}
            color={color||"#fff"}
            hoverColor={hoverColor ||"#052A4F"}
          />
        </a>

        {
          withFB &&
          <a
            type="button"
            target="_blank"
            className="icon"
            title="William's Facebook"
            rel="noopener noreferrer"
            href="https://www.facebook.com/WilliamVelazquezA"
            onClick={()=>logEvent(GA_SOCIAL_MEDIA_CATEGORY,GA_SOCIAL_MEDIA_FACEBOOK_ACTION,GA_SOCIAL_MEDIA_FACEBOOK_LABEL)}
          >
            <FacebookIcon
              size={size||32}
              color={color||"#fff"}
              hoverColor={hoverColor ||"#052A4F"}
            />
          </a>
        }

        <a
          type="button"
          target="_blank"
          className="icon"
          title="William's LinkedIn"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/williamvelazquez/"
          onClick={()=>logEvent(GA_SOCIAL_MEDIA_CATEGORY,GA_SOCIAL_MEDIA_LINKEDIN_ACTION,GA_SOCIAL_MEDIA_LINKEDIN_LABEL)}
        >
          <LinkedInIcon
            size={size||32}
            color={color||"#fff"}
            hoverColor={hoverColor ||"#052A4F"}
          />
        </a>

        <a
          type="button"
          target="_blank"
          className="icon"
          title="William's GitHub"
          rel="noopener noreferrer"
          href="https://github.com/WilliamVelazquez"
          onClick={()=>logEvent(GA_SOCIAL_MEDIA_CATEGORY,GA_SOCIAL_MEDIA_GITHUB_ACTION,GA_SOCIAL_MEDIA_GITHUB_LABEL)}
        >
          <GitHubIcon
            size={size||32}
            color={color||"#fff"}
            hoverColor={hoverColor ||"#052A4F"}
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
          user-select: none;
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