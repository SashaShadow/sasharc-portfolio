import "./Skills.css"
import {GrReactjs, GrMysql} from 'react-icons/gr';
import {ImHtmlFive} from 'react-icons/im';
import {DiCss3, DiHeroku, DiMongodb} from 'react-icons/di';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {IoLogoJavascript} from 'react-icons/io';
import {DiNodejs} from 'react-icons/di';
import {FaGit, FaPython} from 'react-icons/fa';
import {SiDjango, SiFirebase, SiMariadb, SiPostgresql, SiPostman, SiPug, SiVisualstudiocode} from 'react-icons/si';

const Skills = ({skillsRef}) => {

    return (
        <>
            <div className="Skills" ref={skillsRef}>
                <h1 className="SkTitle">SKILLS</h1>
                <div className="SkillCont">
                    <div className="Skill">
                        <ImHtmlFive size={50}/>
                        HTML5
                    </div>
                    <div className="Skill">
                        <DiCss3 size={50}/>
                        CSS3
                    </div>
                    <div className="Skill">
                        <IoLogoJavascript size={50}/>
                        JavaScript
                    </div>
                    <div className="Skill">
                        <BsFillBootstrapFill size={50}/>
                        Bootstrap
                    </div>
                    <div className="Skill">
                        <GrReactjs size={50}/>
                        React JS
                    </div>
                    <div className="Skill">
                        <DiNodejs size={50}/>
                        Node JS
                    </div>
                    <div className="Skill">
                        <FaPython size={50}/>
                        Python
                    </div>
                    <div className="Skill">
                        <SiDjango size={50}/>
                        Django
                    </div>
                    <div className="Skill">
                        <SiFirebase size={50}/>
                        Firebase
                    </div>
                    <div className="Skill">
                        <GrMysql size={50}/>
                        MySQL
                    </div>
                    <div className="Skill">
                        <SiMariadb size={50}/>
                        MariaDB
                    </div>
                    <div className="Skill">
                        <SiPostgresql size={50}/>
                        PostgreSQL
                    </div>
                    <div className="Skill">
                        <DiMongodb size={50}/>
                        MongoDB
                    </div>
                    <div className="Skill">
                        <SiPug size={50}/>
                        PUG
                    </div>
                    <div className="Skill">
                        <SiVisualstudiocode size={50}/>
                        VSC
                    </div>
                    <div className="Skill">
                        <FaGit size={50}/>
                        GIT
                    </div>
                    <div className="Skill">
                        <SiPostman size={50}/>
                        Postman
                    </div>
                    <div className="Skill">
                        <DiHeroku size={50}/>
                        Heroku
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Skills;