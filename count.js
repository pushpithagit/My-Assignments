let input="Javascript"
let count=0
let count1=0
for(let i=0;i<input.length;i++){
    if(input.charAt(i)=="a"){
        count++
    
    }
    else if(input.charAt(i)=="s"){
        count1++
        
    }
}console.log(`total count of'a': ${count}`)
console.log(`total count of 's': ${count1}`)