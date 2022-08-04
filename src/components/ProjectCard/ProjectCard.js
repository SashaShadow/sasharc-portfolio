import "./ProjectCard.css"

const ProjectCard = ({image, text, url, url2}) => {

    return (
        <div className="ProjectCard">
            <div className="Pimg">
                <img src={image}/>
            </div>
            <div className="Pinfo">
                <p>{text}</p>
                <a href={url}>Ver proyecto</a>
                <a href={url2}>Código</a>
            </div>
        </div>
    )
}

export default ProjectCard;