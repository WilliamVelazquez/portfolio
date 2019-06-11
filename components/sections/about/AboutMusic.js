import React from 'react';

function AboutMusic(props) {
  return (
    <React.Fragment>
      <p className="section-text">I used to play the Saxophone 🎷 and the Oboe on a Symphonic Orchestra 🎶 some years ago. I had the opportunity to play as an oboe soloist in an important place in my country with the best art school.</p>
      <p className="section-text">I love playing different musical instruments like the Piano 🎹, the Transverse Flute and I'm learning to play the Guitar 🎸 and the Drums🥁.</p>
      {/* <p className="section-text">I love to play musical instruments such as the Saxophone and the Oboe.🎵</p> */} 
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
