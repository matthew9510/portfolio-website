import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import { backgroundColor } from '../../../data/config';

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 100) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );

  const repoIdsToOmit = [
    'MDEwOlJlcG9zaXRvcnkyOTc0NjI2ODc=',
    'MDEwOlJlcG9zaXRvcnkyMzI2NzIxNDU=',
    'MDEwOlJlcG9zaXRvcnkyMzQ2MzE0MzU=',
    'MDEwOlJlcG9zaXRvcnkyMzQ2MzMwNzE=',
    'MDEwOlJlcG9zaXRvcnkxMzA3NzUxMTA=',
    'MDEwOlJlcG9zaXRvcnkxMzY5ODY1Nzg=',
    'MDEwOlJlcG9zaXRvcnkxOTg5NDQyOTY=',
    'MDEwOlJlcG9zaXRvcnkyMTA3NTI1NjE=',
    'R_kgDOI9DY7A',
    'R_kgDOJKBOsQ',
    'R_kgDOKRNFRQ',
    'R_kgDOGr2shQ',
    'MDEwOlJlcG9zaXRvcnkzNDcxNzAwMjc=',
    'MDEwOlJlcG9zaXRvcnkzMDg0ODcxODg=',
    'MDEwOlJlcG9zaXRvcnkyODUxNDc0MzA=',
    'MDEwOlJlcG9zaXRvcnkyMzQ2MzAxNzc=',
    'MDEwOlJlcG9zaXRvcnkxODk2NDU5NzE=',
    'MDEwOlJlcG9zaXRvcnkxNzgyOTU4NTU=',
    'MDEwOlJlcG9zaXRvcnkxODQzMjk5NDU=',
    'MDEwOlJlcG9zaXRvcnkyOTgzMzI3MzQ=',
    'MDEwOlJlcG9zaXRvcnkyOTgzMzM4ODg=',
    'MDEwOlJlcG9zaXRvcnkyOTM5NTAzNDY=',
    'MDEwOlJlcG9zaXRvcnkyODY1MzU1OTc=',
    'MDEwOlJlcG9zaXRvcnkyNDA5MjE0NzE=',
    'MDEwOlJlcG9zaXRvcnkyMjE1NTI0NjQ=',
    'MDEwOlJlcG9zaXRvcnkyODk3ODQyMjg=',
  ];
  const customSortOrder = [
    'portfolio-website',
    'Studies',
    'my-request-landing',
    'my-request-performer-client',
    'my-request-requester-client',
    'Shopping-Cart',
    'react-complete-guide-code',
    'react-tic-tac-toe',
    'react-filterable-table',
    'sdvv-frontend',
    'LED-Audio-Spectrum',
    'posture-feedback-system',
    'movie-application-frontend',
    'movie-application-backend',
    'Angular-bank-app',
    'Angular-data-binding',
    'GradleGraphQL',
    'NodeJs-and-Express-Notes',
    'base-web-development-spin-up',
    'Data-Science-Boot-Camp',
    'intro-to-python',
    'data-science',
    'machine-learning',
    'machine_learning',
    'artificial_intelligence',
    'WineQualityML',
    'yahoo_ball',
    'OperatingSystems',
    'UbuntuSurfaceBook',
    'I3wm-setup',
    'SoftStack-JavaScript-and-Git-Exercises',
    'the_self_taught_programmer',
  ];

  function omitCertainRepos(item) {
    return !repoIdsToOmit.includes(item.node.id);
  }

  function customSort(a, b) {
    const indexA = customSortOrder.indexOf(a.node.name);
    const indexB = customSortOrder.indexOf(b.node.name);

    // If either name is not in the customSortOrder array, move it to the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  }

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges
          .filter(omitCertainRepos)
          .sort(customSort)
          .slice(0, !showAllProjects ? 12 : 9999)
          .map(({ node }) => (
            <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                </Content>
                <Stats>
                  <div>
                    <img src={starIcon} alt="stars" />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <img src={forkIcon} alt="forks" />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
              </Card>
            </Item>
          ))}
      </Grid>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 40 }}>
        <Button
          style={{ backgroundColor: '#6c63ff', alignSelf: 'center' }}
          onClick={() => {
            setShowAllProjects(!showAllProjects);
          }}
        >
          {!showAllProjects ? 'Show More' : 'Show Less'}
        </Button>
      </div>
    </Wrapper>
  );
};
