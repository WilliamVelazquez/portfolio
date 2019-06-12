import React, {Component} from 'react';

import ContactForm from '../containers/ContactForm';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Contact extends Component{
  
  render() {
    return (
      <AnalyticsLayout
        active="Contact" 
        title="Let's talk | William Velazquez" 
        description="Get in touch with William Velazquez and make something great taking his experience working on modern technologies like ReactJs, NextJS, React Native, PWA and more." 
      >
        <ContactForm />
      </AnalyticsLayout>
    );
  }
}

export default Contact;