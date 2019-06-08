import React from 'react';

import SkewedList from './ui/SkewedList';

function AboutContent(props) {
  const SECTIONS_DATA = [
		{id:1, title:'Who is William?', text:'I\'m a Full Stack Developer.', content:<div>Test A</div>},
		{id:2, title:'Music', text:'I love to play different musical instruments such as the Saxophone and the Oboe.', content:<div>Test A</div>},
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
				primaryColor="#8E1A1A"//"#111317"
				secondaryColor="#111317"//"#eaeaea"//"#8E1A1A"
			/>

      <style jsx global>{`
        body {
					margin-top: 0px;
					background-color: #111317;//#eaeaea;
        }
      `}</style>
      <style jsx>{``}</style>
    </>
  );
}

export default AboutContent;
