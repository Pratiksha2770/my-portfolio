import { useState } from 'react';
import {Button} from  'react-bootstrap'
import {Link} from 'react-router-dom';
function About(){
  const [toggle,setToggle] = useState(1)
  function Toggle(id){
    setToggle(id)
  }
    return(
      <>
      <div id='section'>
      <div className="container">
        <div className="row">
            <div className="col-md-6 text-white">
              <h2 className='title'>About Me</h2>
              <h3 className='mt-4 title1'>I'm Pratiksha Jain (<span className='higlight'>Software Engineer</span>)</h3>
              <p className='paragraph mt-4 title2'>Hi, I born and brought up in Jabalpur, M.P .
                I'm having<br></br>experience in Frontend Development .
                I'm hardworking and<br></br> Self-motivated person with excellent 
                communication skill and<br></br> expert in different phases of
                development of software in market demanding latest different technologies.
              </p>
              <Link to='/contact'><Button variant="light" className='mt-4'>Hire Me</Button></Link>
             

               
            </div>

            <div className="col-md-6  margin_top">
             
              <ul className='menu p-0'>
                <li className='item active' onClick={()=>Toggle(1)}>Skills</li>
                <li className='item'onClick={()=>Toggle(2)}>Experience</li>
                <li className='item'onClick={()=>Toggle(3)} >Education</li>
                <li className='item'onClick={()=>Toggle(4)} >Personal Detail</li>
              </ul>

             <div className={toggle == 1 ? "show-content" : "content"}>

              <div className='skill-bar'>
                <div className='info'>
                  <span>Html</span>
                </div>
                <div className='progress-line html'><span></span></div>
              </div>

              <div className='skill-bar'>
                <div className='info'>
                  <span>CSS</span>
                </div>
                <div className='progress-line css'><span></span></div>
              </div>

              <div className='skill-bar'>
                <div className='info'>
                  <span>Bootstrap</span>
                </div>
                <div className='progress-line bootstrap'><span></span></div>
              </div>

              <div className='skill-bar'>
                <div className='info'>
                  <span>Javascript</span>
                </div>
                <div className='progress-line javascript'><span></span></div>
              </div>

              <div className='skill-bar'>
                <div className='info'>
                  <span>React Js</span>
                </div>
                <div className='progress-line reactjs'><span></span></div>
              </div>
              
              <div className='skill-bar'>
                <div className='info'>
                  <span>Figma</span>
                </div>
                <div className='progress-line figma'><span></span></div>
              </div>
             </div>

             <div className={toggle == 2 ? "show-content" : "content"}>
             <h5 className='mt-5 title higlight'>Respicite ( 1 March2022- 1 June2022)</h5>
             <p className='title1'>I have done Training on Respicite with technologies like Html,<br></br> Css, Javascript, & Bootstrap.
             I make responsive website designs.</p>
             <h6>My Work : file:///D:/Notes/Respicite/Overseas%2013-04-22/overseas/index.html</h6>
             <Link to="https://drive.google.com/file/d/1JL8kPZBbq_w_WV09qSY0d4DSuomUa48t/view?usp=sharing" download>
                <Button variant="light" className='title2 mt-3'>Training Certificate</Button>
             </Link>
             <h5 className='mt-3 title'>Freelancing (Present)</h5>
             <h5 className='mt-3 title1'>Open To Work</h5>
             </div>

             <div className={toggle == 3 ? "show-content" : "content"}>
              <h5 className='title mt-5 higlight'>B.Tech (Computer Science)</h5>
              <p className='title1'>I did my B.Tech in CS with <span style={{color:'#acabb4', fontWeight:'700'}}> 8.30 CGPA</span> from 
               Shri Ram Institute Of<br></br> Technology College, Jabalpur under Rajiv Gandhi 
               Proudyogiki<br></br> Vishwavidyalaya, Bhopal.
              </p>

              <h5 className='title2 higlight'>12th (Intermediate)</h5>
              <p className='title'>I have completed intermediate in Science (PCM - Physics, Chemistry<br></br> and Math) 
              from Private, Jabalpur under C.B.S.E Board.</p>

              <h5 className='title1 higlight'>10th (High School)</h5>
              <p className='title2'>I have completed 10th in General Subjects 
                from Ryan International<br></br> School, Jabalpur under CBSE Board.</p>
             </div>


             <div className={toggle == 4 ? "show-content" : "content"}>
               <div className='title1'>
               <h6><span className='higlight'>Birthday : </span> 27 March 1998</h6>
                <h6><span className='higlight'>City : </span> Jabalpur (M.P)</h6>
                <h6><span className='higlight'>Degree : </span> Bachelor Of Engineering (CSE)</h6>
                <h6><span className='higlight'>Email : </span> pratikshajainpj0123@gmail.com</h6>
                <h6><span className='higlight'>Linkedin : </span> https://www.linkedin.com/in/pratiksha-jain-0290a2222</h6>
                <h6><span className='higlight'>Phone : </span> +91 9131579411</h6>
               </div>
             </div>
             
              
             
        

            </div>

            
        </div> 
      </div>
      </div>
      </>
    )
}

export default About;