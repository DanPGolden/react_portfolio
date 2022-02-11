import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a full stack web developer based in Spokane, Washington. I design attractive, functional websites and can provide a total solution to my customers.
      </SectionText>
      <Button onClick={() => window.location = "https://www.google.com/" }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;