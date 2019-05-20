import React, {Component} from 'react';

import ResumeContent from '../components/ResumeContent';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Resume extends Component{
  render() {
    return (
      <AnalyticsLayout
        active="Resume" 
        title="William's Resume | William Velazquez" 
        description="Find out the experience, education, skills, tools and more details of William Velazquez" 
      >
        <ResumeContent />
      </AnalyticsLayout>
    );
  }
}

export default Resume;