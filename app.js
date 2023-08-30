const cel = document.querySelector("#celsius");
const far = document.querySelector("#farenhiet");

window.addEventListener("load",()=> celsius.focus());

celsius.addEventListener("input",()=>{
    
    farenhiet.value = Math.round((((celsius.value*9)/5)+32)*100)/100;

    if(!celsius.value)farenhiet.value = "";
})

window.addEventListener("load",()=>farenhiet.focus());

farenhiet.addEventListener("input",()=>{
    
    celsius.value = Math.round((((farenhiet.value-32)*5)/9)*100)/100;

    if(!farenhiet.value)celsius.value = "";
})