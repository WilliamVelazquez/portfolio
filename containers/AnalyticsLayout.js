import React, {Component} from 'react';
import { initGA, logPageView } from '../utils/analytics';

import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

class AnalyticsLayout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render () {
    const {active, title, description, children} = this.props;
    return (
      <>
        <Header 
          active={active} 
          title={title}
          description={description}
        />
        {children}
        <Footer active={active} />
      </>
    )
  }
}

export default AnalyticsLayout;