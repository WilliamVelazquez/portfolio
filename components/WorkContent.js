import React from 'react';
import { logEvent } from '../utils/analytics';

import UnderlinedLink from './ui/UnderlinedLink';
import DownloadIcon from './icons/DownloadIcon';

function WorkContent(props) {
	const GA_WORK_CATEGORY="Work";
	const GA_WORK_DOWNLOAD_ACTION="Download 2016-2017 Portfolio";
	const GA_WORK_DOWNLOAD_LABEL="2016-2017 Portfolio downloaded";

  const PORTFOLIO_GITHUB_URL="https://github.com/WilliamVelazquez/Blog-Articles/raw/master/Portfolio/2016-2017_Portfolio.pdf";
  
	return(
		<React.Fragment>
      <p className="work-text">In the meantime you can see what I was working on 2016</p>
      <UnderlinedLink 
        href={PORTFOLIO_GITHUB_URL}
        fontSize="18px"
        target="_blank"
        text="Download"
        color="#111317"
        justify="center"
        lineColor="#BF0404"
        hoverColor="#BF0404"
        title="Download William's 2016-2017 Portfolio"
        handleClik={()=>logEvent(GA_WORK_CATEGORY,GA_WORK_DOWNLOAD_ACTION,GA_WORK_DOWNLOAD_LABEL)}
      >
        <DownloadIcon
          type={1}
          size={20}
          color="#111317"
          hoverColor="#BF0404"
        />
      </UnderlinedLink>

      <style jsx>{`
        .work-text{
          font-size: 18px;
          font-weight: bold;
          margin-top: 0px;
          margin-bottom: 5px;
        }
        @media only screen and (max-width : 768px) {
          .work-text{
            font-size: 16px;
            margin: 0px 10px 5px 10px;
          }
        }
      `}</style>
    </React.Fragment>
	);
}

export default WorkContent;