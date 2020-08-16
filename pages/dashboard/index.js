import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import AppContent from '../Layout/AppContent';
import Footer from '../Layout/Footer';

class Dashboard extends Component {

    render() {
        return (
            <Container fluid>
                <Header />
                <Row>
                    <Sidebar filters={this.props.sidebarFilters} />
                    <AppContent />
                </Row>
                <Footer developer={this.props.developer} />
            </Container>
        );
    }
}

Dashboard.propTypes = {
    sidebarFilters: PropTypes.array.isRequired,
    developer: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    developer: state.developer,
    sidebarFilters: state.sidebar.filters,
});

export default connect(mapStateToProps)(Dashboard);