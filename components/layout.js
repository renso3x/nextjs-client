import Header from './Header';
import { Container, Row, Col } from 'reactstrap';
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  flexDirection: 'row'
};

const Layout = props => (
  <Container style={layoutStyle}>
    <Row>
      <Col xs="3">
        <Header />
      </Col>
      <Col xs="6">{props.children}</Col>
    </Row>
  </Container>
);

export default Layout;
