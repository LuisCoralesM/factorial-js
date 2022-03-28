// Won't work after the 10.000
// TAIL RECURSIVE Function (MINE HEHE)
const factM = (num) => {
    const recursiveFactorial = (n, s) => {
        if(n === 0) return s;
        n -= 1; n *= s;
        return recursiveFactorial(n, s);
    };
    
    return recursiveFactorial(num, 1);
}

// TAIL Recursive 
function factorialA(n) {

    if (n <= 1) return 1;
      
    return (n * factorialA(n - 1));
}


// Using while
const whileFactorial = (n, r = 1) => {
    while (n > 0) r *= n--;
    return r;
}

// Using Memoize
function memoize(func, max) {
    max = max || 5000;
    return (function() {
        var cache = {};
        var remaining = max;
        function fn(n) {
            return (cache[n] || (remaining-- >0 ? (cache[n]=func(n)) : func(n)));
        }
        return fn;
    }());
}

// Recursive but less characters
function fact(n){return n<2?1:n*fact(n-1);}

// Using for
function forFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

// ES6 Notation
const ES6Fact = n => [...Array(n + 1).keys()].slice(1).reduce((acc, cur) => acc * cur, 1);

console.log("Testing time performance");

console.time("for")
forFact(10000)
console.timeEnd("for")

console.time("tail")
factM(10000);
console.timeEnd("tail")

console.time("while");
whileFactorial(10000);
console.timeEnd("while")

console.time("memoize")
memoize(fact,10000);
console.timeEnd("memoize")

console.time("memoize2")
memoize(fact,10000);
console.timeEnd("memoize2")

console.time("memoize3")
memoize(fact,10000);
console.timeEnd("memoize3")

console.time("es6")
ES6Fact(10000)
console.timeEnd("es6")