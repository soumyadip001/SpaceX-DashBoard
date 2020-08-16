import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { initLaunches } from '../../store/actions';
import LanchCard from '../Components/LaunchCard';

class AppContent extends Component {

    state = {
        loading: false,
        limit: 100,
    }

    componentDidMount() {
        this.props.onInitLaunches(this.state.limit);
    }

    render() {
        let launchData = '';
        if (this.props.data && this.props.data.length > 0) {
            launchData = this.props.data.map((launch) => {
                return <Col key={launch.flight_number} xs={12} md={6} lg={3}>
                    <LanchCard data={launch} key={launch.flight_number} />
                </Col>;
            });
        } else {
            launchData = <Col><p>No Launch Data!</p></Col>;
        }
        
        return (
            <Col sm={9} xs={12}>
                <Container fluid>
                    <Row>
                        { launchData }
                    </Row>
                </Container>
            </Col>
        );
    }
}

AppContent.propTypes = {
    onInitLaunches: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    data: state.launchData,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        onInitLaunches: (limit) => dispatch(initLaunches(limit))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContent);