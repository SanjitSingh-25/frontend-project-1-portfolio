let btn = document.getElementById("theme");
    btn.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("header-dark");
});



let btn1=document.getElementById("submit");

btn1.addEventListener("click",function(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let message=document.getElementById("messagetxt");
    if(name.value.length===0 &&  email.value.length===0 &&  message.value.length===0){
        document.getElementById("respond").textContent="Please Enter Name and Email";
    }
    else if(email.value.length===0 && message.value.length===0){
        document.getElementById("respond").textContent="Please Enter Email and Message";
    }
    else if(message.value.length===0){
        document.getElementById("respond").textContent="PLease Enter Message";
    }
    else{
        document.getElementById("respond").textContent="Thank YOU! your response is submitted";
    }
    event.preventDefault();
});
let password=document.getElementById("password");
let show=document.getElementById("pass");
    show.addEventListener("click",function(){
        if(password.type==="password"){
            password.type="text";
            show.textContent="Hide"
        }
        else{
            password.type="password";
            show.textContent="Show"
        }
    }
    );

let findbtn = document.getElementById("findbtn");
let search = document.getElementById("search");

findbtn.addEventListener("click", function () {
    let value = search.value.toLowerCase();

    let elements = document.querySelectorAll("h1, h2, h3, p, li");

    let found = false;

    elements.forEach(function (element) {
        if (!found && element.textContent.toLowerCase().includes(value)) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            found = true;
        }
    });

    if (!found) {
        alert("No results found");
    }
});

let task=document.getElementById("taskList")
let addBtn=document.getElementById("add")
let taskDo=document.getElementById("taskinput");

addBtn.addEventListener("click",function(){
    if (taskDo.value === "") {
    alert("Please enter a task");
    return;
}
    else{
    let li=document.createElement("li")
    li.textContent=taskDo.value;
    task.appendChild(li);
    taskDo.value="";
    }
    
})



let noteInput = document.getElementById("noteInput");
let saveBtn = document.getElementById("saveBtn");
let notesList = document.getElementById("notesList");

saveBtn.addEventListener("click", function () {

    let note = noteInput.value;

    if (note === "") {
        alert("Enter a note");
        return;
    }

    let li = document.createElement("li");
    li.textContent = note;

    notesList.appendChild(li);

    noteInput.value = "";

});

let messagetxt=document.getElementById("messagetxt")
messagetxt.addEventListener("input",function(){
    let char=document.getElementById("count")
    char.textContent="Character:"+messagetxt.value.length
if(messagetxt.value.length>50){
    messagetxt.classList.add("turns-red");
    

    }
else{
    messagetxt.classList.remove("turns-red");
}
})


window.addEventListener("scroll", function(){

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollPercent =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        scrollPercent + "%";
});

let btntop=document.getElementById("btntop");
if(document.documentElement.scrollHeight > 300 ){
    btntop.style.display="block"
}
else{
    btntop.style.display="none"
}
btntop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
})

let typing = document.getElementById("typing");
let texts = ["FrontEnd" , "React" , "Node"];
let textIndex = 0;
let charIndex = 0;

function typeText() {

    typing.textContent += texts[textIndex][charIndex];

    charIndex++;

    if(charIndex < texts[textIndex].length){
        setTimeout(typeText, 100);
    }
    else {
        setTimeout(function(){
        textIndex++;
            if(textIndex>=texts.length){
        textIndex=0;
    }
        charIndex=0;
        typing.textContent=""
        typeText();
    },1000);}



    
    
}
typeText();

let progress=document.querySelector(".html")
progress.style.width=95+"%"
let progress1=document.querySelector(".css")
progress1.style.width=90+"%"