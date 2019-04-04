import React from 'react';

import NavLink from './NavLink';

function NavWide(props) {
  return(
    <div className="navWide">
      {
        props.menuOptions.map(
          option =>
          <NavLink
            key={option.id}
            text={option.text}
            active={props.active}
            contextRef={option.context}
          />
        )
      }

      <style jsx>{`
          .navWide{
            display:grid;
            grid-template-columns: repeat(2,1fr);
            align-items:center;
          }
      `}</style>
    </div>
  );
}

export default NavWide;