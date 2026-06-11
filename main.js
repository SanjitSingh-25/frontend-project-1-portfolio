let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
        let name=document.getElementById("name").value;
        if(name === ""){
            document.getElementById("output").textContent="Enter your name"

        }
        else{
            console.log("Welcome"+name)
        }

    
})