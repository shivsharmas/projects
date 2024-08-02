let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; // playerO , PlayerX


const winPattern = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        
    if(turnO){ // turnO === true or turnO both are same in if block
        box.innerHTML = "O";
        turnO=false;
    }else{
        box.innerHTML="X";
        turnO=true;
    }
    box.disabled=true;
    
    checkWinner();

    });
});

    const disabledBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
    }

    const enabledBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
    }

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val != "" && pos3val != ""){

            if(pos1Val === pos2Val && pos2Val===pos3val){
               
                showWinner(pos1Val);
            }
         }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
