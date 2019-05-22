import React from 'react';

import ToneImageToColor from '../ui/ToneImageToColor';

function Technologies(props) {
    const { technologies, tone, width, hoverColor, columns } = props;
	return(
        <div className="technologies-container">
            {
                technologies.map(
                technology =>
                <ToneImageToColor
                    tone={tone||'sepia'}
                    key={technology.id}
                    text={technology.alt}
                    imgWidth={width}
                    imgSrc={technology.src}
                    imgAlt={technology.alt}
                    hoverTextColor={hoverColor||'#BF0404'}
                />
                )
            }

            <style jsx>{`
                .technologies-container{
                    display:grid;
                    grid-row-gap: 15px;
                    grid-column-gap: 5px;
                    grid-template-columns: repeat(${columns}, 1fr);/*Math.ceil(technologies.length/3)||1*/
                }
            `}</style>
        </div>
	);
}

export default Technologies;