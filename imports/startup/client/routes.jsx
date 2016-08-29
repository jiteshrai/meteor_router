import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { App404 } from '../../ui/pages/404';
import { Index } from '../../ui/components/index.jsx';

import { AboutUs } from '../../ui/pages/about_us';
import { ContactUs } from '../../ui/pages/contact_us';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/about_us" component={ AboutUs } />
        <Route path="/contact_us" component={ ContactUs } />
        <Route path="/*" component={ App404 } />
      </Route>
    </Router>,
    document.querySelector( '#art-main' )
  );
});
