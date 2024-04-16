
//--------------------------------------------------------------------------------------------------------------------
// callback
//callback hell
//pyramid of dom
//async progra


//Callback hell
// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// setTimeout(()=>{
//     heading1.textContent = "one"
//     heading1.style.color = "violet "
//     setTimeout(()=>{
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(()=>{
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(()=>{
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(()=>{
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(()=>{
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(()=>{
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// function cText(element, text, color, time, onSuccess, onFailure){
//     setTimeout(()=>{
//       if(element){  
//         element.textContent = text
//         element.style.color = color
//         if(onSuccess){
//           onSuccess()
//         }
//       }else{
//         if(onFailure){
//           onFailure()
//         }
//       }  
//     }, time)
// }

// //Pyramid of DOM
// cText(heading1, "one", "violet", 1000, ()=>{
//   cText(heading2, "two", "purple", 2000, ()=>{
//     cText(heading3, "three", "red", 1000, ()=>{
//       cText(heading4, "four", "pink", 1000, ()=>{
//         cText(heading5, "five", "green", 2000, ()=>{
//           cText(heading6, "six", "blue", 1000, ()=>{
//             cText(heading7, "seven", "brown", 1000, ()=>{
//               cText(heading8, "Eight", "cyan", 1000, ()=>{
//                 cText(heading9, "Nine", "lemon", 1000, ()=>{
//                   cText(heading10, "Ten", "orange", 1000, ()=>{
  
//                   },()=>{console.log("Heading10 Doesn't exist")})
//                 },()=>{console.log("Heading9 Doesn't exist")})
//               },()=>{console.log("Heading8 Doesn't exist")})
//             },()=>{console.log("Heading7 Doesn't exist")})
//           },()=>{console.log("Headong6 Doesn't exist")})
//         },()=>{console.log("Heading5 Doesn't exist")})
//       },()=>{console.log("Heading4 Doesn't exist")})
//     },()=>{console.log("Heading3 Doesn't exist")})
//   },()=>{console.log("Heading2 Doesn't exist")})
// },()=>{console.log("Heading1 Doesn't exist")})

//--------------------------------------------------------------------------------------------------------
//Promises

// const bucket = ['coffe', 'chips', 'vegies','salt','rice']

// //create promise
// const friedrice = new Promise((resolve, reject)=>{
//   if(bucket.includes("vegies") && bucket.includes("salt") && bucket.includes("rice")){
//     // resolve("Fried Rice")
//     resolve({value: "friedrice"})
//   }else{
//     reject("couldn't do it")
//     // reject(new Error("something missing"))
//     // reject([])
//   }
// })

//how to consume
//fridrice.then(()=>{}, ()=>{})
// friedrice.then(
//     //when promise resolved
//     (myfriedrice)=>{
//     console.log("lets eat", myfriedrice)
//   }, 
//     //when promise reject
//   //   (error)=>{
//   //   console.log(error)
//   // }
// )

// friedrice.then(
//   (myfriedrice)=>{
//     console.log("lets eat", myfriedrice)
//   }
// ).catch(
//   (error)=>{
//     console.log(error)
//   }
// )

//function returning promise

// function rPromise(){
//     const bucket = ['coffe', 'chips', 'vegies','salt','rice']

//     return new Promise((resolve, reject)=>{
//       if(bucket.includes("vegies") && bucket.includes("salt") && bucket.includes("rice")){
//         // resolve("Fried Rice")
//         resolve({value: "friedrice"})
//       }else{
//         reject("couldn't do it")
//         // reject(new Error("something missing"))
//         // reject([])
//       }
//     })
// }

// rPromise().then(
//     (myfriedrice)=>{
//     console.log("lets eat", myfriedrice)
//     }
// ).catch(
//     (error)=>{
//     console.log(error)
//     }
// )

//I want to resolve / reject promise after two seconds 

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = true
//         setTimeout(()=>{
//             if(value){
//                 resolve()
//             }else{
//                 reject()
//             }
//         }, 2000)
//     })
// }

// myPromise()
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("rejected")})

//PROMISE.RESOLVE
// PROMISE CHAINING

// const Mpromise = Promise.resolve(5)
// Mpromise.then(value=>{
//     console.log(value)
// }) 

//then always return promise

// function mPromise(){
//     return new Promise((resolve, reject)=>{
//         resolve("foo")
//     })
// }
// mPromise()
//     .then(value=>{console.log(value)
//     value += "bar"
//     return value  // === return Promise.resolve(value)
//     //If i dont write return then value  will be undefined
//     })
//     .then((value)=>{
//         console.log(value)
//         value += "baac"
//         return Promise.resolve(value)
//     })
//     .then((value)=>{
//         console.log(value)
//     })

//-----------------------------------------------------------------------------------------------------

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// function cText(element, text, color, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//           if(element){  
//             element.textContent = text
//             element.style.color = color
//             resolve()
//           }else{
//                 reject(`element not found at ${text}`)
//           }
//         }, time)
//     })
// }

// const rPromise = cText(heading1, "one", "red", 1000)
//     rPromise.then(()=>cText(heading2, "two", "purple", 1000))
//     // or
//     // rPromise.then(()=>{
//     //     return cText(heading2, "two", "purple", 1000)
//     // })
//     .then(()=>cText(heading3, "three", "green", 1000))// shortcut syntax
//     .then(()=>cText(heading4, "four", "orange", 1000))
//     .then(()=>cText(heading5, "five", "blue", 1000))
//     .then(()=>cText(heading6, "six", "pink", 1000))
//     .then(()=>cText(heading7, "seven", "yellow", 1000))
//     .then(()=>cText(heading8, "eight", "cyan", 1000))
//     .then(()=>cText(heading9, "nine", "grey", 1000))
//     .then(()=>cText(heading10, "ten", "green", 1000))
//     .catch((error)=>alert(error))

//--------------------------------------------------------------------------------------------------------------
//AJAX : Asynchronous javascript and xml

//HTTP Request 

//it is a set of "web development tecgniques"
// using many web technlogies on the "client-side"
//to create asynchrnous web applications 

//with ajax, web applications can send and retrivedata from a server asyncronously(in the background)
//without interfacing with the display and behaviour of the existing page 

//we don't use data in XML format anymore
//we use JSON now

//we have three most common ways to create and send request to server
//1.) cmlHTTP Request (old way of doing)
//2.) fetch API (new way of doing)
//3.) axios (this is third party library)

