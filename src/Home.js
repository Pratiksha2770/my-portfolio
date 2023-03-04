import banner_img from './banner_img.png'
import {Button} from  'react-bootstrap'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
function Home(){
    return(
      <>
      <div id='section'>
      <div className="container">
        <div className="row">
            <div className="col-md-6 text-white order-2 order-lg-1 margin_top">
              <h1 className='title'>Hi, I'm <span className='higlight'>Pratiksha Jain</span></h1>
              <h2 className='mt-4 title1'>I'm a 
              <span className='higlight'>
              <Typewriter
              options={{
              strings: ['Software Developer', 'Frontend Developer','Web Developer'],
              autoStart: true,
              loop: true,
              }}
              />
              </span>
                </h2>
                <p className='mt-4 paragraph title'>I built interactive websites that run
                 across platforms<br></br> & devices.
                 Helping companies to reach their goal
                by <br></br> connection all dots between design & code.</p>
                <Link to="https://drive.google.com/file/d/1luTM1xcocDxlUzICHbYkAsPVXa8dEmTS/view?usp=sharing" download>
                <Button variant="light" className='mt-4 title1'>Download CV</Button>
                </Link>
            </div>
            <div className="col-md-6 title1 order-1 order-lg-2">
            <img src={banner_img} className="images ms-auto"></img>
            </div>
        </div> 
      </div>
      </div>
      </>
    )
}

export default Home;