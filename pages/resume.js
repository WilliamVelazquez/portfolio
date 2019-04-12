import React, {Component} from 'react';

import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Resume extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Resume" 
        title="William's Resume | William Velazquez" 
        description="Discover and test some of the projects that William Velazquez has developed." 
      >
        <ErrorContent msg="Under Construction" />
      </AnalyticsLayout>
    );
  }
}

export default Resume;