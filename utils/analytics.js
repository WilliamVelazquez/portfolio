import ReactGA from 'react-ga';

const dev = process.env.NODE_ENV !== 'production';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-130499063-1',{debug: dev});
  //ReactGA.initialize('UA-129009818-1');
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  //For Search Query also add window.location.search
  ReactGA.pageview(window.location.pathname);
}

export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    console.log(`Logging event for Category:${category}, Action:${action} and Label:${label}`);
    ReactGA.event({ category, action, label });
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    console.log(`Logging event for exception ${description} | ${fatal}`);
    ReactGA.exception({ description, fatal });
  }
}