import React from 'react';
import Link from 'next/link';
import { logEvent } from '../../../utils/analytics';

import RoundedImage from '../../ui/RoundedImage';

function AboutIntro(props) {
  const GA_ABOUT_INTRO_CATEGORY="About";
  const GA_ABOUT_INTRO_CONTACT_ACTION="About - Drop a line!";
  const GA_ABOUT_INTRO_CONTACT_LABEL='About to Contact';
  return(
    <React.Fragment>
			<h1 className="about-intro-title">Want to know about William Velazquez?</h1>
      <div className="intro-container">
        <div className="intro-text-container">
          <p className="intro-text">In the following sections you can find about my hobbies, the things that I like to do on my free time, some others that I used to do and things that I'm planning to do!</p>
          <p className="intro-text">If you want to know more about me, you can always <Link href="/contact"><a title="Contact William Velazquez" className="contact-text not-breakable" onClick={()=>logEvent(GA_ABOUT_INTRO_CATEGORY,GA_ABOUT_INTRO_CONTACT_ACTION,GA_ABOUT_INTRO_CONTACT_LABEL)}>drop me a line!</a></Link></p>
        </div>
        <RoundedImage
          src={"/static/William.jpg"}
          alt={"William Velazquez Photo"}
          size={"250px"}
          mobileSize={"150px"}
        />
      </div>
			<style jsx>{`
				.about-intro-title{
          color: #fff;
					font-size: 60px;
					margin: 20px 0px;
          text-align: center;
        }
        .intro-container{
          display: grid;
          grid-column-gap: 80px;
          grid-row-gap: 5px;
          padding: 0px 30px;
          align-items: center;
          justify-content: center;
          grid-template-columns: 1fr min-content;
        }
        .intro-text{
          font-size: 20px;
					margin: 10px 0px;
          /*padding: 0px 60px;*/
          text-align: justify;
        }
        .intro-text:first-letter{
					font-size: 30px;
        }
        .contact-text{
          color: #fff;
          cursor: pointer;
          font-weight: bold;
          text-decoration:none;
          transition: all 0.4s;
					-o-transition: all 0.4s;
					-moz-transition: all 0.4s;
					-webkit-transition: all 0.4s;
        }
        .contact-text:hover{
          color: #111317;
        }
        .not-breakable{
          white-space: nowrap;
        }
        @media only screen and (max-width : 768px) {
          .about-intro-title{
            font-size: 40px;
          }
          .intro-container{
            padding: 0px 10px;
            grid-column-gap: 20px;
          }
          .intro-text{
            padding: 0px 10px;
          }
        }
        @media only screen and (max-width: 667px) {
          .about-intro-title{
            font-size: 30px;
          }
          .intro-container{
            grid-template-columns: 1fr;
          }
        }
			`}</style>
		</React.Fragment>
  );
}

export default AboutIntro;
