import React from 'react';
import Link from 'next/link';

import Hero from './sections/Hero';
import UserImageCard from './UserImageCard';
import Technologies from './sections/Technologies';

function HomeContent(props) {

  const technologies = [
    {id:1, src:'/static/react_logo.png', alt:'React'},
    {id:2, src:'/static/react_router_logo.png', alt:'React Router'},
    {id:3, src:'/static/svg/react_navigation_logo.svg', alt:'React Navigation'},
    {id:4, src:'/static/webpack_logo.png', alt:'Webpack'},
    {id:5, src:'/static/java_logo.png', alt:'Java'},
    {id:6, src:'/static/angular_logo.png', alt:'React'},
    {id:7, src:'/static/bootstrap_logo.png', alt:'Bootstrap'},
    {id:8, src:'/static/c_sharp_logo.png', alt:'C#'},
    {id:9, src:'/static/unity_logo.png', alt:'Unity'},
    {id:10, src:'/static/html5_logo.png', alt:'HTML 5'},
    {id:11, src:'/static/css_logo.png', alt:'CSS'},
    {id:12, src:'/static/javascript_logo.png', alt:'Javascript'}
  ];

	return(
		<div>
      <Hero />
      <UserImageCard id="intro">
        <Technologies 
          technologies={technologies}
          width="60%"
        />
      </UserImageCard>
      
      <style jsx global>{`
        body{
          margin-top: 0px;
          background-color: #8e1a1a;
        }
      `}</style>
      <style jsx>{`
        
      `}</style>
    </div>
	);
}

export default HomeContent;