// let a = parseFloat(prompt("Summani kiriting: "))
// let b = parseFloat(prompt("Enter value for b: "))
// if (b == 1) {
//     let result = a / 11000
//     alert(result)
// }
// else if(b == 2){
//     let result = a / 12000
//     alert(result)
// }
// else if (b == 3){
//     let result = a / 150
//     alert(result)
// }
// else if (b == 4){
//     let result = a / 90
//     alert(result)
// }
// else if (b == 5){
//     let result = a / 14000
//     alert(result)
// }
// else{
//     alert("Noto'g'ri tanlov")
// }


// let n = +prompt("Enter value for n")
// switch (n){
//     case 1:
//         alert("Juda Yomon");
//         break;
//     case 2:
//         alert("Yomon");
//         break;
//     case 3:
//         alert("Qoniqarli");
//         break;
//     case 4:
//         alert("Yaxshi");
//         break;
//     case 5:
//         alert("A'lo");
//         break;
//         default:
//             alert("Noto'g'ri baho");
//             break;
// }



// let a = +prompt("Enter value for a")
// let b = +prompt("Enter value for b")
// let n = +prompt("Amalni tanlang:")
// switch (n){
//     case 1:
//     alert(a + b);
//     break;
//     case 2:
//         let sum1 = a - b;
//         alert(sum1);
//         break;
//     case 3:
//         let sum2 = a * b;
//         alert(sum2);
//         break;
//     case 4:
//         let sum3 = a / b;
//         alert(sum3);
//         break;
//     default:
//             alert("Noto'g'ri amal");
//             break;
// }



// If 1


// let a = +prompt("Butun son kiriting: ")
// if (a > 0){
//     a = a + 1
//     alert(a)
// }
// else{
//     alert(a)
// }



// If 2


// let a = +prompt("Butun son kiriting: ")
// if (a > 0){
//     a = a + 1
//     alert(a)
// }
// else{
//     a = a - 2
//     alert(a)
// }


// If 3


// let a = +prompt("Butun son kiriting: ")
// if (a > 0){
//     a = a + 1
//     alert(a)
// }
// else if(a == 0){
//     a = 10;
//     alert(a)
// }
// else{
//     a = a - 2
//     alert(a)
// }


// If 4 


// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")
// let c = +prompt("3-sonni kiriting: ")
// let i = 0

// if (a > 0){
//     i = i + 1
// }
// if(b > 0){
//     i = i + 1
// }
// if(c > 0){
//     i = i + 1
// }

// alert(i + "ta musbat son bor.")

// If 5

// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")
// let c = +prompt("3-sonni kiriting: ")
// let i = 0
// let x = 0

// if (a > 0){
//     i = i + 1
// }
// if(b > 0){
//     i = i + 1
// }
// if(c > 0){
//     i = i + 1
// }


// alert(i + "ta musbat son bor.")

// if (a < 0){
//     x = x + 1
// }
// if(b < 0){
//     x = x + 1
// }
// if(c < 0){
//     x = x + 1
// }

// alert(x + "ta manfiy son bor.")



// If 6

// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")
// if (a > b){
//     alert("1-son 2-sondan katta")
// }
// else if(a < b){
//     alert("2-son 1-sondan katta")
// }
// else{
//     alert("Ikkala son teng")
// }


// If 7



// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")
//  if (a > b){
//     alert("2")
//  }
//  else if (a < b){
//     alert("1")
//  }


// If 8

// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")
//  if (a > b){
//     alert(a)
//     alert(b)
//  }
// if (a < b){
//     alert(b)
//     alert(a)
//  }


// If 9


// let a = +prompt(" 1-sonni kiriting: ")
// let b = +prompt("2-sonni kiriting: ")

// a = a + b
// b = a - b
// a = a - b

// alert("a=" + a)
// alert("b=" + b)

// If 10


let a = +prompt(" 1-sonni kiriting: ")
let b = +prompt("2-sonni kiriting: ")
if (a == b){
    a = 0
    b = 0
}
else if(a != b){
    a = a + b
    b = a + b
}

alert("a=" + a)
alert("b=" + b)