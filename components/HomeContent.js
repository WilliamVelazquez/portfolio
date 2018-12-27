import React from 'react';
import Link from 'next/link';

import Hero from './Hero';
import HeroWave from './HeroWave';

function HomeContent(props) {
	return(
		<div>
      <HeroWave 
        color="#BF0404"
        background="#ffffff"
      />
      <Hero
        imgSrc="/static/William.jpg"
        imgAlt="William Velazquez Photo"
        imgSize="60%"
        color="#BF0404"
      >
        <div>
          <span className="text">Hi, I'm </span>
          <h1 className="title">William Velazquez</h1>
          <span className="text">Full Stack Developer</span>
        </div>
      </Hero>
      <HeroWave 
        color="#BF0404"
        background="#ffffff"
      />

      <style jsx>{`
        .title{
          margin: 10px;
          font-size: 48px;
          color: #fff;
        }
        .text{
          font-size: 30px;
          color: #fff;
        }
        
        @media only screen and (max-width : 768px) {
          .title{
            font-size: 38px
          }
          .text{
            font-size: 20px
          }
        }
        @media only screen and (max-width : 667px) {
          .title{
            font-size: 24px
          }
          .text{
            font-size: 14px
          }
        }
        
      `}</style>
    </div>
	);
}

export default HomeContent;