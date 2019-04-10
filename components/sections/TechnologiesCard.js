import React from 'react';

import SimplePanel from '../SimplePanel';
import RoundedImage from '../RoundedImage';
import ImageSepiaToColor from '../ImageSepiaToColor';

function TechnologiesCard(props) {
	return(
	  <SimplePanel backgroundColor="#111317" color="#fff">
        <RoundedImage
        src={"/static/William.jpg"}
        alt={"William Velazquez Photo"}
        size={"25%"}
        />
        <div className="technologies-container">
            <ImageSepiaToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageSepiaToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageSepiaToColor 
                imgSrc="/static/react_logo.png"
                imgWidth="60%"
            />
            <ImageSepiaToColor 
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

export default TechnologiesCard;