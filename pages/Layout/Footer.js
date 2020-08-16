import React from 'react';
import PropTypes from 'prop-types';
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

Footer.propTypes = {
    developer: PropTypes.array.isRequired,
};

export default Footer;