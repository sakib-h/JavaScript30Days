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