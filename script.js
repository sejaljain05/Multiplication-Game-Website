const num1 = Math.round(Math.random()*10);      // math.random -> give us random numbers
const num2 = Math.round(Math.random()*10);      // math.round -> round of the given number

const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const questionE1 = document.getElementById("question") ;
const inputE1 = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score")) ;      // convert string to object 
if(!score){
    score = 0 ; 
}

scoreE1.innerText = `score : ${score}`;
questionE1.innerText = `What is ${num1} multiply by ${num2}  ? `;
const correctAns = num1 * num2 ; 

formE1.addEventListener("submit" , ()=>{
    const userAns = +inputE1.value;         // we write + to convert string to a number 
    if(userAns === correctAns){
           score++ ;
           updateLocalStorage()
    }else{
        score--  ; 
        updateLocalStorage()
    }
})


function updateLocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score))
}

