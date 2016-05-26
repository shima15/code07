const N10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squareSum(n){
    var sum = 0;
    var i = 1;
    
    while(n > 0){
        sum = sum + n;
        n = n + 1; 
    }
    return sum;
}
