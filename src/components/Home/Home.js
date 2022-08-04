import "./Home.css"

const Home = ({homeRef}) => {

    return (
        <div className="Home" ref={homeRef}>
            <div className="Sasha Square">
                <h1>Sasha Rodriguez Carlomagno</h1>
                {/* <h2>Desarrollador Fullstack</h2> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                <h2>LVL: 27</h2>
                <h2>ESTADO: estudiando...</h2>   
                <h2>LUGAR DE RESIDENCIA: Ciudad Autónoma de Buenos Aires, Argentina</h2>         
            </div>
            <div className="Info Square">
                <h1>Bienvenido a mi portfolio</h1>
                <h1 id="What">Que contarte sobre mi...</h1>
                <h2>- Soy un desarrollador fullstack, musicoterapeuta, trabajador en salud mental y músico argentino.</h2>
                <h2>- Me considero una persona analítica, intensa al buscar soluciones a los problemas
                    y con una buena capacidad de escucha, algo valioso para el trabajo en equipo y la comunicación con otras personas.</h2>
                <h2>- Mas allá de lo laboral me gusta adentrarme en los temas que me interesan y llegar a ser conocedor de los mismos. </h2>
                <div className="Hobbies">
                    <h2>- Hobbies: tocar el bajo en mi banda, cantar, escribir canciones, grabarlas y arreglarlas, salir a oler perfumes, leer muchas páginas de wikis 
                        hasta darme cuenta que pasaron horas, ver animé y series de suspenso.
                    </h2>
                
                </div>
            </div>
        </div>
    )
}

export default Home;