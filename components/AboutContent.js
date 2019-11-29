import React from 'react';

import SkewedList from './ui/skewed/SkewedList';
import AboutIntro from './sections/about/AboutIntro';
import AboutMusic from './sections/about/AboutMusic';
import AboutCourses from './sections/about/AboutCourses';
import AboutPlans from './sections/about/AboutPlans';
import AboutCuriosities from './sections/about/AboutCuriosities';

import ColorBar from './ui/ColorBar';

function AboutContent(props) {
  const SECTIONS_DATA = [
		{id:1, content: <AboutIntro />},
		{id:2, title:'Musical Life', content:<AboutMusic />},
		{id:3, title:'Lifelong Learner', content:<AboutCourses />},
		{id:4, title:'Future Plans', content:<AboutPlans />},
		{id:5, title:'Curiosities', content:<AboutCuriosities />},
  ];

  return(
    <>
			<SkewedList 
				data={SECTIONS_DATA}
				titleColor="#fff"
				contentColor="#fff"
				primaryColor="#8E1A1A"
				secondaryColor="#111317"
			/>
			
			<ColorBar color="#8E1A1A" height="10px" />

      <style jsx global>{`
        body {
					margin-top: 0px;
					background-color: #111317;
        }
      `}</style>
    </>
  );
}

export default AboutContent;
