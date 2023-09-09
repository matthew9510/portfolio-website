import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I'm Matthew, an avid full-stack software developer!" />
      </Thumbnail>
      <Details>
        <h1>More About Me:</h1>
        <p>
          I consider myself to be a well-versed problem-solving developer with a passion for learning and applying new
          skills. With experience in leading engineering teams to meet strict deadlines through effective communication
          and organizational intelligence, I thrive on analyzing data to drive informed business decisions.
        </p>
        <br></br>
        <p>
          I excel throughout the entire web development process, from planning to maintenance. I deploy web applications
          with best CI/CD practices, leveraging modern frameworks, automated testing, database management, and server
          hosting to create user-friendly UI-UX designed applications that customers find both enjoyable and valuable.
        </p>
        <br></br>
        <p>
          I'm determined to explore opportunities that align with my skill set and enthusiasm for computer science, with
          a keen interest in programming, artificial intelligence, and machine learning within a collaborative and
          enthusiastic team setting.
        </p>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
