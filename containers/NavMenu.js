import React, {Component} from 'react';

import NavNarrow from '../components/navigation/NavNarrow';
import NavWide from '../components/navigation/NavWide';
import withDimensions from './withDimension';

class NavMenu extends Component{
  state={
    menuOpened: false
  }

  toggleMenu = () => {
    this.setState({menuOpened:!this.state.menuOpened});
  }

  render() {
    
    const menuOptions = [
      {id:1, context:'', text:'Home'},
      {id:2, context:'about', text:'About'},
      {id:3, context:'resume', text:'Resume'},
      {id:4, context:'work', text:'Work'},
      {id:5, context:'contact', text:'Contact'},
    ];

    return(
      <nav>
        {
          this.props.isMobileSized ?
          <NavNarrow 
            menuOptions={menuOptions}
            active={this.props.active}
            toggleMenu={this.toggleMenu}
            menuOpened={this.state.menuOpened}
            isMobileSized={this.props.isMobileSized}
          />
          :
          <NavWide 
            menuOptions={menuOptions}
            active={this.props.active}
            isMobileSized={this.props.isMobileSized}
          />
        }
      </nav>
    );
  }
}

export default withDimensions(NavMenu);