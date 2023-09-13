import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Matthew Hess</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="magic" role="img">
            🪄
          </span>{' '}
          and{' '}
          <span aria-label="love" role="img">
            💖
          </span>
          {/* by{' '}
					<a
						href="https://smakosh.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Matthew Hess
					</a> */}
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            {id == 0 ? (
              <img width="24" src={icon} alt={name} style={{ paddingRight: '5px' }} />
            ) : (
              <img width="94" src={icon} alt={name} style={{ paddingRight: '5px' }} />
            )}
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
