function ArrIntersection(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                console.log("The common value is:"+" " +arr1[i])
            }
            
        }
    }
}
let arr1=[23,25,27]
let arr2=[25,28,30]
ArrIntersection(arr1,arr2)