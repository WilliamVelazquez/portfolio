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
        	active="Inicio" 
        	title="Publidad de calidad y variedad en Artículos publicitarios | Quality Publicidad" 
        	description="Empresa de publicidad dedicada al diseño y producción de papelería, folletería, imagen corporativa, tarjetas, pósters, rotulación, banners, promocionales y más." 
        />
        <ErrorContent msg="En Construcción"/>
        <Footer />
      </AnalyticsLayout>
    );
  }
}

export default Home;