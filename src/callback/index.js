function sum(num1,num2){
    return num1 + num2;
}

function call(num1,num2,callback){
    return callback(num1,num2);
}

console.log(call(2,5,sum))

function gretting(name){
    console.log("Hola " + name)
}

setTimeout(gretting, 2000, 'Carlos')

