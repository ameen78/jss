//alert
window.alert(window.document.querySelector("h1").innerText);
// condtional statments
let a = 95 
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
 let x = 95

 switch(true){
     case x<35:
     console.log("fail");
     break;
     case x>35 && x<=45 :
     console.log("pass");
     break;
     case x>45 && x<=59  :
     console.log("secound class");
     break;
     case x>59 && x<=79:
     console.log("first class");
     break;
     case x>79:
     default:
     console.log("distintion");
     break;           
 }