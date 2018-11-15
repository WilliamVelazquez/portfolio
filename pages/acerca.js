import React, {Component} from 'react';

import AnalyticsLayout from '../containers/AnalyticsLayout';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';

class Nosotros extends Component{
  render() {
    return (
      <AnalyticsLayout>
        <Header 
        	active="Nosotros" 
        	title="" 
        	description="" 
        />
        <AboutUs />
      </AnalyticsLayout>
    );
  }
}

export default Nosotros;