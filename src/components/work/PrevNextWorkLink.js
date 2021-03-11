import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';

const PrevNextWorkLink = ({labelId, work}) => {
  const {locale} = useIntl();
  return (
    <>
      <FormattedMessage id={labelId}/>
      <a href={`/${locale}/work/${work.id}`}>
        {work.name && work.name[locale] ?
          work.name[locale] :
          work.id
        }
      </a>
    </>
  );
};

export default PrevNextWorkLink;