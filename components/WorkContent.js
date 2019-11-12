import React from 'react';
import { logEvent } from '../utils/analytics';

import UnderlinedLink from './ui/UnderlinedLink';
import DownloadIcon from './icons/DownloadIcon';
import Gallery from './../containers/gallery/Gallery';

const IMAGES = [
  { id: 1, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
  { id: 2, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600' },
  { id: 3, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600' },
  { id: 4, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600' },
  { id: 5, src: 'https://source.unsplash.com/Igct8iZucFI/800x600' },
  { id: 6, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600' },
  { id: 7, src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600' },
  { id: 8, src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600' },
  { id: 9, src: 'https://source.unsplash.com/s48nn4NtlZ4/800x600' },
  { id: 10, src: 'https://source.unsplash.com/E4944K_4SvI/800x600' },
  { id: 11, src: 'https://source.unsplash.com/F5Dxy9i8bxc/800x600' },
  { id: 12, src: 'https://source.unsplash.com/iPum7Ket2jo/800x600' },
  { id: 13, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
  { id: 14, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600' },
  { id: 15, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600' },
  { id: 16, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600' },
  { id: 17, src: 'https://source.unsplash.com/Igct8iZucFI/800x600' },
  { id: 18, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600' },
  { id: 19, src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600' },
  { id: 20, src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600' },
  { id: 21, src: 'https://source.unsplash.com/s48nn4NtlZ4/800x600' },
  { id: 22, src: 'https://source.unsplash.com/E4944K_4SvI/800x600' },
  { id: 23, src: 'https://source.unsplash.com/F5Dxy9i8bxc/800x600' },
  { id: 24, src: 'https://source.unsplash.com/iPum7Ket2jo/800x600' },
  { id: 25, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
  { id: 26, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600' },
  { id: 27, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600' },
  { id: 28, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600' },
  { id: 29, src: 'https://source.unsplash.com/Igct8iZucFI/800x600' },
  { id: 30, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600' },
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

      <Gallery 
				columns={10}
				imageGap="0px"
				images={IMAGES}
				maxWidth={false}
				tabletColumns={6}
				mobileColumns={3}
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