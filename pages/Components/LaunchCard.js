import { Card } from 'react-bootstrap';

const LauchCard = (props) => {
    const missionIds = [];
    let missionIdsHTML = null;
    let landingSuccess = '';
    let cardimage = null;
    let articleLink = null;
    let launchSuccess = null;

    if (props.data.mission_id) {
        missionIdsHTML = props.data.mission_id.map(mission => {
            missionIds.push(mission);
            return <li key={'id-'+props.data.mission_id+Math.random()}>{mission}</li>;
        })
    }

    if (props.data.rocket && props.data.rocket.first_stage) {
        const rocketName = props.data.rocket.rocket_name ? props.data.rocket.rocket_name : 'ROCKET';
        let landingStatus = 'FAIL';
        if (props.data.rocket.first_stage.cores.length > 0) {
            landingStatus = props.data.rocket.first_stage.cores[0].land_success ? 'SUCCESS' : 'FAIL';
        }
        landingSuccess = `${rocketName} - ${landingStatus}`;
    }

    if (props.data.links && props.data.links.mission_patch_small) {
        cardimage = <Card.Img variant='top' src={props.data.links.mission_patch_small} />;
    } else {
        cardimage = <Card.Img variant='top' src='https://via.placeholder.com/150' />;
    }

    if (props.data.links && props.data.links.article_link) {
        articleLink = <a href={props.data.links.article_link} target="_blank">More Info</a>;
    }

    if (props.data.launch_success) {
        launchSuccess = <Card.Text>Successful launch: <span className='text-success'>SUCCESS</span></Card.Text>
    } else {
        launchSuccess = <Card.Text>Successful launch: <span className='text-danger'>FAILURE</span></Card.Text>
    }

    return (
        <Card className='mb-5' style={{ width: '15rem' }}>
            {cardimage}
            <Card.Body>
                <Card.Title style={{color: '#0d47a1'}}>{props.data.mission_name} #{props.data.flight_number}</Card.Title>
                <Card.Text><b>Mission Ids:</b></Card.Text>
                <ul>{missionIdsHTML}</ul>
                <Card.Text>Successful Year: {props.data.launch_year}</Card.Text>
                {launchSuccess}
                <Card.Text>Successful landing: {landingSuccess}</Card.Text>
                <Card.Text>{articleLink}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LauchCard;