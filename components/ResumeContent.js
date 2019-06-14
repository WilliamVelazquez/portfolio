import React from 'react';
import { logEvent } from '../utils/analytics';

import RibbonPanel from './ui/RibbonPanel';
import SectionList from './ui/SectionList';
import TitleBand from './ui/TitleBand';
import Technologies from './sections/Technologies';
import UnderlinedLink from './ui/UnderlinedLink';
import DownloadIcon from './icons/DownloadIcon';

function ResumeContent(props) {
	const GA_RESUME_CATEGORY="Resume";
	const GA_RESUME_DOWNLOAD_ACTION="Download Resume";
	const GA_RESUME_LABEL="Resume downloaded";

	const RESUME_URL = "https://github.com/WilliamVelazquez/Blog-Articles/raw/master/Portfolio/WilliamVelazquez_Resume.pdf";

	const OBJECTIVE = "Develop myself professionally as part of a leading company in which I can contribute with my skills and knowledge in the systems area, always seeking to progress and improve the performance of my activities to achieve positions of greater responsibility and challenge.\nOffer solutions according to the expectations of the companies, creating opportunities for personal and professional development.";
  const EXPERIENCE_DATA = [
    {id:1, title:'Secretary of Public Education (Government)', date:'2018-Present', description:'Area Director of the General Directorate of Information Systems.\nManagement of National Projects.\nSoftware Development (Java, AngularJS and ReacJS).\nDatabase Management (MySQL and SQL Server).'},
    {id:2, title:'Crédito Real (México) & AFS Acceptance, LLC (United States)', date:'2016-2018', description:'Systems analyst.\nSoftware development.\nDatabases Management.\nKey Performance Indicators.\nDashboards, Web Services, SPA and Web Platforms.'},
    {id:3, title:'Bank of Mexico - Management of financial system risk analysis', date:'2016', description:'Analysis, design and maintenance of software, security and databases.'},
    {id:4, title:'Quality Publicidad', date:'2012-2016', description:'Local Network Administrator, Graphic designer and Administrative functions.'},
  ];
	
	const EDUCATION_DATA = [
    {id:1, title:'Platzi - Online Education', date:'2017-Present', description:'Career in Databases Management.\nCareer in Development with React (React, Redux, React Router, Next).\nCareer in Apps Development with React Native.\nCareer in Big Data and Data Science.'},
    {id:2, title:'University', date:'2012-2016', description:'Instituto Politécnico Nacional (IPN) - National Polytechnic Institute | Escuela Superior de Cómputo (ESCOM) - Higher School of Computer Science.\nAcademic Excellence Program all the career.\nAward for the Best Project of the Academy of Software Engineering of the XX Expo ESCOM 2015.\nProgramming Languages:\nJava, SQL, HTML, JavaScript, CSS, C#, C and Python.'},
    {id:3, title:'High School', date:'2010-2012', description:'Centro Escolar Benemérito de las Américas - Benemerito School Center of the Americas.'},
	];
	
	const LANGUAGES_DATA = [
    {id:1, title:'Spanish', description:'Native language'},
    {id:2, title:'English', description:'B2 level on the Common European Framework of References for Languages'},
    {id:3, title:'Korean', description:'Hansamo IPN – 한사모'},
	];

	const OTHERS_DATA = [
    {id:1, title:'Jury in hack ESCOM', description:'25th Anniversary, August 2018'},
    {id:2, title:'Founder and tutor of a club', description:'Extracurricular club at university'},
    {id:3, title:'Oboe Soloist', description:'80th anniversary of the School of Artistic Initiation (SAI) #1 of the National Institute of Fine Arts - Instituto Nacional de Bellas Artes (INBA) - EIA #1'},
	];

	const TECHNOLOGIES = [
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
		<>
			<RibbonPanel 
				textAlign="center"
				ribbonColor="#111317"
				contentColor="#111317"
				title="William's Resume"
			>
				<p className="resume-text">
					{OBJECTIVE}
				</p>
				<div className="resume-content">
					<SectionList 
						data={EXPERIENCE_DATA}
						color="#111317"
						title="Work experience"
					/>
					<SectionList 
						data={EDUCATION_DATA}
						color="#111317"
						title="Education"
					/>
					<SectionList 
						data={LANGUAGES_DATA}
						color="#111317"
						title="Languages"
					/>
					<SectionList 
						data={OTHERS_DATA}
						color="#111317"
						title="Other information"
					/>
				</div>

				<TitleBand 
					rounded={true}
					position="center"
					title="Technologies"
				/>
				<Technologies 
					tone="gray"
          width="30%"
					columns="6"
          hoverColor="#111317"
          technologies={TECHNOLOGIES}
        />
				<UnderlinedLink 
					href={RESUME_URL}
					target="_blank"
					text="Download"
					color="#111317"
					justify="flex-end"
					lineColor="#BF0404"
					hoverColor="#BF0404"
					title="Download William's Resume"
					handleClik={()=>logEvent(GA_RESUME_CATEGORY,GA_RESUME_DOWNLOAD_ACTION,GA_RESUME_LABEL)}
				>
					<DownloadIcon
						size={20}
						color="#111317"
						hoverColor="#BF0404"
					/>
				</UnderlinedLink>
				<style jsx>{`
					.resume-text{
						font-size: 22px;
						text-align: justify;
						line-height: normal;
					}
					.resume-content{
						display: grid;
						grid-row-gap: 10px;
						grid-column-gap: 25px;
						grid-template-columns: repeat(2, 1fr);
					}
					@media only screen and (max-width : 768px) {
						.resume-text{
							font-size: 16px;
							white-space: pre-line;
						}
						.resume-content{
							grid-template-columns: 1fr;
						}
					}
				`}</style>
			</RibbonPanel>
    </>
	);
}

export default ResumeContent;