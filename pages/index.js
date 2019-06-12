import React, {Component} from 'react';

import HomeContent from '../components/HomeContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Home extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Home" 
        title="Full Stack Developer | William Velazquez" 
        description="Portfolio website of William Velazquez as a Full Stack Developer with experience working on modern technologies like ReactJs, NextJS, React Native, PWA and more." 
      >
        <HomeContent />
      </AnalyticsLayout>
    );
  }
}

export default Home;