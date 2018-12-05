import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorContent from '../components/ErrorContent';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props;

    return (
      <div>
        <Header 
          active={`Oh no :( Error ${statusCode}`} 
          title="¡Ups! Page not found | William Velazquez"
          description="Get in touch with William Velazquez who is a Full Stack and Mobile Developer with experience working with ReactJs, NextJS, React Native and other modern technologies" 
        />
        {
          statusCode === 404 ?
          <ErrorContent 
            msg="I couldn't find the page you're looking for :("
            error={statusCode}
          />
          :
          <ErrorContent 
            msg="Hubo un problema :( Intenta nuevamente en un momento"
          />
        }
        <Footer />
      </div>
    )
  }
}