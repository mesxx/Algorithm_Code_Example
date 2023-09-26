// Studi kasus recursive factorial

function recursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * recursive(n - 1);
    }
}

const result = recursive(4)
console.log(result)