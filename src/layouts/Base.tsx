import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu'

export default function Base() {
    return(
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Menu />
                </Col>
                <Col xs={9}>b</Col>
            </Row>
        </Container>
    )
}