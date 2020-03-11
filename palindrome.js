function palindrome(str){
     
    //    const revString = str.split('').reverse().join('');
    //    if(revString == str)
    //    {
    //        return str+'is a palindrome';

    //    }
    //    else{
    //        return false;

    //    }
    const revString = str.split('').reverse().join('');
    return revString === str;

     
}
const output = palindrome('madam');
console.log(output);