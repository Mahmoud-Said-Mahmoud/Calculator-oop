let btn=document.querySelectorAll('.btn');
let inputResult=document.getElementById("Result");
let i=[];

class Calc{
    constructor(result){
        this.result=result
        this.firstNmber="";
        this.secondNumber="";
        this.operator="";
        this.isSecound=false
    }
    takeNumber(value){
        if(!this.isSecound){
            this.firstNmber += value;
            this.result.value=this.firstNmber
        }   
        else{
            this.secondNumber += value;
            this.result.value=this.firstNmber+this.operator+this.secondNumber
        }
    }
    chooseOperator(op){
        this.operator=op;
        this.result.value=this.firstNmber + this.operator;
        this.isSecound=true;
    }
    calculatorMethod(){
        let a=Number(this.firstNmber);
        let b=Number(this.secondNumber);
        switch(this.operator){
            case '+' :
                return a+b;
                break;
            case '*' :
                return a*b;
                break;
            case '/' :
                return a/b;
                break;
            case '-' :
                return a-b;
                break;
            case '%' :
                return a%b;
                break;
            case '^2' :
                return Math.pow(a,2);
                break;
            case 'Del' :
                return a=" ";
                break;
            case 'Del' :
                return b=" ";
                break;
        }
      
    }
    equal(){
        let finalresult=this.calculatorMethod();
        this.result.value=finalresult
        this.secondNumber="";
        this.firstNmber=finalresult;
        this.operator="";
        this.isSecound=false;
    }
    clearParameter(){
        this.secondNumber="";
        this.firstNmber="";
        this.result.value="";
        this.operator="";
        this.isSecound=false;
        }
}

let calcuator=new Calc(inputResult)
btn.forEach((i)=>{
    i.addEventListener("click",function(){
    value=this.textContent
    if(value==="="){
        calcuator.equal();
    }
    else if(!isNaN(value)||value==="."){
        calcuator.takeNumber(value)

    }
    else if(value=="Del"){
        calcuator.clearParameter();
    }
    else if(isNaN(value)){
        calcuator.chooseOperator(value)
    }
    })
})





































// let firstNumber="";
// let secoundNumber="";
// let operator="";
// let calc="";
// let finalresult=""
// let isSecound=false;
// btn.forEach((i) => {
// i.addEventListener('click', function(){
//     value=this.innerHTML;

// if(!isNaN(value)){

//     if(!isSecound){
//         firstNumber+=value;
//         result.value=firstNumber
//         console.log(firstNumber)
        
//         console.log(`${firstNumber} firstNumber`);

//     }
//     else{
//         secoundNumber+=value
//         result.value=calc+secoundNumber
//         console.log(calc)
//         console.log(`${secoundNumber} secoundNumber`)
//         }

// }
// else{
//     operator = value;
//     result.value+=operator
//     isSecound = true;
//     calc=result.value
 
//     console.log(operator);
//     console.log(finalresult);
// }

// if(operator=="="){
//     console.log(Number(secoundNumber)+Number(firstNumber))
// }
// })
// });



