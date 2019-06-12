import React from 'react';

import UnderlinedLink from '../../ui/UnderlinedLink';

function AboutCourses(props) {
  const WILLIAM_PLATZI_PROFILE='https://platzi.com/@WilliamVelazquez/';
  return(
    <React.Fragment>
      <p className="section-text">I enjoy learning and discovering new things everyday that's why I love to play different muscial instruments or try new technologies.</p>
      <p className="section-text">Nowadays there is much to learn, that is why Platzi is one of my supporters in technical matters, as I can confidently consult issues related to development, Internet of Things(IoT), design and product.</p>
      <p className="section-text">I'm a Platzi Expert Student.💚 You can see the certificates of all the courses I have taken on Platzi to improve my skills!</p>
      <UnderlinedLink 
        href={WILLIAM_PLATZI_PROFILE}
        target="_blank"
        text="William's Platzi Profile"
        color="#fff"
        justify="center"
        fontSize="22px"
        hoverColor="#111317"//"#BF0404"
        lineColor="#111317"//"#BF0404"
      />
        {/* handleClik={()=>logEvent(GA_RESUME_CATEGORY,GA_DOWNLOAD_RESUME_ACTION,GA_RESUME_LABEL)} */}
      {/* <p className="section-icon">💪</p> */}
        
			<style jsx>{`
        .section-text{
          font-size: 20px;
          padding: 0px 100px;
          text-align: justify;
        }
        .section-text:first-letter{
					font-size: 30px;
        }
        .section-text a{
          color: #fff;
          font-size: 20px;
        }
        .section-icon{
          font-size: 20px;
          text-align: center;
        }
        @media only screen and (max-width : 768px) {
          .section-text{
            padding: 0px 10px;
          }
        }
        @media only screen and (max-width: 667px) {
          .section-text{
            font-size: 18px;
          }
        }
			`}</style>
		</React.Fragment>
  );
}

export default AboutCourses;
