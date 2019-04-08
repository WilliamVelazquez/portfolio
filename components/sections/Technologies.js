import React from 'react';

import SimplePanel from '../SimplePanel';
import PhotoBand from '../PhotoBand';

function HomeContent(props) {
	return(
	  <SimplePanel backgroundColor="#111317" color="#fff">
            
        <PhotoBand
            imgSrc="/static/William.jpg"
            imgAlt="William Velazquez Photo"
            imgSize="60%"
            color="transparent"
            id="intro"
        >
            <div className="react-logo"></div>
        </PhotoBand>

        <style jsx>{`
            .react-logo{
                width: 300px;
                height: 300px;
                justify-self: center;
                background-size: contain;
                background-image: url(/static/react_logo.png);
            }
        `}</style>
    </SimplePanel>
	);
}

export default HomeContent;