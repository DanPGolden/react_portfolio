import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper id="contact">
     <LinkList>
       <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel=509-389-7370'>509-389-7370</LinkItem>
       </LinkColumn>
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:Golden.Daniel@gmail.com ">Golden.Daniel@gmail.com</LinkItem>
       </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>Helping you build better</CompanyContainer>
     <SocialIcons href="https://github.com/DanPGolden">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/feed/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>  
    <SocialIcons href="https://www.instagram.com/">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;



