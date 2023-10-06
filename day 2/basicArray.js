// 2635. Apply Transform Over Each Element in Array

function map(arr, fn){
    const transformedArray = []
    for(let i =0; i<arr.length;i++){
        transformedArray[i] = fn(arr[i],i)
    }
    return transformedArray;
}
map([1,2,3],(item,index)=>item+1)