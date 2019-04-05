import React, {Component} from 'react';

import ErrorContent from '../components/ErrorContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Work extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Work" 
        title="William's Work | William Velazquez" 
        description="Discover and test some of the projects that William Velazquez has developed." 
      >
        <ErrorContent msg="Under Construction" />
      </AnalyticsLayout>
    );
  }
}

export default Work;