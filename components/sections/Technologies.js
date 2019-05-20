import React from 'react';

import ToneImageToColor from '../ui/ToneImageToColor';

function Technologies(props) {
    const { technologies, width } = props;
	return(
        <div className="technologies-container">
            {
                technologies.map(
                technology =>
                <ToneImageToColor
                    tone='sepia'
                    key={technology.id}
                    text={technology.alt}
                    imgWidth={width}
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
                    grid-template-columns: repeat(${Math.ceil(technologies.length/3)||1}, 1fr);
                }
            `}</style>
        </div>
	);
}

export default Technologies;