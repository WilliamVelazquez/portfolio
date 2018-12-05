import React, {Component} from 'react';

import AnalyticsLayout from '../containers/AnalyticsLayout';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';

class About extends Component{
  render() {
    return (
      <AnalyticsLayout>
        <Header 
        	active="About" 
        	title="" 
        	description="" 
        />
        <AboutUs />
      </AnalyticsLayout>
    );
  }
}

export default About;