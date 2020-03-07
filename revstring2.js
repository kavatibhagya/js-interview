
let revString = '';
function reverseString(arr){
     for( let i=0; i<arr.length; i++){
         revString = arr[i]+revString;
        

     }
     return revString;
}





const result2 = reverseString('hello');
console.log(result2);