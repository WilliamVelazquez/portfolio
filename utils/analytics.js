import ReactGA from 'react-ga';

const dev = process.env.NODE_ENV !== 'production';

export const initGA = () => {
  console.log('GA init');
  //ReactGA.initialize('UA-129009818-1',{debug: dev});
  //ReactGA.initialize('UA-129009818-1');
  //ReactGA.initialize('UA-xxxxxxxxx-1');
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  //ReactGA.set({ page: window.location.pathname });
  //For Search Query also add window.location.search
  //ReactGA.pageview(window.location.pathname);
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}