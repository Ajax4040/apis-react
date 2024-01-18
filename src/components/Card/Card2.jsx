import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Card2 = ({ id, name, status, gender,image }) => {
    return (
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{id}</ListGroup.Item>
            <ListGroup.Item>{status}</ListGroup.Item>
            <ListGroup.Item>{gender}</ListGroup.Item>
        </ListGroup>
        </Card>
    );
}


export default Card2;