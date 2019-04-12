import React from 'react';

import ToneImageToColor from '../ToneImageToColor';

function Technologies(props) {
	return(
        <div className="technologies-container">
            {
                props.technologies.map(
                technology =>
                <ToneImageToColor
                    tone='sepia'
                    key={technology.id}
                    text={technology.alt}
                    imgWidth={props.width}
                    imgSrc={technology.src}
                    imgAlt={technology.alt}
                    hoverTextColor='#BF0404'
                />
                )
            }

            <style jsx>{`
                .technologies-container{
                    display:grid;
                    grid-row-gap: 15px;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            `}</style>
        </div>
	);
}

export default Technologies;