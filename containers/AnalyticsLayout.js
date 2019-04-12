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
    return (
      <div>
        <Header 
          active={this.props.active} 
          title={this.props.title}
          description={this.props.description}
        />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default AnalyticsLayout;