let choices=document.querySelectorAll(".choice");
let userScore=document.querySelector("#userscore");
let compScore=document.querySelector("#compscore");
let msg=document.querySelector("#msg");

let usercount=0;
let compcount=0;

showWinner=(userWin,userchoice,compchoice)=>{
    console.log(userWin,userchoice,compchoice)
    if(userWin===true){
        usercount++
        userScore.innerText=usercount;
         msg.innerText=`you win your ${userchoice} beats ${compchoice};`
       }
       else{
        compcount++
        compScore.innerText=compcount;
         msg.innerText=`you lose ${compchoice} beats your ${userchoice};`
       }
}
drawGame=()=>{
    console.log("draw")
    msg.innerText="The game has draw"
}

let computerchoice=(userid)=>{
    let araa=["rock","paper","scissor"];
    let comindx=Math.floor(Math.random()*3);
    let compid =araa[comindx];
    if(userid===compid){
       drawGame()
    }
    else{
        let userwin=true;
        if(userid==="rock"){
              //paper scissor
         console.log("userid"+" :"+userid,"compid"+" :"+compid);
         userwin=compid==="scissor"?true:false;

        }
        else if(userid==="paper"){
            //rock scissor
            console.log("userid :"+userid,"compid :"+compid);
            userwin=compid==="rock"?true:false;
        }
        else if(userid="scissor") {
            //rock paper
            console.log("userid :"+userid,"compid :"+compid);
           userwin=compid==="paper"?true:false;
          
        }
        showWinner(userwin,userid,compid);
      
       
    }
  
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceid=choice.getAttribute("id");
       
        computerchoice(choiceid);
        
    })
})