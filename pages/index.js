import React, {Component} from 'react';

import HomeContent from '../components/HomeContent';
import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Home extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Home" 
        title="Full Stack Developer | William Velazquez" 
        description="Portfolio website of William Velazquez as a Full Stack and Mobile Developer." 
      >
        <HomeContent />
      </AnalyticsLayout>
    );
  }
}

export default Home;