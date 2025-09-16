//when using normal export:
//import {apikey} from "./util.js"

//when using export default:
//import apikey(it can be any name prefferably the name of what youre exporting) from "./util.js"

//when exporting mutiple things:
//import {apikey,abc}  from "./util.js"

//functions
function greetUsers(user, name = "rita") {
  console.log(user);
  console.log(name);
}
greetUsers("max", "uche");
greetUsers();
