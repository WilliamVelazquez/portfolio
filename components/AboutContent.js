import React from 'react';

import SkewedList from './ui/skewed/SkewedList';
import AboutIntro from './sections/about/AboutIntro';
import AboutMusic from './sections/about/AboutMusic';
import AboutCourses from './sections/about/AboutCourses';
import AboutPlans from './sections/about/AboutPlans';
import AboutCuriosities from './sections/about/AboutCuriosities';

import Gallery from './../containers/gallery/Gallery';
import ColorBar from './ui/ColorBar';

function AboutContent(props) {
	const IMAGES = [
    { id: 1, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
    { id: 2, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600'},
    { id: 3, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600'},
    { id: 4, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600'},
    { id: 5, src: 'https://source.unsplash.com/Igct8iZucFI/800x600'},
    { id: 6, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600'},
    { id: 7, src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600'},
    { id: 8, src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600'},
    { id: 9, src: 'https://source.unsplash.com/s48nn4NtlZ4/800x600'},
    { id: 10, src: 'https://source.unsplash.com/E4944K_4SvI/800x600'},
    { id: 11, src: 'https://source.unsplash.com/F5Dxy9i8bxc/800x600'},
		{ id: 12, src: 'https://source.unsplash.com/iPum7Ket2jo/800x600'},
		{ id: 13, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
    { id: 14, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600'},
    { id: 15, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600'},
    { id: 16, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600'},
    { id: 17, src: 'https://source.unsplash.com/Igct8iZucFI/800x600'},
    { id: 18, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600'},
    { id: 19, src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600'},
    { id: 20, src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600'},
    { id: 21, src: 'https://source.unsplash.com/s48nn4NtlZ4/800x600'},
    { id: 22, src: 'https://source.unsplash.com/E4944K_4SvI/800x600'},
    { id: 23, src: 'https://source.unsplash.com/F5Dxy9i8bxc/800x600'},
    { id: 24, src: 'https://source.unsplash.com/iPum7Ket2jo/800x600'}
  ];

  const SECTIONS_DATA = [
		{id:1, content: <AboutIntro />},
		{id:2, title:'Musical Life', content:<AboutMusic />},
		{id:3, title:'Lifelong Learner', content:<AboutCourses />},
		{id:4, title:'Future Plans', content:<AboutPlans />},
		{id:5, title:'Curiosities', content:<AboutCuriosities />},
		// {id:6, title:'Gallery', content:<Gallery images={IMAGES}/>}
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
			<Gallery 
				columns={8}
				imageGap="0px"
				images={IMAGES}
				maxWidth={false}
				tabletColumns={6}
				mobileColumns={4}
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
