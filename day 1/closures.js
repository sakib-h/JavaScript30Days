// 2667. Create Hello World Function - Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
const createHelloWorld = () => {
    return function () {
        return "Hello World";
    };
};

const a = createHelloWorld();
const f = createHelloWorld([{}, null, 42]);
a(); // "Hello World"
f(); // "Hello World"

// 2620. Counter
function createCounter(n) {
    let count = n;
    return function () {
        return count++;
    };
}

const counter = createCounter(10);
counter() //10
counter() //11
counter()//12
counter() //13

// 2704. To Be Or Not To Be - Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
function expect(val){
    return {
        toBe: (value)=>{

            if(val === value){
                return true
            } else  { throw new Error('Not Equal')}
        },
        notToBe: (value)=>{
            if(val ===value ){
                throw new Error("Equal")
            } else{
                return true
            }
        }
    }
}

expect(5).toBe(5)
expect(5).notToBe(6)

// 2665. Counter II  - Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
class Counter {
    constructor(init){
        this.init = init
        this.value = init
    }

    increment(){
        this.value +=1
        return this.value
    };
    decrement(){
        this.value -=1
        return this.value
    }
    reset(){
        this.value = this.init
        return this.value
    }
}
function createCounter2 (init){
    return new Counter(init)
}
const counter2 = createCounter2(5)
counter2.increment()
counter2.decrement()
counter2.reset()
