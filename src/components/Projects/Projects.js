import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

 const projectsDemo = [{
        title: 'Project 1',
        description: 'This is a music application that users can search for albums, artists, and lyrics'
      },
      {
        title: 'Project 2',
        description: 'This hey now music application that users can search for albums, artists, and lyrics'
      },
      {
        title: 'Project 3',
        description: 'This is a music application that users can search for albums, artists, and lyrics'
      },
      {
        title: 'Project 4',
        description: 'This is a music application that users can search for albums, artists, and lyrics'
      }]

const Projects = () => (
  <Section no padding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
      projectsDemo.map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;