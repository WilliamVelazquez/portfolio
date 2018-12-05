import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../containers/ContactForm';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Contact extends Component{
  
  render() {
    return (
      <AnalyticsLayout>
        <Header 
        	active="Contact" 
        	title="Let's talk | William Velazquez" 
        	description="Get in touch with William Velazquez who is a Full Stack and Mobile Developer with experience working with ReactJs, NextJS, React Native and other modern technologies" 
        />
        <ContactForm />
        <Footer />
      </AnalyticsLayout>
    );
  }
}

export default Contact;