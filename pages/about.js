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
        	title="About William Velazquez | William Velazquez"
          description="Get in touch with William Velazquez who is a Full Stack and Mobile Developer with experience working with ReactJs, NextJS, React Native and other modern technologies" 
        />
        <AboutUs />
      </AnalyticsLayout>
    );
  }
}

export default About;