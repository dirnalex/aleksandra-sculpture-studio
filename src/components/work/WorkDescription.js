import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';

const Container = styled.div`
  display: inline-block;
  font-size: 0.75em;
  line-height: 133%;
  
  & > *:nth-child(2) {
    margin-bottom: 15px;
  }
  
  & > *:nth-last-child(2) {
    margin-top: 15px;
  }
`;

const WorkDescription = ({work, className}) => {
  const {locale} = useIntl();
  return (
    <Container className={className}>
      {work.id &&
      <p key="id">{work.id}</p>
      }
      {work.name && work.name[locale] &&
      <p key="name">{work.name[locale]}</p>
      }
      {Array.isArray(work.materials) &&
      work.materials
        .filter(material => material[locale])
        .map((material, i) =>
          <p key={`material${i}`}>{material[locale]}</p>
        )
      }
      {work.notes && work.notes[locale] &&
      <p key="notes">{work.notes[locale]}</p>
      }
      {work.year &&
      <p key="year">{work.year}</p>
      }
    </Container>
  );
};

export default WorkDescription;