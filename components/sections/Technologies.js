import React from 'react';

import ImageSepiaToColor from '../ImageSepiaToColor';

function Technologies(props) {
	return(
        <div className="technologies-container">
            {
                props.technologies.map(
                technology =>
                <ImageSepiaToColor
                    key={technology.id}
                    imgSrc={technology.src}
                    imgAlt={technology.alt}
                    imgWidth={props.width}
                />
                )
            }

            <style jsx>{`
                .technologies-container{
                    display:grid;
                    grid-row-gap: 20px;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            `}</style>
        </div>
	);
}

export default Technologies;