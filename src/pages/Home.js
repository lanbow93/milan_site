import projects from "./json/projects.json"
import about from "./json/about.json"
// import Footer from '../components/Footer'

export default function Home(props){
    return(
        <main className="container">
            <section className="about animate__animated animate__fadeIn">
                <p>{about.bio}</p>
            </section>

            <section className="skills">
                <h2>Skillset</h2>
                <div className="skill-container">
                    <span className="UI-section">
                        <h3>Application Skilla</h3>
                        <p>Adobe Photoshop</p>
                        <p>FIGMA</p>
                        <p>ETC</p>
                    </span>
                    <span className="Frontend-section">
                        <h3>Person Skills</h3>
                        <p>Creative</p>
                        <p>Attention to Detail</p>
                        <p>Excellent Time Management</p>
                        <p>ETC</p>
                    </span>
                    <span className="other-section">
                        <h3>OTHER</h3>
                        <p>Example 1</p>
                        <p>Example 2</p>
                        <p>Example 3</p>
                
                    </span>
                </div>
            </section>

            <section className="project">
                <h2>Examples of Work:</h2>
                <div className="project-container">
                    {projects.map((project) => (
                        <div className="project-list" id={project.projectid}>
                            <h3>{project.name}</h3>
                            {/* <span></span> */}
                            <img src={project.image} alt={project.name}/>
                            <p className="langUsed">{project.languagesUsed}</p>
                            <div className="project-buttons">
                            <a href={project.git}>
                                <button>GitHub</button>
                            </a>
                            <a href={project.live}>
                                <button>Live Site</button>
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>  
        </main>

    )
}