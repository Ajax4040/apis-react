import Card from 'react-bootstrap/Card';


const Card2 = ({ name, image, status, gender }) => {

    const nameMayus = name.toUpperCase();
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={image} style={{ backgroundColor: '#f5f5f5' }}/>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '3px'}}>
                <Card.Title>{nameMayus}</Card.Title>
                <Card.Text>Status: {status}</Card.Text>
                <Card.Text>Gender: {gender}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Card2;