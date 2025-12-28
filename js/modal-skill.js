const skills = {
    logo1: { name: "HTML5", level: "Intermediate", description: "Experience creating semantic and accessible web pages.", stars: 4 },
    logo2: { name: "CSS3", level: "Intermediate", description: "Responsive layouts, Flexbox and Grid.", stars: 3 },
    logo3: { name: "JavaScript", level: "Basic", description: "DOM manipulation and basic logic.", stars: 1 },
    logo4: { name: "Bootstrap", level: "Intermediate", description: "Fast and responsive UI components.", stars: 3 },
    logo5: { name: "Node.js", level: "Basic", description: "Basic backend concepts.", stars: 1 },
    logo6: { name: "MySQL", level: "Basic", description: "Queries, joins and database structure.", stars: 2 },
    logo7: { name: "Angular", level: "Basic", description: "Component structure and basic bindings.", stars: 1 },
    logo8: { name: "Docker", level: "Basic", description: "Containers and basic configuration.", stars: 1 }
};

const logos = document.querySelectorAll(".logo");
const modalContainer = document.querySelector(".modal-container");
const defaultContent = modalContainer.innerHTML;

function showSkill(skillKey){
    const skill = skills[skillKey];
    modalContainer.innerHTML = `
        <div class="modal-content show">
            <div class="name">${skill.name}</div>
            <div class="level">Level: ${skill.level}</div>
            <div class="description">${skill.description}</div>
            <div class="star-container">
                ${[1,2,3,4,5].map(i=>`<span class="star ${i <= skill.stars ? 'filled' : ''}">&#9733;</span>`).join("")}
            </div>
        </div>
    `;
}

// Hover desktop
logos.forEach(logo => {
    logo.addEventListener("mouseenter", () => { if(window.innerWidth > 991) showSkill(logo.dataset.logo); });
    logo.addEventListener("mouseleave", () => { if(window.innerWidth > 991) modalContainer.innerHTML = defaultContent; });
    // Click mobile
    logo.addEventListener("click", () => { if(window.innerWidth <= 991) showSkill(logo.dataset.logo); });
});