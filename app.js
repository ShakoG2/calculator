
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getoutPut(){
     return document.getElementById("output-value").innerText;
}


function printOutPut(num){
    if(num=="") {
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById("output-value").innerText=formatNumber(num)
    }
}
function formatNumber(num){
    const number=Number(num);
    const value=number.toLocaleString("en");
    return value;
}

function unFormatNumber(num){
    return Number(num.replace(/,/g,""))
}

let operator=document.getElementsByClassName("operator");
     for(let i=0;i<operator.length;i++){
         operator[i].addEventListener("click",function (){
             if(this.id=="reset"){
                 printHistory("");
                 printOutPut("");
                 printOutPut("0");
             }else {
                 let outPut=getoutPut();
                 let history=getHistory();
                 if(outPut!=""){
                     outPut=unFormatNumber(outPut);
                     history=history+outPut;
                     if(this.id=="="){
                         let result=eval(history)
                         printOutPut(result);
                         printHistory("");
                     } else{
                         history=history+this.id;
                         printHistory(history);
                         printOutPut("");
                     }
                 }
             }
         })
     }
let numbers=document.getElementsByClassName("number");
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function (){
        let outPut=unFormatNumber(getoutPut());
        if(outPut!=NaN){
            outPut=outPut+this.id;
            printOutPut(outPut);
        }
    })
}