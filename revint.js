function revInt(int){
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) *Math.sign(int);

}
const output1 = revInt(12345);
console.log(output1);