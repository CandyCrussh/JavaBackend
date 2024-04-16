
import {fname} from './utils/fname.js' 
import {age} from './utils/age.js' 
// import person from './utils/person.js' 
import person, {person2} from './utils/person.js' 
 

 console.log(fname, age)

 const Person = new person("john", "doe", 22)
 Person.info()
 console.log(person)

 //default export can only be done one at a time for a files and can be change from import{varyName}`