// console.log(`HELLOOOO`)
const board = document.getElementById("container");
const clear = document.getElementById("clear");
let singleDiv;



const etch = (singleDiv, i) => {
    singleDiv.style.height = "30px";
    singleDiv.style.width = "30px";
    singleDiv.style.backgroundColor = "#fff";
    singleDiv.addEventListener("mousedown", () => {
        // console.log(`${}`);
        singleDiv.style.backgroundColor = "red";

    })

    singleDiv.addEventListener("mouseover", () => {
        // console.log(`${}`);
        singleDiv.style.backgroundColor = "red";

    })
    
    clear.addEventListener("click", () => {
        singleDiv.style.backgroundColor = "#fff";
    })

    // console.log(singleDiv);
}

const createDiv = () => {
    for (let i = 1; i < 257; i++) {
        singleDiv = document.createElement("div");
        board.appendChild(singleDiv);
        etch(singleDiv, i);
    }
}


createDiv();

