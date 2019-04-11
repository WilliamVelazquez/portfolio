import React from 'react';

import NavLink from './NavLink';
import MenuIcon from '../icons/MenuIcon';

function NavWide(props) {
  return(
    <div className="navNarrow">
      <MenuIcon
        toggleMenu={props.toggleMenu}
        menuOpened={props.menuOpened}
      />
      <div className={`slider${props.menuOpened?"":" closed"}`}>
        {
            props.menuOptions.map(
            option =>
            <NavLink
                key={option.id}
                text={option.text}
                active={props.active}
                contextRef={option.context}
                isMobileSized={props.isMobileSized}
            />
            )
        }
      </div>

      <style jsx>{`
          .navNarrow{
            display: grid;
            grid-template-columns: 1fr;
            background: #111317;
            top: 0;
            right: 0;
            padding: 10px;
            padding-bottom: 5px;
            position: absolute;
            border-radius: 0px 0px 10px 10px;
            min-width: 120px;
          }
          .slider{
            display: grid;
            grid-gap: 15px;
            margin-top: 15px;
            margin-bottom: 10px;
            overflow-y: hidden;
            max-height: 200px; /* approximate max height */
            transition-property: all;
            transition-duration: .6s;
            transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
          }
          .slider .closed{
            max-height: 0;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          @media only screen and (max-width : 667px) {
            .navNarrow{
              padding: 5px;
            }
          }
      `}</style>
    </div>
  );
}

export default NavWide;