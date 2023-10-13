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

//  2623. Memoize
function memorize(){
    let cache ={}
    return function(...arg){
        
    }
}
