import React from 'react';

import SimplePanel from './SimplePanel';
import RoundedImage from './RoundedImage';

function UserImageCard(props) {
	return(
      <div className="container" id={props.id || null}>
        <SimplePanel backgroundColor="#111317" color="#fff">
            <div className="img-container">
                <RoundedImage
                src={"/static/William.jpg"}
                alt={"William Velazquez Photo"}
                size={"25%"}
                />
                <div className="children-container">
                    {props.children}
                </div>
            </div>
        </SimplePanel>

        <style jsx>{`
            .container{
                margin-top: 15%;
            }
            .img-container{
                margin-top: -15%;
            }
            .children-container{
                display:grid;
            }
        `}</style>
      </div>  
	);
}

export default UserImageCard;