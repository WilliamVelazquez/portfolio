import React from 'react';

import RibbonPanel from './ui/RibbonPanel';
import SectionList from './ui/SectionList';
import SimplePanel from './ui/SimplePanel';
import List from './ui/List';

function ResumeContent(props) {

  const experience = [
    {id:1, title:'Secretary of Public Education (Government)', date:'2018-Present', description:'Area Director of the General Directorate of Information Systems. Management of National Projects, Software Development (Java, AngularJS and ReacJS), Database Management (MySQL and SQL Server).'},
    {id:2, title:'Crédito Real & AFS Acceptance, LLC (United States)', date:'2016-2018', description:'Systems analyst. Software development, Key Performance Indicators, Databases Management, Dashboards, Web Services, SPA and Web Platforms.'},
    {id:3, title:'Bank of Mexico - Management of financial system risk analysis', date:'2016', description:'Analysis, design and maintenance of software, security and databases.'},
    {id:4, title:'Quality Publicidad', date:'2012-2016', description:'Local Network Administrator, Graphic designer and Administrative functions.'},
  ];
	
	const education = [
    {id:1, title:'Platzi - Online Education', date:'2017-Present', description:'Career in Databases Management. Career in Development with React (React, Redux, React Router, Next). Career in Apps Development with React Native. Career in Big Data and Data Science.'},
    {id:2, title:'University', date:'2012-2016', description:'Instituto Politécnico Nacional (IPN) - National Polytechnic Institute   Escuela Superior de Cómputo (ESCOM) - Higher School of Computer Science   Academic Excellence Program all the career   Award for the Best Project of the Academy of Software Engineering   of the XX Expo ESCOM 2015   Programming Languages: Java, SQL, HTML, JavaScript, CSS, C#, C and Python.'},
    {id:3, title:'High School', date:'2010-2012', description:'Centro Escolar Benemérito de las Américas - Benemerito School Center of the Americas.'},
	];
	
	const languages = [
    {id:1, title:'Spanish', description:'Native language'},
    {id:2, title:'English', description:'B2 level on the Common European Framework of References for Languages'},
    {id:3, title:'Korean', description:'Hansamo IPN – 한사모'},
	];

	const OTHERS = [
    {id:1, title:'Jury in hack ESCOM', description:'25th Anniversary, August 2018'},
    {id:2, title:'Founder and tutor of a club', description:'Extracurricular club at university'},
    {id:3, title:'Oboe Soloist', description:'80th anniversary of the School of Artistic Initiation (SAI) #1 of the National Institute of Fine Arts - Instituto Nacional de Bellas Artes (INBA) - EIA #1'},
	];

	return(
		<div>
			<RibbonPanel 
				textAlign="center"
				ribbonColor="#111317"
				contentColor="#111317"
				title="William's Resume"
			>
				<p className="resume-text">
					Develop myself professionally as part of a leading company in which I can contribute with my skills and knowledge in the systems area, always seeking to progress and improve the performance of my activities to achieve positions of greater responsibility and challenge. Offer solutions according to the expectations of the companies, creating opportunities for personal and professional development.
				</p>
				<div className="resume-content">
					<SectionList 
						data={experience}
						color="#111317"
						title="Work experience"
					/>
					<SectionList 
						data={education}
						color="#111317"
						title="Education"
					/>
					<SectionList 
						data={languages}
						color="#111317"
						title="Languages"
					/>
					<SectionList 
						data={OTHERS}
						color="#111317"
						title="Other information"
					/>
				</div>
			</RibbonPanel>
      <style jsx>{`
				.resume-text{
					font-size: 22px;
					text-align: justify;
					line-height: normal;
				}
				.resume-content{
					display: grid;
					grid-column-gap: 25px;
					grid-row-gap: 10px;
					grid-template-columns: repeat(2, 1fr);
				}
				@media only screen and (max-width : 768px) {
          .resume-text{
            font-size: 16px;
					}
					.resume-content{
						grid-template-columns: 1fr;
					}
        }
      `}</style>
    </div>
	);
}

export default ResumeContent;