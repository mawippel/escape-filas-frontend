import React from 'react';
import { Container, RequestButton, RequestButtonText } from './styles';

const LineReporter = () => (
  <Container>
    <RequestButton onPress={() => { }}>
      <RequestButtonText>Reporte uma Fila</RequestButtonText>
    </RequestButton>
  </Container>
);

export default LineReporter;
