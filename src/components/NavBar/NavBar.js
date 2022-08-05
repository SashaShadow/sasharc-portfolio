import './NavBar.css';
import { useRef } from 'react';
import {MdOutlineClose} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';

const NavBar = ({scroll, home, contact, projects, skills}) => {

    const navRef = useRef(null);

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <nav ref={navRef} className="NavBar">
                <div className='Name'>
                    <h1 onClick={() => scroll(home)}>SRC</h1>
                </div>
                <h2 className='nav-link' onClick={() => {showNavBar(); scroll(home)}}>Sobre mi</h2>
                <h2 className='nav-link' onClick={() => {showNavBar(); scroll(skills)}}>Skills</h2>
                <h2 className='nav-link' onClick={() => {showNavBar(); scroll(projects)}}>Proyectos</h2>
                <h2 className='nav-link' onClick={() => {showNavBar(); scroll(contact)}}>Contacto</h2>
                <button className='nav-btn nav-close-btn' onClick={showNavBar} > <MdOutlineClose/> </button>
            </nav>
            <div className='Name2'>
                    <h1 onClick={() => scroll(home)}>SRC</h1>
                </div>
            <button className='nav-btn' onClick={showNavBar} > <FaBars/> </button>
        </header>
        
    )
}

export default NavBar;