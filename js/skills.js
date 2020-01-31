const skills =[
    {
        name:"HTML",
        description :"HTML desc",
        logo:"../img/htmlLogo.png"
    },
    {
        name:"CSS",
        description :"CSS desc"
    },
    {
        name:"JAVASCRIPT",
        description :"JS desc"
    },
    {
        name:"REACT JS",
        description :"React js desc"
    },
    {
        name:"REACT NATIVE",
        description :"React native desc"
    },
    {
        name:"REDUX",
        description :"Redux desc"
    },
    {
        name:"GIT",
        description :"Git desc"
    }
]

function getInfo(arr){
    let container = document.getElementsByClassName("skills-info-container")
    container[0].style.opacity = 1
    let name = document.getElementById("skill-name")
    let article = document.getElementById("skills-info")
    skills.map((skill,i)=>{
        if(arr === skill.name){
            name.innerHTML = skills[i].name
            article.innerHTML = skills[i].description
        }
    })
}
function resetInfo(){
    document.getElementsByClassName("skills-info-container")[0].style.opacity = 0
}