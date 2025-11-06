function cummulativeSum(n){
let sum=0

for(let i=1;i<=n;i++){
sum=sum+i
console.log("The sum is:",sum)
}
console.log("The final sum is:"+" "+sum)
return sum
}
cummulativeSum(5)