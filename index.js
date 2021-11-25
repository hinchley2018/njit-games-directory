let milestone1Projects = [
    {
        description: "My example blackjack game to students",
        projectUrl: "https://cranky-brown-bafdc9.netlify.app/",
        githubUrl: "https://github.com/hinchley2018/blackjack-example",
        isInstructorRepo: true,
        linkedInUrl: "https://www.linkedin.com/in/aggies2018/"
    },
    
]

const milestone1ProjectParent = document.querySelector("#milestone-1")
for (let index = 0; index < milestone1Projects.length; index++) {
    let project = milestone1Projects[index];
    
    let githubLabel = project.isInstructorRepo === true ? "Instructor Source is Private" : "GitHub Url"

    let projectCard = document.createElement("div")
    projectCard.classList.add("project-card")
    projectCard.innerHTML = `
    <p class="project-description">${project.description}</p>
    <div class="icon-row">
        <a class="project-url" href="${project.projectUrl}">
            <i class="bi-link-45deg" role="img" aria-label="Project Url"></i>
        </a>
        <a class="project-github" href="${project.githubUrl}">
            <i class="bi-github" role="img" aria-label="${githubLabel}"></i>
        </a>
        <a class="developer-linkedin" href="${project.linkedInUrl}">
            <i class="bi-linkedin" role="img" aria-label="LinkedIn"></i>
        </a>
    </div>
    `
    milestone1ProjectParent.appendChild(projectCard)
}