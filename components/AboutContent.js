import React from 'react';

import SkewedList from './ui/SkewedList';
import AboutIntro from './sections/about/AboutIntro';
import AboutMusic from './sections/about/AboutMusic';

function AboutContent(props) {
  const SECTIONS_DATA = [
		{id:1, content: <AboutIntro />},
		{id:2, title:'Music', content:<AboutMusic />},
		{id:3, title:'Sports', text:'I used to practice fencing and swimming.', content:<div>Test A</div>},
		{id:4, title:'Courses', text:'I\'m a Platzi Expert Student', content:<div>Test A</div>},
		{id:5, title:'Family', text:'I love my family.', content:<div>Test A</div>},
  ];

  return (
    <>
			<SkewedList 
				data={SECTIONS_DATA}
				titleColor="#fff"
				contentColor="#fff"
				primaryColor="#8E1A1A"
				secondaryColor="#111317"
			/>
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
