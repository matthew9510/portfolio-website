import React from 'react';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
    <Wrapper id='about'>
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
            with CI/CD best practices, leveraging modern frameworks, automated testing, database management, and server
            hosting to create user-friendly UI-UX designed applications that customers find both enjoyable and valuable.
          </p>
          <br></br>
          <p>
            I'm determined to explore opportunities that align with my skill set and enthusiasm for computer science, with
            a keen interest in programming, artificial intelligence, and machine learning within a collaborative and
            enthusiastic team setting.
          </p>
          <br></br>
          <p>
            To learn more about my work experience please refer to my
            <a
              key='linkedinButton'
              href='https://www.linkedin.com/in/matthew-u-hess'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='follow me on Linkedin'
              style={{ cursor: 'pointer' }}
            >
              <img
                width='110'
                src='/icons/linkedin-full.svg'
                alt='Linkedin Logo'
                style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '-3px' }}
              />
            </a>
          </p>
        </Details>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
        <Details>
          <h2>Certificates and Projects I'm Focused On:</h2>
          <ul style={{ color: '#707070', fontSize: '20pt' }}>
            <li>
              AWS Cloud Practitioner Certification{' '}
              <a
                href='https://aws.amazon.com/certification/certified-cloud-practitioner/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Neetcode Interview Preparation Courses{' '}
              <a href='https://neetcode.io/courses' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Grokking Design System Interview{' '}
              <a
                href='https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Spotify Playlist Generator{' '}
              <a href='https://github.com/matthew9510/spotify-playlist-generator' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
            <li>
              Computer Vision Posture Feedback System (private)
            </li>
            <li>Functional Patterns Biomechanics Certification{' '}
              <a href='https://functionalpatterns.com/pages/get-certified' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </li>
          </ul>
        </Details>
      </SkillsWrapper>

      <SkillsWrapper as={Container}>
        <Details>
          <h2>Other Passions and Interests</h2>
          <ul style={{ color: '#707070', fontSize: '20pt' }}>
            <li>
              Learning the guitar and piano
            </li>
            <li>
              Photography{' '}<a href='https://www.flickr.com/photos/66484834@N03/albums' target='_blank'
                                  rel='noreferrer'>
              <FontAwesomeIcon icon={faLink} />
            </a>
            </li>
          </ul>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
;
