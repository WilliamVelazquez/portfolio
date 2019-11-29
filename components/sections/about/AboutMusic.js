import React from 'react';
import Gallery from '../../../containers/gallery/Gallery';

const MUSIC_IMG_0 = '/static/music/music_0.png';
const MUSIC_IMG_1 = '/static/music/music_1.png';
const MUSIC_IMG_2 = '/static/music/music_2.png';
const MUSIC_IMG_3 = '/static/music/music_3.png';
const MUSIC_IMG_4 = '/static/music/music_4.png';
const MUSIC_IMG_5 = '/static/music/music_5.png';

const MUSIC_IMAGES = [
  { id: 1, src: MUSIC_IMG_0 },
  { id: 2, src: MUSIC_IMG_1 },
  { id: 3, src: MUSIC_IMG_2 },
  { id: 4, src: MUSIC_IMG_3 },
  { id: 5, src: MUSIC_IMG_4 },
  { id: 6, src: MUSIC_IMG_5 }
];

function AboutMusic(props) {
  return(
    <React.Fragment>
      <p className="section-text">I used to play the Saxophone 🎷 and the Oboe on a Symphonic Orchestra 🎶 some years ago. I had the opportunity to play as an oboe soloist in an important place in my country with the best art school.</p>
      <p className="section-text">I love playing different musical instruments like the Piano 🎹, the Transverse Flute and I'm learning to play the Guitar 🎸 and the Drums🥁.</p>
      {/* <p className="section-text">I love to play musical instruments such as the Saxophone and the Oboe.🎵</p> */} 
      <Gallery 
        columns={6}
        imageGap="0px"
        images={MUSIC_IMAGES}
        maxWidth={false}
        tabletColumns={3}
        mobileColumns={3}
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
