import React from 'react';

function AboutPlans(props) {
  return(
    <React.Fragment>
      <p className="section-text">I'm currently planning to create a podcast 🎤 about software development 👨‍💻 where I can share experiences and some tips for those who enter this great world of programming and technology.</p>
      <p className="section-text">I am also working to create a Blog 📝 where I can have a knowledge base 📚 where everyone can look for common solutions in software development, especially with Progressive Web Apps and modern technologies.</p>
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

export default AboutPlans;
