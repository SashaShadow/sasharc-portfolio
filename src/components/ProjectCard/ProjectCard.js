import "./ProjectCard.css"
import {BsCode, BsLink45Deg} from 'react-icons/bs';

const ProjectCard = ({image, text, url, url2}) => {

    return (
        <div className="ProjectCard">
            <div className="Pimg">
                <img src={image}/>
            </div>
            <div className="Pinfo">
                <p>{text}</p>
                <div className="Butt1">
                <a href={url} target='_blank' rel="noreferrer noopener"><BsCode size={40}/></a>
                <a href={url2} target='_blank' rel="noreferrer noopener"><BsLink45Deg size={40}/></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;