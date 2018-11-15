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
        <Header active={`Oh no :( Error ${statusCode}`} />
        {
          statusCode === 404 ?
          <ErrorContent 
            msg="Esta página no existe :("
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