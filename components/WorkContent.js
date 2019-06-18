import React from 'react';
import { logEvent } from '../utils/analytics';

import PdfViewer from './ui/PdfViewer';

function WorkContent(props) {
	const GA_WORK_CATEGORY="Work";
	const GA_WORK_DOWNLOAD_ACTION="Download Portfolio 2016-2017";
	const GA_WORK_DOWNLOAD_LABEL="Portfolio 2016-2017 downloaded";

  const PORTFOLIO_URL="/static/pdf/2016-2017_Portfolio.pdf";
  const PORTFOLIO_GITHUB_URL="https://github.com/WilliamVelazquez/Blog-Articles/raw/master/Portfolio/2016-2017_Portfolio.pdf";
  
	return(
		<React.Fragment>
      <p className="work-text">In the meantime you can see what I was working on 2016:</p>
      <PdfViewer 
        file={PORTFOLIO_URL}
        width="90%"
        height="500px"
        startPage="1"
        btnTexT="Download"
        btnTitle="Download William's 2016-2017 Portfolio"
        btnFile={PORTFOLIO_GITHUB_URL}
        btnClick={()=>logEvent(GA_WORK_CATEGORY,GA_WORK_DOWNLOAD_ACTION,GA_WORK_DOWNLOAD_LABEL)}
      />
      <style jsx>{`
        .work-text{
          font-size: 22px;
          line-height: normal;
        }
      `}</style>
    </React.Fragment>
	);
}

export default WorkContent;