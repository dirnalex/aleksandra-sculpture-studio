import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';

import messages from '../../translations';

const Internationalize = ({locale, children}) => {

  return (
    messages[locale]
      ? <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
        {children}
      </IntlProvider>
      : 'Translation error'
  );
};

Internationalize.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.node
};

export default Internationalize;