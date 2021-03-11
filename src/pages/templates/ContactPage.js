import React from 'react';
import styled, {css} from 'styled-components';
import {useIntl} from 'react-intl';
import {Blinking, StandardTopBottomMargin} from '../../ReuseStyles';
import VerticalScroll from '../../components/Vertical Scroll';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Text = styled.p`
  font-family: NeueMontrealLight, sans-serif;
  flex: 100% 0 0;
  max-width: 100%;
  margin-bottom: 24px;
  font-weight: 300;
  font-size: 1.75em;
  line-height: 129%;
`;

const LinksContainer = styled.div`
  flex: 100% 0 0;
  box-sizing: border-box;
  padding-left: 20%;
  margin-bottom: 20px;
  @media only screen and 
      (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    padding-left: 0;
  }
`;

const LinksInnerContainer = styled.div`
  display: inline-block;
  &:hover a {
    animation: none;
    color: ${({theme}) => theme.app.textColor};
  }
`;

const LinkStyle = css`
  &&:hover {
    color: ${({theme}) => theme.app.emphasisedTextColor};
  }
  display: block;
`;

const Mail = styled.a`
  ${Blinking()};
  ${LinkStyle};
`;

const Instagram = styled.a`
  ${Blinking(333)};
  ${LinkStyle};
`;

const Facebook = styled.a`
  ${Blinking(666)};
  ${LinkStyle};
`;


const ContactPage = ({text = {}, mail, instagramLink, facebookLink, phone}) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <VerticalScroll>
        <ContentContainer>
          {text[locale] &&
          <Text>{text[locale]}</Text>}
          <LinksContainer>
            <LinksInnerContainer>
              {mail && <Mail href={`mailto:${mail}`} target="_blank">{mail}</Mail>}
              {instagramLink && <Instagram href={instagramLink} target="_blank">Instagram</Instagram>}
              {facebookLink && <Facebook href={facebookLink} target="_blank">Facebook</Facebook>}
              {phone}
            </LinksInnerContainer>
          </LinksContainer>
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
  );
};

export default ContactPage;