var mySqrt = function(x) {
    if(x===0) {
        return 0
    }
    for (let i=1; i<=x; i++) {
        if(i*i === x) return i
        else {
            if (i*i > x) {
                //lies between i and i-1
                return i-1
            }
        }
    }
};