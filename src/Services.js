import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMobile,faLaptop,faCode} from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
function Services(){
    return(
       <>
       <div id="section">
        <div className="container">
            <div className="row">
                <h2 className='text-center heading'>Services</h2>
                <div className="col-md-4 mt-5">
                <Card  className='text-center p-5 title'>
                <FontAwesomeIcon icon={faMobile} className='fa-2x icon1'/>
                <Card.Body  className='pt-4'>
                <Card.Title className='card_title'>Software Developer</Card.Title>
                <Card.Text className='card_text'>
                Checkout My Work and Skills and feel free to get in touch if you want to work with me.
                </Card.Text>
                </Card.Body>
                </Card>
                </div>

                <div className="col-md-4 mt-5">
                <Card className='text-center p-5 title2'>
                <FontAwesomeIcon icon={faLaptop} className='fa-2x icon1'/>
                <Card.Body className='pt-4'>
                <Card.Title className='card_title'>Frontend Developer</Card.Title>
                <Card.Text className='card_text'>
                Checkout My Work and Skills and feel free to get in touch if you want to work with me.
                </Card.Text>
                </Card.Body>
                </Card>
                </div>

                <div className="col-md-4 mt-5 mb-4">
                <Card  className='text-center p-5 title1'>
                <FontAwesomeIcon icon={faCode} className='fa-2x icon1'/>
                <Card.Body  className='pt-4'>
                <Card.Title className='card_title'>Web Developer</Card.Title>
                <Card.Text className='card_text'>
                Checkout My Work and Skills and feel free to get in touch if you want to work with me.
                </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
       </div>
       </>
    )
}

export default Services;
