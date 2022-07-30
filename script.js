// //alert
// window.alert(window.document.querySelector("h1").innerText);
// // condtional statments
// let a = 50;
// if (a < 35) {
//   console.log("fail");
// } else if (a >= 35 && a < 43) {
//   console.log("pass");
// } else if (a >= 43 && a < 60) {
//   console.log("secound class");
// } else if (a >= 60 && a <= 75) {
//   console.log("first class");
// } else {
//   console.log("distintion");
// }

// //switch
// let x = 25;

// switch (true) {
//   case x < 35:
//     console.log("fail");
//     break;
//   case x > 35 && x <= 45:
//     console.log("pass");
//     break;
//   case x > 45 && x <= 59:
//     console.log("secound class");
//     break;
//   case x > 59 && x <= 79:
//     console.log("first class");
//     break;
//   case x > 79:
//   default:
//     console.log("distintion");
//     break;
// }

// //    ternery opretor
// a = 19;
// a >= 18 ? console.log("adult") : console.log("child");
// //    truthly value falsey value
// if (1) {
//   console.log("this is true");
// }
// // short circuit
// a = true;
// a && console.log("true");
// //   logical opratores
// //    && - and
// //   || - or
// // !-not

// // function result (name , percentage){

// //     console.log("my name is "+name +"and my percentage is "+percentage);
// // }
// // result("ameen" ,90 )

// function temp(celcius) {
//   console.log("temp is " + (celcius * 9) / 5 + 32);
// }
// temp(28);

// // function aam(sam , vam){
// //     console.log(sam+vam);
// // }
// //  aam ("5" , "10")

// //  function t(x=5,y=10 ){
// //      let d = x+y
// //      return t;
// //  }

// // function r(x=5,y=10 ){
// //     let o = x-y
// //     return r;
// // }
// // let s = t()
// // console.log(d);
// // let c = r()
// // console.log(o);

// function van(x, y) {
//   return x + y;
// }
// van(10, 20);

// let b = van(10, 20);
// console.log(b);

// function name(x, y) {
//   let a = x * y;
//   return a;
// }

// let v = name(2, 4);
// console.log(v);

// function eqa(b = "har", t = "jeet") {
//   let f = b + t;
//   return f;
// }

// let z = eqa();
// console.log(z);

// function ran(n1 = 10, n2 = 10) {
//   let d = n1 * n2;
//   return d;
// }

// //   function yen (n3=10 ,n4=2){
// //       let g = n3+n4
// //       return g;
// //   }
// //   let c=ran()
// //   console.log(c);
// //   let q=yen()
// //   console.log(c+q);

// //   function using array

// // let pump = ["kyte",4,"lite",8,"fight",90,"intur"]

// //  function ink(str){
// //      for(i=0; i<=ink.length-1;i++){
// //          if(i<=ink.length-1){
// //              console.log(ink );
// //          }else{
// //              console.log("not there");
// //          }
// //      }
// //  }
// //  ink("lig")

// //    function omg(x){
// //        console.log("this is"+ x);
// //    }
// //    omg ('ameen')

// //    function lop(v){
// //        for(v>=lop.length-1; v=0; --v){
// //           if (v<4) {
// //               console.log(lop[v]);
// //               }else{
// //                   console.log("not found");
// //               }
// //        }
// //    }
// //       lop('ameen')

// // function nom(r){
// //      let x= r*2
// //     console.log(x);
// // }
// // const nom = (r = 2) => r * 2;

// // console.log(nom());

// // arr heelper method.
// const number = [1, 2, 3, 4];
// let arr = [];
// let sum = 0;
// number.forEach((item) => {
//   arr.push(item * 2);
// });
// console.log(arr);

// number.find((item) => {
//   return item % 2 == 0;
// });
// console.log(number);
// const number = [1, 2, 3, 4, 5];
// const arr = number.map((item) => {
//   return item *2;
// });
// console.log(arr);
const car = [
  (a = {
    Name: "saab",
    version: 2020,
    price: 200000,
    model: "new type",
  }),
  (b = {
    Name: "audi",
    version: 2020,
    price: 400000,
    model: "new type",
  }),
  {
    Name: "marcedes",
    version: 2021,
    price: 500000,
    model: "new type",
  },
  {
    Name: "Tata sumu",
    version: 2002,
    price: 55000,
    model: "second hand",
  },
  {
    Name: "maruthi",
    version: 2000,
    price: 40000,
    model: "secound hand",
  },
  {
    Name: "lamborghini",
    version: 2021,
    price: 4500000,
    model: "new type",
  },
];

// const arr = car.filter((item) => {
//   return item.price <= 40000;
// });
// console.log(arr);
// const newa = car.map((item) => {
//   return item.price * 2;
// });
// console.log(newa);

const yes = car.includes(b.version);
console.log(yes);
