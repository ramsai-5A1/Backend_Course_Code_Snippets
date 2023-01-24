async function fun() {
    console.log("entered");
    let x = await 20;
    console.log("Exiting");
    return x;
}

console.log("Start");
let val = fun();
val.then(function f(value) {
    console.log("Value is", value);
})

console.log("end");