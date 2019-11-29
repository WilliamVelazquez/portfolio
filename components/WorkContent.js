import React from 'react';
import { logEvent } from '../utils/analytics';

import UnderlinedLink from './ui/UnderlinedLink';
import DownloadIcon from './icons/DownloadIcon';
import Gallery from './../containers/gallery/Gallery';
import HorizontalSeparator from './ui/HorizontalSeparator';

const IMG_0 = '/static/work/work_0.png';
const IMG_1 = '/static/work/work_1.png';
const IMG_2 = '/static/work/work_2.png';
const IMG_3 = '/static/work/work_3.png';
const IMG_4 = '/static/work/work_4.png';
const IMG_5 = '/static/work/work_5.png';
const IMG_6 = '/static/work/work_6.png';
const IMG_7 = '/static/work/work_7.png';
const IMG_8 = '/static/work/work_8.png';
const IMG_9 = '/static/work/work_9.png';
const IMG_10 = '/static/work/work_10.png';
const IMG_11 = '/static/work/work_11.png';
const IMG_12 = '/static/work/work_12.png';
const IMG_13 = '/static/work/work_13.png';
const IMG_14 = '/static/work/work_14.png';
const IMG_15 = '/static/work/work_15.png';
const IMG_16 = '/static/work/work_16.png';
const IMG_17 = '/static/work/work_17.png';
const IMG_18 = '/static/work/work_18.png';
const IMG_19 = '/static/work/work_19.png';
const IMG_20 = '/static/work/work_20.png';
const IMG_21 = '/static/work/work_21.png';
const IMG_22 = '/static/work/work_22.png';
const IMG_23 = '/static/work/work_23.png';
const IMG_24 = '/static/work/work_24.png';
const IMG_25 = '/static/work/work_25.png';
const IMG_26 = '/static/work/work_26.png';
const IMG_27 = '/static/work/work_27.png';
const IMG_28 = '/static/work/work_28.png';
const IMG_29 = '/static/work/work_29.png';

const WORK_IMAGES = [
  { id: 1, src: IMG_0 },
  { id: 2, src: IMG_1 },
  { id: 3, src: IMG_2 },
  { id: 4, src: IMG_3 },
  { id: 5, src: IMG_4 },
  { id: 6, src: IMG_5 },
  { id: 7, src: IMG_6 },
  { id: 8, src: IMG_7 },
  { id: 9, src: IMG_8 },
  { id: 10, src: IMG_9 },
  { id: 11, src: IMG_10 },
  { id: 12, src: IMG_11 },
  { id: 13, src: IMG_12 },
  { id: 14, src: IMG_13 },
  { id: 15, src: IMG_14 },
  { id: 16, src: IMG_15 },
  { id: 17, src: IMG_16 },
  { id: 18, src: IMG_17 },
  { id: 19, src: IMG_18 },
  { id: 20, src: IMG_19 },
  { id: 21, src: IMG_20 },
  { id: 22, src: IMG_21 },
  { id: 23, src: IMG_22 },
  { id: 24, src: IMG_23 },
  { id: 25, src: IMG_24 },
  { id: 26, src: IMG_25 },
  { id: 27, src: IMG_26 },
  { id: 28, src: IMG_27 },
  { id: 29, src: IMG_28 },
  { id: 30, src: IMG_29 },
];

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

      <HorizontalSeparator text="OR" centered />
      {/* <br /> */}
      <p className="work-text">You can see images from other projects I worked on: </p>

      <Gallery 
				columns={6}
				imageGap="6px"
				images={WORK_IMAGES}
				maxWidth={false}
				tabletColumns={3}
        mobileColumns={3}
        withDarkBorder={true}
			/>

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