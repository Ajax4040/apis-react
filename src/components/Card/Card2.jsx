import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Card2 = ({ name, image, endpoint }) => {

    const nameMayus = name.toUpperCase();
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={image} style={{ backgroundColor: '#f5f5f5' }}/>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '5px' }}>
                <Card.Title>{nameMayus}</Card.Title>
            </Card.Body>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '5px' }}>
                <Link to={`/${name}`} className='btn btn-info btn-lg'>Ver mas</Link>
            </Card.Body>
        </Card>
    );
}

export default Card2;