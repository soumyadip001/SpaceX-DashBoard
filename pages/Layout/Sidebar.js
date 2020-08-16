import { Col, Container, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { initLaunches } from '../../store/actions';

const Sidebar = (props) => {
    let launchDates = '';
    let successfulLaunch = '';
    let successfulLanding = '';

    function refreshData(lauch, land) {
        if (lauch !== null) {
            if (lauch) {
                props.onInitLaunches(100, props.selectedYear, true, null);
            } else {
                props.onInitLaunches(100, props.selectedYear, false, null);
            }
        }
        if (land !== null) {
            if (land) {
                props.onInitLaunches(100, props.selectedYear, null, true);
            } else {
                props.onInitLaunches(100, props.selectedYear, null, false);
            }
        }
    }

    function onSetFilterDate(year) {
        if (year === props.selectedYear) {
            props.onInitLaunches(100, null, null, null);
        } else {
            props.onInitLaunches(100, year, null, null);
        }
    }

    if (props.filters) {
        launchDates = props.filters.years.map(year => {
            let variant = 'secondary';
            if (props.selectedYear === year) {
                variant = 'success';
            }
            return <Col xs={6} className="mb-1" key={year}>
                <Button variant={variant} block
                    onClick={() => onSetFilterDate(year)}
                    >{ year }</Button>
            </Col>
        });
    }

    if (props.filters && props.filters.successfulLaunch) {

        let LS = 'secondary';
        let LF = 'secondary';
        if (props.selectedSuccessfulLaunch === true) {
            LS = 'success';
        } else if (props.selectedSuccessfulLaunch === false) {
            LF = 'success';
        }

        successfulLaunch = <Container>
            <Row>
                <Col xs={12} className="mt-5">
                    Successful Launch
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs={6} className="mb-1">
                    <Button variant={LS} block
                        onClick={() => refreshData(true, null)}
                        >True</Button>
                </Col>
                <Col xs={6} className="mb-1">
                    <Button variant={LF} block
                        onClick={() => refreshData(false, null)}
                        >False</Button>
                </Col>
            </Row>
        </Container>;
    }

    if (props.filters && props.filters.successfulLaunch) {

        let LS = 'secondary';
        let LF = 'secondary';
        if (props.selectedSuccessfulLand === true) {
            LS = 'success';
        } else if (props.selectedSuccessfulLand === false) {
            LF = 'success';
        }

        successfulLanding = <Container>
            <Row>
                <Col xs={12} className="mt-5">
                    Successful Landing
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs={6} className="mb-1">
                    <Button variant={LS} block
                        onClick={() => refreshData(null, true)}
                        >True</Button>
                </Col>
                <Col xs={6} className="mb-1">
                    <Button variant={LF} block
                        onClick={() => refreshData(null, false)}
                        >False</Button>
                </Col>
            </Row>
            <Row>
                <Col><br /></Col>
            </Row>
        </Container>;
    }

    return (
        <Col sm={3} xs={12}>
            Filters
            <Container>
                <Row>
                    <Col xs={12} className="mt-5">
                        Launch Year
                        <hr />
                    </Col>
                </Row>
                <Row>
                    { launchDates }
                </Row>
            </Container>
            { successfulLaunch }
            { successfulLanding }
        </Col>
    );
};

const mapStateToProps = state => ({
    selectedYear: state.appliedFilter.year,
    selectedSuccessfulLaunch: state.appliedFilter.successfulLaunch,
    selectedSuccessfulLand: state.appliedFilter.successfulLanding,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        onInitLaunches: (limit, year, launchSuccess, landSuccess) => dispatch(initLaunches(limit, year, launchSuccess, landSuccess))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);