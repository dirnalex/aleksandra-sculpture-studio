import React from 'react';
import {NavLink} from 'react-router-dom';
import {FormattedMessage, useIntl} from 'react-intl';
import {About, Contact, Home, MenuList, Work} from './MenuStyles';

const Menu = props => {
  const {locale} = useIntl();
  return (
    <MenuList>
      <Home>
        <NavLink to={`/${locale}/home`} activeClassName="selected">
          <FormattedMessage id="menu.home"/>
        </NavLink>
      </Home>
      <About>
        <NavLink to={`/${locale}/about`} activeClassName="selected">
          <FormattedMessage id="menu.about"/>
        </NavLink>
      </About>
      <Work>
        <NavLink to={`/${locale}/work`} activeClassName="selected">
          <FormattedMessage id="menu.work"/>
        </NavLink>
      </Work>
      <Contact>
        <NavLink to={`/${locale}/contact`} activeClassName="selected">
          <FormattedMessage id="menu.contact"/>
        </NavLink>
      </Contact>
    </MenuList>
  );
};

Menu.propTypes = {};

export default Menu;