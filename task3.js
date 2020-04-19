let num = [];

function divisor(str) {
    for (i = 1; i <= str; i++) {
        if ( i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ) {
        num.push("yu-gi-oh");
    } else if (i % 3 == 0 && i % 5 == 0) {
        num.push("gi-oh");
    } else if (i % 2 == 0 && i % 3 == 0) {
        num.push("yu-gi");
    } else if (i % 2 == 0 && i % 5 == 0) {
        num.push("yu-oh")
    } else if (i % 2 == 0 && i % 5 == 0) {
        num.push("yu")
    } else if (i % 2 == 0 && i % 5 == 0) {
        num.push("gi")
    } else if (i % 2 == 0 && i % 5 == 0) {
        num.push("oh")
    } else {
        num.push(i);
    }
    
 }
 return num;
}

console.log(divisor(100));
console.log(divisor(60));
 