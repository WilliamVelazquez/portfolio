import React from 'react';
import Link from 'next/link';

import Hero from './Hero';

function HomeContent(props) {
	return(
		<div>
      <Hero
        src="/static/William.jpg"
        alt="William Velazquez Photo"
        size="50%"
      >
        <div>
          <span className="text">Hi, I'm </span>
          <h1 className="title">William Velazquez</h1>
          <span className="text">Full Stack Developer</span>
        </div>
      </Hero>

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
            font-size: 28px
          }
          .text{
            font-size: 18px
          }
        }
        
      `}</style>
    </div>
	);
}

export default HomeContent;