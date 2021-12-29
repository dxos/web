//
// Copyright 2020 DXOS.org
//

import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  PullQuote,
  VeryLargeTitleWithLine,
  SmallTitleCard,
  FullColorSection
} from '@dxos/web-common';

const Overview = () => {

  const { heading, body, sections: sub } = sections[0];
  return (
    <FullColorSection id="overview">
      <Container>
        <Row className="py-4 py-lg-5" md={12}>
          <Col>
            <VeryLargeTitleWithLine enableAnimation>
              {heading}
            </VeryLargeTitleWithLine>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} className={'mb-4'}>
          <Col md={8}>
            <PullQuote
              enableAnimation
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </Col>
        </Row>

        <Row className="py-4" xs={1} sm={1} md={2}></Row>

        <Row xs={1} md={1} lg={3}>
          {sub &&
            sub.map((section, i) => (
              <Col className="pb-4" key={i}>
                <SmallTitleCard
                  smallTitleHeadingType={'h2'}
                  heading={section.heading}
                  body={section.body}
                  enableAnimation
                />
              </Col>
            ))}
        </Row>
      </Container>
    </FullColorSection>
  );
};

export default Overview;
