import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col xs={12}>
                <h5 className="display-5">SpaceX Launch Programs</h5>
            </Col>
        </Row>
    );
};

export default Header;