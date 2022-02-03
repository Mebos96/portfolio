const skills =[
    {
        name:"HTML",
        description :"HTML desc",
        logo:"./img/logos/htmlLogo.png",
        logoWidth:"100%"
    },
    {
        name:"CSS",
        description :"CSS desc",
        logo:"./img/logos/cssLogo.png",
        logoWidth:"45%"
    },
    {
        name:"JAVASCRIPT",
        description :"JS desc",
        logo:"./img/logos/jsLogo.png",
        logoWidth:"45%"
    },
    {
        name:"REACT JS",
        description :"React js desc",
        logo:"./img/logos/reactLogo.png",
        logoWidth:"45%"
    },
    {
        name:"REACT NATIVE",
        description :"React native desc",
        logo:"./img/logos/reactLogo.png",
        logoWidth:"45%"
    },
    {
        name:"REDUX",
        description :"Redux desc",
        logo:"./img/logos/reduxLogo.png",
        logoWidth:"45%"
    },
    {
        name:"GIT",
        description :"Git desc",
        logo:"./img/logos/gitLogo.png",
        logoWidth:"45%"
    }
]

const getInfo = (arg) => {
    let name = document.getElementById("skill-name");
    let article = document.getElementById("skills-info");
    skills.forEach((skill,i) =>{
        if(arg === skill.name){
            name.innerHTML = skills[i].name;
            article.innerHTML = skills[i].description;
        }
    })
}
const resetInfo = () => {
    let name = document.getElementById("skill-name");
    let article = document.getElementById("skills-info");
    name.innerText = "My programming languages";
    article.innerText = "Abowe is list of languages and technologies i feel good";
}

const loadSkills = () => {
    let container = document.getElementsByClassName('cards-container')[0];
    container.innerHTML='';
    skills.forEach(skill =>{
        let card=document.createElement('div');
        card.setAttribute('class', 'skill-card');
        card.title=skill.name;
        card.onmouseover = () =>{getInfo(card.title)};
        card.onmouseout =() =>{resetInfo()};

        let box = document.createElement('div');
        box.setAttribute('class', 'box');

        let img = document.createElement('img');
        img.src = skill.logo;
        img.style.width=skill.logoWidth;

        let text = document.createElement('h2');
        text.setAttribute('class', 'skill-text');
        text.innerText= skill.name;

        box.appendChild(img);
        box.appendChild(text);
        card.appendChild(box);
        container.appendChild(card);
    })
}