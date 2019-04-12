import React, {Component} from 'react';

import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class About extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="About" 
        title="About William Velazquez | William Velazquez"
        description="Do you want to know more about William Velázquez? You're in the right place! Let's find out what he likes, hobbies and curiosities." 
      >
        <ErrorContent msg="Under Construction" />
      </AnalyticsLayout>
    );
  }
}

export default About;