import "./Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard.js';

const Projects = ({projectsRef}) => {

    return (
        <div className="Projects" ref={projectsRef}>
            <h1 className="PjTitle">Proyectos</h1>
            <div className="ProjectCont">
                <ProjectCard image={'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg'}
                text={'test'} url={'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg'}
                url2={'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg'}/>
            </div>
        </div>
    )
}

export default Projects;