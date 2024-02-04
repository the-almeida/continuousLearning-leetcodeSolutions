// Create a function that takes a single integer parameter, n, and returns the first n elements of the Fibonacci sequence.

//     g(1) = [ 0 ]
//     g(2) = [ 0, 1 ]
//     g(3) = [ 0, 1, 1 ]
//     g(4) = [ 0, 1, 1, 2 ]
//     g(5) = [ 0, 1, 1, 2, 3 ]

function fibonacci(n) {
    if (n === 0) {
        return []
    }else if (n === 1){
        return [0]
    }else if (n === 2){
        return [0,1]
    }else {
        let sequence = [0, 1]
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i-1]+ sequence[i-2])
        }
        return sequence
    }
}

console.log(fibonacci(100))