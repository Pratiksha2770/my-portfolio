import {Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function Nav_Links(){
    // const navLinkStyles = ({isActive}) =>{
    //     return{
    //         color: isActive ? "rgb(235, 73, 100)" : "black" ,
    //         fontWeight: isActive ? "700" : "700",
    //         fontSize: isActive ? "20px" : "20px"
    //     }
    // }

    function navLinkStyles({isActive}){
        return{
            color: isActive ? "rgb(235, 73, 100)" : "white" ,
            fontWeight: isActive ? "700" : "700",
            fontSize: isActive ? "20px" : "20px",
        }  
    }
    return(
        <>
       <Navbar className='navbar' expand="lg navbar-dark">
        <div className='container p-2'>
       <NavLink className='navbar-brand' to='/'>Pratiksha</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <ul className='navbar-nav ms-auto title2'>
            <li className='nav-item'>
                <NavLink className='nav-link item1' aria-current='page' to='/' style={navLinkStyles}>
                Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink  className='nav-link'  to='/about' style={navLinkStyles}>About</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink  className='nav-link'  to='/services' style={navLinkStyles}>Services</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink  className='nav-link' to='/contact' style={navLinkStyles}>Contact</NavLink>
            </li>

        </ul>
        </Navbar.Collapse>
        </div>
    </Navbar>
       
        </>
    )
}

export default Nav_Links;