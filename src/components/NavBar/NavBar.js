import './NavBar.css';
import { useRef } from 'react';

const NavBar = ({scroll, home, contact, projects, skills}) => {

    return (
        <header>
            <nav className="NavBar">
                <div className='Name'>
                    <h1 onClick={() => scroll(home)}>SRC</h1>
                </div>
                <h2 onClick={() => scroll(home)}>Sobre mi</h2>
                <h2 onClick={() => scroll(skills)}>Skills</h2>
                <h2 onClick={() => scroll(projects)}>Proyectos</h2>
                <h2 onClick={() => scroll(contact)}>Contacto</h2>
            </nav>
        </header>
        
    )
}

export default NavBar;