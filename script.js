let input1 = document.querySelector("#amount");
let input2 = document.querySelector("#interest");
let input3 = document.querySelector("#time");

let calBtn = document.querySelector(".cal");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector("#result");

calBtn.addEventListener("click",()=>{
    let aomunt= parseFloat(input1.value);
    let interst= parseFloat(input2.value);
    let time= parseFloat(input3.value);

    if(isNaN(aomunt) || isNaN(interst) || isNaN(time) || aomunt<=0 || interst<=0 || time<=0 )
    {
        result.textContent='Invalid Input!';
        return;
    }
    
    let simpleInterest=(aomunt*interst*time)/100;
    result.textContent=simpleInterest.toFixed(2);
    
    console.log(simpleInterest)
});
resetBtn.addEventListener("click",()=>{
    input1.value='';
    input2.value='';
    input3.value='';
    result.textContent='0';

})
// console.log(aomunt);

