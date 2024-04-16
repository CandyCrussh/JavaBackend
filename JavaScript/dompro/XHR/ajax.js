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

//------------------------------------------------------------------------------------------------------------

// const url = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest();
// // console.log(xhr)
// // console.log(xhr.readyState)
// //step 1
// xhr.open("GET", url)
// // xhr.onreadystatechange = function(){
// //     // console.log(xhr.readyState)
// //     if(xhr.readyState === 4){
// //         // console.log(xhr.response) //typeof is string

// //         const response = xhr.response
// //         const data = JSON.parse(response)
// //         console.log(data)
// //         console.log(typeof data)
// //     }
// // }
// xhr.onload = function(){   
//     console.log(xhr.readyState)
//     // const response = xhr.response
//     const data = JSON.parse(response)
//     // console.log(data)
// }

// xhr.send()

// const url = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest()

// xhr.open("GET", url)

// xhr.onload = () =>{
//     if(xhr.status >= 200 && xhr.status <300){
//         const data = JSON.parse(xhr.response)
//         console.log(data)
//         const id = data[3].id

//         const xhr2 = new XMLHttpRequest()
//         const url2 = `${url}/${id}`
//         console.log(url2)
//         xhr2.open("GET", url2)

//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response)
//             console.log(data2)
//         }
//         xhr2.send()
//     }
//     else{
//         console.log("something went wrong")
//     }
// }

// xhr.onerror = () => {
//     console.log("network error")
// }

// xhr.send()


///////////using Promise

// const url = "https://jsonplaceholder.typicode.com/posts"

// function sendRequests(method, url){
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.onload =()=>{
//             if(xhr.status>=200 && xhr.status <300){
//                 resolve(xhr.response)
//             }else{
//                 reject(new Error("something went wrong"))
//             }
//         }

//         //Incase there is any network error
//         xhr.onerror = ()=>{
//             reject(new Error("Something went wrong"))
//         }
//         xhr.send()
//     })
// }

// const ans = sendRequests("GET", url)
//     .then((response)=>{
//         const data = JSON.parse(response)
//         return data
//     })
//     .then((data)=>{
//         console.log(data)
//         const id = data[3].id
//         return id
//     })
//     .then((id)=>{
//         console.log(id)
//         const URL = `${url}/${id}`
//         console.log(url)
//         return sendRequests("GET", URL)
//     })
//     .then(newResponse=>{
//         const nData = JSON.parse(newResponse) 
//         console.log(newResponse)
//     })
//     .catch(error=>{
//         console.log(error)
//     })
// console.log(ans)

//----------------------------------------------------------------------------------------------------------
//Fetch

// const url = "https://jsonplaceholder.typicode.com/postss"
// const ans = fetch(url)
//     .then(response=>{
//         if(response.ok){
//             console.log(response)
//             return response.json()
//         }else{
//             throw new Error("something went wrong !!!")
//         }
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log("inside catch")
//         console.log(error)
//     })


// // console.log(ans)

//---------------------------------------------------------------------------------------------------------
//CREATING 

// const url = "https://jsonplaceholder.typicode.com/postss"
//     fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
// //   .then((response) => response.json())
// //   .then((json) => console.log(json));
//   .then(response=>{
//     if(response.ok){
//         console.log(response)
//         return response.json()
//     }else{
//         throw new Error("something went wrong !!!")
//     }
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log("inside catch")
//         console.log(error)
//     })

// console.log(ans)

//------------------------------------------------------------------------------------------------------------
//async await 

// const url = "https://jsonplaceholder.typicode.com/posts"

// async function getPosts(){
//     const response = await fetch(url)
//     if(!response.ok){
//         throw new Error("something went wrong !!! ")
//     }
//     const data = await response.json()
//     return data
// }
// const getPosts = async()=>{
//     const response = await fetch(url)
//     if(!response.ok){
//         throw new Error("something went wrong !!! ")
//     }
//     const data = await response.json()
//     return data
// }

// // const ans = getPosts()
// // console.log(ans)

// getPosts().then((mydata)=>{
//     console.log(mydata)
// })
// .catch(error=>{
//     console.log(error)
// })