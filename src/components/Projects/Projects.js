import "./Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard.js';

const Projects = ({projectsRef}) => {

    return (
        <div className="Projects" ref={projectsRef}>
            <h1 className="PjTitle">Proyectos</h1>
            <div className="ProjectCont">
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/pokebattle_ggn4ux.png'}
                text={`Simulacro de las batallas Pokémon de la primer generación de juegos realizado con ReactJS.
                Biblioteca TypeWritter Effect utilizada para animar el texto.`} url={'https://github.com/SashaShadow/Poke-Battle-REACT'}
                url2={'https://poke-battle-react.vercel.app/'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/winguitars_posmen.png'}
                text={`E-commerce realizado con ReactJS y la Dbass Firebase Firestore. 
                Tienda de venta de instrumentos musicales.`} url={'https://github.com/SashaShadow/rodriguez-carlomagno-win-guitars'}
                url2={'http://win-guitars.vercel.app/'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1670187909/Captura_desde_2022-12-04_18-02-47_qr9lpl.png'}
                text={'E-commerce (fullstack app) realizado con Node, Express.js, MongoDB, Passport (APIS y Backend) y EJS como motor de plantillas.'} url={'https://github.com/SashaShadow/tetsu-fragances'}
                url2={'https://tetsufragances.onrender.com/shop/'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/alice_jjtsgs.png'} 
                text={`Landing page para diseñadora gráfica. Tecnologías utilizadas: 
                ReactJS para la interfaz de usuario, consumiendo una API que brinda 
                la información de los proyectos realizados por la autora.`} url={'https://github.com/SashaShadow/alice'}
                url2={'http://alicemichan.vercel.app/'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/aliceapi_u45eud.png'}
                text={`API que brinda información para el sitio de la diseñadora gráfica. Tecnologías utilizadas:
                NodeJS, ExpressJS (servidor), Passport (admin-login), MongoDB y
                EJS (plantilla/crud-form)`} url={'https://github.com/SashaShadow/aliceAPI'}
                url2={'#'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/avcapi_kbay7d.png'}
                text={`API REST que brinda la información de las canciones de una banda.
                Tecnologías utilizadas: Django REST Framework, MySQL.`} url={'https://github.com/SashaShadow/avcapi'}
                url2={'https://avcapi.herokuapp.com/'}/>
                <ProjectCard image={'https://res.cloudinary.com/ddi5wmffy/image/upload/v1659796618/pokedex_bwuj5k.png'}
                text={`Pokédex simple realizado con Vanilla JavaScript, 
                consumiendo API que provee información de las criaturas ficticias`} url={'https://github.com/SashaShadow/vanilla-js-pokedex'}
                url2={'https://codepen.io/sasha-rodriguez-carlomagno/full/xxXeaqp'}/>
            </div>
        </div>
    )
}

export default Projects;