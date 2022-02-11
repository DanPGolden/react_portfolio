import React from 'react';
import { DiCreativecommons, DiFirebase, DiGrunt, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with many different technologies in the web development world, both front and backend.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>

        </ListContainer>

      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>

        </ListContainer>

      </ListItem>
      <ListItem>
        <DiGrunt size="3rem" />
        <ListContainer>
          <ListTitle>Graphic</ListTitle>
          <ListParagraph>
            Experience with <br />
            Photoshop and Illustrator
          </ListParagraph>

        </ListContainer>

      </ListItem>
    </List>

  </Section>
);

export default Technologies;
