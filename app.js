let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame=() =>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }}
    const disableBoxes=() =>{
        for(let box of boxes){
            box.disabled=true;
        }
    }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){ //playerO
            box.innerText="O";
            turnO=false;
        }else{ //playerX
          box.innerText="X";
          turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showwinner=(winner)=>{
    msg.innerText="Congratulations";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=() =>{
    for(let pattern of winpattern){
        let post1val=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;

        if(post1val !="" && post2val !="" && post3val !=""){
            if(post1val === post2val && post2val ===post3val){
                showwinner(post1val);
            }    
        }
    }
};
resetBtn.addEventListener("click",resetgame);
newBtn.addEventListener("click",resetgame);

