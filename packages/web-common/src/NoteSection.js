//
// Copyright 2020 DXOS.org
//

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FullColorSection } from './FullColorSection';
import { VeryLargeTitleWithLine } from './VeryLargeTitleWithLine';

const replaceDashWithSpace = str => str.replace(/-/g, ' ');

export const NoteSection = ({ source, children }) => (
  <FullColorSection id={source}>
    <Container>
      <Row className="py-4 py-lg-5">
        <Col>
          <VeryLargeTitleWithLine>
            {replaceDashWithSpace(source)}
          </VeryLargeTitleWithLine>
        </Col>
      </Row>
      <div>
        <Row>
          <Col md={4}>
            {children}
          </Col>
        </Row>
      </div>
    </Container>
  </FullColorSection>
);
