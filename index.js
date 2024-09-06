const box = document.getElementById("box");
let moveDistance = 100;
let x = 0;
let y = 0;
let rest;



document.addEventListener("keydown",event =>{
    clearTimeout(rest)
    if(event.key === "ArrowUp"){
        y-= moveDistance;
        box.style.backgroundColor = "red";
        box.textContent = "😱";
    }

    else if(event.key === "ArrowDown"){
        y+= moveDistance;
        box.style.backgroundColor = "red";
        box.textContent = "😱";
    }

    else if(event.key === "ArrowLeft"){
        x-= moveDistance;
        box.style.backgroundColor = "red";
        box.textContent = "😱";
    }

    else if(event.key === "ArrowRight"){
        x+= moveDistance;
        box.style.backgroundColor = "red";
        box.textContent = "😱";
    }
    else{
        box.style.backgroundColor = "yellow";
        box.textContent = "😨";
    }

    box.style.top = `${y}px`;
    box.style.left = `${x}px`;

})

document.addEventListener("keyup",event =>{
    
       rest = setTimeout(() => {box.style.backgroundColor = "lightskyblue";
                          box.textContent = "😀";}, 2000)
        
    

})