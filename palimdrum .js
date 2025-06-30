


// string  type
// function palindrum(str){
//     // let str= num.toString()
//     let reverse = str.split('').reverse().join();
//     str === reverse
    
//     return str
// }
// console.log(palindrum('ama'))

// array every method;
// function palindrum(str){
//     return str.split('').every((char,i)=> char === str[str.length -1-i])
// }
// console.log(palindrum("racecar"))

//// XOR while loop 
function pali(num){
    let original = num;
    let  reverse = 0;
    
    while(num > 0){
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10)
    }
    return original  === reverse
}
console.log(pali(12321)) 
