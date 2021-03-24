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
        <p>
        I've got plenty of experience in coding, testing, and strategic team orientated problem-solving and communication skills.
        </p>
        <br></br>
        <p> I plan and formulate solutions best fit for the needs of customers through direct, well informed communication along with relevant professional technological practices and tools. </p>
        <br></br>
        <p>I have experience with leading engineering teams to achieve concrete goals on strict deadlines through organizational intelligence, and thrive on learning new skills and bringing them into application. I enjoy practicing and learning about programming languages, coding websites and apps, and exploring how companies are using artificial intelligence and machine learning. </p>
        <br></br>
        <p>I am determined to learn more about opportunities that exercise my skillsets and passion for computer science to gain new insight into programming, artificial intelligence, and machine learning through a collaborative and enthusiastic team experience. </p>
        {/* <Button as={AnchorLink} href="#contact">
          Hire me
        </Button> */}
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
