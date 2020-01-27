const projects=[
    {
        title:"Listownik",
        about:"The lister project was my engineering work.",
        technologies:[
            "React Native",
            "JavaScript",
            "CSS",
            "Python",
            "Django",
            "Rest Api",
            "MySql",
            "Git",
        ]
    },
    {
        title:"SCRUM Board",
        about:"Testowy napis",
        technologies:[
            "React Native",
            "JavaScript"
        ]
    }
]

function changeProject(element){
    let list = document.getElementById('project-technologies');
    list.innerHTML = '';
    let name = document.getElementById("project-name")
    let about = document.getElementById("project-about")

    projectsResetButtons()
    
    projects.map((project,i)=>{
        if(element.id === project.title){
            name.innerHTML= project.title
            about.innerHTML = project.about
            project.technologies.map((technology,i)=>{
                let li = document.createElement('li');
                li.setAttribute('class','technology-item');
                list.appendChild(li);
                li.innerHTML=li.innerHTML + technology;
            })
            document.getElementById(element.id).style.cssText = "font-size: 20px; font-weight: 20px; color: #fff"
        }
    })
    projectsOpacity()
}

function projectsResetButtons(){
    let buttonsList = document.getElementsByClassName("select-project")[0].children
    for(let i=0; i<buttonsList.length;i++){
        buttonsList[i].style.cssText = "font-size: 15px; color: #777"
    }
}

function projectsOpacity(){
    let el = document.getElementsByClassName("project-info")
    let newel= el[0].cloneNode(true)
    el[0].parentNode.replaceChild(newel,el[0])

    el = document.getElementsByClassName("project-gallery")
    newel= el[0].cloneNode(true)
    el[0].parentNode.replaceChild(newel,el[0])
}