import '../assets/styles/projectContainer.css'

function ProjectContainer({projects, languageOption}) {
    const {image, name, description, technologies} = projects
    const projectThumbPath = require(`../assets/images/${image}.png`)

    const tecEl = technologies.map(tec => {
        const tecIconPath = require(`../assets/images/${tec}.png`)

        return (
            <div className="tec_icon" 
            style={{backgroundImage: `url(${tecIconPath})`}}
            key={tec}
            ></div>
        )
    })

    console.log(languageOption)

    return(
        <div className="container">
            <div className="project_image" style={{backgroundImage: `url(${projectThumbPath})`}}></div>
            <h3 className="project_name">{name}</h3>
            <p className="project_description">
                {languageOption === "en_uk" ? description.en_uk : description.pt_br}
            </p>
            <div className="tec_container">
                {tecEl}
            </div>
        </div>
    )
}

export default ProjectContainer