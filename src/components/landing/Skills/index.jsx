import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Matthew, an avid software developer!" />
      </Thumbnail>
      <Details>
        <h1>More About Me:</h1>
        <p>I have experience with leading engineering teams to achieve concrete goals on strict deadlines through organizational intelligence and effective communication. </p>
        <br></br>
        <p>I thrive on learning new skills, bringing them into application, and am experienced with coding using modern day frameworks, testing, and strategic team orientated problem-solving.</p>
        <br></br>
        <p>I am determined to learn more about opportunities that exercise my skill sets and passion for computer science to gain new insight into programming, artificial intelligence, and machine learning under a collaborative and enthusiastic team experience.</p> 
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
