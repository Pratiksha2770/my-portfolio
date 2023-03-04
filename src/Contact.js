import contact2_img from './contact2_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot,faEarthEurope} from '@fortawesome/free-solid-svg-icons'
import { Button} from 'react-bootstrap' 
import { Link } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'; 
function Contact(){
    const [state, handleSubmit] = useForm("myyajkqb");
    if (state.succeeded) {
        return <p className='form_summision'>Thanks! for your Submission <span style={{paddingLeft:'10%', marginTop:'5px'}}><Link to='/'>
            <Button variant="light">Go Back</Button></Link></span></p>;
    }
  
    return(
        <>
        <div id='section'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="col-md-12">
                    <img src={contact2_img} className="images1 title2"></img>
                    </div>
                    <div className="col-md-12 mt-5 text-light">
                    <h3 className='title heading'>Contact Details</h3>
                    <hr style={{width:'35%'}}></hr>
                    <ul className='menu1 p-0 title1'>
                        <li><FontAwesomeIcon icon={faPhone} className='icon'/>+91 9131579411</li>
                        <li><FontAwesomeIcon icon={faEnvelope} className='icon'/>pratikshajainpj0123@gmail.com</li>
                        <li><FontAwesomeIcon icon={faEarthEurope} className='icon'/>https://www.linkedin.com/in/pratiksha-jain-0290a2222</li>
                        <li><FontAwesomeIcon icon={faLocationDot} className='icon'/>Ward No.10 Redimate Empouriyam Katangi,
                        <br></br> jabalpur (M.P)</li>
                    </ul>
                    
                    </div>
                </div>
                <div className="col-md-6 margin_top">
                    <div className='login-form title1'>
                        <h3 className='heading'>Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                        <label htmlFor="name"className='mt-4 label1'>Full Name</label>
                        <input id="name" type="text" name="name" className="form-control mt-2 input1" placeholder='Full Name' required />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />

                        <label htmlFor="email" className='mt-4 label1'>Email Address</label>
                        <input id="email" type="email" name="email" className="form-control mt-2 input1" placeholder='Email Address' required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    

                        <label htmlFor="message" className='mt-4 label1'>Message</label>
                        <textarea id="message" name="message" className="form-control mt-2 input1" placeholder='Message' required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                         <div  className='mt-5 d-flex justify-content-center'>
                         <Button type="submit" variant='danger' disabled={state.submitting}>
                         Submit
                        </Button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;