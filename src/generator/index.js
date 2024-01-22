function* gen(){
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();
console.log(g.next().value)
console.log(g.next().value)

function* iterable(array){
    for (let value of array){
        yield value
    }
}
const arr = [1,2,3,4,5,6,7]
const it = iterable(arr)
for(let i of arr){
    console.log(it.next().value)
}