// 2629. Function Composition
const compose =(functions)=>{
    return function(x){
        functions.reduceRight((total, current)=>{
            total = current(x)
            x= total

        }, x)
        return x
    }
}

console.log(compose([Math.sqrt, Math.abs, Math.ceil])(-4)) // 2

// 2703. Return Length of Arguments Passed
function argumentsLength(...arg){
    return arg.length
}
console.log(argumentsLength(1, 2, 3, 4, 5)) // 5

// 2666. Allow One Function Call
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
function once(fn){
    let count =0
    return function(...arg){
        if(count ===0){
            count++
            return fn(...arg)
        } else {
            return undefined
        }
    }
}
console.log(once(Math.max)(1, 2, 3)) // 3
