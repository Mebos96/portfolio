const experiences =[
    {
        years:'2014-2016',
        firm: 'Visimind Ltd.',
        workplace :"Front-end developer",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, maximus at nisi vel, ornare tristique sem. Proin dui ipsum, iaculis et sollicitudin id, bibendum sed tellus. Sed vitae sem eu tellus fermentum venenatis in eget dolor. Pellentesque lorem mi, sodales eget tincidunt sed, vehicula scelerisque dui."
    },
    {
        years:'2014-2016',
        firm: 'Visimind Ltd.',
        workplace :"Front-end developer",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, maximus at nisi vel, ornare tristique sem. Proin dui ipsum, iaculis et sollicitudin id, bibendum sed tellus. Sed vitae sem eu tellus fermentum venenatis in eget dolor. Pellentesque lorem mi, sodales eget tincidunt sed, vehicula scelerisque dui."
    },
    {
        years:'2014-2016',
        firm: 'Visimind Ltd.',
        workplace :"Front-end developer",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, maximus at nisi vel, ornare tristique sem. Proin dui ipsum, iaculis et sollicitudin id, bibendum sed tellus. Sed vitae sem eu tellus fermentum venenatis in eget dolor. Pellentesque lorem mi, sodales eget tincidunt sed, vehicula scelerisque dui."
    },
    {
        years:'2014-2016',
        firm: 'Visimind Ltd.',
        workplace :"Front-end developer",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tellus, maximus at nisi vel, ornare tristique sem. Proin dui ipsum, iaculis et sollicitudin id, bibendum sed tellus. Sed vitae sem eu tellus fermentum venenatis in eget dolor. Pellentesque lorem mi, sodales eget tincidunt sed, vehicula scelerisque dui."
    }
]

window.addEventListener('load',function(){
    loadExperiences()
})

function loadExperiences(){
    let container =document.getElementsByClassName('experiences-container')[0]
    let time=0

    experiences.forEach((experience)=>{
        let exp = document.createElement('div')
        exp.className='experience'
        time+= (2/experiences.length) - 0.1
        exp.style.animationDelay= time +"s"

        let years = document.createElement('h4')
        years.innerText=experience.years
        
        let firm = document.createElement('h3')
        firm.innerText = experience.firm

        let workplace = document.createElement('i')
        workplace.innerText = experience.workplace

        let about = document.createElement('p')
        about.innerText = experience.about

        exp.appendChild(years)
        exp.appendChild(firm)
        exp.appendChild(workplace)
        exp.appendChild(about)
        container.appendChild(exp)
    })
}