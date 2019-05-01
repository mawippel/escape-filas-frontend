import React from 'react';
import { Container, RequestButton, RequestButtonText } from './styles';

const LineReporter = (props) => (
  <Container>
    <RequestButton onPress={props.lineReporterHandler}>
      <RequestButtonText>Reporte uma Fila</RequestButtonText>
    </RequestButton>
  </Container>
);

export default LineReporter;
