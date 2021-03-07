import React from 'react';
import {NavLink} from 'react-router-dom';
import {FormattedMessage, useIntl} from 'react-intl';
import {About, Contact, MenuList, Start, Work} from './MenuStyles';

const Menu = () => {
  const {locale} = useIntl();
  return (
    <MenuList>
      <Start>
        <NavLink exact to={`/${locale}/start`} activeClassName="selected">
          <FormattedMessage id="menu.start"/>
        </NavLink>
      </Start>
      <About>
        <NavLink exact to={`/${locale}/about`} activeClassName="selected">
          <FormattedMessage id="menu.about"/>
        </NavLink>
      </About>
      <Work>
        <NavLink exact to={`/${locale}/work`} activeClassName="selected">
          <FormattedMessage id="menu.work"/>
        </NavLink>
      </Work>
      <Contact>
        <NavLink exact to={`/${locale}/contact`} activeClassName="selected">
          <FormattedMessage id="menu.contact"/>
        </NavLink>
      </Contact>
    </MenuList>
  );
};

export default Menu;