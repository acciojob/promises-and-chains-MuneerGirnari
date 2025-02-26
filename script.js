//your JS code here. If required.
let btn = document.getElementById("btn");
let age = document.getElementById("age");
let name = document.getElementById("name");

btn.addEventListener("click",listener);

function listener(){
    if(age.value === "" || name.value === ""){
        alert("Please enter valid details.");
    }

    if(age.value>=18){
        setTimeout(() => {
            new Promise((resolve) => {
                resolve(alert("Welcome, . You can vote."))
            })
        },4000)
    }

    if(age.value<18){
        setTimeout(() => {
            new Promise((resolve) =>{
                resolve(alert("Oh sorry . You aren't old enough."))
            })
        },4000);
    }
}