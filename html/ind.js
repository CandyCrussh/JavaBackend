

// var: undefined, let: uninitialised
// TDZ - Temporal dead zone
//GEC and Function exection context   
//closures
//analyze  mcvn81   
// function fun1(fname, lname){
//     function fun2(){
//         console.log(fname, lname)
//     }
//     return fun2
// } 
// function fun1(x){
//     return function(y){
//        return y ** x
//     }
// } 
// const sqre = fun1(2)
// const ans = sqre(2)


// ans()
// console.log(ans)

function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("hi you called me")
            counter++;
        }else{
            console.log("already called")
        }
    }
}
const myfunc = func();
myfunc()
myfunc()
// const myfunc2 = func();
// myfunc2()
// myfunc2()