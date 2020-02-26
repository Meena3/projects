// variable accsessing from lexicographical environment
var y = 3;
var sum = function(){
    var x = 2;
    return x+y;
}
// here value of y is(3)
console.log(sum())
var y =10
// here value of y is (10) lexicographically environment
console.log(sum())


// inner function from outer function
function sum(x){
    return function(y){
        return x+y
    }
}
console.log(sum(3)(20))

