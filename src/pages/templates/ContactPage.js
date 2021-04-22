import React from 'react';
import styled, {css} from 'styled-components';
import {useIntl} from 'react-intl';
import {Blinking, StandardTopBottomMargin} from '../../ReuseStyles';
import VerticalScroll from '../../components/Vertical Scroll';

const PageContainer = styled.div`
  ${StandardTopBottomMargin};
  max-width: 930px;
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const Text = styled.p`
  font-family: NeueMontrealLight, sans-serif;
  flex: 100% 0 0;
  max-width: 100%;
  margin-bottom: 24px;
  font-weight: 300;
  font-size: 1.75em;
  line-height: 129%;
  white-space: pre-line;
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
`;

const Mail = styled.a`
  ${Blinking()};
  ${LinkStyle};
  display: block;
`;

const Instagram = styled.a`
  ${Blinking(200)};
  ${LinkStyle};
  display: block;
`;

const Facebook = styled.a`
  ${Blinking(400)};
  ${LinkStyle};
  display: block;
`;

const Authorship = styled.p`
  z-index: 999;
  font-size: 0.6em;
  line-height: 125%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({theme}) => theme.app.bottomMargin * 2}px;
  @media only screen and 
    (max-width: ${({theme}) => theme.mobileBreakpoint()}px) {
    bottom: ${({theme}) => theme.app.bottomMarginMobile * 2}px;
  }
`;

const Unbreakable = styled.span`
  white-space: nowrap;
`;

const Asia = styled.a`
  ${Blinking(600)};
  ${LinkStyle};
`;

const Alex = styled.a`
  ${Blinking(800)};
  ${LinkStyle};
`;

const ContactPage = ({
                       text = {},
                       mail,
                       instagramLink,
                       facebookLink,
                       phone,
                       authorship: {
                         designBy = {},
                         codeBy = {},
                         joannaName,
                         alekseiName,
                         joannaMail,
                         alekseiMail
                       }
                     }) => {
  const {locale} = useIntl();
  return (
    <PageContainer>
      <VerticalScroll>
        <ContentContainer>
          {text[locale] &&
          <Text>{text[locale]}</Text>}
          <LinksContainer>
            <LinksInnerContainer>
              {mail &&
              <Mail href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">{mail}</Mail>
              }
              {instagramLink &&
              <Instagram href={instagramLink} target="_blank" rel="noopener noreferrer">Instagram</Instagram>
              }
              {facebookLink &&
              <Facebook href={facebookLink} target="_blank" rel="noopener noreferrer">Facebook</Facebook>
              }
              {phone}
            </LinksInnerContainer>
          </LinksContainer>
          {designBy[locale] && joannaName && codeBy[locale] && alekseiName &&
          <Authorship>
            <Unbreakable>
              <span>{designBy[locale]} </span>
              <Asia href={`mailto:${joannaMail}`} target="_blank" rel="noopener noreferrer">{joannaName}</Asia>
            </Unbreakable>
            <span> </span>
            <Unbreakable>
              <span>{codeBy[locale]} </span>
              <Alex href={`mailto:${alekseiMail}`} target="_blank" rel="noopener noreferrer">{alekseiName}</Alex>
            </Unbreakable>
          </Authorship>
          }
        </ContentContainer>
      </VerticalScroll>
    </PageContainer>
  );
};

export default ContactPage;