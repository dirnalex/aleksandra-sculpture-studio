import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {FormattedMessage, useIntl} from 'react-intl';
import {About, Contact, LanguageSwitch, MenuList, Start, Work} from './MenuStyles';

const Menu = () => {
  const {locale} = useIntl();
  const {pathname} = useLocation();
  const otherLocale = locale === 'en' ? 'pl' : (locale === 'pl' && 'en');
  return (
    <MenuList>
      {otherLocale && pathname &&
      <LanguageSwitch>
        <Link to={pathname.replace(`/${locale}/`, `/${otherLocale}/`)}>
          {otherLocale}
        </Link>
      </LanguageSwitch>
      }
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