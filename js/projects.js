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
        ],
        screens:[
            './img/listownik_register_screen.png',
            './img/listownik_login_screen.png',
            './img/listownik_home_screen.png',
            './img/listownik_add_list_screen.png',
            './img/listownik_edit_list_screen.png',
            './img/listownik_show_list_screen.png',
            './img/listownik_profile_screen.png',
            './img/test.png'
        ]
    },
    {
        title:"SCRUM Board",
        about:"Testowy napis",
        technologies:[
            "React Native",
            "JavaScript"
        ],
        screens:[
            './img/lena.jpg'
        ]
    }
]

window.addEventListener('load', function() {
    this.changeProject({id:"Listownik"})
    this.autoChangeSlide()
})

function changeProject(element){
    let name = document.getElementById("project-name")
    let about = document.getElementById("project-about")

    projectsResetButtons()
    
    projects.map((project,i)=>{
        if(element.id === project.title){
            name.innerHTML= project.title
            about.innerHTML = project.about
            projectsSetTechnologies(project)
            projectsSetImages(project)
            projectsGenerateDots(project)
            document.getElementById(element.id).style.cssText = "font-size: 20px; font-weight: 20px; color: crimson; text-shadow: 2px 2px 3px #070707;"
        }
    })
    projectsOpacity()
}
function projectsResetButtons(){
    let buttonsList = document.getElementsByClassName("project-name")
    for(let i=0; i<buttonsList.length;i++){
        buttonsList[i].style.cssText = "font-size: 15px; color: #777"
    }
}

function projectsOpacity(){
    let el = document.getElementsByClassName("project-info")[0]
    let newel= el.cloneNode(true)
    el.parentNode.replaceChild(newel,el)

    el = document.getElementsByClassName("project-gallery")
    newel= el[0].cloneNode(true)
    el[0].parentNode.replaceChild(newel,el[0])
}

function projectsSetTechnologies(project){
    let list = document.getElementById('project-technologies');
    list.innerHTML = '';
    project.technologies.map((technology,i)=>{
        let li = document.createElement('li');
        li.setAttribute('class','technology-item');
        list.appendChild(li);
        li.innerHTML=li.innerHTML + technology;
    })
}

function projectsSetImages(project){
    let gallery = document.getElementsByClassName("slideshow-container")[0]
    gallery.innerHTML = ''

    project.screens.map((screen,i)=>{
        var divC = document.createElement('div')
        divC.setAttribute('class',"mySlides fade")
        if(i === 0) divC.style.display = "block"
        let divScreenNumber = document.createElement('div')
        divScreenNumber.setAttribute('class','numbertext')
        divScreenNumber.innerText= i+1 + "/" + project.screens.length
        divC.appendChild(divScreenNumber)
        let img = document.createElement('img')
        img.src = screen
        img.alt = ''
        divC.appendChild(img)
        gallery.appendChild(divC)
    })
    projectsGenerateImageButtons(gallery)
}

function projectsGenerateImageButtons(gallery){
    let prev = document.createElement('a')
    prev.setAttribute("class","prev")
    prev.setAttribute("onClick",`plusSlides(${-1})`)
    prev.innerHTML = "&#10094;"
    gallery.appendChild(prev)
    let next = document.createElement('a')
    next.setAttribute("class","next")
    next.setAttribute("onClick",`plusSlides(${1})`)
    next.innerHTML = "&#10095;"
    gallery.appendChild(next)
}

function projectsGenerateDots(project){
    let dots = document.getElementsByClassName("projects-slideshow-dots-container")[0]
    dots.innerHTML = ''
    project.screens.map((screen,i)=>{
        let dot = document.createElement('span')
        dot.setAttribute('class','dot')
        dot.setAttribute('onClick',`currentSlide(${i+1})`)
        if(i===0) dot.className +=" active"
        dots.appendChild(dot)
    })
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoChangeSlide(){
    setTimeout(function() {
        currentSlide(slideIndex+=1)

        autoChangeSlide();

    }, 4000);
}