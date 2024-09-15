var cover=document.querySelector(".overlay")
var red=document.querySelector(".pop")
var cancel=document.getElementById("popcancel")
var a=document.getElementById("popadd")
var del=document.getElementById("delete")


var popbutton=document.getElementById("p")
popbutton.addEventListener("click" ,function(){
     cover.style.display="block"
     red.style.display="block"
})
cancel.addEventListener("click",function(){
    event.preventDefault()
    cover.style.display="none"
     red.style.display="none"

})
var tittle=document.getElementById("poptittle")
var author=document.getElementById("popauthor")
var area=document.getElementById("popdescription")
var pp=document.querySelector(".pop")
var container3=document.querySelector(".container")
var con=document.getElementById("container1")
a.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","container1")
    div.innerHTML=`<h2>${tittle.value}</h2>
                     <h4><u>By ${author.value}</u></h4>
                     <p>${area.value}</p> <button class="delete" onclick="def(event)"> Delete</button>`;
    container3.append(div)
    cover.style.display="none"
     red.style.display="none"
     var plus=document.getElementById("plus")
var pop= document.querySelector(".pop")
var black=document.querySelector(".black")
plus.addEventListener("click",function(){
    event.preventDefault();
    pop.style.display="block"
    black.style.display="block"
})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(){
    event.preventDefault();
    pop.style.display="none"
    black.style.display="none"
})
var tab=document.querySelector(".tab")
var dele=document.querySelector(".delete")
var add=document.querySelector(".add")
var tittle=document.querySelector("#tittle")
var author=document.querySelector("#author")
var des=document.querySelector("#description")

add.addEventListener("click",function(){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","tab")
    div.innerHTML=`<h2>${tittle.value}</h2>
    <h3>By${author.value}</h3>
    <p>${des.value}</p><button onclick="def(event)">Delete</button>`
    tab.append(div)
    pop.style.display="none"
    black.style.display="none"
    
})


})
function def(event) {
    event.preventDefault(); // Prevent default action of the event (e.g., form submission)
    event.target.parentElement.remove(); // Remove the parent element of the clicked button
}





