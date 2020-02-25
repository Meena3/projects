// simple example1
function x(){
    console.log("calling this function to other function as a argument")
}

function y(x){
    console.log("hai welcome happy code")
    x();
}
y(x);

// simple example2
let cal = (n1,n2,caltype) =>{
    if(caltype == "add"){
        return n1+n2
    }
    else if(caltype == "multiply"){
        return n1*n2
    }
    else{
        return "Give correct operator"
    }
}
console.log(cal(2,3,"add"))

// example3
let add = function(a,b){
    return a+b
}
let multiply = function(a,b){
    return a*b
}
let whatAreparameters = function(a,b){
    return `the numbers provide are ${a}, ${b}`
}
let cal = function(n1,n2,callback) {
    if(typeof(callback) === "function"){
        return callback(n1,n2)
    }
};
// console.log(cal(3,4,add));
// console.log(cal(3,4,multiply));
// console.log(cal(3,4,whatAreparameters));
console.log(cal(3,4,function(a,b) {
            return a-b;
            })
);

// example4
var arr = [{
    num:5,
},{
    num:7,
},{
    num:1,
}
]

arr.sort(function(value1,value2){
    if(value1.num < value2.num){
        return -1;
    }
    else{
        return 1;
    }
})
console.log(arr)

