import { Row, Col } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <footer>
            <Row>
                <Col xs={12}>
                    Developed by { props.developer }
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;