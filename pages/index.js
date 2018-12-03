import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Home extends Component{
  render() {
    return (
      <AnalyticsLayout>
        <Header 
        	active="" 
        	title="Full Stack Developer | William Velazquez" 
        	description="Portfolio website of William Velazquez as a Full Stack and Mobile Developer." 
        />
        <ErrorContent msg="Under Construction"/>
        <Footer />
      </AnalyticsLayout>
    );
  }
}

export default Home;