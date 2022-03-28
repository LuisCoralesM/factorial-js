// TAIL RECURSIVE Function (MINE HEHE)
const recursiveFactorial = (num) => {
    return num === 0 ? 1 : num < 0 ? -1 : (num * recursiveFactorial(num - 1));
};

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
function factLessChar(n){return n<2?1:n*factLessChar(n-1);}

// Recursive but more characters
function factMoreChar(n) {
    return n < 2 ? 1 : n * factMoreChar(n - 1);
}

// Using for
function forFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

// ES6 Notation
const factorialB = n => [...Array(n + 1).keys()].slice(1).reduce((acc, cur) => acc * cur, 1);

console.time("A")
console.log("Testing time performance");
console.timeEnd("A")

console.time("for")
forFact(100)
console.timeEnd("for")

console.time("tail")
recursiveFactorial(100);
console.timeEnd("tail")

console.time("while");
whileFactorial(100);
console.timeEnd("while")

console.time("memoize")
memoize(factLessChar,100);
console.timeEnd("memoize")

console.time("no memoize less")
factLessChar(100);
console.timeEnd("no memoize less")

console.time("no memoize more")
factMoreChar(100);
console.timeEnd("no memoize more")

console.time("es6")
factorialB(100)
console.timeEnd("es6")