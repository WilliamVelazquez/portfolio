import React from 'react';

import Hero from './sections/Hero';
import UserImageCard from './UserImageCard';
import Technologies from './sections/Technologies';

function HomeContent(props) {

  const technologies = [
    {id:1, src:'/static/logos/react_logo.png', alt:'React'},
    {id:2, src:'/static/logos/react_router_logo.png', alt:'React Router'},
    {id:3, src:'/static/svg/react_navigation_logo.svg', alt:'React Navigation'},
    {id:4, src:'/static/logos/webpack_logo.png', alt:'Webpack'},
    {id:5, src:'/static/logos/java_logo.png', alt:'Java'},
    {id:6, src:'/static/logos/angular_logo.png', alt:'Angular'},
    {id:7, src:'/static/logos/bootstrap_logo.png', alt:'Bootstrap'},
    {id:8, src:'/static/logos/c_sharp_logo.png', alt:'C#'},
    {id:9, src:'/static/logos/unity_logo.png', alt:'Unity'},
    {id:10, src:'/static/logos/html5_logo.png', alt:'HTML 5'},
    {id:11, src:'/static/logos/css_logo.png', alt:'CSS'},
    {id:12, src:'/static/logos/javascript_logo.png', alt:'Javascript'}
  ];

	return(
		<div>
      <Hero />
      <UserImageCard id="intro">
        <Technologies 
          technologies={technologies}
          width="50%"
        />
      </UserImageCard>
      
      <style jsx global>{`
        body{
          margin-top: 0px;
          background-color: #8e1a1a;
        }
      `}</style>
    </div>
	);
}

export default HomeContent;