const memoized = (function() {
    let memo = new Map();

    return function (val) {
        function fact(value) {
            if(value >= 0 && value < 2) {
                return value;
            }

            return value * fact(value - 1);
        }
        if(memo.get(val)) {
            return memo.get(val);
        }

        let value = fact(val);
        memo.set(val, value);
    }
})();

console.log(memoized(5));
console.log(memoized(2));
console.log(memoized(3));
console.log(memoized(5));