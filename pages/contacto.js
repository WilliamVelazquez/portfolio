import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../containers/ContactForm';
import AnalyticsLayout from '../containers/AnalyticsLayout';

class Contacto extends Component{
  
  render() {
    return (
      <AnalyticsLayout>
        <Header 
        	active="Contacto" 
        	title="" 
        	description="" 
        />
        <ContactForm />
        <Footer />
      </AnalyticsLayout>
    );
  }
}

export default Contacto;