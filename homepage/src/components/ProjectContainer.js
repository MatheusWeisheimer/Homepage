import '../assets/styles/projectContainer.css'

function ProjectContainer({projects, languageOption}) {
    const {image, name, description, tecnologies} = projects
    const projectThumbPath = require(`../assets/images/${image}.png`)

    const tecnologiesEl = tecnologies.map(tec => {
        const tecIconPath = require(`../assets/images/${tec}.png`)

        return (
            <div className="tec_icon" 
            style={{backgroundImage: `url(${tecIconPath})`}}
            key={tec}
            ></div>
        )
    })

    return(
        <div className="container">
            <div className="project_image" style={{backgroundImage: `url(${projectThumbPath})`}}></div>
            <h3 className="project_name">{name}</h3>
            <p className="project_description">{description}</p>
            <div className="tecnologies_container">
                {tecnologiesEl}
            </div>
        </div>
    )
}

export default ProjectContainer