import React from 'react';

import SimplePanel from '../SimplePanel';
import RoundedImage from '../RoundedImage';
import ImageGrayToColor from '../ImageGrayToColor';

function HomeContent(props) {
	return(
	  <SimplePanel backgroundColor="#111317" color="#fff">
        <RoundedImage
        src={"/static/William.jpg"}
        alt={"William Velazquez Photo"}
        size={"25%"}
        />
        <div className="technologies-container">
            <ImageGrayToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageGrayToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageGrayToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageGrayToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
        </div>

        <style jsx>{`
            .technologies-container{
                display:grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        `}</style>
    </SimplePanel>
	);
}

export default HomeContent;