import React from 'react';
import {useRouteMatch} from 'react-router-dom';

import messages from '../../translations';
import {IntlProvider} from 'react-intl';

const Internationalize = ({children}) => {
  const {params: {locale}} = useRouteMatch();

  return (
    messages[locale]
      ? <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
        {children}
      </IntlProvider>
      : 'Translation error'
  );
};

Internationalize.propTypes = {};

export default Internationalize;