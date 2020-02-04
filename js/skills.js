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
window.addEventListener('load', function() {
    resetInfo()
})
function getInfo(arr){
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
    let name = document.getElementById("skill-name")
    let article = document.getElementById("skills-info")
    name.innerText = "My programming languages"
    article.innerText = "Abowe is list of languages and technologies i feel good"
}