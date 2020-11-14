//alert
window.alert(window.document.querySelector("h1").innerText);
// condtional statments
let a = 90 
if(a<35){
    console.log("fail");
}else if (a>=35 && a<43){
    console.log("pass");
} else if  (a>=43 && a<60){
    console.log("secound class");
} else if (a>=60 && a<=75){
    console.log("first class");
} else  {
    console.log("distintion");
}

//switch 
 let x = 45

 switch(x){
     case 34:
     console.log("fail");
     break;
     case 35 :
     console.log("pass");
     break;
     case 45  :
     console.log("secound class");
     break;
     case 60:
     console.log("first class");
     break;
     case 80:
     default:
     console.log("distintion");
     break;           
 }