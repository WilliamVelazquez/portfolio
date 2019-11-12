import React from 'react';
import Gallery from '../../../containers/gallery/Gallery';

function AboutMusic(props) {
  const IMAGES = [
    { id: 1, src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600' },
    { id: 2, src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600'},
    { id: 3, src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600'},
    { id: 4, src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600'},
    { id: 5, src: 'https://source.unsplash.com/Igct8iZucFI/800x600'},
    { id: 6, src: 'https://source.unsplash.com/M01DfkOqz7I/800x600'},
    { id: 7, src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600'},
    { id: 8, src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600'}
  ];
  return(
    <React.Fragment>
      <p className="section-text">I used to play the Saxophone 🎷 and the Oboe on a Symphonic Orchestra 🎶 some years ago. I had the opportunity to play as an oboe soloist in an important place in my country with the best art school.</p>
      <p className="section-text">I love playing different musical instruments like the Piano 🎹, the Transverse Flute and I'm learning to play the Guitar 🎸 and the Drums🥁.</p>
      {/* <p className="section-text">I love to play musical instruments such as the Saxophone and the Oboe.🎵</p> */} 
      <Gallery 
        columns={8}
        imageGap="0px"
        images={IMAGES}
        maxWidth={false}
        tabletColumns={6}
        mobileColumns={4}
        overlayBackgroundColor="transparent"
      />
			<style jsx>{`
        .section-text{
          font-size: 20px;
          padding: 0px 100px;
          text-align: justify;
        }
        .section-text:first-letter{
					font-size: 30px;
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

export default AboutMusic;
